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
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl border border-border/50 min-h-[240px] transition-all hover:border-primary/30 hover:shadow-lg"
            >
              {/* Background image */}
              <img
                src={cat.image}
                alt={cat.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

              {/* Content */}
              <div className="relative z-10 p-6">
                <h3 className="mb-1 text-lg font-semibold tracking-tight text-white group-hover:text-primary transition-colors">
                  {cat.label}
                </h3>
                <p className="text-sm text-white/70">{cat.tagline}</p>
              </div>
              <ArrowRight className="absolute right-5 top-5 z-10 h-4 w-4 text-white/40 transition-all group-hover:text-primary group-hover:translate-x-0.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;
