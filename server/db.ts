import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { InsertUser, users, userTeams, teamPlayers, contests, contestEntries } from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

// Legacy OAuth functions - will be removed
// export async function upsertUser(user: InsertUser): Promise<void> { ... }
// export async function getUserByOpenId(openId: string) { ... }

// TODO: add feature queries here as your schema grows.
