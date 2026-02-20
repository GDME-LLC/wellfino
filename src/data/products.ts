export interface ProductFAQ {
  q: string;
  a: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  categoryId: string;
  price: string;
  benefit: string;
  description: string;
  benefits: string[];
  whoItsFor: string;
  problemItSolves: string;
  ingredients: { name: string; dose: string; why: string }[];
  faqs: ProductFAQ[];
  shopUrl: string;
}

const products: Product[] = [
  {
    id: "multivitamin-men",
    name: "Multivitamin for Men",
    category: "Core Daily",
    categoryId: "core-daily",
    price: "$24.99",
    benefit: "Complete daily nutrition optimized for men's health",
    description: "A comprehensive multivitamin designed to fill nutritional gaps in the modern diet. Covers 20+ essential vitamins and minerals men need daily.",
    benefits: [
      "Supports energy production and metabolism",
      "Promotes immune system function",
      "Aids muscle recovery and cardiovascular health",
      "Covers key micronutrient gaps most diets miss",
    ],
    whoItsFor: "Men looking for a reliable daily foundation — whether you're active, busy, or just want to cover your nutritional bases.",
    problemItSolves: "Most men don't get adequate micronutrients from diet alone. A quality multivitamin fills the gaps without complexity.",
    ingredients: [
      { name: "Vitamin D3", dose: "1000 IU", why: "Supports bone health and immune function" },
      { name: "Zinc", dose: "15mg", why: "Supports testosterone and immune health" },
      { name: "B-Complex", dose: "Full spectrum", why: "Energy metabolism and nervous system" },
      { name: "Vitamin C", dose: "90mg", why: "Antioxidant and immune support" },
    ],
    faqs: [
      { q: "When should I take this?", a: "Take with breakfast or your first meal of the day for best absorption." },
      { q: "Can I take this with other supplements?", a: "Yes. This pairs well with Omega-3 Fish Oil and Vitamin K2+D3 for a complete foundation." },
      { q: "How long until I notice results?", a: "Most people notice improved energy within 2-4 weeks of consistent daily use." },
      { q: "Is this safe for daily use?", a: "Yes. This is designed for long-term daily supplementation at safe, research-backed doses." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "multivitamin-women",
    name: "Multivitamin for Women",
    category: "Core Daily",
    categoryId: "core-daily",
    price: "$24.99",
    benefit: "Complete daily nutrition designed for women's unique needs",
    description: "Formulated with iron, folate, and biotin alongside 20+ essential nutrients women need for energy, immunity, and overall wellness.",
    benefits: [
      "Supports hormonal balance and reproductive health",
      "Promotes healthy skin, hair, and nails",
      "Boosts energy and reduces fatigue",
      "Fills common nutritional gaps in women's diets",
    ],
    whoItsFor: "Women at any stage of life who want a simple, comprehensive daily supplement.",
    problemItSolves: "Women have distinct nutritional needs — especially iron, folate, and calcium — that most generic multivitamins underdeliver on.",
    ingredients: [
      { name: "Iron", dose: "18mg", why: "Supports healthy blood and energy levels" },
      { name: "Folate", dose: "400mcg", why: "Essential for reproductive health" },
      { name: "Biotin", dose: "300mcg", why: "Supports hair, skin, and nails" },
      { name: "Calcium", dose: "200mg", why: "Bone density support" },
    ],
    faqs: [
      { q: "When should I take this?", a: "With a meal, ideally breakfast, for optimal absorption of fat-soluble vitamins." },
      { q: "Is this safe during pregnancy?", a: "Consult your healthcare provider before taking any supplement during pregnancy or breastfeeding." },
      { q: "How long until I notice results?", a: "Energy improvements typically appear within 2-4 weeks. Skin and hair changes may take 6-8 weeks." },
      { q: "Can I combine this with other supplements?", a: "Absolutely. We recommend pairing with Omega-3 and Vitamin K2+D3 for a complete daily stack." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "omega-3",
    name: "Omega 3 Fish Oil",
    category: "Core Daily",
    categoryId: "core-daily",
    price: "$19.99",
    benefit: "Essential fatty acids for heart, brain, and joint health",
    description: "High-quality fish oil softgels delivering EPA and DHA — the omega-3 fatty acids your body can't produce on its own.",
    benefits: [
      "Supports cardiovascular health",
      "Promotes brain function and mental clarity",
      "Reduces joint stiffness and inflammation",
      "Aids absorption of fat-soluble vitamins",
    ],
    whoItsFor: "Anyone who doesn't eat fatty fish at least 2-3 times per week — which is most people.",
    problemItSolves: "The modern diet is chronically low in omega-3s, creating an inflammatory imbalance that affects heart, brain, and joint health.",
    ingredients: [
      { name: "EPA", dose: "360mg", why: "Supports heart and reduces inflammation" },
      { name: "DHA", dose: "240mg", why: "Critical for brain health and cognitive function" },
    ],
    faqs: [
      { q: "Will this cause fishy burps?", a: "Our softgels are designed to minimize aftertaste. Taking with food helps further." },
      { q: "When should I take it?", a: "With a meal containing some fat for best absorption." },
      { q: "How long until I notice results?", a: "Joint and mood benefits typically emerge after 4-8 weeks of consistent use." },
      { q: "Can I take this with a multivitamin?", a: "Yes — omega-3s actually improve absorption of fat-soluble vitamins in your multi." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "vitamin-k2-d3",
    name: "Vitamin K2 + D3",
    category: "Core Daily",
    categoryId: "core-daily",
    price: "$18.99",
    benefit: "The essential pairing for bone health and calcium absorption",
    description: "Combines two of the most commonly deficient vitamins in a single capsule. D3 boosts calcium absorption while K2 directs it to bones — not arteries.",
    benefits: [
      "Supports bone density and strength",
      "Directs calcium to bones, not arteries",
      "Boosts immune function",
      "Supports mood and energy levels",
    ],
    whoItsFor: "Anyone who spends most of their time indoors, lives in northern climates, or wants comprehensive bone health support.",
    problemItSolves: "42% of US adults are vitamin D deficient. Without K2, supplemental D3 can lead to calcium being deposited in the wrong places.",
    ingredients: [
      { name: "Vitamin D3", dose: "5000 IU", why: "Optimal daily dose for most adults" },
      { name: "Vitamin K2 (MK-7)", dose: "100mcg", why: "Directs calcium to bones, clinically studied form" },
    ],
    faqs: [
      { q: "Why combine K2 with D3?", a: "D3 increases calcium absorption, and K2 ensures that calcium goes to your bones — not your arteries. They're designed to work together." },
      { q: "When should I take this?", a: "With a meal containing fat. Both vitamins are fat-soluble." },
      { q: "How long until I notice results?", a: "Blood levels of vitamin D typically improve within 2-3 weeks. Bone health benefits are long-term." },
      { q: "Is 5000 IU safe daily?", a: "For most adults, yes. It's within the range recommended by many integrative health practitioners. Consult your doctor if you have concerns." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "probiotics",
    name: "Probiotics",
    category: "Digest & Gut",
    categoryId: "digest-gut",
    price: "$22.99",
    benefit: "Multi-strain formula for digestive and immune balance",
    description: "A carefully selected blend of beneficial bacteria strains to support your gut microbiome, digestion, and immune function.",
    benefits: [
      "Supports healthy gut flora balance",
      "Reduces bloating and digestive discomfort",
      "Strengthens immune system function",
      "May improve mood through the gut-brain axis",
    ],
    whoItsFor: "Anyone experiencing digestive issues, recovering from antibiotics, or wanting to support overall gut health.",
    problemItSolves: "Modern diets, stress, and medications can deplete beneficial gut bacteria, leading to digestive issues and weakened immunity.",
    ingredients: [
      { name: "Lactobacillus acidophilus", dose: "5B CFU", why: "One of the most studied probiotic strains" },
      { name: "Bifidobacterium lactis", dose: "5B CFU", why: "Supports immune function and digestion" },
    ],
    faqs: [
      { q: "When should I take probiotics?", a: "On an empty stomach or right before a meal for best colonization." },
      { q: "Can I take this with antibiotics?", a: "Yes, but separate them by at least 2 hours. Probiotics help restore gut bacteria depleted by antibiotics." },
      { q: "How long until I notice results?", a: "Many people notice digestive improvements within 1-2 weeks. Full microbiome rebalancing may take 4-8 weeks." },
      { q: "Should I pair this with anything?", a: "Digestive enzymes complement probiotics well — they support nutrient breakdown while probiotics balance your gut flora." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "creatine",
    name: "Creatine Monohydrate",
    category: "Active & Performance",
    categoryId: "active-performance",
    price: "$26.99",
    benefit: "The gold standard for strength, power, and recovery",
    description: "Pure creatine monohydrate — the most researched supplement in sports nutrition with over 500 peer-reviewed studies.",
    benefits: [
      "Increases strength and power output",
      "Supports muscle recovery between sets and sessions",
      "Emerging evidence for cognitive benefits",
      "Safe for long-term daily use",
    ],
    whoItsFor: "Athletes, gym-goers, vegetarians, aging adults, or anyone wanting physical and cognitive performance support.",
    problemItSolves: "Your body makes limited creatine and most people don't get enough from diet. Supplementation saturates your muscles' energy stores for better performance.",
    ingredients: [
      { name: "Creatine Monohydrate", dose: "5g per serving", why: "The most clinically validated form of creatine" },
    ],
    faqs: [
      { q: "Do I need a loading phase?", a: "No. 3-5g daily will saturate your muscles within 3-4 weeks. Loading is optional and just speeds this up." },
      { q: "Will creatine make me bloated?", a: "Creatine pulls water into muscle cells, which may cause slight weight gain. This is intracellular hydration, not bloating." },
      { q: "When should I take it?", a: "Timing doesn't matter much — consistency is key. Many people add it to a post-workout shake or morning drink." },
      { q: "Is creatine safe long-term?", a: "Yes. It's one of the most studied supplements in history with an excellent safety profile for healthy adults." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "collagen-peptides",
    name: "Collagen Peptides Type I & III",
    category: "Beauty & Structure",
    categoryId: "beauty-structure",
    price: "$29.99",
    benefit: "Supports skin elasticity, joints, hair, and nails",
    description: "Hydrolyzed collagen peptides that dissolve easily in any beverage. Types I & III provide the broadest structural support for skin, joints, and connective tissue.",
    benefits: [
      "Improves skin elasticity and hydration",
      "Supports joint comfort and flexibility",
      "Strengthens hair and nails",
      "Virtually tasteless — mixes into anything",
    ],
    whoItsFor: "Anyone over 25 noticing changes in skin elasticity, joint comfort, or wanting to support healthy aging from the inside out.",
    problemItSolves: "After age 25, your body produces ~1% less collagen per year. Supplementation provides the building blocks your body needs to maintain structural integrity.",
    ingredients: [
      { name: "Hydrolyzed Collagen (Type I & III)", dose: "11g per serving", why: "Pre-broken-down for maximum absorption" },
    ],
    faqs: [
      { q: "How long until I see results?", a: "Most studies show skin improvements after 8-12 weeks of daily use. Joint benefits may take slightly longer." },
      { q: "How do I take it?", a: "Mix into coffee, smoothies, oatmeal, or water. It dissolves easily and is virtually tasteless." },
      { q: "Can I combine this with other supplements?", a: "Yes. Pairing with vitamin C supports your body's own collagen synthesis." },
      { q: "Is this safe for daily use?", a: "Absolutely. 10-15g daily is the range supported by most clinical research." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "magnesium-glycinate",
    name: "Magnesium Glycinate",
    category: "Calm, Mood & Sleep",
    categoryId: "calm-mood-sleep",
    price: "$19.99",
    benefit: "Highly absorbable magnesium for relaxation and recovery",
    description: "Magnesium glycinate is one of the most bioavailable forms of magnesium — gentle on the stomach and effective for relaxation, sleep, and muscle recovery.",
    benefits: [
      "Promotes calm and reduces stress",
      "Supports restful sleep quality",
      "Aids muscle relaxation and recovery",
      "Gentle on the stomach (no laxative effect)",
    ],
    whoItsFor: "Anyone dealing with stress, trouble sleeping, muscle tension, or looking for a calming evening supplement.",
    problemItSolves: "An estimated 50% of Americans don't get enough magnesium. Deficiency contributes to poor sleep, anxiety, muscle cramps, and fatigue.",
    ingredients: [
      { name: "Magnesium (as Glycinate)", dose: "400mg", why: "Glycinate form is highly bioavailable and gentle" },
    ],
    faqs: [
      { q: "When should I take this?", a: "In the evening, 30-60 minutes before bed. It promotes relaxation without causing drowsiness." },
      { q: "Is glycinate better than other forms?", a: "Yes, for most people. It's more bioavailable than oxide and doesn't have the laxative effect of citrate." },
      { q: "Can I take this with sleep supplements?", a: "Yes. It pairs well with our Sleep Supplement and 5-HTP for comprehensive sleep support." },
      { q: "How long until I notice results?", a: "Many people notice improved sleep and reduced tension within the first week." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
  {
    id: "turmeric-bioperine",
    name: "Turmeric with BioPerine®",
    category: "Immunity & Longevity",
    categoryId: "immunity-longevity",
    price: "$18.99",
    benefit: "Powerful anti-inflammatory with enhanced absorption",
    description: "Turmeric curcumin paired with BioPerine® (black pepper extract) for up to 2000% better absorption. Supports joint health, immune function, and recovery.",
    benefits: [
      "Reduces inflammation and joint discomfort",
      "Supports immune system function",
      "Powerful antioxidant protection",
      "Enhanced absorption with BioPerine®",
    ],
    whoItsFor: "Anyone dealing with joint stiffness, inflammation, or wanting long-term antioxidant and immune support.",
    problemItSolves: "Turmeric's active compound (curcumin) has poor bioavailability on its own. BioPerine® solves this, making it one of the most effective anti-inflammatory supplements available.",
    ingredients: [
      { name: "Turmeric Extract (95% curcuminoids)", dose: "1000mg", why: "Standardized for potency" },
      { name: "BioPerine® (Black Pepper Extract)", dose: "10mg", why: "Increases curcumin absorption by up to 2000%" },
    ],
    faqs: [
      { q: "When should I take this?", a: "With food for better absorption. The BioPerine® is already included to maximize bioavailability." },
      { q: "How long until I notice results?", a: "Anti-inflammatory and joint comfort improvements typically appear within 2-4 weeks." },
      { q: "Can I take this with other supplements?", a: "Yes. It pairs well with Omega-3 for comprehensive anti-inflammatory support." },
      { q: "Is this safe for daily use?", a: "Yes. Turmeric has a long history of safe use. Consult your doctor if you're on blood thinners." },
    ],
    shopUrl: "https://shop.wellfino.com",
  },
];

export const bestSellers = [
  "multivitamin-men",
  "omega-3",
  "probiotics",
  "creatine",
  "collagen-peptides",
  "magnesium-glycinate",
];

export default products;
