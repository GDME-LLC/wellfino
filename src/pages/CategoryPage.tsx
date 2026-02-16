import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import categories from "@/data/categories";

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const category = categories.find((c) => c.id === id);

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="mb-4 text-3xl font-bold">Category not found</h1>
          <Link to="/wellness-tree" className="text-primary underline underline-offset-2">
            Back to the Wellness Tree
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Header */}
        <section className="border-b border-border/40 bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 py-20 text-center">
            <Link
              to="/wellness-tree"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Wellness Tree
            </Link>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              {category.label}
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              {category.tagline}
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Description */}
            <div className="lg:col-span-3">
              <h2 className="mb-4 text-2xl font-semibold">About this category</h2>
              <p className="leading-relaxed text-muted-foreground">{category.description}</p>
            </div>

            {/* Top Picks */}
            <div className="lg:col-span-2">
              <h2 className="mb-4 text-2xl font-semibold">Top Picks</h2>
              <ul className="space-y-3">
                {category.topPicks.map((pick) => (
                  <li
                    key={pick}
                    className="flex items-center gap-3 rounded-xl border border-border/50 bg-card px-5 py-4 text-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    {pick}
                  </li>
                ))}
              </ul>

              <a
                href={category.shopUrl}
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
              >
                <ShoppingBag className="h-4 w-4" />
                Shop {category.label}
              </a>
            </div>
          </div>
        </section>

        {/* Other categories */}
        <section className="border-t border-border/40 bg-muted/20">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h3 className="mb-8 text-center text-lg font-semibold">Explore other categories</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories
                .filter((c) => c.id !== category.id)
                .map((c) => (
                  <Link
                    key={c.id}
                    to={`/category/${c.id}`}
                    className="rounded-full border border-border/50 bg-card px-5 py-2.5 text-sm font-medium text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                  >
                    {c.label}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
