import coreDailyImg from "@/assets/category-core-daily.jpg";
import digestGutImg from "@/assets/category-digest-gut.jpg";
import calmMoodSleepImg from "@/assets/category-calm-mood-sleep.jpg";
import focusCognitionImg from "@/assets/category-focus-cognition.jpg";
import immunityLongevityImg from "@/assets/category-immunity-longevity.jpg";
import activePerformanceImg from "@/assets/category-active-performance.jpg";
import beautyStructureImg from "@/assets/category-beauty-structure.jpg";
import gummiesImg from "@/assets/category-gummies.jpg";

export interface WellnessCategory {
  id: string;
  label: string;
  tagline: string;
  description: string;
  topPicks: string[];
  shopUrl: string;
  image: string;
}

const categories: WellnessCategory[] = [
  {
    id: "core-daily",
    label: "Core Daily",
    tagline: "Your foundation starts here",
    description:
      "Core daily supplements like multivitamins, omega-3s, and vitamin D form the bedrock of any wellness routine. Think of these as the roots that nourish everything else.",
    topPicks: ["Daily Multivitamin", "Omega-3 Fish Oil", "Vitamin D3 + K2", "Magnesium Complex"],
    shopUrl: "https://wellfino.printify.me",
    image: coreDailyImg,
  },
  {
    id: "digest-gut",
    label: "Digest & Gut",
    tagline: "A healthy gut supports everything",
    description:
      "Probiotics, digestive enzymes, and gut-soothing formulas keep your microbiome thriving and your digestion smooth.",
    topPicks: ["Probiotic 50B CFU", "Digestive Enzyme Blend", "L-Glutamine Powder", "Prebiotic Fiber"],
    shopUrl: "https://wellfino.printify.me",
    image: digestGutImg,
  },
  {
    id: "calm-mood-sleep",
    label: "Calm, Mood & Sleep",
    tagline: "Rest and calm are essentials",
    description:
      "From magnesium glycinate to ashwagandha and melatonin, these picks help you unwind, rebalance, and wake up refreshed.",
    topPicks: ["Ashwagandha KSM-66", "Magnesium Glycinate", "L-Theanine", "Melatonin 3mg"],
    shopUrl: "https://wellfino.printify.me",
    image: calmMoodSleepImg,
  },
  {
    id: "focus-cognition",
    label: "Focus & Cognition",
    tagline: "Sharpen your edge naturally",
    description:
      "Nootropics, adaptogens, and brain-supporting nutrients help you think clearly, stay focused, and perform at your mental best.",
    topPicks: ["Lion's Mane Mushroom", "Alpha-GPC", "Bacopa Monnieri", "Rhodiola Rosea"],
    shopUrl: "https://wellfino.printify.me",
    image: focusCognitionImg,
  },
  {
    id: "immunity-longevity",
    label: "Immunity & Longevity",
    tagline: "Play the long game",
    description:
      "Support your immune system and cellular health with antioxidants, adaptogens, and targeted nutrients designed to help you thrive for decades.",
    topPicks: ["Vitamin C + Zinc", "Elderberry Extract", "NAC (N-Acetyl Cysteine)", "Quercetin"],
    shopUrl: "https://wellfino.printify.me",
    image: immunityLongevityImg,
  },
  {
    id: "active-performance",
    label: "Active & Performance",
    tagline: "Fuel your body the way it deserves",
    description:
      "Performance supplements help you push further, recover faster, and feel stronger whether you're training hard or staying active.",
    topPicks: ["Creatine Monohydrate", "BCAA Complex", "Electrolyte Mix", "Tart Cherry Extract"],
    shopUrl: "https://wellfino.printify.me",
    image: activePerformanceImg,
  },
  {
    id: "beauty-structure",
    label: "Beauty & Structure",
    tagline: "True beauty radiates from within",
    description:
      "Collagen, biotin, and structural support nutrients nourish your skin, hair, nails, and joints—because looking good and feeling good go hand in hand.",
    topPicks: ["Marine Collagen Peptides", "Biotin 10,000mcg", "Hyaluronic Acid", "Silica Complex"],
    shopUrl: "https://wellfino.printify.me",
    image: beautyStructureImg,
  },
  {
    id: "gummies",
    label: "Gummies",
    tagline: "Wellness without the pill fatigue",
    description:
      "Our gummy picks make daily supplementation delicious and easy—perfect for anyone who wants wellness without the fuss.",
    topPicks: ["Multivitamin Gummies", "Elderberry Gummies", "Ashwagandha Gummies", "Collagen Gummies", "Probiotic Gummies"],
    shopUrl: "https://wellfino.printify.me",
    image: gummiesImg,
  },
];

export default categories;
