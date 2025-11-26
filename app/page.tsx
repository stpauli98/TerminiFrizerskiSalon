"use client"

import { useState } from "react"
import { ArrowRight } from "lucide-react"
import {
  Header,
  HeroSection,
  CategoryFilter,
  ServiceCard,
  Sidebar,
  Footer,
  type Service,
  type Company,
} from "@/components/home"

const categories = ["Svi", "Muško šišanje", "Žensko šišanje", "Farbanje kose", "Tretmani kose", "Styling"]

const services: Service[] = [
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
    duration: "30 min",
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
    duration: "45 min",
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
    duration: "120 min",
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
    duration: "90 min",
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
    duration: "40 min",
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
    duration: "60 min",
  },
]

const companies: Company[] = [
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

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("Svi")

  return (
    <div className="min-h-screen bg-gradient-subtle bg-noise">
      <Header />

      <main className="pt-28 md:pt-24">
        <div className="w-full px-4 md:px-8 lg:px-12 py-6 md:py-10">
          <HeroSection />

          <CategoryFilter
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />

          <div className="grid grid-cols-1 xl:grid-cols-4 gap-8 lg:gap-10">
            {/* Services Grid */}
            <div className="xl:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="text-2xl md:text-3xl font-display"
                  style={{ color: "var(--color-slate-900)" }}
                >
                  Popularne usluge
                </h2>
                <button
                  className="text-sm font-medium flex items-center gap-1 transition-colors duration-200 hover:opacity-70"
                  style={{ color: "var(--color-accent)" }}
                >
                  Prikaži sve
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {services.map((service, index) => (
                  <ServiceCard key={service.id} service={service} index={index} />
                ))}
              </div>

              {/* Load More */}
              <div className="flex justify-center mt-10">
                <button
                  className="flex items-center gap-2 px-10 py-3.5 rounded-xl font-medium transition-all duration-200"
                  style={{
                    color: "var(--color-slate-900)",
                    border: "1px solid var(--color-border)",
                    backgroundColor: "var(--color-surface-elevated)"
                  }}
                >
                  Učitaj više usluga
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <Sidebar companies={companies} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
