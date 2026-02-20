import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import products, { bestSellers } from "@/data/products";

const BestSellers = () => {
  const featured = bestSellers
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as (typeof products)[number][];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-14 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Best Sellers
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          The supplements our customers reach for first — backed by research, trusted daily.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="group flex flex-col rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <span className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
              {product.category}
            </span>
            <h3 className="mb-1 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
              {product.name}
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
              {product.benefit}
            </p>
            <div className="mt-auto flex items-center justify-between pt-4">
              <span className="text-lg font-bold text-foreground">{product.price}</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-all group-hover:shadow-md">
                <ShoppingBag className="h-3.5 w-3.5" />
                View Details
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 text-center">
        <a
          href="https://shop.wellfino.com"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-8 py-3 text-sm font-medium text-foreground transition-all hover:border-primary/30 hover:shadow-md"
        >
          <ShoppingBag className="h-4 w-4" />
          View All Products
        </a>
      </div>
    </section>
  );
};

export default BestSellers;
