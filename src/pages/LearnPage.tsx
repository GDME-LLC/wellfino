import { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { BookOpen, ChevronDown, ChevronUp, ExternalLink, MessageCircle } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  ARTICLES                                                           */
/* ------------------------------------------------------------------ */

interface Article {
  title: string;
  category: string;
  readTime: string;
  intro: string;
  sections: { heading: string; body: string }[];
  shopPicks: { name: string; why: string }[];
}

const articles: Article[] = [
  {
    title: "The Beginner's Guide to Supplement Stacking",
    category: "Guides",
    readTime: "6 min read",
    intro:
      "Taking a handful of random pills isn't a strategy — it's a gamble. Supplement stacking is the practice of combining specific nutrients so they work together, amplifying each other's effects while filling real gaps in your diet.",
    sections: [
      {
        heading: "Start with your foundation",
        body: "Every stack should begin with a quality multivitamin. It covers the dozens of micronutrients most diets miss — B-vitamins, zinc, selenium, and more. Think of it as insurance for your nutrition, not a replacement for real food.",
      },
      {
        heading: "Add targeted support",
        body: "Once your base is covered, layer in supplements that match your goals. Training hard? Add creatine and BCAAs. Stressed and sleeping poorly? Magnesium glycinate and 5-HTP. Digestive issues? Probiotics paired with digestive enzymes. The key is intentional selection — every addition should have a reason.",
      },
      {
        heading: "Watch for synergies",
        body: "Some nutrients work better together. Vitamin D3 paired with K2 ensures calcium goes to your bones instead of your arteries. Turmeric absorbs dramatically better with BioPerine® (black pepper extract). Omega-3s support the absorption of fat-soluble vitamins. These pairings aren't marketing — they're backed by published research.",
      },
      {
        heading: "Timing matters",
        body: "Fat-soluble supplements (D3, K2, Omega-3, CoQ10) absorb best with a meal containing healthy fats. Magnesium and 5-HTP work well taken in the evening. Creatine can be taken any time — consistency matters more than timing. Probiotics are often best on an empty stomach or right before a meal.",
      },
    ],
    shopPicks: [
      { name: "Multivitamin for Men or Women", why: "Your daily foundation" },
      { name: "Vitamin K2 + D3", why: "The essential bone-health pairing" },
      { name: "Omega 3 Fish Oil", why: "Supports heart, brain, and absorption of fat-soluble vitamins" },
    ],
  },
  {
    title: "Vitamin D: Why Most People Don't Get Enough",
    category: "Research",
    readTime: "5 min read",
    intro:
      "Vitamin D deficiency affects an estimated 42% of US adults. If you work indoors, live above the 37th parallel, or wear sunscreen regularly, you're likely not producing enough on your own — regardless of how healthy your diet is.",
    sections: [
      {
        heading: "More than a vitamin",
        body: "Vitamin D functions more like a hormone than a traditional vitamin. It influences over 1,000 genes and plays a role in immune function, mood regulation, bone density, and muscle performance. Low levels are consistently linked to higher rates of depression, fatigue, frequent illness, and even cardiovascular risk.",
      },
      {
        heading: "Why diet alone falls short",
        body: "Very few foods contain meaningful amounts of vitamin D. Fatty fish, egg yolks, and fortified milk provide small doses, but most people would need to eat unrealistic quantities to hit the recommended 600-2,000 IU daily. Supplementation is the most reliable and cost-effective strategy.",
      },
      {
        heading: "The K2 connection",
        body: "Vitamin D increases calcium absorption — which is a good thing, unless that calcium ends up in your arteries instead of your bones. Vitamin K2 directs calcium to the right places. Taking D3 and K2 together is considered best practice by most integrative health practitioners. Our Vitamin K2 + D3 capsule combines both in one.",
      },
    ],
    shopPicks: [
      { name: "Vitamin K2 + D3", why: "Optimized pairing for absorption and bone health" },
      { name: "Multivitamin for Men or Women", why: "Includes baseline vitamin D plus 20+ other essentials" },
    ],
  },
  {
    title: "Probiotics vs. Prebiotics: What's the Difference?",
    category: "Gut Health",
    readTime: "4 min read",
    intro:
      "Your gut houses roughly 70% of your immune system and produces key neurotransmitters like serotonin. Keeping that ecosystem healthy requires both probiotics (beneficial bacteria) and prebiotics (the food those bacteria need to thrive).",
    sections: [
      {
        heading: "Probiotics: the reinforcements",
        body: "Probiotic supplements deliver live strains of beneficial bacteria — like Lactobacillus and Bifidobacterium — directly to your gut. They help crowd out harmful bacteria, support digestion, reduce bloating, and may even improve mood. Look for formulations with multiple strains and a meaningful CFU count (colony forming units).",
      },
      {
        heading: "Prebiotics: the fuel",
        body: "Prebiotics are types of fiber that humans can't digest but gut bacteria thrive on. Foods like garlic, onions, bananas, and asparagus are natural sources. When probiotics have adequate prebiotic fuel, they colonize more effectively and produce short-chain fatty acids that nourish your gut lining.",
      },
      {
        heading: "Pairing with digestive enzymes",
        body: "If you experience bloating, gas, or heaviness after meals, the issue might not be your gut bacteria at all — it could be incomplete digestion. Digestive enzymes break down proteins, fats, and carbs before they reach the large intestine, reducing fermentation and discomfort. Pairing a probiotic with a digestive enzyme supplement covers both sides of the equation.",
      },
    ],
    shopPicks: [
      { name: "Probiotics", why: "Multi-strain formula for microbiome balance" },
      { name: "Digestive Enzyme Blend", why: "Reduce bloating and improve nutrient absorption" },
    ],
  },
  {
    title: "Creatine Beyond the Gym",
    category: "Performance",
    readTime: "5 min read",
    intro:
      "Creatine is one of the most studied supplements in history, with over 500 peer-reviewed papers supporting its safety and efficacy. But if you think it's only for bodybuilders, you're missing the bigger picture.",
    sections: [
      {
        heading: "How creatine actually works",
        body: "Creatine helps your cells regenerate ATP — the molecule that powers every muscular contraction, every heartbeat, and every thought. By increasing your body's phosphocreatine stores, creatine allows you to perform better during short, intense efforts and recover faster between them.",
      },
      {
        heading: "Brain benefits",
        body: "Your brain consumes about 20% of your body's energy. Emerging research shows that creatine supplementation can improve short-term memory, reduce mental fatigue, and may be particularly beneficial during sleep deprivation or high cognitive load. Some researchers are studying its potential role in neuroprotection.",
      },
      {
        heading: "Who should take it",
        body: "Almost everyone can benefit from creatine monohydrate. Athletes, weekend warriors, vegetarians (who get very little from diet), aging adults looking to preserve muscle mass, and anyone wanting cognitive support. The standard dose is 3-5 grams daily. No loading phase required — just consistency.",
      },
      {
        heading: "Pair it for performance",
        body: "If you're training regularly, stacking creatine with BCAAs supports both power output and recovery. Add an electrolyte supplement during workouts to maintain hydration and performance. This combination covers the three pillars of athletic performance: energy, recovery, and hydration.",
      },
    ],
    shopPicks: [
      { name: "Creatine Monohydrate (300g)", why: "Pure monohydrate — the gold standard form" },
      { name: "BCAA Grape or Watermelon", why: "Recovery support in two great flavors" },
      { name: "ION + Select Electrolyte", why: "Complete electrolyte replenishment" },
    ],
  },
  {
    title: "Collagen: What It Does and Who Needs It",
    category: "Beauty & Structure",
    readTime: "4 min read",
    intro:
      "Collagen is the most abundant protein in your body — it's the scaffolding that holds your skin, joints, bones, and connective tissue together. After age 25, your body's natural production starts declining by roughly 1% per year.",
    sections: [
      {
        heading: "Types I & III",
        body: "Type I collagen makes up 90% of your body's collagen and is the primary component of skin, tendons, and bones. Type III supports the structure of organs, arteries, and muscles. Supplementing with both types provides the broadest structural support. Our Collagen Peptides powder delivers both in a hydrolyzed (pre-broken-down) form for maximum absorption.",
      },
      {
        heading: "Visible results take time",
        body: "Most clinical studies show noticeable improvements in skin elasticity and hydration after 8-12 weeks of daily use. Joint comfort improvements may take slightly longer. Consistency is far more important than dose — 10-15 grams daily is the range most research supports.",
      },
      {
        heading: "How to use it",
        body: "Collagen peptides dissolve easily in hot or cold liquids. Add them to your morning coffee, a smoothie, oatmeal, or even plain water. They're virtually tasteless and odorless. Pair with vitamin C (from food or supplement) to support your body's own collagen synthesis.",
      },
    ],
    shopPicks: [
      { name: "Collagen Peptides Type I & III (350g)", why: "Hydrolyzed for easy absorption, versatile for any drink" },
    ],
  },
  {
    title: "How to Read a Supplement Label",
    category: "Education",
    readTime: "5 min read",
    intro:
      "Not all supplement labels are created equal. Understanding what to look for — and what to avoid — can save you money and protect your health. Here's what actually matters.",
    sections: [
      {
        heading: "Serving size vs. bottle count",
        body: "A bottle that says '60 capsules' might be a 30-day supply if the serving size is 2 capsules. Always check the serving size first. Compare cost per serving, not cost per bottle, when evaluating value.",
      },
      {
        heading: "Active ingredient forms",
        body: "The form of an ingredient matters enormously. Magnesium oxide is cheap but poorly absorbed; magnesium glycinate is significantly more bioavailable. Vitamin D2 is less effective than D3. CoQ10 as ubiquinone and ubiquinol have different absorption profiles. At Wellfino, we select manufacturers that use clinically studied, bioavailable forms.",
      },
      {
        heading: "Proprietary blends: a red flag",
        body: "A 'proprietary blend' lists ingredients without individual dosages. This makes it impossible to know if you're getting an effective dose of any single ingredient. Transparent labeling — where every ingredient shows its exact amount — is the standard you should expect.",
      },
      {
        heading: "Third-party testing",
        body: "Look for supplements tested by independent labs for purity, potency, and contaminants. Certifications like NSF, USP, or third-party COAs (certificates of analysis) indicate a manufacturer that takes quality seriously. We review testing standards for every product in our catalog.",
      },
    ],
    shopPicks: [
      { name: "Turmeric with BioPerine®", why: "Example of a clinically enhanced formulation" },
      { name: "Magnesium Glycinate", why: "Premium bioavailable form, not cheap oxide" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

const faqs = [
  {
    q: "What supplements should I start with if I'm completely new?",
    a: "A quality multivitamin and omega-3 fish oil cover the broadest range of nutritional gaps. From there, you can add targeted support based on your specific goals — sleep, energy, digestion, etc.",
  },
  {
    q: "Can I take multiple supplements at the same time?",
    a: "Yes, most supplements can be taken together. Some pairings are actually recommended — like Vitamin D3 with K2, or probiotics with digestive enzymes. Fat-soluble supplements absorb best with food.",
  },
  {
    q: "How long before I notice results?",
    a: "It depends on the supplement. Creatine and magnesium can show effects within days. Collagen, probiotics, and multivitamins typically take 4-12 weeks of consistent daily use for noticeable changes.",
  },
  {
    q: "Are your supplements third-party tested?",
    a: "We review the testing and quality standards of every manufacturer in our product catalog. We prioritize manufacturers that use clinically studied ingredients and transparent labeling.",
  },
  {
    q: "How does shipping work?",
    a: "Orders are fulfilled through our fulfillment network. Production typically takes 2-5 business days, with standard US shipping of 5-10 business days after that. You'll receive a tracking number by email.",
  },
];

/* ------------------------------------------------------------------ */
/*  COMPONENTS                                                         */
/* ------------------------------------------------------------------ */

const ArticleCard = ({ article, onOpen }: { article: Article; onOpen: () => void }) => (
  <article
    onClick={onOpen}
    className="group flex cursor-pointer flex-col rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
  >
    <div className="mb-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <BookOpen className="h-4 w-4 text-primary" />
        <span className="text-xs font-medium uppercase tracking-wider text-primary">
          {article.category}
        </span>
      </div>
      <span className="text-xs text-muted-foreground">{article.readTime}</span>
    </div>
    <h3 className="mb-3 text-lg font-semibold tracking-tight transition-colors group-hover:text-primary">
      {article.title}
    </h3>
    <p className="text-sm leading-relaxed text-muted-foreground">{article.intro.slice(0, 140)}…</p>
    <span className="mt-auto pt-6 text-sm font-medium text-primary">Read article →</span>
  </article>
);

const ArticleDetail = ({ article, onBack }: { article: Article; onBack: () => void }) => (
  <div className="mx-auto max-w-3xl">
    <button
      onClick={onBack}
      className="mb-8 text-sm font-medium text-primary transition-colors hover:text-primary/80"
    >
      ← Back to all articles
    </button>

    <div className="mb-4 flex items-center gap-3">
      <span className="text-xs font-medium uppercase tracking-wider text-primary">
        {article.category}
      </span>
      <span className="text-xs text-muted-foreground">•</span>
      <span className="text-xs text-muted-foreground">{article.readTime}</span>
    </div>

    <h1 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">{article.title}</h1>
    <p className="mb-10 text-lg leading-relaxed text-muted-foreground">{article.intro}</p>

    {article.sections.map((section, i) => (
      <div key={i} className="mb-8">
        <h2 className="mb-3 text-xl font-semibold">{section.heading}</h2>
        <p className="leading-relaxed text-muted-foreground">{section.body}</p>
      </div>
    ))}

    {/* Product tie-ins */}
    <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8">
      <h3 className="mb-4 text-lg font-semibold">Wellfino picks for this topic</h3>
      <ul className="space-y-3">
        {article.shopPicks.map((pick, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <div>
              <a
                href="https://shop.wellfino.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground transition-colors hover:text-primary"
              >
                {pick.name}
                <ExternalLink className="ml-1 inline h-3 w-3" />
              </a>
              <span className="ml-2 text-sm text-muted-foreground">— {pick.why}</span>
            </div>
          </li>
        ))}
      </ul>
      <a
        href="https://shop.wellfino.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:shadow-md hover:brightness-110"
      >
        Browse all products
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </div>
  </div>
);

const FaqItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 font-medium">{q}</span>
        {open ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground" />
        )}
      </button>
      {open && (
        <p className="pb-5 leading-relaxed text-muted-foreground">{a}</p>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */

const LearnPage = () => {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

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

        {/* Articles */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          {activeArticle ? (
            <ArticleDetail
              article={activeArticle}
              onBack={() => {
                setActiveArticle(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            />
          ) : (
            <>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {articles.map((article) => (
                  <ArticleCard
                    key={article.title}
                    article={article}
                    onOpen={() => {
                      setActiveArticle(article);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                  />
                ))}
              </div>

              {/* FAQ Section */}
              <div className="mx-auto mt-24 max-w-3xl">
                <h2 className="mb-2 text-center text-3xl font-bold tracking-tight">
                  Frequently Asked Questions
                </h2>
                <p className="mb-10 text-center text-muted-foreground">
                  Quick answers to the most common questions. For anything else, ask our{" "}
                  <span className="inline-flex items-center gap-1 font-medium text-primary">
                    <MessageCircle className="h-4 w-4" />
                    chat advisor
                  </span>.
                </p>

                <div className="rounded-2xl border border-border/50 bg-card px-8">
                  {faqs.map((faq, i) => (
                    <FaqItem key={i} q={faq.q} a={faq.a} />
                  ))}
                </div>
              </div>
            </>
          )}
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default LearnPage;
