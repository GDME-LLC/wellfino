import { Link } from "react-router-dom";
import { ArrowLeft, ShieldCheck } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const claims = [
  {
    title: "Packaged in the USA",
    detail: "Products are packaged to maintain consistency, traceability, and quality standards.",
  },
  {
    title: "Manufactured in FDA-Registered Facilities",
    detail: "Manufacturing partners operate in facilities registered with the FDA for supplement production.",
  },
  {
    title: "GMP-Certified Production",
    detail: "Processes follow Good Manufacturing Practices for batch consistency and process control.",
  },
  {
    title: "Third-Party Tested for Quality",
    detail: "Independent testing supports label accuracy and purity expectations before products ship.",
  },
];

const QualityPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="mx-auto max-w-5xl px-6 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16">
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Quality Standards</h1>
            <p className="mx-auto max-w-3xl text-muted-foreground">
              Wellfino focuses on straightforward quality standards and transparent communication so customers can shop
              with confidence.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {claims.map((claim) => (
              <article key={claim.title} className="rounded-2xl border border-border/50 bg-card p-5">
                <div className="mb-2 flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <h2 className="text-sm font-semibold">{claim.title}</h2>
                </div>
                <p className="text-sm text-muted-foreground">{claim.detail}</p>
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

export default QualityPage;
