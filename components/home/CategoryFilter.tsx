"use client"

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="mb-8 md:mb-10 animate-fade-in-up stagger-2">
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
        {categories.map((category, index) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
              activeCategory === category
                ? "text-white shadow-md"
                : "hover:bg-white/50"
            }`}
            style={{
              backgroundColor: activeCategory === category
                ? "var(--color-slate-900)"
                : "var(--color-surface-elevated)",
              color: activeCategory === category
                ? "white"
                : "var(--color-slate-900)",
              border: activeCategory === category
                ? "none"
                : "1px solid var(--color-border)",
              animationDelay: `${index * 0.05}s`
            }}
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  )
}
