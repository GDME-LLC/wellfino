import { Shield, FlaskConical, Eye, Truck } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Third-Party Tested",
    description: "Independent lab verification for purity and potency",
  },
  {
    icon: FlaskConical,
    title: "GMP Certified Facility",
    description: "Manufactured in facilities following Good Manufacturing Practices",
  },
  {
    icon: Eye,
    title: "Transparent Ingredients",
    description: "Full disclosure of every ingredient and dosage — no proprietary blends",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Orders ship within 2-5 business days with tracking included",
  },
];

const TrustSection = () => {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Quality You Can Trust
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Every product meets rigorous standards before it earns a place in our catalog.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map((badge) => (
            <div key={badge.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                <badge.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1.5 text-sm font-semibold">{badge.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
