import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getMatches, getLiveMatches, getUpcomingMatches, getCompletedMatches, getMatchSquad } from "./cricketApi";
import { registerUser, loginUser, generateResetToken, resetPassword, getUserById } from "./auth";
import { z } from "zod";
import { getDb } from "./db";
import { userTeams, teamPlayers, contests, contestEntries } from "../drizzle/schema";
import { eq, and, sql } from "drizzle-orm";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    
    register: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          password: z.string().min(8),
          name: z.string().min(2),
          dateOfBirth: z.string(), // ISO date string
          state: z.string().min(2),
        })
      )
      .mutation(async ({ input }) => {
        const dateOfBirth = new Date(input.dateOfBirth);
        return await registerUser({
          ...input,
          dateOfBirth,
        });
      }),
    
    login: publicProcedure
      .input(
        z.object({
          email: z.string().email(),
          password: z.string(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const result = await loginUser(input.email, input.password);
        
        if (result.success && result.token) {
          // Set JWT token as cookie
          const cookieOptions = getSessionCookieOptions(ctx.req);
          ctx.res.cookie(COOKIE_NAME, result.token, {
            ...cookieOptions,
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
          });
        }
        
        return result;
      }),
    
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
    
    requestPasswordReset: publicProcedure
      .input(z.object({ email: z.string().email() }))
      .mutation(async ({ input }) => {
        return await generateResetToken(input.email);
      }),
    
    resetPassword: publicProcedure
      .input(
        z.object({
          token: z.string(),
          newPassword: z.string().min(8),
        })
      )
      .mutation(async ({ input }) => {
        return await resetPassword(input.token, input.newPassword);
      }),
  }),

  matches: router({
    all: publicProcedure.query(async () => {
      return await getMatches();
    }),
    live: publicProcedure.query(async () => {
      return await getLiveMatches();
    }),
    upcoming: publicProcedure.query(async () => {
      return await getUpcomingMatches();
    }),
    completed: publicProcedure.query(async () => {
      return await getCompletedMatches();
    }),
    squad: publicProcedure
      .input(z.object({ matchId: z.string() }))
      .query(async ({ input }) => {
        return await getMatchSquad(input.matchId);
      }),
  }),

  teams: router({
    // Create a new fantasy team
    create: protectedProcedure
      .input(
        z.object({
          matchId: z.string(),
          name: z.string().min(3).max(50),
          players: z.array(
            z.object({
              playerId: z.string(),
              playerName: z.string(),
              role: z.enum(["WK", "BAT", "AR", "BOWL"]),
              credits: z.number().min(7).max(10),
            })
          ).length(11),
          captainId: z.string(),
          viceCaptainId: z.string(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        // Validate team composition
        const roles = input.players.map(p => p.role);
        const wkCount = roles.filter(r => r === "WK").length;
        const batCount = roles.filter(r => r === "BAT").length;
        const arCount = roles.filter(r => r === "AR").length;
        const bowlCount = roles.filter(r => r === "BOWL").length;

        if (wkCount < 1 || wkCount > 4) {
          throw new Error("Team must have 1-4 wicketkeepers");
        }
        if (batCount < 3 || batCount > 6) {
          throw new Error("Team must have 3-6 batsmen");
        }
        if (arCount < 1 || arCount > 4) {
          throw new Error("Team must have 1-4 all-rounders");
        }
        if (bowlCount < 3 || bowlCount > 6) {
          throw new Error("Team must have 3-6 bowlers");
        }

        // Validate captain and vice-captain are in the team
        const playerIds = input.players.map(p => p.playerId);
        if (!playerIds.includes(input.captainId)) {
          throw new Error("Captain must be in the team");
        }
        if (!playerIds.includes(input.viceCaptainId)) {
          throw new Error("Vice-captain must be in the team");
        }
        if (input.captainId === input.viceCaptainId) {
          throw new Error("Captain and vice-captain must be different");
        }

        // Calculate total credits
        const totalCredits = input.players.reduce((sum, p) => sum + p.credits, 0);
        if (totalCredits > 100) {
          throw new Error("Total credits cannot exceed 100");
        }

        // Insert team
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        const [team] = await db.insert(userTeams).values({
          userId: ctx.user!.id,
          matchId: input.matchId,
          name: input.name,
          captainId: input.captainId,
          viceCaptainId: input.viceCaptainId,
          totalCreditsUsed: totalCredits.toString(),
        });

        // Insert team players
        const teamId = team.insertId;
        await db.insert(teamPlayers).values(
          input.players.map(p => ({
            teamId,
            playerId: p.playerId,
            playerName: p.playerName,
            role: p.role,
            credits: p.credits.toString(),
          }))
        );

        return {
          success: true,
          teamId,
          message: "Team created successfully",
        };
      }),

    // Get user's teams
    myTeams: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const { desc } = await import("drizzle-orm");
      return await db.select().from(userTeams).where(eq(userTeams.userId, ctx.user!.id)).orderBy(desc(userTeams.createdAt));
    }),

    // Get team details with players
    getById: protectedProcedure
      .input(z.object({ teamId: z.number() }))
      .query(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        const [team] = await db.select().from(userTeams).where(and(
          eq(userTeams.id, input.teamId),
          eq(userTeams.userId, ctx.user!.id)
        )).limit(1);

        if (!team) {
          throw new Error("Team not found");
        }

        const players = await db.select().from(teamPlayers).where(eq(teamPlayers.teamId, input.teamId));

        return { team, players };
      }),
  }),

  contests: router({
    // List all contests for a match
    list: publicProcedure
      .input(z.object({ matchId: z.string().optional() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        if (input.matchId) {
          return await db.select().from(contests).where(eq(contests.matchId, input.matchId));
        }
        return await db.select().from(contests);
      }),

    // Seed sample contests for a match
    seed: protectedProcedure
      .input(z.object({ matchId: z.string() }))
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        // Only admins can seed contests
        if (ctx.user!.role !== "admin") {
          throw new Error("Only admins can seed contests");
        }

        const sampleContests = [
          { name: "Mega Contest", maxEntries: 100 },
          { name: "Head to Head", maxEntries: 2 },
          { name: "Winner Takes All", maxEntries: 10 },
          { name: "Practice Contest", maxEntries: 50 },
        ];

        for (const contest of sampleContests) {
          await db.insert(contests).values({
            matchId: input.matchId,
            ...contest,
          });
        }

        return {
          success: true,
          message: `Created ${sampleContests.length} contests for match ${input.matchId}`,
        };
      }),

    // Join a contest with a team
    join: protectedProcedure
      .input(
        z.object({
          contestId: z.number(),
          teamId: z.number(),
        })
      )
      .mutation(async ({ input, ctx }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        // Check if contest exists and is not full
        const [contest] = await db.select().from(contests).where(eq(contests.id, input.contestId)).limit(1);

        if (!contest) {
          throw new Error("Contest not found");
        }

        if (contest.currentEntries >= contest.maxEntries) {
          throw new Error("Contest is full");
        }

        // Check if team belongs to user
        const [team] = await db.select().from(userTeams).where(and(
          eq(userTeams.id, input.teamId),
          eq(userTeams.userId, ctx.user!.id)
        )).limit(1);

        if (!team) {
          throw new Error("Team not found or does not belong to you");
        }

        // Check if already joined
        const [existing] = await db.select().from(contestEntries).where(and(
          eq(contestEntries.contestId, input.contestId),
          eq(contestEntries.userId, ctx.user!.id)
        )).limit(1);

        if (existing) {
          throw new Error("You have already joined this contest");
        }

        // Insert contest entry
        await db.insert(contestEntries).values({
          contestId: input.contestId,
          userId: ctx.user!.id,
          teamId: input.teamId,
        });

        // Increment current entries
        await db
          .update(contests)
          .set({ currentEntries: sql`${contests.currentEntries} + 1` })
          .where(eq(contests.id, input.contestId));

        return {
          success: true,
          message: "Successfully joined contest",
        };
      }),

    // Get user's contest entries
    myEntries: protectedProcedure.query(async ({ ctx }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      const { desc } = await import("drizzle-orm");
      return await db.select().from(contestEntries).where(eq(contestEntries.userId, ctx.user!.id)).orderBy(desc(contestEntries.createdAt));
    }),

    // Get leaderboard for a contest
    leaderboard: publicProcedure
      .input(z.object({ contestId: z.number() }))
      .query(async ({ input }) => {
        const db = await getDb();
        if (!db) throw new Error("Database not available");
        const { desc } = await import("drizzle-orm");
        return await db.select().from(contestEntries).where(eq(contestEntries.contestId, input.contestId)).orderBy(desc(contestEntries.points));
      }),
  }),
});

export type AppRouter = typeof appRouter;
