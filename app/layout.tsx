import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Termin - Rezervacija frizerskih termina | Banja Luka",
  description: "Pronađi i rezerviši termin u najboljim frizerskim salonima u Banja Luci. Brzo, jednostavno i pouzdano.",
  keywords: ["frizerski salon", "rezervacija", "Banja Luka", "šišanje", "frizura", "termin"],
  icons: {
    icon: "/LogoAplikacije.jpg",
  },
  openGraph: {
    title: "Termin - Rezervacija frizerskih termina",
    description: "Pronađi i rezerviši termin u najboljim frizerskim salonima u Banja Luci.",
    locale: "sr_RS",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" className={`${dmSans.variable} ${playfair.variable}`}>
      <body
        className="font-sans antialiased"
        style={{
          fontFamily: "var(--font-dm-sans), system-ui, sans-serif",
        }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  )
}
