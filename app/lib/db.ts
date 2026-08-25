import { createPool, type VercelPool } from "@vercel/postgres";

const globalForDb = globalThis as unknown as {
  vercelPgPool?: VercelPool;
};

function getConnectionString() {
  return (
    process.env.STORAGE_POSTGRES_URL ||
    process.env.POSTGRES_URL ||
    process.env.DATABASE_URL
  );
}

export function getDb() {
  const connectionString = getConnectionString();
  if (!connectionString) {
    throw new Error(
      "DB env missing: set STORAGE_POSTGRES_URL or POSTGRES_URL"
    );
  }

  if (!globalForDb.vercelPgPool) {
    globalForDb.vercelPgPool = createPool({ connectionString });
  }

  return globalForDb.vercelPgPool;
}
