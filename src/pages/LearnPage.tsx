import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { BookOpen } from "lucide-react";

const articles = [
  {
    title: "The Beginner's Guide to Supplement Stacking",
    excerpt: "Learn how to combine supplements effectively for maximum benefit without waste.",
    category: "Guides",
  },
  {
    title: "Vitamin D: Why Most People Don't Get Enough",
    excerpt: "The sunshine vitamin is critical for immunity, mood, and bone health. Here's what the research says.",
    category: "Research",
  },
  {
    title: "Probiotics vs. Prebiotics: What's the Difference?",
    excerpt: "Understanding the gut ecosystem and how to support it with the right supplements.",
    category: "Gut Health",
  },
  {
    title: "Ashwagandha: Ancient Herb, Modern Science",
    excerpt: "A deep dive into one of the most studied adaptogens for stress and performance.",
    category: "Adaptogens",
  },
  {
    title: "Creatine Beyond the Gym",
    excerpt: "New research shows creatine benefits extend far beyond muscle—including brain health and longevity.",
    category: "Performance",
  },
  {
    title: "How to Read a Supplement Label",
    excerpt: "Proprietary blends, bioavailability, and third-party testing—what to look for and what to avoid.",
    category: "Education",
  },
];

const LearnPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        {/* Header */}
        <section className="border-b border-border/40 bg-muted/30">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">Learn</h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Science-backed articles to help you make smarter supplement choices.
            </p>
          </div>
        </section>

        {/* Articles grid */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group flex flex-col rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <div className="mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-primary" />
                  <span className="text-xs font-medium uppercase tracking-wider text-primary">
                    {article.category}
                  </span>
                </div>
                <h3 className="mb-3 text-lg font-semibold tracking-tight group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{article.excerpt}</p>
                <span className="mt-auto pt-6 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Coming soon →
                </span>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              More articles coming soon. Stay tuned.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default LearnPage;
