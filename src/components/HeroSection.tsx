import { ShoppingBag, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium wellness supplements by Wellfino"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-36">
        <div className="max-w-xl">
          <h1
            className="mb-5 text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Feel Better,{" "}
            <em className="not-italic text-primary-foreground/90">Backed by Science</em>
          </h1>
          <p className="mb-8 max-w-md text-lg leading-relaxed text-background/80">
            Premium supplements selected for real results. Every formula is
            third-party tested and transparently dosed.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://shop.wellfino.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110"
            >
              <ShoppingBag className="h-4 w-4" />
              Shop Best Sellers
            </a>
            <Link
              to="/category/core-daily"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-8 py-3.5 text-sm font-medium text-background backdrop-blur-sm transition-all hover:bg-background/20"
            >
              Browse Categories
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
