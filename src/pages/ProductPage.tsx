import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ShoppingBag, ChevronDown, ChevronUp, Shield, FlaskConical, Eye } from "lucide-react";
import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ShopNowButton from "@/components/ShopNowButton";
import products from "@/data/products";
import productFrontFallback from "@/assets/wellfino-product-cutout.png";

const FRONT_IMAGE_KEYS = [
  "frontImage",
  "mockupFront",
  "primaryImage",
  "imageFront",
] as const;

const getFrontImage = (product: (typeof products)[number]) => {
  const productWithImages = product as (typeof products)[number] & {
    [key: string]: unknown;
    images?: Array<string | { src?: string; url?: string; alt?: string }>;
  };

  for (const key of FRONT_IMAGE_KEYS) {
    const value = productWithImages[key];
    if (typeof value === "string" && value) {
      return value;
    }
  }

  if (Array.isArray(productWithImages.images) && productWithImages.images.length > 0) {
    const frontImage = productWithImages.images.find((entry) => {
      if (typeof entry === "string") {
        return entry.toLowerCase().includes("front");
      }

      const src = (entry.src || entry.url || "").toLowerCase();
      const alt = (entry.alt || "").toLowerCase();
      return src.includes("front") || alt.includes("front");
    });

    if (typeof frontImage === "string") {
      return frontImage;
    }

    if (frontImage && typeof frontImage === "object") {
      const src = frontImage.src || frontImage.url;
      if (typeof src === "string" && src) {
        return src;
      }
    }

    const firstImage = productWithImages.images[0];
    if (typeof firstImage === "string" && firstImage) {
      return firstImage;
    }

    if (firstImage && typeof firstImage === "object") {
      const src = firstImage.src || firstImage.url;
      if (typeof src === "string" && src) {
        return src;
      }
    }
  }

  return productFrontFallback;
};

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="mb-4 text-3xl font-bold">Product not found</h1>
          <Link to="/" className="text-primary underline underline-offset-2">
            Back to Home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const related = products.filter((p) => p.categoryId === product.categoryId && p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Overview */}
        <section className="mx-auto max-w-5xl px-6 pb-16 pt-12">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Link>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left - Product image */}
            <div className="flex items-center justify-center rounded-2xl bg-transparent p-12">
              <img
                src={getFrontImage(product)}
                alt={`${product.name} front mockup`}
                className="max-h-[520px] w-full object-contain"
                loading="eager"
              />
            </div>

            {/* Right - Info */}
            <div className="flex flex-col justify-center">
              <span className="mb-2 text-xs font-medium uppercase tracking-wider text-primary">
                {product.category}
              </span>
              <h1 className="mb-2 text-3xl font-bold tracking-tight sm:text-4xl">{product.name}</h1>
              <p className="mb-4 text-2xl font-bold text-primary">{product.price}</p>
              <p className="mb-6 leading-relaxed text-muted-foreground">{product.benefit}</p>
              <ShopNowButton
                shopUrl={product.shopUrl}
                className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:brightness-110 hover:shadow-xl"
              >
                <ShoppingBag className="h-4 w-4" />
                Shop Now
              </ShopNowButton>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="border-y border-border/40 bg-muted/20">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <h2 className="mb-6 text-2xl font-bold">Why Take {product.name}?</h2>
            <p className="mb-8 leading-relaxed text-muted-foreground">{product.description}</p>

            <div className="grid gap-4 sm:grid-cols-2">
              {product.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-border/50 bg-card p-5">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Who it's for</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{product.whoItsFor}</p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">What it solves</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{product.problemItSolves}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ingredients */}
        <section className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="mb-6 text-2xl font-bold">Ingredients & Transparency</h2>
          <div className="space-y-3">
            {product.ingredients.map((ing, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-border/50 bg-card p-5">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm">{ing.name}</span>
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      {ing.dose}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{ing.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust Badges */}
        <section className="border-y border-border/40 bg-muted/20">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-10 px-6 py-10">
            {[
              { icon: Shield, label: "Third-Party Tested" },
              { icon: FlaskConical, label: "GMP Certified" },
              { icon: Eye, label: "Transparent Labeling" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                <b.icon className="h-5 w-5 text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="mb-8 text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="rounded-2xl border border-border/50 bg-card px-6">
            {product.faqs.map((faq, i) => (
              <FaqItem key={i} q={faq.q} a={faq.a} />
            ))}
          </div>
        </section>

        {/* Related Products */}
        {related.length > 0 && (
          <section className="border-t border-border/40 bg-muted/20">
            <div className="mx-auto max-w-5xl px-6 py-16">
              <h2 className="mb-8 text-center text-2xl font-bold">You Might Also Like</h2>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    to={`/product/${p.id}`}
                    className="group rounded-2xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg"
                  >
                    <span className="text-xs font-medium uppercase tracking-wider text-primary">{p.category}</span>
                    <h3 className="mb-1 mt-1 font-semibold transition-colors group-hover:text-primary">{p.name}</h3>
                    <p className="text-sm text-muted-foreground">{p.benefit}</p>
                    <p className="mt-3 font-bold">{p.price}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50 last:border-0">
      <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between py-5 text-left">
        <span className="pr-4 text-sm font-medium">{q}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  );
};

export default ProductPage;
