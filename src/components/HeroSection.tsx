import { ShoppingBag } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Woman holding Wellfino Digest Core Probiotics in a forest"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content - pushed down with pt-32 */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-32">
        <div className="max-w-xl">
          <h1
            className="mb-6 text-4xl font-bold tracking-tight text-background sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Your Wellness,{" "}
            <em className="not-italic text-primary-foreground/90">Rooted in Science</em>
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-background/80">
            Extensive research goes into every product we select—allowing us to
            curate the perfect stack for your wellness needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://wellfino.printify.me"
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
