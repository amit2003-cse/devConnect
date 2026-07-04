// app/login/page.tsx
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError("Invalid email or password. Please try again.");
      } else {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1 items-center justify-center bg-slate-950 px-4 py-12 sm:px-6 lg:px-8">
      {/* Outer Card Wrapper (Single Parent) */}
      <div className="w-full max-w-md space-y-8 bg-slate-900/60 p-8 rounded-2xl border border-slate-800 backdrop-blur-md shadow-2xl">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white tracking-tight">
            Welcome Back
          </h2>
          <p className="mt-2 text-center text-sm text-slate-400">
            Log in to connect with top developers around the globe
          </p>
        </div>

        {error && (
          <div className="rounded-md bg-red-900/30 border border-red-800/50 p-4 text-sm text-red-400 text-center font-medium">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4 rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="relative block w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 text-white placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                placeholder="developer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="relative block w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2.5 text-white placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-sm"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={isLoading}
              className="group relative flex w-full justify-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </button>
          </div>
        </form>

        <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800/50">
          Tip: Log in with email <span className="text-indigo-400 font-mono">test@devconnect.com</span> and password <span className="text-indigo-400 font-mono">password123</span>
        </div>
      </div>
    </div>
  );
}
