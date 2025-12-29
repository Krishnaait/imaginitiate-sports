import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  skillPoints: int("skillPoints").default(0).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * User teams for fantasy cricket
 */
export const userTeams = mysqlTable("user_teams", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull().references(() => users.id),
  matchId: varchar("matchId", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  captainId: varchar("captainId", { length: 255 }).notNull(),
  viceCaptainId: varchar("viceCaptainId", { length: 255 }).notNull(),
  totalCreditsUsed: decimal("totalCreditsUsed", { precision: 5, scale: 2 }).notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type UserTeam = typeof userTeams.$inferSelect;
export type InsertUserTeam = typeof userTeams.$inferInsert;

/**
 * Players in each team
 */
export const teamPlayers = mysqlTable("team_players", {
  id: int("id").autoincrement().primaryKey(),
  teamId: int("teamId").notNull().references(() => userTeams.id),
  playerId: varchar("playerId", { length: 255 }).notNull(),
  playerName: varchar("playerName", { length: 255 }).notNull(),
  role: varchar("role", { length: 50 }).notNull(),
  credits: decimal("credits", { precision: 5, scale: 2 }).notNull(),
});

export type TeamPlayer = typeof teamPlayers.$inferSelect;
export type InsertTeamPlayer = typeof teamPlayers.$inferInsert;

/**
 * Contests for matches
 */
export const contests = mysqlTable("contests", {
  id: int("id").autoincrement().primaryKey(),
  matchId: varchar("matchId", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  maxEntries: int("maxEntries").notNull(),
  currentEntries: int("currentEntries").default(0).notNull(),
  status: mysqlEnum("status", ["upcoming", "live", "completed"]).default("upcoming").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Contest = typeof contests.$inferSelect;
export type InsertContest = typeof contests.$inferInsert;

/**
 * Contest entries linking users, teams, and contests
 */
export const contestEntries = mysqlTable("contest_entries", {
  id: int("id").autoincrement().primaryKey(),
  contestId: int("contestId").notNull().references(() => contests.id),
  userId: int("userId").notNull().references(() => users.id),
  teamId: int("teamId").notNull().references(() => userTeams.id),
  points: decimal("points", { precision: 10, scale: 2 }).default("0").notNull(),
  rankPosition: int("rankPosition"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ContestEntry = typeof contestEntries.$inferSelect;
export type InsertContestEntry = typeof contestEntries.$inferInsert;
