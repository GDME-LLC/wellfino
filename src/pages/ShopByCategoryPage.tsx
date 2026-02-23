import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import CategoryCards from "@/components/CategoryCards";

const ShopByCategoryPage = () => {
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
        <CategoryCards />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default ShopByCategoryPage;
