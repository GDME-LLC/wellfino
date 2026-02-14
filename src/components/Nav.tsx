import { Leaf, ShoppingBag } from "lucide-react";

const Nav = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="/" className="flex items-center gap-2 text-foreground">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
            Wellfino
          </span>
        </a>
        <a
          href="https://shop.wellfino.com"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
        >
          <ShoppingBag className="h-4 w-4" />
          Shop
        </a>
      </nav>
    </header>
  );
};

export default Nav;
