"use client";

/**
 * GLOBAL ERROR BOUNDARY
 *
 * KEY NEXT.JS CONCEPT: Error Handling
 * - error.js creates an error boundary for the app
 * - Catches runtime errors in the component tree
 * - Provides a fallback UI instead of crashing
 *
 * MUST BE A CLIENT COMPONENT:
 * - Error boundaries use React's error boundary feature
 * - Needs "use client" directive
 *
 * PROPS:
 * - error: The error object
 * - reset: Function to retry rendering
 */

import { useEffect } from "react";

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    // Log the error to console (could send to error reporting service)
    console.error("Global error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900 flex items-center justify-center px-4">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="relative text-center max-w-md">
        {/* Error Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto bg-red-500/20 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-white mb-4">
          Something went wrong!
        </h1>
        <p className="text-gray-300 mb-8">
          We encountered an unexpected error. Don't worry, you can try again or
          go back to the home page.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
          >
            Try Again
          </button>
          <a
            href="/"
            className="px-6 py-3 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
