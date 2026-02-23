import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ShopNowButton from "@/components/ShopNowButton";
import { GuideArticle, loadGuides, setPageMeta } from "@/lib/guides";

const GuideArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [guides, setGuides] = useState<GuideArticle[]>([]);

  useEffect(() => {
    loadGuides().then(setGuides);
  }, []);

  const guide = useMemo(() => guides.find((g) => g.slug === slug), [guides, slug]);

  useEffect(() => {
    if (!guide) return;
    setPageMeta(`${guide.title} | Wellfino Guides`, guide.excerpt);
  }, [guide]);

  const related = useMemo(() => {
    if (!guide) return [];
    return guides
      .filter((g) => g.slug !== guide.slug && g.topicTags.some((tag) => guide.topicTags.includes(tag)))
      .slice(0, 3);
  }, [guide, guides]);

  if (!guide) {
    return (
      <div className="min-h-screen bg-background">
        <Nav />
        <main className="mx-auto max-w-4xl px-6 py-24">
          <h1 className="mb-4 text-3xl font-bold">Guide not found</h1>
          <Link to="/guides" className="text-primary underline underline-offset-2">
            Back to Guides
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="mx-auto max-w-4xl px-6 pt-10">
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Guides
          </Link>
        </section>

        <article className="mx-auto max-w-4xl px-6 py-14">
          <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            {new Date(guide.publishDate).toLocaleDateString()}
          </p>
          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">{guide.title}</h1>
          <p className="mb-8 text-muted-foreground">{guide.excerpt}</p>

          <div className="space-y-4 text-sm leading-relaxed text-foreground/90">
            {guide.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <section className="mt-12 rounded-2xl border border-border/50 bg-card p-6">
            <h2 className="mb-2 text-xl font-semibold">Shop Core Essentials</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Start with a core stack and then review available stack options on the product page.
            </p>
            <div className="flex flex-wrap gap-3">
              <ShopNowButton
                shopUrl="https://shop.wellfino.com/products/multivitamin-for-men-supplement-60-capsules"
                className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
              >
                Men&apos;s Core Essentials Stack
              </ShopNowButton>
              <ShopNowButton
                shopUrl="https://shop.wellfino.com/products/multivitamin-for-women-supplement-60-capsules"
                className="inline-flex items-center rounded-full border border-border/60 px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary/40"
              >
                Women&apos;s Core Essentials Stack
              </ShopNowButton>
            </div>
          </section>

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="mb-4 text-xl font-semibold">Related Guides</h2>
              <div className="grid gap-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to={`/guides/${item.slug}`}
                    className="rounded-xl border border-border/50 bg-card px-4 py-3 text-sm transition-colors hover:border-primary/30"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </section>
          )}
        </article>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default GuideArticlePage;
