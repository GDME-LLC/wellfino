import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import WellnessTree from "@/components/WellnessTree";

const WellnessTreePage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 py-24">
          <div className="mb-16 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              The Wellness Tree
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Every branch represents a pillar of health. Click to explore each category
              and discover what supports your goals.
            </p>
          </div>
          <WellnessTree />
          <div className="mx-auto mt-16 max-w-lg text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-medium text-foreground">How it works:</span>{" "}
              Browse and discover here on wellfino.com. Secure checkout happens on{" "}
              <a
                href="https://wellfino.printify.me"
                className="font-medium text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
              >
                wellfino.printify.me
              </a>
              .
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WellnessTreePage;
