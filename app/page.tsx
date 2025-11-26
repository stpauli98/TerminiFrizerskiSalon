"use client"

import { useState } from "react"
import { Star, Search, User, MapPin } from "lucide-react"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Svi")

  // Mock data
  const categories = ["Svi", "Muško šišanje", "Žensko šišanje", "Farbanje kose", "Tretmani kose", "Styling"]

  const services = [
    {
      id: 1,
      image: "/haircut-salon.png",
      category: "Muško šišanje",
      title: "Klasično muško šišanje",
      salon: "Style Pro Salon",
      location: "Banja Luka",
      rating: 4.8,
      reviews: 120,
      price: "15 BAM",
    },
    {
      id: 2,
      image: "/haircut-salon.png",
      category: "Žensko šišanje",
      title: "Žensko šišanje i styling",
      salon: "Glamour Hair Studio",
      location: "Banja Luka",
      rating: 4.9,
      reviews: 85,
      price: "25 BAM",
    },
    {
      id: 3,
      image: "/hair-treatment-salon.png",
      category: "Farbanje kose",
      title: "Pramenovi i balayage",
      salon: "Color Expert Salon",
      location: "Banja Luka",
      rating: 4.7,
      reviews: 95,
      price: "60 BAM",
    },
    {
      id: 4,
      image: "/hair-treatment-salon.png",
      category: "Tretman kose",
      title: "Keratin tretman",
      salon: "Hair Care Experts",
      location: "Banja Luka",
      rating: 5.0,
      reviews: 110,
      price: "80 BAM",
    },
    {
      id: 5,
      image: "/haircut-salon.png",
      category: "Muško šišanje",
      title: "Fade šišanje + brada",
      salon: "Barber House",
      location: "Banja Luka",
      rating: 4.6,
      reviews: 75,
      price: "20 BAM",
    },
    {
      id: 6,
      image: "/hair-treatment-salon.png",
      category: "Styling",
      title: "Svečana frizura",
      salon: "Glamour Hair Studio",
      location: "Banja Luka",
      rating: 4.8,
      reviews: 65,
      price: "35 BAM",
    },
  ]

  const companies = [
    {
      id: 1,
      name: "Style Pro Salon",
      location: "Banja Luka",
      rating: 4.8,
      reviews: 120,
      image: "/haircut-salon.png",
      specialty: "Muško šišanje",
    },
    {
      id: 2,
      name: "Glamour Hair Studio",
      location: "Banja Luka",
      rating: 4.9,
      reviews: 85,
      image: "/hair-treatment-salon.png",
      specialty: "Žensko šišanje & Styling",
    },
    {
      id: 3,
      name: "Barber House",
      location: "Banja Luka",
      rating: 5.0,
      reviews: 110,
      image: "/haircut-salon.png",
      specialty: "Barbershop",
    },
    {
      id: 4,
      name: "Color Expert Salon",
      location: "Banja Luka",
      rating: 4.8,
      reviews: 65,
      image: "/hair-treatment-salon.png",
      specialty: "Farbanje & Tretmani kose",
    },
  ]

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg)" }}>

      {/* Top Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: "var(--color-bg)" }}>
        <nav className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 py-3 md:py-4 gap-3 md:gap-4">
          {/* Top row on mobile: Logo and Avatar */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <img src="/LogoAplikacije.jpg" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 rounded-lg" />
              <span className="text-xl md:text-2xl font-bold" style={{ color: "var(--color-gray-dark)" }}>
                Termin
              </span>
            </div>

            {/* Right Side - Avatar and Login */}
            <div className="flex items-center gap-3 md:hidden">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "var(--color-gray)" }}
              >
                <User className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>

          {/* Search Bar - Full width on mobile, centered on desktop */}
          <div className="flex flex-1 md:max-w-lg lg:max-w-xl">
            <div className="w-full relative">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                style={{ color: "var(--color-gray)" }}
              />
              <input
                type="text"
                placeholder="Pretraži usluge…"
                className="w-full pl-10 pr-4 py-2.5 md:py-2 rounded-lg text-sm md:text-base"
                style={{
                  backgroundColor: "white",
                  color: "var(--color-gray-dark)",
                  border: `1px solid var(--color-gray)`,
                }}
              />
            </div>
          </div>

          {/* Right Side - Desktop only */}
          <div className="hidden md:flex items-center gap-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "var(--color-gray)" }}
            >
              <User className="w-6 h-6 text-white" />
            </div>
            <a href="#" style={{ color: "var(--color-gray-dark)" }}>
              Prijava
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-28 md:pt-20">
        <div className="w-full px-4 md:px-8 lg:px-12 py-4 md:py-8">
          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
            {/* Main Content Column */}
            <div className="xl:col-span-3">
              {/* Hero Section */}
              <section className="relative h-48 sm:h-56 md:h-64 lg:h-72 rounded-xl overflow-hidden mb-6 md:mb-8">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url(/massage-spa-wellness.jpg)",
                  }}
                ></div>
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundColor: "rgba(61, 73, 85, 0.6)",
                  }}
                ></div>
                <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3 text-pretty">Pronađi svoju uslugu</h1>
                  <p className="text-sm sm:text-base md:text-lg text-white/90 mb-4 md:mb-6 max-w-md text-pretty">
                    Brzo pronalazi frizera, salone i tretmane u kojima se trebaš
                  </p>
                  <button
                    className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold text-white text-sm sm:text-base"
                    style={{ backgroundColor: "var(--color-accent)" }}
                  >
                    Istraži
                  </button>
                </div>
              </section>

              {/* Category Filters */}
              <section className="mb-6 md:mb-8 flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base font-medium whitespace-nowrap transition-colors ${
                      activeCategory === category ? "text-white" : "text-[var(--color-gray-dark)]"
                    }`}
                    style={{
                      backgroundColor: activeCategory === category ? "var(--color-accent)" : "rgba(255, 255, 255, 0.7)",
                    }}
                  >
                    {category}
                  </button>
                ))}
              </section>

              {/* Service Cards Grid */}
              <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 md:mb-8">
                {services.map((service) => (
                  <div key={service.id} className="rounded-xl overflow-hidden shadow-md bg-white">
                    {/* Image */}
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-3 sm:p-4">
                      {/* Category Label */}
                      <p className="text-xs font-medium mb-1.5 sm:mb-2" style={{ color: "var(--color-accent)" }}>
                        {service.category}
                      </p>

                      {/* Title */}
                      <h3 className="text-base sm:text-lg font-bold mb-1" style={{ color: "var(--color-gray-dark)" }}>
                        {service.title}
                      </h3>

                      {/* Salon and Location */}
                      <p className="text-xs sm:text-sm mb-1.5 sm:mb-2" style={{ color: "var(--color-gray)" }}>
                        {service.salon}
                      </p>
                      <div className="flex items-center gap-1 mb-2 sm:mb-3">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: "var(--color-gray)" }} />
                        <p className="text-xs sm:text-sm" style={{ color: "var(--color-gray)" }}>
                          {service.location}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3.5 h-3.5 sm:w-4 sm:h-4"
                              fill={i < Math.floor(service.rating) ? "var(--color-accent)" : "none"}
                              style={{
                                color: "var(--color-accent)",
                              }}
                            />
                          ))}
                        </div>
                        <span className="text-xs sm:text-sm font-medium" style={{ color: "var(--color-gray-dark)" }}>
                          {service.rating} ({service.reviews})
                        </span>
                      </div>

                      {/* Price and Button */}
                      <div className="flex items-center justify-between gap-2 sm:gap-3">
                        <p className="text-base sm:text-lg font-bold" style={{ color: "var(--color-gray-dark)" }}>
                          {service.price}
                        </p>
                        <button
                          className="flex-1 py-2 rounded-lg font-semibold text-white text-sm sm:text-base"
                          style={{ backgroundColor: "var(--color-accent)" }}
                        >
                          Rezerviši
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </section>

              {/* Show All Button */}
              <div className="flex justify-center mb-8">
                <button
                  className="px-12 py-3 rounded-full font-semibold text-white"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Prikaži sve
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="xl:col-span-1">
              {/* Best Companies Card */}
              <div className="bg-white rounded-xl shadow-md p-5 mb-6">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-lg font-bold" style={{ color: "var(--color-gray-dark)" }}>
                    Najpopularniji saloni
                  </h2>
                  <button
                    className="text-sm font-medium hover:underline"
                    style={{ color: "var(--color-accent)" }}
                  >
                    Vidi sve
                  </button>
                </div>
                <div className="space-y-3">
                  {companies.map((company, index) => (
                    <div
                      key={company.id}
                      className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all hover:bg-gray-50 group"
                      style={{
                        backgroundColor: index === 0 ? "rgba(249, 115, 22, 0.05)" : "transparent",
                        border: index === 0 ? "1px solid rgba(249, 115, 22, 0.2)" : "1px solid transparent"
                      }}
                    >
                      {/* Rank Badge */}
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                        style={{
                          backgroundColor: index === 0 ? "var(--color-accent)" : "var(--color-gray-light)",
                          color: index === 0 ? "white" : "var(--color-gray-dark)"
                        }}
                      >
                        {index + 1}
                      </div>

                      {/* Company Image */}
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={company.image}
                          alt={company.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-sm truncate" style={{ color: "var(--color-gray-dark)" }}>
                          {company.name}
                        </p>
                        <p className="text-xs mb-1" style={{ color: "var(--color-accent)" }}>
                          {company.specialty}
                        </p>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1">
                            <Star
                              className="w-3.5 h-3.5"
                              fill="var(--color-accent)"
                              style={{ color: "var(--color-accent)" }}
                            />
                            <span className="text-xs font-medium" style={{ color: "var(--color-gray-dark)" }}>
                              {company.rating}
                            </span>
                          </div>
                          <span className="text-xs" style={{ color: "var(--color-gray)" }}>
                            ({company.reviews} recenzija)
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </aside>
          </div>
        </div>
      </main>

    </div>
  )
}
