import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import CategoryCards from "@/components/CategoryCards";
import TrustSection from "@/components/TrustSection";
import FeaturedArticles from "@/components/FeaturedArticles";
import EmailCapture from "@/components/EmailCapture";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HeroSection />
        <CategoryCards />
        <TrustSection />
        <FeaturedArticles />
        <EmailCapture />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
