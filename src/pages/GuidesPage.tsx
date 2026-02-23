import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { GuideArticle, loadGuides, setPageMeta } from "@/lib/guides";

const GuidesPage = () => {
  const [guides, setGuides] = useState<GuideArticle[]>([]);
  const [activeTag, setActiveTag] = useState<string>("All");

  useEffect(() => {
    setPageMeta("Wellfino Guides", "Science-backed guides on stacks, wellness routines, and supplement quality.");
    loadGuides().then(setGuides);
  }, []);

  const tags = useMemo(() => {
    const values = new Set<string>(["All"]);
    guides.forEach((g) => g.topicTags.forEach((tag) => values.add(tag)));
    return Array.from(values);
  }, [guides]);

  const visible = useMemo(() => {
    if (activeTag === "All") return guides;
    return guides.filter((g) => g.topicTags.includes(activeTag));
  }, [activeTag, guides]);

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="mx-auto max-w-6xl px-6 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-8">
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Guides</h1>
            <p className="max-w-3xl text-muted-foreground">
              Practical education on foundational routines, stack planning, and quality standards.
            </p>
          </div>

          <div className="mb-8 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? "border-primary/50 bg-primary/10 text-primary"
                    : "border-border/60 text-muted-foreground hover:border-primary/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid gap-4">
            {visible.map((guide) => (
              <article key={guide.slug} className="rounded-2xl border border-border/50 bg-card p-6">
                <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {new Date(guide.publishDate).toLocaleDateString()}
                </p>
                <h2 className="mb-2 text-xl font-semibold tracking-tight">
                  <Link to={`/guides/${guide.slug}`} className="transition-colors hover:text-primary">
                    {guide.title}
                  </Link>
                </h2>
                <p className="mb-4 text-sm text-muted-foreground">{guide.excerpt}</p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {guide.topicTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-border/50 px-2.5 py-1 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link to={`/guides/${guide.slug}`} className="text-sm font-medium text-primary underline-offset-4 hover:underline">
                  Read Guide
                </Link>
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

export default GuidesPage;
