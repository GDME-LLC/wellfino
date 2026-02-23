import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FeaturedCoreEssentials from "@/components/FeaturedCoreEssentials";
import WhyWellfino from "@/components/WhyWellfino";
import FeaturedArticles from "@/components/FeaturedArticles";
import EmailCapture from "@/components/EmailCapture";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HeroSection />
        <FeaturedCoreEssentials />
        <WhyWellfino />
        <FeaturedArticles />
        <EmailCapture />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
