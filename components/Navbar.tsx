"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <nav className="border-b border-slate-800 bg-slate-900 px-6 py-4 text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                <Link href="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from blue-400 to-indigo-400 bg-clip-text text-transparent">
                    DevConnect
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
                    <Link href="/feed" className="hover:text-white transition-colors">Feed</Link>
                    <Link href="/explore" className="hover:text-white transition-colors">Explore</Link>
                    <Link href="/jobs" className="hover:text-white transition-colors">Jobs</Link>
                    <Link href="/profile/demo" className="hover:text-white transition-colors">Profile</Link> 
                </div>

                <div className="hidden md:flex items-center gap-4">
                    <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    Sign In
                    </Link>
                    <button className="rounded-md bg-indigo-600 px-4 py-2 text-xs font-semibold hover:bg-indigo-500 transition-colors">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}