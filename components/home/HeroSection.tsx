"use client"

import { Star, ArrowRight, Scissors } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative mb-10 md:mb-14 animate-fade-in-up">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="decorative-line"></div>
            <span
              className="text-sm font-medium tracking-wide uppercase"
              style={{ color: "var(--color-accent)" }}
            >
              Banja Luka
            </span>
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-display leading-tight mb-6 text-balance"
            style={{ color: "var(--color-slate-900)" }}
          >
            Pronađi svoj
            <span className="block" style={{ color: "var(--color-accent)" }}>
              savršeni salon
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed mb-8 max-w-lg"
            style={{ color: "var(--color-slate-500)" }}
          >
            Rezerviši termin u najboljim frizerskim salonima.
            Brzo, jednostavno i pouzdano.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium text-white btn-accent"
            >
              <Scissors className="w-5 h-5" />
              Rezerviši termin
            </button>
            <button
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-medium transition-all duration-200 hover:bg-white/50"
              style={{
                color: "var(--color-slate-900)",
                border: "1px solid var(--color-border)"
              }}
            >
              Istraži salone
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t" style={{ borderColor: "var(--color-border)" }}>
            <div>
              <p className="text-3xl font-display" style={{ color: "var(--color-slate-900)" }}>50+</p>
              <p className="text-sm" style={{ color: "var(--color-slate-500)" }}>Salona</p>
            </div>
            <div>
              <p className="text-3xl font-display" style={{ color: "var(--color-slate-900)" }}>2000+</p>
              <p className="text-sm" style={{ color: "var(--color-slate-500)" }}>Zadovoljnih klijenata</p>
            </div>
            <div>
              <p className="text-3xl font-display" style={{ color: "var(--color-slate-900)" }}>4.8</p>
              <p className="text-sm" style={{ color: "var(--color-slate-500)" }}>Prosječna ocjena</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/HeroSection.jpg"
              alt="Frizerski salon"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(61, 73, 85, 0.4) 0%, transparent 50%)"
              }}
            />
          </div>
          {/* Floating Card */}
          <div
            className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 p-4 md:p-5 rounded-xl shadow-lg animate-float glass"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--color-accent)" }}
              >
                <Star className="w-6 h-6 text-white" fill="white" />
              </div>
              <div>
                <p className="text-2xl font-display" style={{ color: "var(--color-slate-900)" }}>4.9</p>
                <p className="text-xs" style={{ color: "var(--color-slate-500)" }}>Odlične recenzije</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
