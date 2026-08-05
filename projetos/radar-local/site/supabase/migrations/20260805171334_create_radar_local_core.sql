create extension if not exists pgcrypto;

create table public.companies (
  id uuid primary key default gen_random_uuid(), owner_id uuid not null references auth.users(id) on delete cascade,
  name text not null check (char_length(name) between 1 and 200), category text not null default '', city text not null default '', state text not null default '' check (char_length(state) <= 2),
  rating numeric(2,1) not null default 0 check (rating between 0 and 5), reviews integer not null default 0 check (reviews >= 0), phone text not null default '', email text not null default '', maps_url text not null default '', website_url text not null default '', instagram_url text not null default '',
  status text not null default 'Novo' check (status in ('Novo','Fila de hoje','Aguardando','Respondeu','Oferta recusada','Cliente fechado','Descartado')), priority text not null default 'Média' check (priority in ('Baixa','Média','Alta')), notes text not null default '', next_contact_date date,
  project_value_cents bigint not null default 0 check (project_value_cents >= 0), project_payment_status text not null default 'Pendente' check (project_payment_status in ('Pendente','Parcial','Pago')), project_paid_at date, delivered_site_url text not null default '', created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table public.contact_events (id uuid primary key default gen_random_uuid(), company_id uuid not null references public.companies(id) on delete cascade, owner_id uuid not null references auth.users(id) on delete cascade, channel text not null check (channel in ('whatsapp','phone','instagram','email')), contacted_at timestamptz not null default now(), notes text not null default '', created_at timestamptz not null default now());
create table public.company_tasks (id uuid primary key default gen_random_uuid(), company_id uuid not null references public.companies(id) on delete cascade, owner_id uuid not null references auth.users(id) on delete cascade, title text not null check (char_length(title) between 1 and 300), due_date date, completed_at timestamptz, created_at timestamptz not null default now(), updated_at timestamptz not null default now());
create table public.payments (id uuid primary key default gen_random_uuid(), company_id uuid not null references public.companies(id) on delete cascade, owner_id uuid not null references auth.users(id) on delete cascade, kind text not null check (kind in ('project','monthly')), reference_month date, amount_cents bigint not null default 0 check (amount_cents >= 0), status text not null default 'Pendente' check (status in ('Pendente','Parcial','Pago')), paid_at date, notes text not null default '', created_at timestamptz not null default now(), updated_at timestamptz not null default now(), constraint payments_monthly_reference check ((kind='monthly' and reference_month is not null) or (kind='project' and reference_month is null)));

create unique index payments_one_project_per_company on public.payments(company_id) where kind='project';
create unique index payments_one_month_per_company on public.payments(company_id,reference_month) where kind='monthly';
create index companies_owner_status_idx on public.companies(owner_id,status);
create index companies_owner_next_contact_idx on public.companies(owner_id,next_contact_date);
create index contact_events_owner_company_date_idx on public.contact_events(owner_id,company_id,contacted_at desc);
create index contact_events_company_id_idx on public.contact_events(company_id);
create index company_tasks_owner_company_open_idx on public.company_tasks(owner_id,company_id,due_date) where completed_at is null;
create index company_tasks_company_id_idx on public.company_tasks(company_id);
create index payments_owner_company_month_idx on public.payments(owner_id,company_id,reference_month desc);

alter table public.companies enable row level security; alter table public.contact_events enable row level security; alter table public.company_tasks enable row level security; alter table public.payments enable row level security;
grant select,insert,update,delete on public.companies,public.contact_events,public.company_tasks,public.payments to authenticated;

create policy companies_select_own on public.companies for select to authenticated using ((select auth.uid())=owner_id);
create policy companies_insert_own on public.companies for insert to authenticated with check ((select auth.uid())=owner_id);
create policy companies_update_own on public.companies for update to authenticated using ((select auth.uid())=owner_id) with check ((select auth.uid())=owner_id);
create policy companies_delete_own on public.companies for delete to authenticated using ((select auth.uid())=owner_id);
create policy contact_events_select_own on public.contact_events for select to authenticated using ((select auth.uid())=owner_id);
create policy contact_events_insert_own on public.contact_events for insert to authenticated with check ((select auth.uid())=owner_id);
create policy contact_events_update_own on public.contact_events for update to authenticated using ((select auth.uid())=owner_id) with check ((select auth.uid())=owner_id);
create policy contact_events_delete_own on public.contact_events for delete to authenticated using ((select auth.uid())=owner_id);
create policy company_tasks_select_own on public.company_tasks for select to authenticated using ((select auth.uid())=owner_id);
create policy company_tasks_insert_own on public.company_tasks for insert to authenticated with check ((select auth.uid())=owner_id);
create policy company_tasks_update_own on public.company_tasks for update to authenticated using ((select auth.uid())=owner_id) with check ((select auth.uid())=owner_id);
create policy company_tasks_delete_own on public.company_tasks for delete to authenticated using ((select auth.uid())=owner_id);
create policy payments_select_own on public.payments for select to authenticated using ((select auth.uid())=owner_id);
create policy payments_insert_own on public.payments for insert to authenticated with check ((select auth.uid())=owner_id);
create policy payments_update_own on public.payments for update to authenticated using ((select auth.uid())=owner_id) with check ((select auth.uid())=owner_id);
create policy payments_delete_own on public.payments for delete to authenticated using ((select auth.uid())=owner_id);

-- Child records must reference a company owned by the same authenticated user.
drop policy contact_events_insert_own on public.contact_events; drop policy contact_events_update_own on public.contact_events;
drop policy company_tasks_insert_own on public.company_tasks; drop policy company_tasks_update_own on public.company_tasks;
drop policy payments_insert_own on public.payments; drop policy payments_update_own on public.payments;
create policy contact_events_insert_own on public.contact_events for insert to authenticated with check ((select auth.uid())=owner_id and exists(select 1 from public.companies c where c.id=company_id and c.owner_id=(select auth.uid())));
create policy contact_events_update_own on public.contact_events for update to authenticated using ((select auth.uid())=owner_id) with check ((select auth.uid())=owner_id and exists(select 1 from public.companies c where c.id=company_id and c.owner_id=(select auth.uid())));
create policy company_tasks_insert_own on public.company_tasks for insert to authenticated with check ((select auth.uid())=owner_id and exists(select 1 from public.companies c where c.id=company_id and c.owner_id=(select auth.uid())));
create policy company_tasks_update_own on public.company_tasks for update to authenticated using ((select auth.uid())=owner_id) with check ((select auth.uid())=owner_id and exists(select 1 from public.companies c where c.id=company_id and c.owner_id=(select auth.uid())));
create policy payments_insert_own on public.payments for insert to authenticated with check ((select auth.uid())=owner_id and exists(select 1 from public.companies c where c.id=company_id and c.owner_id=(select auth.uid())));
create policy payments_update_own on public.payments for update to authenticated using ((select auth.uid())=owner_id) with check ((select auth.uid())=owner_id and exists(select 1 from public.companies c where c.id=company_id and c.owner_id=(select auth.uid())));
