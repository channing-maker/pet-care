import { NextResponse } from "next/server";
import { getAppointmentsPool } from "@/lib/postgres";

export const runtime = "nodejs";

const petTypes = new Set(["猫咪", "小型犬", "中大型犬"]);
const services = new Set(["基础洗护", "精致造型", "皮毛 SPA", "牙耳爪护理"]);

type AppointmentPayload = {
  petType?: unknown;
  service?: unknown;
  date?: unknown;
  phone?: unknown;
};

function asText(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function isBookingDate(value: string) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }

  const date = new Date(`${value}T00:00:00.000Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

export async function POST(request: Request) {
  let payload: AppointmentPayload;

  try {
    payload = (await request.json()) as AppointmentPayload;
  } catch {
    return NextResponse.json(
      { error: "预约信息格式不正确，请刷新后再试。" },
      { status: 400 },
    );
  }

  const petType = asText(payload.petType);
  const service = asText(payload.service);
  const date = asText(payload.date);
  const phone = asText(payload.phone);

  if (!petTypes.has(petType)) {
    return NextResponse.json({ error: "请选择宠物类型。" }, { status: 400 });
  }

  if (!services.has(service)) {
    return NextResponse.json({ error: "请选择服务项目。" }, { status: 400 });
  }

  if (!isBookingDate(date)) {
    return NextResponse.json({ error: "请选择预约日期。" }, { status: 400 });
  }

  if (phone.length < 6 || phone.length > 32) {
    return NextResponse.json(
      { error: "请填写正确的联系电话。" },
      { status: 400 },
    );
  }

  try {
    const pool = getAppointmentsPool();
    const result = await pool.query<{ id: string }>(
      `insert into public.appointments (pet_type, service, appointment_date, phone)
       values ($1, $2, $3, $4)
       returning id`,
      [petType, service, date, phone],
    );

    return NextResponse.json(
      {
        id: result.rows[0].id,
        message: `已收到 ${petType} 的「${service}」预约需求，门店会在 ${date} 前后与您确认具体时间。`,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("Failed to create appointment", error);

    return NextResponse.json(
      { error: "预约提交暂时失败，请稍后再试或直接电话联系。" },
      { status: 500 },
    );
  }
}
