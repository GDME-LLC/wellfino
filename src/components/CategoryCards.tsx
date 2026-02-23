import { ArrowRight } from "lucide-react";
import categories from "@/data/categories";

const categoryColors: Record<string, string> = {
  "core-daily": "#4EB0F4",
  "digest-gut": "#48E380",
  "calm-mood-sleep": "#9A8FD0",
  "focus-cognition": "#38CFCB",
  "immunity-longevity": "#F5CF65",
  "active-performance": "#F5576C",
  "beauty-structure": "#FA709A",
  "gummies": "#FEAEBC",
};

const CategoryCards = () => {
  return (
    <section className="bg-muted/20 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Shop by Category
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Your health journey is personal. Find supplements that match your goals.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={cat.shopUrl}
              data-shop-url={cat.shopUrl}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border/40 bg-card min-h-[200px] transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 h-full w-full object-cover opacity-20 transition-opacity group-hover:opacity-30"
              />
              <ArrowRight className="absolute right-4 top-4 z-10 h-4 w-4 text-muted-foreground/40 transition-all group-hover:text-white group-hover:translate-x-0.5" />
              <div
                className="relative z-10 mt-auto rounded-b-2xl px-6 py-4"
                style={{ backgroundColor: categoryColors[cat.id] || "#888" }}
              >
                <h3 className="mb-0.5 text-base font-semibold tracking-tight text-white">
                  {cat.label}
                </h3>
                <p className="text-xs text-white/80">{cat.tagline}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
