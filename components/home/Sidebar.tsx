"use client"

import { Star } from "lucide-react"

export interface Company {
  id: number
  name: string
  location: string
  rating: number
  reviews: number
  image: string
  specialty: string
}

interface SidebarProps {
  companies: Company[]
}

export default function Sidebar({ companies }: SidebarProps) {
  return (
    <aside className="xl:col-span-1">
      <div
        className="bg-white rounded-2xl shadow-sm p-6 sticky top-28 opacity-0 animate-slide-in-right"
        style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h2
            className="text-xl font-display"
            style={{ color: "var(--color-slate-900)" }}
          >
            Top saloni
          </h2>
          <button
            className="text-xs font-medium transition-colors duration-200 hover:opacity-70"
            style={{ color: "var(--color-accent)" }}
          >
            Vidi sve
          </button>
        </div>

        <div className="space-y-3">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all duration-200 hover:bg-gray-50 group"
              style={{
                backgroundColor: index === 0 ? "rgba(180, 120, 90, 0.08)" : "transparent",
                border: index === 0 ? "1px solid rgba(180, 120, 90, 0.2)" : "1px solid transparent"
              }}
            >
              {/* Rank */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                style={{
                  backgroundColor: index === 0 ? "var(--color-accent)" : "var(--color-slate-100)",
                  color: index === 0 ? "white" : "var(--color-slate-900)"
                }}
              >
                {index + 1}
              </div>

              {/* Image */}
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p
                  className="font-semibold text-sm truncate"
                  style={{ color: "var(--color-slate-900)" }}
                >
                  {company.name}
                </p>
                <p
                  className="text-xs mb-1"
                  style={{ color: "var(--color-accent)" }}
                >
                  {company.specialty}
                </p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star
                      className="w-3.5 h-3.5"
                      fill="var(--color-accent)"
                      style={{ color: "var(--color-accent)" }}
                    />
                    <span
                      className="text-xs font-medium"
                      style={{ color: "var(--color-slate-900)" }}
                    >
                      {company.rating}
                    </span>
                  </div>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-slate-500)" }}
                  >
                    ({company.reviews})
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-6 p-5 rounded-xl text-center"
          style={{ backgroundColor: "var(--color-slate-100)" }}
        >
          <p
            className="text-sm font-medium mb-2"
            style={{ color: "var(--color-slate-900)" }}
          >
            Imaš frizerski salon?
          </p>
          <p
            className="text-xs mb-4"
            style={{ color: "var(--color-slate-500)" }}
          >
            Pridruži se našoj platformi i pronađi nove klijente.
          </p>
          <button
            className="w-full py-2.5 rounded-xl text-sm font-medium text-white btn-accent"
          >
            Registruj salon
          </button>
        </div>
      </div>
    </aside>
  )
}
