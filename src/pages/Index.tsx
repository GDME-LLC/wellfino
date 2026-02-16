import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ValueProps from "@/components/ValueProps";
import CategoryCards from "@/components/CategoryCards";
import EmailCapture from "@/components/EmailCapture";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <HeroSection />
        <ValueProps />
        <CategoryCards />
        <EmailCapture />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
