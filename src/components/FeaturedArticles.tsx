import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";

const featured = [
  {
    title: "The Beginner's Guide to Supplement Stacking",
    category: "Guides",
    readTime: "6 min",
    summary:
      "Learn how to combine supplements that work together — amplifying each other's effects while filling real gaps in your diet.",
  },
  {
    title: "Vitamin D: Why Most People Don't Get Enough",
    category: "Research",
    readTime: "5 min",
    summary:
      "42% of US adults are deficient. Find out why diet alone falls short and how the D3+K2 pairing makes all the difference.",
  },
  {
    title: "Creatine Beyond the Gym",
    category: "Performance",
    readTime: "5 min",
    summary:
      "Over 500 peer-reviewed studies support creatine — not just for athletes, but for brain health, aging, and daily energy.",
  },
];

const FeaturedArticles = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Backed by Research
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Science-backed articles to help you make smarter supplement choices.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((article) => (
          <Link
            key={article.title}
            to="/learn"
            className="group flex flex-col rounded-2xl border border-border/50 bg-card p-7 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium uppercase tracking-wider text-primary">
                {article.category}
              </span>
              <span className="ml-auto text-xs text-muted-foreground">{article.readTime}</span>
            </div>
            <h3 className="mb-2 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
              {article.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {article.summary}
            </p>
            <span className="mt-auto flex items-center gap-1 pt-5 text-sm font-medium text-primary">
              Read More <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
        >
          View all articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedArticles;
