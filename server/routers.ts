import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getMatches, getLiveMatches, getUpcomingMatches, getCompletedMatches, getMatchSquad } from "./cricketApi";
import { registerUser, loginUser, generateResetToken, resetPassword, getUserById } from "./auth";
import { z } from "zod";

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
});

export type AppRouter = typeof appRouter;
