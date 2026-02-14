import { useState } from "react";
import CategoryModal from "./CategoryModal";
import EmailPopup from "./EmailPopup";

export interface WellnessCategory {
  id: string;
  label: string;
  description: string;
  topPicks: string[];
  /** TODO: Replace with actual category URL on shop.wellfino.com */
  shopUrl: string;
}

const categories: WellnessCategory[] = [
  {
    id: "core-daily",
    label: "Core Daily",
    description:
      "Your foundation starts here. Core daily supplements like multivitamins, omega-3s, and vitamin D form the bedrock of any wellness routine. Think of these as the roots that nourish everything else.",
    topPicks: ["Daily Multivitamin", "Omega-3 Fish Oil", "Vitamin D3 + K2", "Magnesium Complex"],
    shopUrl: "https://shop.wellfino.com", // TODO: insert category-specific URL
  },
  {
    id: "digest-gut",
    label: "Digest & Gut",
    description:
      "A healthy gut is the trunk that supports your entire wellness tree. Probiotics, digestive enzymes, and gut-soothing formulas keep your microbiome thriving and your digestion smooth.",
    topPicks: ["Probiotic 50B CFU", "Digestive Enzyme Blend", "L-Glutamine Powder", "Prebiotic Fiber"],
    shopUrl: "https://shop.wellfino.com", // TODO: insert category-specific URL
  },
  {
    id: "calm-mood-sleep",
    label: "Calm, Mood & Sleep",
    description:
      "Rest and calm aren't luxuries—they're essentials. From magnesium glycinate to ashwagandha and melatonin, these picks help you unwind, rebalance, and wake up refreshed.",
    topPicks: ["Ashwagandha KSM-66", "Magnesium Glycinate", "L-Theanine", "Melatonin 3mg"],
    shopUrl: "https://shop.wellfino.com", // TODO: insert category-specific URL
  },
  {
    id: "focus-cognition",
    label: "Focus & Cognition",
    description:
      "Sharpen your edge naturally. Nootropics, adaptogens, and brain-supporting nutrients help you think clearly, stay focused, and perform at your mental best every day.",
    topPicks: ["Lion's Mane Mushroom", "Alpha-GPC", "Bacopa Monnieri", "Rhodiola Rosea"],
    shopUrl: "https://shop.wellfino.com", // TODO: insert category-specific URL
  },
  {
    id: "immunity-longevity",
    label: "Immunity & Longevity",
    description:
      "Play the long game. Support your immune system and cellular health with antioxidants, adaptogens, and targeted nutrients designed to help you thrive for decades, not just today.",
    topPicks: ["Vitamin C + Zinc", "Elderberry Extract", "NAC (N-Acetyl Cysteine)", "Quercetin"],
    shopUrl: "https://shop.wellfino.com", // TODO: insert category-specific URL
  },
  {
    id: "active-performance",
    label: "Active & Performance",
    description:
      "Whether you're training hard or staying active, performance supplements help you push further, recover faster, and feel stronger. Fuel your body the way it deserves.",
    topPicks: ["Creatine Monohydrate", "BCAA Complex", "Electrolyte Mix", "Tart Cherry Extract"],
    shopUrl: "https://shop.wellfino.com", // TODO: insert category-specific URL
  },
  {
    id: "beauty-structure",
    label: "Beauty & Structure",
    description:
      "True beauty radiates from within. Collagen, biotin, and structural support nutrients nourish your skin, hair, nails, and joints—because looking good and feeling good go hand in hand.",
    topPicks: ["Marine Collagen Peptides", "Biotin 10,000mcg", "Hyaluronic Acid", "Silica Complex"],
    shopUrl: "https://shop.wellfino.com", // TODO: insert category-specific URL
  },
  {
    id: "gummies",
    label: "Gummies",
    description:
      "All the goodness, none of the fuss. Our gummy picks make daily supplementation delicious and easy—perfect for anyone who wants wellness without the pill fatigue.",
    topPicks: ["Multivitamin Gummies", "Elderberry Gummies", "Ashwagandha Gummies", "Collagen Gummies", "Probiotic Gummies"],
    shopUrl: "https://shop.wellfino.com", // TODO: insert category-specific URL
  },
];

// Tree layout positions (percentage-based for responsiveness)
const treeLayout: { id: string; cx: number; cy: number; part: "root" | "trunk" | "branch" | "leaf" }[] = [
  { id: "core-daily", cx: 50, cy: 88, part: "root" },
  { id: "digest-gut", cx: 50, cy: 68, part: "trunk" },
  { id: "calm-mood-sleep", cx: 24, cy: 48, part: "branch" },
  { id: "focus-cognition", cx: 76, cy: 48, part: "branch" },
  { id: "immunity-longevity", cx: 18, cy: 28, part: "branch" },
  { id: "active-performance", cx: 82, cy: 28, part: "branch" },
  { id: "beauty-structure", cx: 50, cy: 18, part: "branch" },
  { id: "gummies", cx: 50, cy: 6, part: "leaf" },
];

const partColors: Record<string, { fill: string; stroke: string; text: string }> = {
  root: { fill: "hsl(30, 25%, 35%)", stroke: "hsl(30, 20%, 28%)", text: "hsl(40, 33%, 97%)" },
  trunk: { fill: "hsl(30, 20%, 42%)", stroke: "hsl(30, 15%, 35%)", text: "hsl(40, 33%, 97%)" },
  branch: { fill: "hsl(145, 35%, 38%)", stroke: "hsl(145, 30%, 28%)", text: "hsl(40, 33%, 97%)" },
  leaf: { fill: "hsl(28, 60%, 50%)", stroke: "hsl(28, 50%, 40%)", text: "hsl(40, 33%, 97%)" },
};

const WellnessTree = () => {
  const [selectedCategory, setSelectedCategory] = useState<WellnessCategory | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleCategoryClick = (catId: string) => {
    const cat = categories.find((c) => c.id === catId);
    if (cat) {
      setSelectedCategory(cat);
      // Show email popup on first category click (once per browser)
      const newCount = clickCount + 1;
      setClickCount(newCount);
      if (newCount === 1 && !localStorage.getItem("wellfino_popup_shown")) {
        setTimeout(() => {
          setShowPopup(true);
          localStorage.setItem("wellfino_popup_shown", "true");
        }, 600);
      }
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
          Build Your Wellness Tree
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Explore the branches of wellness and shop what supports your goals.
        </p>
      </div>

      {/* SVG Tree */}
      <div className="mx-auto max-w-2xl">
        <svg
          viewBox="0 0 100 100"
          className="w-full"
          role="img"
          aria-label="Interactive wellness tree with clickable categories"
        >
          {/* Tree trunk line */}
          <line x1="50" y1="85" x2="50" y2="22" stroke="hsl(30, 20%, 60%)" strokeWidth="1.2" strokeLinecap="round" />
          {/* Branch lines */}
          <line x1="50" y1="55" x2="26" y2="48" stroke="hsl(145, 25%, 55%)" strokeWidth="0.6" />
          <line x1="50" y1="55" x2="74" y2="48" stroke="hsl(145, 25%, 55%)" strokeWidth="0.6" />
          <line x1="35" y1="40" x2="20" y2="28" stroke="hsl(145, 25%, 55%)" strokeWidth="0.6" />
          <line x1="65" y1="40" x2="80" y2="28" stroke="hsl(145, 25%, 55%)" strokeWidth="0.6" />
          <line x1="50" y1="22" x2="50" y2="10" stroke="hsl(145, 25%, 55%)" strokeWidth="0.6" />

          {/* Root lines */}
          <line x1="50" y1="85" x2="42" y2="95" stroke="hsl(30, 20%, 55%)" strokeWidth="0.5" />
          <line x1="50" y1="85" x2="50" y2="96" stroke="hsl(30, 20%, 55%)" strokeWidth="0.5" />
          <line x1="50" y1="85" x2="58" y2="95" stroke="hsl(30, 20%, 55%)" strokeWidth="0.5" />

          {/* Category nodes */}
          {treeLayout.map((node) => {
            const colors = partColors[node.part];
            const cat = categories.find((c) => c.id === node.id)!;
            const isGummy = node.part === "leaf";
            const rx = isGummy ? 9 : 12;
            const ry = isGummy ? 4.5 : 5;

            return (
              <g
                key={node.id}
                onClick={() => handleCategoryClick(node.id)}
                className="cursor-pointer"
                role="button"
                tabIndex={0}
                aria-label={`Explore ${cat.label} category`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleCategoryClick(node.id);
                  }
                }}
              >
                <ellipse
                  cx={node.cx}
                  cy={node.cy}
                  rx={rx}
                  ry={ry}
                  fill={colors.fill}
                  stroke={colors.stroke}
                  strokeWidth="0.4"
                  className="transition-all duration-200 hover:brightness-110"
                  style={{ filter: "drop-shadow(0 0.5px 1px rgba(0,0,0,0.15))" }}
                />
                <text
                  x={node.cx}
                  y={node.cy + 0.5}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill={colors.text}
                  fontSize="2.3"
                  fontFamily="'DM Sans', sans-serif"
                  fontWeight="500"
                  className="pointer-events-none select-none"
                >
                  {cat.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* How it works */}
      <div className="mx-auto mt-12 max-w-lg rounded-2xl border border-border/50 bg-card p-6 text-center shadow-sm">
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">How it works:</span>{" "}
          You'll browse and discover here on wellfino.com. Secure checkout happens on{" "}
          <a href="https://shop.wellfino.com" className="font-medium text-primary underline underline-offset-2 hover:text-primary/80">
            shop.wellfino.com
          </a>.
        </p>
      </div>

      {/* Category Modal */}
      <CategoryModal
        category={selectedCategory}
        onClose={() => setSelectedCategory(null)}
      />

      {/* Email Popup (first click only) */}
      <EmailPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default WellnessTree;
