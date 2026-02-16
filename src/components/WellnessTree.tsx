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
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "digest-gut",
    label: "Digest & Gut",
    description:
      "A healthy gut is the trunk that supports your entire wellness tree. Probiotics, digestive enzymes, and gut-soothing formulas keep your microbiome thriving and your digestion smooth.",
    topPicks: ["Probiotic 50B CFU", "Digestive Enzyme Blend", "L-Glutamine Powder", "Prebiotic Fiber"],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "calm-mood-sleep",
    label: "Calm, Mood & Sleep",
    description:
      "Rest and calm aren't luxuries—they're essentials. From magnesium glycinate to ashwagandha and melatonin, these picks help you unwind, rebalance, and wake up refreshed.",
    topPicks: ["Ashwagandha KSM-66", "Magnesium Glycinate", "L-Theanine", "Melatonin 3mg"],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "focus-cognition",
    label: "Focus & Cognition",
    description:
      "Sharpen your edge naturally. Nootropics, adaptogens, and brain-supporting nutrients help you think clearly, stay focused, and perform at your mental best every day.",
    topPicks: ["Lion's Mane Mushroom", "Alpha-GPC", "Bacopa Monnieri", "Rhodiola Rosea"],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "immunity-longevity",
    label: "Immunity & Longevity",
    description:
      "Play the long game. Support your immune system and cellular health with antioxidants, adaptogens, and targeted nutrients designed to help you thrive for decades, not just today.",
    topPicks: ["Vitamin C + Zinc", "Elderberry Extract", "NAC (N-Acetyl Cysteine)", "Quercetin"],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "active-performance",
    label: "Active & Performance",
    description:
      "Whether you're training hard or staying active, performance supplements help you push further, recover faster, and feel stronger. Fuel your body the way it deserves.",
    topPicks: ["Creatine Monohydrate", "BCAA Complex", "Electrolyte Mix", "Tart Cherry Extract"],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "beauty-structure",
    label: "Beauty & Structure",
    description:
      "True beauty radiates from within. Collagen, biotin, and structural support nutrients nourish your skin, hair, nails, and joints—because looking good and feeling good go hand in hand.",
    topPicks: ["Marine Collagen Peptides", "Biotin 10,000mcg", "Hyaluronic Acid", "Silica Complex"],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "gummies",
    label: "Gummies",
    description:
      "All the goodness, none of the fuss. Our gummy picks make daily supplementation delicious and easy—perfect for anyone who wants wellness without the pill fatigue.",
    topPicks: ["Multivitamin Gummies", "Elderberry Gummies", "Ashwagandha Gummies", "Collagen Gummies", "Probiotic Gummies"],
    shopUrl: "https://shop.wellfino.com",
  },
];

// Positions mapped to actual tree anatomy (% from top-left)
const hotspots: {
  id: string;
  x: number;
  y: number;
  anchor: "left" | "right";
  lineX: number;
  lineY: number;
}[] = [
  { id: "core-daily",         x: 50, y: 92, anchor: "left",  lineX: 50, lineY: 88 },
  { id: "digest-gut",         x: 50, y: 74, anchor: "right", lineX: 50, lineY: 70 },
  { id: "calm-mood-sleep",    x: 15, y: 55, anchor: "left",  lineX: 32, lineY: 52 },
  { id: "focus-cognition",    x: 85, y: 55, anchor: "right", lineX: 68, lineY: 52 },
  { id: "immunity-longevity", x: 10, y: 36, anchor: "left",  lineX: 28, lineY: 36 },
  { id: "active-performance", x: 90, y: 36, anchor: "right", lineX: 72, lineY: 36 },
  { id: "beauty-structure",   x: 50, y: 18, anchor: "left",  lineX: 50, lineY: 24 },
  { id: "gummies",            x: 50, y: 5,  anchor: "right", lineX: 50, lineY: 12 },
];

const WellnessTree = () => {
  const [selectedCategory, setSelectedCategory] = useState<WellnessCategory | null>(null);
  const [showPopup, setShowPopup] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl text-foreground">
          Build Your Wellness Tree
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Explore the branches of wellness and shop what supports your goals.
        </p>
      </div>

      {/* Tree with integrated organic labels */}
      <div className="relative mx-auto max-w-2xl select-none">
        {/* SVG connector lines */}
        <svg
          className="pointer-events-none absolute inset-0 z-10 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {hotspots.map((spot) => (
            <line
              key={spot.id}
              x1={spot.lineX}
              y1={spot.lineY}
              x2={spot.x}
              y2={spot.y}
              stroke="hsl(30 10% 15% / 0.12)"
              strokeWidth="0.15"
              strokeDasharray="0.6 0.4"
              className="transition-all duration-300"
              style={{
                opacity: hoveredId === spot.id ? 1 : 0.5,
                stroke: hoveredId === spot.id ? "hsl(145 35% 32% / 0.5)" : "hsl(30 10% 15% / 0.12)",
                strokeWidth: hoveredId === spot.id ? "0.25" : "0.15",
              }}
            />
          ))}
        </svg>

        <img
          src={wellnessTreeImg}
          alt="Illustrated wellness tree with clickable branches representing supplement categories"
          className="w-full mix-blend-multiply"
          draggable={false}
        />

        {/* Organic labels that look like tags on the tree */}
        {hotspots.map((spot) => {
          const cat = categories.find((c) => c.id === spot.id)!;
          const isHovered = hoveredId === spot.id;
          return (
            <button
              key={spot.id}
              onClick={() => handleCategoryClick(spot.id)}
              onMouseEnter={() => setHoveredId(spot.id)}
              onMouseLeave={() => setHoveredId(null)}
              aria-label={`Explore ${cat.label} category`}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group"
              style={{
                left: `${spot.x}%`,
                top: `${spot.y}%`,
              }}
            >
              {/* The label itself — styled like a botanical tag */}
              <span
                className={`
                  inline-flex items-center gap-1.5
                  whitespace-nowrap
                  border
                  px-3 py-1.5 sm:px-4 sm:py-2
                  text-[10px] sm:text-xs font-medium tracking-wide uppercase
                  rounded-sm
                  transition-all duration-300
                  ${isHovered
                    ? "bg-primary text-primary-foreground border-primary shadow-lg scale-110"
                    : "bg-card/90 text-foreground/80 border-border/60 shadow-sm backdrop-blur-sm"
                  }
                `}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  className={`inline-block h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                    isHovered ? "bg-primary-foreground" : "bg-primary/60"
                  }`}
                />
                {cat.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* How it works */}
      <div className="mx-auto mt-16 max-w-lg text-center">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-medium text-foreground">How it works:</span>{" "}
          You'll browse and discover here on wellfino.com. Secure checkout happens on{" "}
          <a
            href="https://shop.wellfino.com"
            className="font-medium text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
          >
            shop.wellfino.com
          </a>
          .
        </p>
      </div>

      <CategoryModal category={selectedCategory} onClose={() => setSelectedCategory(null)} />
      <EmailPopup open={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default WellnessTree;
