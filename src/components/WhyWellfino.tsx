import { ShieldCheck } from "lucide-react";

const items = [
  "Packaged in the USA",
  "Manufactured in FDA-Registered Facilities",
  "GMP-Certified Production",
  "Third-Party Tested for Quality",
];

const WhyWellfino = () => {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-20">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">Why Wellfino?</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-xl border border-border/50 bg-card px-4 py-3">
              <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
              <p className="text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWellfino;
