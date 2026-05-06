create extension if not exists pgcrypto;

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  pet_type text not null check (pet_type in ('猫咪', '小型犬', '中大型犬')),
  service text not null check (service in ('基础洗护', '精致造型', '皮毛 SPA', '牙耳爪护理')),
  appointment_date date not null,
  phone text not null check (char_length(btrim(phone)) between 6 and 32),
  status text not null default 'pending' check (status in ('pending', 'confirmed', 'completed', 'cancelled')),
  source text not null default 'web_form',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

comment on table public.appointments is '萌爪洗护社预约表，保存官网快速预约表单提交。';
comment on column public.appointments.pet_type is '宠物类型，对应官网预约表单。';
comment on column public.appointments.service is '服务项目，对应官网预约表单。';
comment on column public.appointments.appointment_date is '用户期望预约日期。';
comment on column public.appointments.phone is '用户联系电话。';
comment on column public.appointments.status is '预约处理状态。';
comment on column public.appointments.source is '预约来源。';

create index appointments_appointment_date_idx on public.appointments (appointment_date);
create index appointments_status_created_at_idx on public.appointments (status, created_at desc);

alter table public.appointments enable row level security;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger appointments_set_updated_at
before update on public.appointments
for each row
execute function public.set_updated_at();
