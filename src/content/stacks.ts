export interface StackItem {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  shopUrl: string;
  image: string;
}

export const stacks: StackItem[] = [
  {
    id: "mens-core-essentials-stack",
    title: "Men's Core Essentials Stack",
    shortDescription: "Foundational daily support for energy, heart, and long-term wellness.",
    longDescription:
      "A straightforward daily foundation designed for men who want consistent micronutrient, omega-3, and vitality support.",
    shopUrl: "https://shop.wellfino.com/products/multivitamin-for-men-supplement-60-capsules",
    image: "https://cdn.shopify.com/s/files/1/0953/4255/9547/files/2263740304280216727_2048_custom.jpg?v=1771698831",
  },
  {
    id: "womens-core-essentials-stack",
    title: "Women's Core Essentials Stack",
    shortDescription: "Foundational daily support for energy, beauty, and whole-body health.",
    longDescription:
      "A simple daily foundation designed for women who want reliable coverage for micronutrients, recovery, and overall wellness.",
    shopUrl: "https://shop.wellfino.com/products/multivitamin-for-women-supplement-60-capsules",
    image: "https://cdn.shopify.com/s/files/1/0953/4255/9547/files/13316461037794152959_2048.jpg?v=1771698850",
  },
];

export const stackAddOns: Record<string, { label: string; shopUrl: string }[]> = {
  "mens-core-essentials-stack": [
    {
      label: "Creatine Monohydrate",
      shopUrl: "https://shop.wellfino.com/products/creatine-monohydrate-supplement-300g-10-58oz",
    },
    {
      label: "Magnesium Glycinate",
      shopUrl: "https://shop.wellfino.com/products/magnesium-glycinate-supplement-60-capsules",
    },
  ],
  "womens-core-essentials-stack": [
    {
      label: "Collagen Peptides",
      shopUrl: "https://shop.wellfino.com/products/collagen-peptides-type-i-iii-supplement-350g-12-3oz",
    },
    {
      label: "Probiotics",
      shopUrl: "https://shop.wellfino.com/products/probiotics-supplement-60-capsules",
    },
  ],
};
