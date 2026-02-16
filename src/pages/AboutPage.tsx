import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { FlaskConical, ShieldCheck, Leaf, Users } from "lucide-react";

const values = [
  {
    icon: FlaskConical,
    title: "Research-Driven",
    text: "Every supplement we recommend is backed by peer-reviewed clinical research. We don't chase trends—we follow the evidence.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Quality",
    text: "We only curate brands that prioritize third-party testing, clean labeling, and transparent sourcing.",
  },
  {
    icon: Leaf,
    title: "Clean & Simple",
    text: "No unnecessary fillers, proprietary blends, or artificial ingredients. Just what your body needs.",
  },
  {
    icon: Users,
    title: "Built for You",
    text: "We organize supplements by health goal so you can build a routine that actually fits your life—not someone else's.",
  },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Header */}
        <section className="border-b border-border/40 bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              About Wellfino
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              We believe wellness should be simple, trustworthy, and rooted in science—not
              marketing hype.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">Our Mission</h2>
          <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
            Wellfino was created to cut through the noise in the supplement industry.
            With thousands of products making bold claims, it's hard to know what actually
            works. We do the research so you don't have to.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our Wellness Tree organizes supplements by health goal—making it easy to
            understand what you need, why it matters, and where to find it. Every product
            we recommend meets our strict criteria for quality, efficacy, and transparency.
          </p>
        </section>

        {/* Values */}
        <section className="bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">What we stand for</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.title} className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <v.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">{v.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="mx-auto max-w-3xl px-6 py-20 text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight">How it works</h2>
          <p className="mb-4 text-muted-foreground">
            You browse and discover here on <strong className="text-foreground">wellfino.com</strong>.
          </p>
          <p className="text-muted-foreground">
            When you're ready to purchase, secure checkout happens on{" "}
            <a
              href="https://shop.wellfino.com"
              className="font-medium text-primary underline underline-offset-2 hover:text-primary/80"
            >
              shop.wellfino.com
            </a>
            .
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
