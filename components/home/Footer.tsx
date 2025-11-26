"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer
      className="mt-16 md:mt-24 py-12 px-4 md:px-8 lg:px-12"
      style={{ backgroundColor: "var(--color-slate-900)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/LogoAplikacije.jpg"
                alt="Termin Logo"
                className="w-10 h-10 rounded-xl"
              />
              <span className="text-xl font-display text-white">
                Termin
              </span>
            </Link>
            <p className="text-sm text-white/60 leading-relaxed">
              Platforma za rezervaciju termina u frizerskim salonima u Banja Luci.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Navigacija</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Usluge
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Saloni
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Podrška</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Pomoć
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Pravno</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Uslovi korištenja
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/60 hover:text-white transition-colors">
                  Privatnost
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4"
          style={{ borderColor: "rgba(255,255,255,0.1)" }}
        >
          <p className="text-xs text-white/40">
            © 2024 Termin. Sva prava zadržana.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-white/40">Banja Luka, BiH</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
