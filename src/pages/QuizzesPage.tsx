import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import ShopNowButton from "@/components/ShopNowButton";
import { stackAddOns, stacks } from "@/content/stacks";

type Question = {
  id: string;
  prompt: string;
  options: string[];
};

const STORAGE_KEY = "wellfino_quiz_answers_v1";

const questions: Question[] = [
  { id: "gender", prompt: "Who are you shopping for?", options: ["Men", "Women"] },
  { id: "goal", prompt: "Primary goal right now?", options: ["Energy", "Daily foundation", "Recovery", "Sleep"] },
  { id: "routine", prompt: "How consistent is your supplement routine?", options: ["Very consistent", "Somewhat", "Just starting"] },
  { id: "diet", prompt: "How would you describe your diet?", options: ["Balanced", "Improving", "Inconsistent"] },
  { id: "stress", prompt: "Current stress level?", options: ["Low", "Moderate", "High"] },
  { id: "training", prompt: "How active are you weekly?", options: ["Highly active", "Moderately active", "Lightly active"] },
];

const QuizzesPage = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as Record<string, string>) : {};
    } catch {
      return {};
    }
  });

  const complete = step >= questions.length;
  const current = questions[step];

  const recommended = useMemo(() => {
    const gender = answers.gender?.toLowerCase();
    if (gender === "men") {
      return stacks.find((s) => s.id === "mens-core-essentials-stack");
    }
    if (gender === "women") {
      return stacks.find((s) => s.id === "womens-core-essentials-stack");
    }
    return stacks[0];
  }, [answers]);

  const handleAnswer = (value: string) => {
    if (!current) return;
    const next = { ...answers, [current.id]: value };
    setAnswers(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    setStep((s) => s + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <section className="mx-auto max-w-4xl px-6 pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </section>

        <section className="mx-auto max-w-4xl px-6 py-16">
          <div className="mb-10 text-center">
            <h1 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Find Your Essentials</h1>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Answer a few quick questions and we&apos;ll recommend the best starting stack.
            </p>
          </div>

          {!complete && current && (
            <div className="rounded-2xl border border-border/50 bg-card p-6">
              <p className="mb-6 text-sm text-muted-foreground">
                Question {step + 1} of {questions.length}
              </p>
              <h2 className="mb-6 text-xl font-semibold">{current.prompt}</h2>
              <div className="grid gap-3">
                {current.options.map((option) => (
                  <button
                    key={option}
                    onClick={() => handleAnswer(option)}
                    className="rounded-xl border border-border/60 px-4 py-3 text-left text-sm transition-all hover:border-primary/40 hover:bg-muted/30"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}

          {complete && recommended && (
            <div className="space-y-6">
              <article className="rounded-2xl border border-border/50 bg-card p-6">
                <h2 className="mb-2 text-2xl font-semibold">Recommended Stack</h2>
                <p className="mb-5 text-sm text-muted-foreground">
                  Based on your answers, start with this core foundation and select available stack options on the
                  product page.
                </p>
                <div className="grid gap-6 sm:grid-cols-[180px_1fr] sm:items-center">
                  <img src={recommended.image} alt={recommended.title} className="h-40 w-full object-contain" />
                  <div>
                    <h3 className="mb-1 text-xl font-semibold">{recommended.title}</h3>
                    <p className="mb-4 text-sm text-muted-foreground">{recommended.shortDescription}</p>
                    <div className="flex flex-wrap gap-3">
                      <ShopNowButton
                        shopUrl={recommended.shopUrl}
                        className="inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
                      >
                        Shop Now
                      </ShopNowButton>
                      <a
                        href={recommended.shopUrl}
                        data-shop-url={recommended.shopUrl}
                        className="inline-flex items-center rounded-full border border-border/60 px-6 py-2.5 text-sm font-medium transition-colors hover:border-primary/40"
                      >
                        View Stack
                      </a>
                    </div>
                  </div>
                </div>
              </article>

              <article className="rounded-2xl border border-border/50 bg-card p-6">
                <h3 className="mb-3 text-lg font-semibold">Optional Add-Ons</h3>
                <div className="grid gap-3 sm:grid-cols-2">
                  {(stackAddOns[recommended.id] || []).map((addon) => (
                    <a
                      key={addon.label}
                      href={addon.shopUrl}
                      data-shop-url={addon.shopUrl}
                      className="rounded-xl border border-border/50 px-4 py-3 text-sm transition-colors hover:border-primary/40"
                    >
                      {addon.label}
                    </a>
                  ))}
                </div>
              </article>
            </div>
          )}
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default QuizzesPage;
