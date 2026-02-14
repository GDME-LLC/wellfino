import Nav from "@/components/Nav";
import WellnessTree from "@/components/WellnessTree";
import EmailCapture from "@/components/EmailCapture";
import { Leaf, ShoppingBag } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <main>
        <section className="mx-auto max-w-5xl px-6 pb-12 pt-20 text-center sm:pt-28">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <Leaf className="h-8 w-8 text-primary" />
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Your Wellness,{" "}
            <span className="text-primary">Rooted in Science</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Discover the supplements that actually matter. Explore our Wellness Tree, learn what each branch supports, and shop with confidence.
          </p>
          <a
            href="https://shop.wellfino.com"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-md transition-all hover:shadow-lg hover:brightness-110"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop now
          </a>
        </section>

        {/* Wellness Tree */}
        <WellnessTree />

        {/* Email Capture */}
        <EmailCapture />

        {/* Footer */}
        <footer className="border-t border-border/50 py-10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Wellfino · GDME LLC. All rights reserved.</p>
          <p className="mt-1">
            Secure checkout at{" "}
            <a href="https://shop.wellfino.com" className="font-medium text-primary underline underline-offset-2 hover:text-primary/80">
              shop.wellfino.com
            </a>
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
