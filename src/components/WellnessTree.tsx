import { useState } from "react";
import CategoryModal from "./CategoryModal";
import EmailPopup from "./EmailPopup";
import wellnessTreeImg from "@/assets/wellness-tree.png";

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

// Hotspot positions mapped to the tree image (% from top-left)
const hotspots: { id: string; x: number; y: number; part: "root" | "trunk" | "branch-left" | "branch-right" | "canopy" | "crown" }[] = [
  { id: "core-daily",        x: 50, y: 90, part: "root" },
  { id: "digest-gut",        x: 50, y: 68, part: "trunk" },
  { id: "calm-mood-sleep",   x: 22, y: 55, part: "branch-left" },
  { id: "focus-cognition",   x: 78, y: 55, part: "branch-right" },
  { id: "immunity-longevity",x: 18, y: 38, part: "branch-left" },
  { id: "active-performance",x: 82, y: 38, part: "branch-right" },
  { id: "beauty-structure",  x: 50, y: 22, part: "canopy" },
  { id: "gummies",           x: 50, y: 8,  part: "crown" },
];

const hotspotStyles: Record<string, string> = {
  "root":         "bg-amber-800/80 hover:bg-amber-800/95 text-amber-50",
  "trunk":        "bg-amber-700/80 hover:bg-amber-700/95 text-amber-50",
  "branch-left":  "bg-green-700/80 hover:bg-green-700/95 text-green-50",
  "branch-right": "bg-green-700/80 hover:bg-green-700/95 text-green-50",
  "canopy":       "bg-green-600/80 hover:bg-green-600/95 text-green-50",
  "crown":        "bg-amber-500/85 hover:bg-amber-500 text-amber-950",
};

const WellnessTree = () => {
  const [selectedCategory, setSelectedCategory] = useState<WellnessCategory | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  const handleCategoryClick = (catId: string) => {
    const cat = categories.find((c) => c.id === catId);
    if (cat) {
      setSelectedCategory(cat);
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

      {/* Tree with hotspot overlays */}
      <div className="relative mx-auto max-w-lg select-none">
        <img
          src={wellnessTreeImg}
          alt="Illustrated wellness tree with clickable branches"
          className="w-full"
          draggable={false}
        />

        {/* Clickable hotspots */}
        {hotspots.map((spot) => {
          const cat = categories.find((c) => c.id === spot.id)!;
          return (
            <button
              key={spot.id}
              onClick={() => handleCategoryClick(spot.id)}
              aria-label={`Explore ${cat.label} category`}
              className={`absolute -translate-x-1/2 -translate-y-1/2 rounded-full px-3 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 hover:shadow-xl sm:px-4 sm:py-2 sm:text-sm ${hotspotStyles[spot.part]}`}
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
              }}
            >
              {cat.label}
            </button>
          );
        })}
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

      <CategoryModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
      <EmailPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default WellnessTree;
