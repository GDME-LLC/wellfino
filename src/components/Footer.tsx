import { Link } from "react-router-dom";
import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Leaf className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>
                Wellfino
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your wellness, rooted in science. Discover the supplements that actually matter.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/wellness-tree" className="transition-colors hover:text-primary">Wellness Tree</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">About</Link></li>
              <li><Link to="/learn" className="transition-colors hover:text-primary">Learn</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Shop</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="https://wellfino.printify.me" className="transition-colors hover:text-primary">All Products</a></li>
              <li><a href="https://wellfino.printify.me" className="transition-colors hover:text-primary">Best Sellers</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><span>GDME LLC</span></li>
              <li>
                <a href="https://wellfino.printify.me" className="transition-colors hover:text-primary">
                  wellfino.printify.me
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Wellfino · GDME LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
