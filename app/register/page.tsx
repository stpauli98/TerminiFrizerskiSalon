"use client"

import { useState } from "react"
import Link from "next/link"
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowLeft, Scissors, Check } from "lucide-react"

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Placeholder - no functionality yet
    console.log("Register attempt:", formData)
  }

  // Password strength indicator
  const getPasswordStrength = (password: string) => {
    let strength = 0
    if (password.length >= 8) strength++
    if (/[A-Z]/.test(password)) strength++
    if (/[0-9]/.test(password)) strength++
    if (/[^A-Za-z0-9]/.test(password)) strength++
    return strength
  }

  const passwordStrength = getPasswordStrength(formData.password)
  const strengthLabels = ["Slaba", "Osrednja", "Dobra", "Odlična"]
  const strengthColors = ["#ef4444", "#f59e0b", "#84cc16", "#22c55e"]

  return (
    <div className="min-h-screen bg-gradient-subtle bg-noise flex">
      {/* Left Side - Branding */}
      <div
        className="hidden lg:flex lg:w-1/2 xl:w-2/5 relative overflow-hidden"
        style={{ backgroundColor: "var(--color-slate-900)" }}
      >
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col justify-between p-12 xl:p-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/LogoAplikacije.jpg"
              alt="Termin Logo"
              className="w-12 h-12 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-display tracking-tight text-white">
                Termin
              </span>
              <span className="text-xs tracking-wide uppercase text-white/60">
                Frizerski saloni
              </span>
            </div>
          </Link>

          {/* Middle Content */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-1 rounded-full" style={{ backgroundColor: "var(--color-accent)" }} />
              </div>
              <h1 className="text-4xl xl:text-5xl font-display text-white leading-tight mb-6">
                Pridružite se
                <span className="block" style={{ color: "var(--color-accent)" }}>
                  Termin zajednici
                </span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed max-w-md">
                Kreirajte besplatan račun i počnite rezervisati termine u
                najboljim frizerskim salonima u Banja Luci.
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Besplatna registracija</p>
                  <p className="text-white/60 text-sm">Bez skrivenih troškova ili pretplata</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Instant rezervacije</p>
                  <p className="text-white/60 text-sm">Rezervišite termin u samo par klikova</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  <Check className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Podsjetnici</p>
                  <p className="text-white/60 text-sm">Nikad više ne propustite termin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <p className="text-xs text-white/40">
            © 2024 Termin. Sva prava zadržana.
          </p>
        </div>
      </div>

      {/* Right Side - Register Form */}
      <div className="flex-1 flex items-center justify-center p-6 md:p-12 overflow-y-auto">
        <div className="w-full max-w-md py-8">
          {/* Mobile Logo */}
          <div className="lg:hidden mb-8">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/LogoAplikacije.jpg"
                alt="Termin Logo"
                className="w-10 h-10 rounded-xl shadow-sm"
              />
              <span
                className="text-xl font-display tracking-tight"
                style={{ color: "var(--color-slate-900)" }}
              >
                Termin
              </span>
            </Link>
          </div>

          {/* Back Link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors duration-200 hover:opacity-70"
            style={{ color: "var(--color-slate-500)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na početnu
          </Link>

          {/* Form Header */}
          <div className="mb-8">
            <h2
              className="text-3xl font-display mb-2"
              style={{ color: "var(--color-slate-900)" }}
            >
              Registracija
            </h2>
            <p style={{ color: "var(--color-slate-500)" }}>
              Kreirajte svoj račun u par koraka
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-slate-900)" }}
                >
                  Ime
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: "var(--color-slate-500)" }}
                  />
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ime"
                    className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus-ring"
                    style={{
                      backgroundColor: "var(--color-surface-elevated)",
                      color: "var(--color-slate-900)",
                      border: "1px solid var(--color-border)",
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                  style={{ color: "var(--color-slate-900)" }}
                >
                  Prezime
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Prezime"
                  className="w-full px-4 py-3.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus-ring"
                  style={{
                    backgroundColor: "var(--color-surface-elevated)",
                    color: "var(--color-slate-900)",
                    border: "1px solid var(--color-border)",
                  }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-slate-900)" }}
              >
                Email adresa
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: "var(--color-slate-500)" }}
                />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="vas@email.com"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus-ring"
                  style={{
                    backgroundColor: "var(--color-surface-elevated)",
                    color: "var(--color-slate-900)",
                    border: "1px solid var(--color-border)",
                  }}
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-slate-900)" }}
              >
                Broj telefona
              </label>
              <div className="relative">
                <Phone
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: "var(--color-slate-500)" }}
                />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+387 65 123 456"
                  className="w-full pl-12 pr-4 py-3.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus-ring"
                  style={{
                    backgroundColor: "var(--color-surface-elevated)",
                    color: "var(--color-slate-900)",
                    border: "1px solid var(--color-border)",
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-slate-900)" }}
              >
                Lozinka
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: "var(--color-slate-500)" }}
                />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus-ring"
                  style={{
                    backgroundColor: "var(--color-surface-elevated)",
                    color: "var(--color-slate-900)",
                    border: "1px solid var(--color-border)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 hover:opacity-70"
                  style={{ color: "var(--color-slate-500)" }}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {/* Password Strength */}
              {formData.password && (
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className="h-1 flex-1 rounded-full transition-colors duration-200"
                        style={{
                          backgroundColor:
                            passwordStrength >= level
                              ? strengthColors[passwordStrength - 1]
                              : "var(--color-border)",
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: strengthColors[passwordStrength - 1] || "var(--color-slate-500)" }}>
                    {passwordStrength > 0 ? strengthLabels[passwordStrength - 1] : "Unesite lozinku"}
                  </p>
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium mb-2"
                style={{ color: "var(--color-slate-900)" }}
              >
                Potvrdite lozinku
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                  style={{ color: "var(--color-slate-500)" }}
                />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-12 py-3.5 rounded-xl text-sm transition-all duration-200 focus:outline-none focus-ring"
                  style={{
                    backgroundColor: "var(--color-surface-elevated)",
                    color: "var(--color-slate-900)",
                    border: "1px solid var(--color-border)",
                  }}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 transition-colors duration-200 hover:opacity-70"
                  style={{ color: "var(--color-slate-500)" }}
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {formData.confirmPassword && formData.password !== formData.confirmPassword && (
                <p className="text-xs mt-1" style={{ color: "#ef4444" }}>
                  Lozinke se ne podudaraju
                </p>
              )}
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="w-5 h-5 rounded border-2 mt-0.5 transition-colors duration-200"
                style={{ borderColor: "var(--color-border)", accentColor: "var(--color-accent)" }}
              />
              <span className="text-sm" style={{ color: "var(--color-slate-500)" }}>
                Prihvatam{" "}
                <button type="button" className="font-medium" style={{ color: "var(--color-accent)" }}>
                  Uslove korištenja
                </button>{" "}
                i{" "}
                <button type="button" className="font-medium" style={{ color: "var(--color-accent)" }}>
                  Politiku privatnosti
                </button>
              </span>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl text-base font-medium text-white btn-accent"
            >
              Kreiraj račun
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
            <span className="text-sm" style={{ color: "var(--color-slate-500)" }}>ili</span>
            <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-border)" }} />
          </div>

          {/* Social Register */}
          <div className="space-y-3">
            <button
              type="button"
              className="w-full flex items-center justify-center gap-3 py-3.5 rounded-xl text-sm font-medium transition-all duration-200 hover:bg-white/50"
              style={{
                color: "var(--color-slate-900)",
                border: "1px solid var(--color-border)",
                backgroundColor: "var(--color-surface-elevated)",
              }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Registruj se sa Google
            </button>
          </div>

          {/* Login Link */}
          <p className="text-center mt-8" style={{ color: "var(--color-slate-500)" }}>
            Već imate račun?{" "}
            <Link
              href="/login"
              className="font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: "var(--color-accent)" }}
            >
              Prijavite se
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
