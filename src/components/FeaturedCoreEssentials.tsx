import ShopNowButton from "@/components/ShopNowButton";
import { stacks } from "@/content/stacks";

const FeaturedCoreEssentials = () => {
  const featured = stacks;

  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Featured Core Essentials</h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">Daily foundational supplements. Simplified.</p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {featured.map((stack) => (
          <article key={stack.id} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
            <img
              src={stack.image}
              alt={`${stack.title} product image`}
              className="mb-4 h-48 w-full object-contain"
              loading="lazy"
            />
            <h3 className="mb-1 text-xl font-semibold tracking-tight">{stack.title}</h3>
            <p className="mb-5 text-sm text-muted-foreground">{stack.shortDescription}</p>
            <div className="flex items-center gap-4">
              <ShopNowButton
                shopUrl={stack.shopUrl}
                className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Shop Now
              </ShopNowButton>
              <a
                href={stack.shopUrl}
                data-shop-url={stack.shopUrl}
                className="text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
              >
                View Stack
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCoreEssentials;
