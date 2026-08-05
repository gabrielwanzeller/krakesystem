export type CompanyStatus = "Novo" | "Fila de hoje" | "Aguardando" | "Respondeu" | "Oferta recusada" | "Cliente fechado" | "Descartado";
export type ContactChannels = { whatsapp: boolean; phone: boolean; instagram: boolean; email: boolean };
export type CompanyTask = { id: string; title: string; dueDate: string; done: boolean };
export type Company = {
  id: string; name: string; category: string; city: string; state: string; rating: number; reviews: number;
  phone: string; email: string; maps: string; website: string; instagram: string; status: CompanyStatus;
  priority: "Baixa" | "Média" | "Alta"; notes: string; nextContact: string;
  contacts: ContactChannels;
  projectValue: number;
  siteCreatedUrl: string;
  paymentStatus: "Pendente" | "Pago" | "Parcial";
  paymentDate: string;
  billingMonth: string;
  monthlyValue: number;
  monthlyPaid: boolean;
  monthlyPaymentDate: string;
  tasks: CompanyTask[];
};
