import { Pool } from "pg";

const globalForPostgres = globalThis as typeof globalThis & {
  appointmentsPool?: Pool;
};

export function getAppointmentsPool() {
  const connectionString = process.env.SUPABASE_DB_SESSION_POOL_URL;
  const rejectUnauthorized =
    process.env.SUPABASE_DB_SSL_REJECT_UNAUTHORIZED !== "false";

  if (!connectionString) {
    throw new Error("Missing SUPABASE_DB_SESSION_POOL_URL");
  }

  if (!globalForPostgres.appointmentsPool) {
    globalForPostgres.appointmentsPool = new Pool({
      connectionString,
      connectionTimeoutMillis: 10_000,
      idleTimeoutMillis: 30_000,
      max: Number(process.env.SUPABASE_DB_POOL_MAX || 5),
      ssl: connectionString.includes("sslmode=disable")
        ? undefined
        : { rejectUnauthorized },
    });
  }

  return globalForPostgres.appointmentsPool;
}
