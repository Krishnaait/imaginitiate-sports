import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { getMatches, getLiveMatches, getUpcomingMatches, getCompletedMatches, getMatchSquad } from "./cricketApi";
import { z } from "zod";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
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
