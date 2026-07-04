// components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session, status } = useSession();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <nav className="border-b border-slate-800 bg-slate-900 px-6 py-4 text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
          DevConnect
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <Link href="/feed" className="hover:text-white transition-colors">Feed</Link>
          <Link href="/explore" className="hover:text-white transition-colors">Explore</Link>
          <Link href="/jobs" className="hover:text-white transition-colors">Jobs</Link>
          {session && (
            <Link href={`/profile/${session.user?.name}`} className="hover:text-white transition-colors">
              Profile
            </Link>
          )}
        </div>

        {/* Dynamic Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          {status === "loading" ? (
            <span className="text-sm text-slate-500">Loading...</span>
          ) : session ? (
            <div className="flex items-center gap-4">
              <span className="text-sm text-slate-400">
                Hi, <span className="text-white font-semibold">{session.user?.name}</span>
              </span>
              <button 
                onClick={handleSignOut}
                className="rounded-md bg-slate-800 px-4 py-2 text-xs font-semibold hover:bg-slate-700 transition-colors"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                Sign In
              </Link>
              <Link 
                href="/login"
                className="rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold hover:bg-indigo-500 transition-colors"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-slate-800 pt-4 md:hidden text-slate-300 text-sm font-medium">
          <Link href="/feed" className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Feed</Link>
          <Link href="/explore" className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Explore</Link>
          <Link href="/jobs" className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Jobs</Link>
          {session && (
            <Link href={`/profile/${session.user?.name}`} className="hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
              Profile
            </Link>
          )}
          <div className="h-px bg-slate-800 my-2" />
          {session ? (
            <div className="flex flex-col gap-2">
              <span className="text-xs text-slate-500 px-2">Logged in as {session.user?.email}</span>
              <button 
                onClick={() => { handleSignOut(); setIsOpen(false); }}
                className="rounded-md bg-slate-800 px-4 py-2 text-xs font-semibold hover:bg-slate-700 transition-colors w-full text-center"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link href="/login" className="hover:text-white transition-colors text-center" onClick={() => setIsOpen(false)}>Sign In</Link>
              <Link 
                href="/login" 
                className="rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold hover:bg-indigo-500 transition-colors w-full text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
