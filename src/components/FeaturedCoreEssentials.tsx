import products from "@/data/products";
import ShopNowButton from "@/components/ShopNowButton";

const featuredIds = ["multivitamin-men", "multivitamin-women"] as const;

const FeaturedCoreEssentials = () => {
  const featured = featuredIds
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as (typeof products)[number][];

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Featured Core Essentials</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">Daily foundational supplements. Simplified.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((product) => (
          <article key={product.id} className="rounded-2xl border border-border/50 bg-card p-6">
            <img
              src={product.frontImage}
              alt={`${product.name} front mockup`}
              className="mb-4 h-48 w-full object-contain"
              loading="lazy"
            />
            <h3 className="mb-1 text-xl font-semibold tracking-tight">{product.name === "Multivitamin for Men" ? "Men's Core Essentials" : "Women's Core Essentials"}</h3>
            <p className="mb-5 text-sm text-muted-foreground">
              {product.name === "Multivitamin for Men"
                ? "Foundational daily support tailored for men's health."
                : "Foundational daily support tailored for women's health."}
            </p>
            <ShopNowButton
              shopUrl={product.shopUrl}
              className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
            >
              Shop Now
            </ShopNowButton>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCoreEssentials;
