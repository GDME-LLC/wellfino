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
    topPicks: ["Multivitamin for Men (60 Capsules)", "Multivitamin for Women (60 Capsules)", "Omega 3 Fish Oil (60 Softgels)", "Vitamin K2 + D3 (60 Capsules)"],
    shopUrl: "https://shop.wellfino.com",
    image: coreDailyImg,
  },
  {
    id: "digest-gut",
    label: "Digest & Gut",
    tagline: "A healthy gut supports everything",
    description:
      "Probiotics, digestive enzymes, and gut-soothing formulas keep your microbiome thriving and your digestion smooth.",
    topPicks: ["Probiotics (60 Capsules)", "Digestive Enzyme Blend (60 Capsules)"],
    shopUrl: "https://shop.wellfino.com",
    image: digestGutImg,
  },
  {
    id: "calm-mood-sleep",
    label: "Calm, Mood & Sleep",
    tagline: "Rest and calm are essentials",
    description:
      "From magnesium glycinate to 5-HTP and our dedicated sleep formula, these picks help you unwind, rebalance, and wake up refreshed.",
    topPicks: ["5-HTP (60 Capsules)", "Sleep Supplement (60 Capsules)", "Magnesium Glycinate (60 Capsules)"],
    shopUrl: "https://shop.wellfino.com",
    image: calmMoodSleepImg,
  },
  {
    id: "focus-cognition",
    label: "Focus & Cognition",
    tagline: "Sharpen your edge naturally",
    description:
      "Nootropics, adaptogens, and brain-supporting nutrients help you think clearly, stay focused, and perform at your mental best.",
    topPicks: ["Brain Support Complex (60 Capsules)", "Mushroom Blend (60 Capsules)"],
    shopUrl: "https://shop.wellfino.com",
    image: focusCognitionImg,
  },
  {
    id: "immunity-longevity",
    label: "Immunity & Longevity",
    tagline: "Play the long game",
    description:
      "Support your immune system and cellular health with antioxidants, adaptogens, and targeted nutrients designed to help you thrive for decades.",
    topPicks: ["Turmeric with BioPerine® (60 Capsules)", "CoQ10 Ubiquinone (30 Capsules)", "Acai Berry Complex (60 Capsules)", "Beetroot (60 Capsules)"],
    shopUrl: "https://shop.wellfino.com",
    image: immunityLongevityImg,
  },
  {
    id: "active-performance",
    label: "Active & Performance",
    tagline: "Fuel your body the way it deserves",
    description:
      "Performance supplements help you push further, recover faster, and feel stronger whether you're training hard or staying active.",
    topPicks: ["Creatine Monohydrate (300g)", "BCAA Grape (325g)", "BCAA Watermelon (325g)", "ION + Select Electrolyte (225g)", "L-Arginine (60 Capsules)"],
    shopUrl: "https://shop.wellfino.com",
    image: activePerformanceImg,
  },
  {
    id: "beauty-structure",
    label: "Beauty & Structure",
    tagline: "True beauty radiates from within",
    description:
      "Collagen and structural support nutrients nourish your skin, hair, nails, and joints—because looking good and feeling good go hand in hand.",
    topPicks: ["Collagen Peptides Type I & III (350g)"],
    shopUrl: "https://shop.wellfino.com",
    image: beautyStructureImg,
  },
  {
    id: "gummies",
    label: "Gummies",
    tagline: "Wellness without the pill fatigue",
    description:
      "Our gummy picks make daily supplementation delicious and easy—perfect for anyone who wants wellness without the fuss.",
    topPicks: ["Multivitamin Gummies for Adults (60 Gummies)", "Apple Cider Vinegar Gummies (60 Gummies)"],
    shopUrl: "https://shop.wellfino.com",
    image: gummiesImg,
  },
];

export default categories;
