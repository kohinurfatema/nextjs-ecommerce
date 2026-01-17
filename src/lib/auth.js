/**
 * AUTH HELPER FUNCTIONS
 *
 * KEY NEXT.JS CONCEPT: Utility Functions
 * - Centralized authentication logic
 * - Can be used in middleware, API routes, and server components
 *
 * These helpers make it easy to:
 * - Check if user is authenticated
 * - Get auth status from cookies
 * - Validate credentials
 */

import { cookies } from "next/headers";

// Hardcoded credentials (as per requirements)
export const VALID_CREDENTIALS = {
  email: "admin@example.com",
  password: "password123",
};

/**
 * Check if user is authenticated (for server components/API routes)
 * @returns {Promise<boolean>} - True if authenticated
 */
export async function isAuthenticated() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get("auth");
  return authCookie?.value === "true";
}

/**
 * Validate user credentials
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {boolean} - True if credentials are valid
 */
export function validateCredentials(email, password) {
  return (
    email === VALID_CREDENTIALS.email && password === VALID_CREDENTIALS.password
  );
}

/**
 * Get auth cookie value (for middleware - uses request)
 * @param {Request} request - The incoming request
 * @returns {boolean} - True if authenticated
 */
export function isAuthenticatedFromRequest(request) {
  const authCookie = request.cookies.get("auth");
  return authCookie?.value === "true";
}
