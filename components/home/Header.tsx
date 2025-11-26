"use client"

import Link from "next/link"
import { Search, User } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 lg:px-12 py-3 md:py-4 gap-3 md:gap-6">
        {/* Logo */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/LogoAplikacije.jpg"
                alt="Termin Logo"
                className="w-10 h-10 md:w-12 md:h-12 rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span
                className="text-xl md:text-2xl font-display tracking-tight"
                style={{ color: "var(--color-slate-900)" }}
              >
                Termin
              </span>
              <span
                className="text-xs tracking-wide uppercase hidden sm:block"
                style={{ color: "var(--color-slate-500)" }}
              >
                Frizerski saloni
              </span>
            </div>
          </Link>

          {/* Mobile Avatar */}
          <Link
            href="/login"
            className="md:hidden w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-105"
            style={{ backgroundColor: "var(--color-slate-900)" }}
          >
            <User className="w-5 h-5 text-white" />
          </Link>
        </div>

        {/* Search */}
        <div className="flex flex-1 md:max-w-md lg:max-w-lg">
          <div className="w-full relative group">
            <Search
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 transition-colors duration-200"
              style={{ color: "var(--color-slate-500)" }}
            />
            <input
              type="text"
              placeholder="Pretraži usluge ili salone..."
              className="w-full pl-12 pr-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus-ring"
              style={{
                backgroundColor: "var(--color-surface-elevated)",
                color: "var(--color-slate-900)",
                border: "1px solid var(--color-border)",
              }}
            />
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "var(--color-slate-900)" }}
          >
            O nama
          </a>
          <a
            href="#"
            className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "var(--color-slate-900)" }}
          >
            Kontakt
          </a>
          <Link
            href="/login"
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-white btn-primary"
          >
            <User className="w-4 h-4" />
            Prijava
          </Link>
        </div>
      </nav>
    </header>
  )
}
