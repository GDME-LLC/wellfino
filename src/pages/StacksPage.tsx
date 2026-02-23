import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ShopNowButton from "@/components/ShopNowButton";
import { stacks } from "@/content/stacks";

const StacksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="mx-auto max-w-7xl px-6 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Stacks</h1>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Stacks are curated combinations built around common goals. Choose a stack, then select your preferred
              stack options on the product page.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {stacks.map((stack) => (
              <article key={stack.id} className="rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                <img
                  src={stack.image}
                  alt={`${stack.title} product image`}
                  className="mb-4 h-48 w-full object-contain"
                  loading="lazy"
                />
                <h2 className="mb-1 text-xl font-semibold tracking-tight">{stack.title}</h2>
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
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default StacksPage;
