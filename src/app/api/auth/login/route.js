/**
 * API ROUTE: /api/auth/login
 *
 * KEY NEXT.JS CONCEPT: Authentication API
 * - Handles user login requests
 * - Validates credentials server-side
 * - Sets authentication cookie
 *
 * USAGE:
 * POST /api/auth/login
 * Body: { email: "admin@example.com", password: "password123" }
 */

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Hardcoded credentials (as per requirements)
const VALID_CREDENTIALS = {
  email: "admin@example.com",
  password: "password123",
};

/**
 * POST /api/auth/login
 * Authenticates user and sets auth cookie
 */
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    // Validate credentials
    if (
      email === VALID_CREDENTIALS.email &&
      password === VALID_CREDENTIALS.password
    ) {
      // Set auth cookie
      const cookieStore = await cookies();
      cookieStore.set("auth", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24, // 1 day
        path: "/",
      });

      return NextResponse.json(
        { success: true, message: "Login successful" },
        { status: 200 }
      );
    }

    // Invalid credentials
    return NextResponse.json(
      { success: false, error: "Invalid email or password" },
      { status: 401 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Login failed" },
      { status: 500 }
    );
  }
}
