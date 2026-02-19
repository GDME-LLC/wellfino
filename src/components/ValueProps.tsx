import { FlaskConical, ShieldCheck, Leaf, Heart } from "lucide-react";

const props = [
  {
    icon: FlaskConical,
    title: "Science-First",
    description: "Our entire product catalog is backed by peer-reviewed research and clinical evidence.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Quality",
    description: "We only carry supplements from manufacturers with rigorous third-party testing.",
  },
  {
    icon: Leaf,
    title: "Clean Formulas",
    description: "No unnecessary fillers, binders, or artificial additives in our picks.",
  },
  {
    icon: Heart,
    title: "Personalized",
    description: "Explore by health goal and build a custom supplement regimen that actually fits your life.",
  },
];

const ValueProps = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          We've set a <em className="not-italic text-primary">higher standard</em>
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Every product in our collection has earned its place through extensive research and rigorous standards.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {props.map((prop) => (
          <div
            key={prop.title}
            className="group rounded-2xl border border-border/50 bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <prop.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{prop.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{prop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValueProps;
