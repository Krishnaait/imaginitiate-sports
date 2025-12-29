import bcrypt from "bcryptjs";
import { SignJWT, jwtVerify } from "jose";
import { ENV } from "./_core/env";
import { getDb } from "./db";
import { users } from "../drizzle/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";

const JWT_SECRET = new TextEncoder().encode(ENV.jwtSecret);
const RESTRICTED_STATES = [
  "Assam",
  "Telangana",
  "Tamil Nadu",
  "Orissa",
  "Odisha", // Alternative spelling
  "Andhra Pradesh",
  "Nagaland",
  "Sikkim",
];

/**
 * Hash password using bcrypt
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

/**
 * Compare password with hashed password
 */
export async function comparePassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

/**
 * Generate JWT token
 */
export async function generateToken(userId: number, email: string): Promise<string> {
  return new SignJWT({ userId, email })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(JWT_SECRET);
}

/**
 * Verify JWT token
 */
export async function verifyToken(token: string): Promise<{ userId: number; email: string } | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload as { userId: number; email: string };
  } catch (error) {
    return null;
  }
}

/**
 * Calculate age from date of birth
 */
export function calculateAge(dateOfBirth: Date): number {
  const today = new Date();
  let age = today.getFullYear() - dateOfBirth.getFullYear();
  const monthDiff = today.getMonth() - dateOfBirth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dateOfBirth.getDate())) {
    age--;
  }
  
  return age;
}

/**
 * Check if state is restricted
 */
export function isStateRestricted(state: string): boolean {
  return RESTRICTED_STATES.some(
    (restrictedState) => restrictedState.toLowerCase() === state.toLowerCase()
  );
}

/**
 * Register new user
 */
export async function registerUser(data: {
  email: string;
  password: string;
  name: string;
  dateOfBirth: Date;
  state: string;
}): Promise<{ success: boolean; message: string; userId?: number }> {
  const db = await getDb();
  if (!db) {
    return { success: false, message: "Database not available" };
  }

  // Validate age (18+)
  const age = calculateAge(data.dateOfBirth);
  if (age < 18) {
    return { success: false, message: "You must be 18 years or older to register" };
  }

  // Validate state (geo-restriction)
  if (isStateRestricted(data.state)) {
    return {
      success: false,
      message: `Registration is not available in ${data.state}. This platform is restricted in Assam, Telangana, Tamil Nadu, Orissa, Andhra Pradesh, Nagaland, and Sikkim.`,
    };
  }

  // Check if email already exists
  const existingUser = await db
    .select()
    .from(users)
    .where(eq(users.email, data.email))
    .limit(1);

  if (existingUser.length > 0) {
    return { success: false, message: "Email already registered" };
  }

  // Hash password
  const hashedPassword = await hashPassword(data.password);

  // Insert user
  try {
    const result = await db.insert(users).values({
      email: data.email,
      password: hashedPassword,
      name: data.name,
      dateOfBirth: data.dateOfBirth,
      state: data.state,
      loginMethod: "email",
      role: "user",
    });

    return {
      success: true,
      message: "Registration successful",
      userId: result[0].insertId,
    };
  } catch (error) {
    console.error("Registration error:", error);
    return { success: false, message: "Registration failed. Please try again." };
  }
}

/**
 * Login user
 */
export async function loginUser(
  email: string,
  password: string
): Promise<{ success: boolean; message: string; token?: string; user?: any }> {
  const db = await getDb();
  if (!db) {
    return { success: false, message: "Database not available" };
  }

  // Find user by email
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);

  if (result.length === 0) {
    return { success: false, message: "Invalid email or password" };
  }

  const user = result[0];

  // Compare password
  const isPasswordValid = await comparePassword(password, user.password);

  if (!isPasswordValid) {
    return { success: false, message: "Invalid email or password" };
  }

  // Generate token
  const token = await generateToken(user.id, user.email);

  // Update last signed in
  await db
    .update(users)
    .set({ lastSignedIn: new Date() })
    .where(eq(users.id, user.id));

  // Return user without password
  const { password: _, resetToken, resetTokenExpiry, ...userWithoutPassword } = user;

  return {
    success: true,
    message: "Login successful",
    token,
    user: userWithoutPassword,
  };
}

/**
 * Generate password reset token
 */
export async function generateResetToken(email: string): Promise<{ success: boolean; message: string }> {
  const db = await getDb();
  if (!db) {
    return { success: false, message: "Database not available" };
  }

  // Find user by email
  const result = await db.select().from(users).where(eq(users.email, email)).limit(1);

  if (result.length === 0) {
    // Don't reveal if email exists
    return { success: true, message: "If the email exists, a reset link will be sent" };
  }

  const user = result[0];

  // Generate reset token
  const resetToken = nanoid(32);
  const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour

  // Update user with reset token
  await db
    .update(users)
    .set({ resetToken, resetTokenExpiry })
    .where(eq(users.id, user.id));

  // TODO: Send email with reset link
  // For now, just return success
  console.log(`Reset token for ${email}: ${resetToken}`);

  return {
    success: true,
    message: "If the email exists, a reset link will be sent",
  };
}

/**
 * Reset password
 */
export async function resetPassword(
  token: string,
  newPassword: string
): Promise<{ success: boolean; message: string }> {
  const db = await getDb();
  if (!db) {
    return { success: false, message: "Database not available" };
  }

  // Find user by reset token
  const result = await db
    .select()
    .from(users)
    .where(eq(users.resetToken, token))
    .limit(1);

  if (result.length === 0) {
    return { success: false, message: "Invalid or expired reset token" };
  }

  const user = result[0];

  // Check if token is expired
  if (!user.resetTokenExpiry || user.resetTokenExpiry < new Date()) {
    return { success: false, message: "Reset token has expired" };
  }

  // Hash new password
  const hashedPassword = await hashPassword(newPassword);

  // Update password and clear reset token
  await db
    .update(users)
    .set({
      password: hashedPassword,
      resetToken: null,
      resetTokenExpiry: null,
    })
    .where(eq(users.id, user.id));

  return {
    success: true,
    message: "Password reset successful",
  };
}

/**
 * Get user by ID (returns user without sensitive fields)
 */
export async function getUserById(userId: number): Promise<any | null> {
  const db = await getDb();
  if (!db) {
    return null;
  }

  const result = await db.select().from(users).where(eq(users.id, userId)).limit(1);

  if (result.length === 0) {
    return null;
  }

  const { password, resetToken, resetTokenExpiry, ...userWithoutPassword } = result[0];
  return userWithoutPassword as any;
}
