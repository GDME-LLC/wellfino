import { ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Wellness lifestyle"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="max-w-xl">
          <h1
            className="mb-6 text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Wellness,{" "}
            <em className="not-italic text-primary-foreground/90">Rooted in Science</em>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-background/80">
            Wellfino curates the supplements that actually matter—backed by research,
            organized by purpose, and delivered with confidence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://shop.wellfino.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-lg transition-all hover:shadow-xl hover:brightness-110"
            >
              <ShoppingBag className="h-4 w-4" />
              Shop supplements
            </a>
            <a
              href="/wellness-tree"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 bg-background/10 px-8 py-3.5 text-sm font-medium text-background backdrop-blur-sm transition-all hover:bg-background/20"
            >
              Explore the tree
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
