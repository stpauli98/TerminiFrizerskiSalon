"use client"

import { Star, MapPin, Clock } from "lucide-react"

export interface Service {
  id: number
  image: string
  category: string
  title: string
  salon: string
  location: string
  rating: number
  reviews: number
  price: string
  duration: string
}

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article
      className="rounded-2xl overflow-hidden bg-white shadow-sm card-hover opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: "forwards" }}
    >
      {/* Image */}
      <div className="relative h-44 sm:h-48 overflow-hidden group">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: "linear-gradient(to top, rgba(61, 73, 85, 0.6) 0%, transparent 50%)"
          }}
        />
        {/* Duration badge */}
        <div
          className="absolute top-3 right-3 px-3 py-1.5 rounded-lg text-xs font-medium glass"
        >
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" style={{ color: "var(--color-slate-900)" }} />
            <span style={{ color: "var(--color-slate-900)" }}>{service.duration}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Category */}
        <p
          className="text-xs font-medium tracking-wide uppercase mb-2"
          style={{ color: "var(--color-accent)" }}
        >
          {service.category}
        </p>

        {/* Title */}
        <h3
          className="text-lg font-semibold mb-1 line-clamp-1"
          style={{ color: "var(--color-slate-900)" }}
        >
          {service.title}
        </h3>

        {/* Salon */}
        <p
          className="text-sm mb-2"
          style={{ color: "var(--color-slate-500)" }}
        >
          {service.salon}
        </p>

        {/* Location */}
        <div className="flex items-center gap-1.5 mb-3">
          <MapPin className="w-3.5 h-3.5" style={{ color: "var(--color-slate-500)" }} />
          <p className="text-xs" style={{ color: "var(--color-slate-500)" }}>
            {service.location}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                fill={i < Math.floor(service.rating) ? "var(--color-accent)" : "none"}
                style={{ color: "var(--color-accent)" }}
              />
            ))}
          </div>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--color-slate-900)" }}
          >
            {service.rating}
          </span>
          <span
            className="text-xs"
            style={{ color: "var(--color-slate-500)" }}
          >
            ({service.reviews})
          </span>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: "var(--color-border)" }}>
          <div>
            <p className="text-xs" style={{ color: "var(--color-slate-500)" }}>Cijena</p>
            <p
              className="text-xl font-display"
              style={{ color: "var(--color-slate-900)" }}
            >
              {service.price}
            </p>
          </div>
          <button
            className="px-5 py-2.5 rounded-xl text-sm font-medium text-white btn-primary"
          >
            Rezerviši
          </button>
        </div>
      </div>
    </article>
  )
}
