import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

function createTestContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: undefined,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("Matches Router", () => {
  it("should fetch all matches successfully", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const matches = await caller.matches.all();
    
    expect(Array.isArray(matches)).toBe(true);
  }, 15000);

  it("should fetch live matches successfully", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const liveMatches = await caller.matches.live();
    
    expect(Array.isArray(liveMatches)).toBe(true);
  }, 15000);

  it("should fetch upcoming matches successfully", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const upcomingMatches = await caller.matches.upcoming();
    
    expect(Array.isArray(upcomingMatches)).toBe(true);
  }, 15000);

  it("should fetch completed matches successfully", async () => {
    const ctx = createTestContext();
    const caller = appRouter.createCaller(ctx);

    const completedMatches = await caller.matches.completed();
    
    expect(Array.isArray(completedMatches)).toBe(true);
  }, 15000);
});
