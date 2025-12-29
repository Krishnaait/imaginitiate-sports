import { describe, expect, it, beforeAll } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";
import { getDb } from "./db";
import { users } from "../drizzle/schema";
import { eq } from "drizzle-orm";

// Helper to create a mock context
function createMockContext(): TrpcContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
      cookies: {},
    } as TrpcContext["req"],
    res: {
      cookie: () => {},
      clearCookie: () => {},
    } as TrpcContext["res"],
  };
}

describe("Custom Authentication System", () => {
  const testEmail = `test-${Date.now()}@example.com`;
  const testPassword = "TestPassword123!";
  const testName = "Test User";
  const testDateOfBirth = "1990-01-01";
  const testState = "Maharashtra"; // Valid state

  beforeAll(async () => {
    // Clean up any existing test user
    const db = await getDb();
    if (db) {
      await db.delete(users).where(eq(users.email, testEmail));
    }
  });

  it("should reject registration for underage users", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const underageDOB = new Date();
    underageDOB.setFullYear(underageDOB.getFullYear() - 17); // 17 years old

    const result = await caller.auth.register({
      email: `underage-${Date.now()}@example.com`,
      password: testPassword,
      name: testName,
      dateOfBirth: underageDOB.toISOString().split("T")[0],
      state: testState,
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("18 years or older");
  });

  it("should reject registration for restricted states", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.register({
      email: `restricted-${Date.now()}@example.com`,
      password: testPassword,
      name: testName,
      dateOfBirth: testDateOfBirth,
      state: "Assam", // Restricted state
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("not available in");
  });

  it("should successfully register a valid user", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.register({
      email: testEmail,
      password: testPassword,
      name: testName,
      dateOfBirth: testDateOfBirth,
      state: testState,
    });

    expect(result.success).toBe(true);
    expect(result.message).toBe("Registration successful");
    expect(result.userId).toBeDefined();
  });

  it("should reject duplicate email registration", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.register({
      email: testEmail, // Same email as previous test
      password: testPassword,
      name: testName,
      dateOfBirth: testDateOfBirth,
      state: testState,
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("already registered");
  });

  it("should successfully login with correct credentials", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.login({
      email: testEmail,
      password: testPassword,
    });

    expect(result.success).toBe(true);
    expect(result.message).toBe("Login successful");
    expect(result.token).toBeDefined();
    expect(result.user).toBeDefined();
    expect(result.user?.email).toBe(testEmail);
  });

  it("should reject login with incorrect password", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.login({
      email: testEmail,
      password: "WrongPassword123!",
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("Invalid email or password");
  });

  it("should reject login with non-existent email", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.login({
      email: "nonexistent@example.com",
      password: testPassword,
    });

    expect(result.success).toBe(false);
    expect(result.message).toContain("Invalid email or password");
  });

  it("should handle password reset request", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.requestPasswordReset({
      email: testEmail,
    });

    expect(result.success).toBe(true);
    expect(result.message).toContain("reset link");
  });

  it("should handle password reset request for non-existent email", async () => {
    const ctx = createMockContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.auth.requestPasswordReset({
      email: "nonexistent@example.com",
    });

    // Should still return success (security best practice - don't reveal if email exists)
    expect(result.success).toBe(true);
    expect(result.message).toContain("reset link");
  });
});
