import { createClient } from "@/lib/supabase/client";
import type { Company, CompanyStatus, CompanyTask } from "./types";

type CompanyRow={id:string;name:string;category:string;city:string;state:string;rating:number;reviews:number;phone:string;email:string;maps_url:string;website_url:string;instagram_url:string;status:CompanyStatus;priority:Company["priority"];notes:string;next_contact_date:string|null;project_value_cents:number;project_payment_status:Company["paymentStatus"];project_paid_at:string|null;delivered_site_url:string};
type TaskRow={id:string;company_id:string;title:string;due_date:string|null;completed_at:string|null};
type ContactRow={company_id:string;channel:keyof Company["contacts"]};
type PaymentRow={company_id:string;kind:"project"|"monthly";reference_month:string|null;amount_cents:number;status:Company["paymentStatus"];paid_at:string|null};

async function authenticatedUser(){const {data,error}=await createClient().auth.getUser();if(error||!data.user)throw new Error("Sessão expirada");return data.user}

export async function loadCompanies():Promise<Company[]>{
  const supabase=createClient(); await authenticatedUser();
  const [companiesResult,tasksResult,contactsResult,paymentsResult]=await Promise.all([
    supabase.from("companies").select("*").order("created_at",{ascending:false}),
    supabase.from("company_tasks").select("id,company_id,title,due_date,completed_at").order("created_at",{ascending:true}),
    supabase.from("contact_events").select("company_id,channel"),
    supabase.from("payments").select("company_id,kind,reference_month,amount_cents,status,paid_at").order("reference_month",{ascending:false}),
  ]);
  const error=companiesResult.error??tasksResult.error??contactsResult.error??paymentsResult.error;if(error)throw error;
  const tasks=(tasksResult.data??[]) as unknown as TaskRow[], contacts=(contactsResult.data??[]) as unknown as ContactRow[], payments=(paymentsResult.data??[]) as unknown as PaymentRow[];
  return ((companiesResult.data??[]) as unknown as CompanyRow[]).map(row=>{
    const monthly=payments.find(payment=>payment.company_id===row.id&&payment.kind==="monthly");
    return {id:row.id,name:row.name,category:row.category,city:row.city,state:row.state,rating:Number(row.rating),reviews:row.reviews,phone:row.phone,email:row.email,maps:row.maps_url,website:row.website_url,instagram:row.instagram_url,status:row.status,priority:row.priority,notes:row.notes,nextContact:row.next_contact_date??"",contacts:{whatsapp:contacts.some(item=>item.company_id===row.id&&item.channel==="whatsapp"),phone:contacts.some(item=>item.company_id===row.id&&item.channel==="phone"),instagram:contacts.some(item=>item.company_id===row.id&&item.channel==="instagram"),email:contacts.some(item=>item.company_id===row.id&&item.channel==="email")},projectValue:row.project_value_cents/100,siteCreatedUrl:row.delivered_site_url,paymentStatus:row.project_payment_status,paymentDate:row.project_paid_at??"",billingMonth:monthly?.reference_month?.slice(0,7)??"",monthlyValue:(monthly?.amount_cents??0)/100,monthlyPaid:monthly?.status==="Pago",monthlyPaymentDate:monthly?.paid_at??"",tasks:tasks.filter(task=>task.company_id===row.id).map(task=>({id:task.id,title:task.title,dueDate:task.due_date??"",done:Boolean(task.completed_at)}))};
  });
}

function companyPayload(company:Company,ownerId:string){return {owner_id:ownerId,name:company.name,category:company.category,city:company.city,state:company.state,rating:company.rating,reviews:company.reviews,phone:company.phone,email:company.email,maps_url:company.maps,website_url:company.website,instagram_url:company.instagram,status:company.status,priority:company.priority,notes:company.notes,next_contact_date:company.nextContact||null,project_value_cents:Math.round(company.projectValue*100),project_payment_status:company.paymentStatus,project_paid_at:company.paymentDate||null,delivered_site_url:company.siteCreatedUrl,updated_at:new Date().toISOString()}}

export async function saveCompany(company:Company):Promise<string>{
  const supabase=createClient(),user=await authenticatedUser();let id=company.id;
  if(id){const {error}=await supabase.from("companies").update(companyPayload(company,user.id)).eq("id",id);if(error)throw error}else{const {data,error}=await supabase.from("companies").insert(companyPayload(company,user.id)).select("id").single();if(error)throw error;id=(data as {id:string}).id}
  const projectPayment={company_id:id,owner_id:user.id,kind:"project",reference_month:null,amount_cents:Math.round(company.projectValue*100),status:company.paymentStatus,paid_at:company.paymentDate||null,updated_at:new Date().toISOString()};
  const {data:existingProject,error:projectLookupError}=await supabase.from("payments").select("id").eq("company_id",id).eq("kind","project").maybeSingle();if(projectLookupError)throw projectLookupError;
  const projectResult=existingProject?await supabase.from("payments").update(projectPayment).eq("id",(existingProject as {id:string}).id):await supabase.from("payments").insert(projectPayment);if(projectResult.error)throw projectResult.error;
  if(company.billingMonth){const referenceMonth=`${company.billingMonth}-01`;const monthPayment={company_id:id,owner_id:user.id,kind:"monthly",reference_month:referenceMonth,amount_cents:Math.round(company.monthlyValue*100),status:company.monthlyPaid?"Pago":"Pendente",paid_at:company.monthlyPaymentDate||null,updated_at:new Date().toISOString()};const {data:existingMonth,error:monthLookupError}=await supabase.from("payments").select("id").eq("company_id",id).eq("kind","monthly").eq("reference_month",referenceMonth).maybeSingle();if(monthLookupError)throw monthLookupError;const monthResult=existingMonth?await supabase.from("payments").update(monthPayment).eq("id",(existingMonth as {id:string}).id):await supabase.from("payments").insert(monthPayment);if(monthResult.error)throw monthResult.error}
  return id;
}

export async function setCompanyStatus(id:string,status:CompanyStatus){const {error}=await createClient().from("companies").update({status,updated_at:new Date().toISOString()}).eq("id",id);if(error)throw error}
export async function setContactMarker(companyId:string,channel:keyof Company["contacts"],active:boolean){const supabase=createClient(),user=await authenticatedUser();if(active){const {error}=await supabase.from("contact_events").delete().eq("company_id",companyId).eq("channel",channel);if(error)throw error}else{const {error}=await supabase.from("contact_events").insert({company_id:companyId,owner_id:user.id,channel});if(error)throw error}}
export async function addCompanyTask(companyId:string,title:string,dueDate:string){const user=await authenticatedUser();const {error}=await createClient().from("company_tasks").insert({company_id:companyId,owner_id:user.id,title,due_date:dueDate||null});if(error)throw error}
export async function toggleCompanyTask(task:CompanyTask){const {error}=await createClient().from("company_tasks").update({completed_at:task.done?null:new Date().toISOString(),updated_at:new Date().toISOString()}).eq("id",task.id);if(error)throw error}
export async function deleteCompany(id:string){const {error}=await createClient().from("companies").delete().eq("id",id);if(error)throw error}
