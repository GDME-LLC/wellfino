import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <BrandLogo imageClassName="h-10" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your wellness, rooted in science. Discover the supplements that actually matter.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Explore</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><Link to="/stacks" className="transition-colors hover:text-primary">Stacks</Link></li>
              <li><Link to="/guides" className="transition-colors hover:text-primary">Guides</Link></li>
              <li><Link to="/quizzes" className="transition-colors hover:text-primary">Quizzes</Link></li>
              <li><Link to="/quality" className="transition-colors hover:text-primary">Quality</Link></li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Shop</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="https://shop.wellfino.com" className="transition-colors hover:text-primary">All Products</a></li>
              <li><Link to="/shop-by-category" className="transition-colors hover:text-primary">Shop by Category</Link></li>
              <li><Link to="/stacks" className="transition-colors hover:text-primary">Stacks</Link></li>
              <li><Link to="/best-sellers" className="transition-colors hover:text-primary">Best Sellers</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">Company</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><span>GDME LLC</span></li>
              <li>
                <a href="https://shop.wellfino.com" className="transition-colors hover:text-primary">
                  shop.wellfino.com
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
