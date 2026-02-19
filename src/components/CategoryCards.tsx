import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import categories from "@/data/categories";

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
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/50 bg-card transition-all hover:border-primary/30 hover:shadow-lg"
            >
              {/* Product image */}
              <div className="relative flex items-center justify-center bg-white p-6 min-h-[200px]">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="h-40 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 items-start justify-between gap-2 border-t border-border/30 p-5">
                <div>
                  <h3 className="mb-1 text-sm font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cat.tagline}</p>
                </div>
                <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/40 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
