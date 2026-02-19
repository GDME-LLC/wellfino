import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import categories from "@/data/categories";

const categoryColors: Record<string, string> = {
  "core-daily": "hsl(217, 90%, 64%)",
  "digest-gut": "hsl(155, 70%, 55%)",
  "calm-mood-sleep": "hsl(265, 45%, 60%)",
  "focus-cognition": "hsl(178, 65%, 55%)",
  "immunity-longevity": "hsl(43, 80%, 65%)",
  "active-performance": "hsl(352, 75%, 55%)",
  "beauty-structure": "hsl(340, 75%, 62%)",
  "gummies": "hsl(350, 70%, 78%)",
};

const CategoryCards = () => {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Wellness is personal
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Your health journey is unique. Explore by category and find what fits your goals.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.id}`}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl min-h-[240px] transition-all hover:shadow-lg hover:scale-[1.02]"
              style={{ backgroundColor: categoryColors[cat.id] }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10" />

              <div className="relative z-10 p-6">
                <h3 className="mb-1 text-lg font-semibold tracking-tight text-white">
                  {cat.label}
                </h3>
                <p className="text-sm text-white/80">{cat.tagline}</p>
              </div>
              <ArrowRight className="absolute right-5 top-5 z-10 h-4 w-4 text-white/50 transition-all group-hover:text-white group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
