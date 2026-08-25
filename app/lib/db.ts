import mysql from "mysql2/promise";

const globalForDb = globalThis as unknown as {
  mysqlPool?: mysql.Pool;
};

function createPool() {
  const host = process.env.DB_HOST;
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  const database = process.env.DB_NAME;

  if (!host || !user || !password || !database) {
    throw new Error(
      "DB env missing: set DB_HOST, DB_USER, DB_PASSWORD, DB_NAME"
    );
  }

  return mysql.createPool({
    host,
    port: Number(process.env.DB_PORT || 3306),
    user,
    password,
    database,
    waitForConnections: true,
    connectionLimit: 5,
    maxIdle: 5,
    idleTimeout: 60000,
    enableKeepAlive: true,
    timezone: "+09:00",
  });
}

export function getPool() {
  if (!globalForDb.mysqlPool) {
    globalForDb.mysqlPool = createPool();
  }
  return globalForDb.mysqlPool;
}
