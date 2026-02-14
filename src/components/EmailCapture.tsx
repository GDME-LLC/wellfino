import { Mail } from "lucide-react";

const EmailCapture = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="mx-auto max-w-xl rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm sm:p-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <h3
          className="mb-2 text-2xl font-bold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Get 10% off + the Wellfino Stack Guide
        </h3>
        <p className="mb-6 text-muted-foreground">
          Join the list and we'll send you our free guide to building the perfect supplement stack.
        </p>

        {/*
          ====================================================
          PASTE MAILERLITE / BREVO EMBED CODE HERE
          Replace this <form> with your email provider's embed.
          ====================================================
        */}
        <form
          action="#"
          method="POST"
          className="flex flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            // TODO: Connect to Mailerlite/Brevo
            alert("Thanks! Check your inbox.");
          }}
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            aria-label="Email address"
            className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="rounded-xl bg-accent px-6 py-3 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            Get my 10% off
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailCapture;
