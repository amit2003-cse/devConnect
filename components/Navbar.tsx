"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <nav className="border-b border-slate-800 bg-slate-900 px-6 py-4 text-white sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
            
        </nav>
    )
}