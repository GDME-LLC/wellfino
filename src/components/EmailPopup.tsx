import { useEffect, useRef } from "react";
import { X, Mail } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

const EmailPopup = ({ open, onClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      closeRef.current?.focus();
    } else {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-[60] m-auto w-[90vw] max-w-md rounded-2xl border border-border bg-card p-0 shadow-2xl backdrop:bg-black/40 backdrop:backdrop-blur-sm"
      aria-label="Get 10% off — email signup"
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="relative p-6 text-center sm:p-8">
        <button
          ref={closeRef}
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Close popup"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
          <Mail className="h-6 w-6 text-accent" />
        </div>

        <h3
          className="mb-2 text-xl font-bold"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Before you explore…
        </h3>
        <p className="mb-5 text-sm text-muted-foreground">
          Grab <strong>10% off</strong> your first order + our free <em>Wellfino Stack Guide</em>.
        </p>

        {/*
          ====================================================
          PASTE MAILERLITE / BREVO EMBED CODE HERE
          ====================================================
        */}
        <form
          action="#"
          method="POST"
          className="flex flex-col gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            onClose();
            alert("Thanks! Check your inbox.");
          }}
        >
          <input
            type="email"
            required
            placeholder="your@email.com"
            aria-label="Email address"
            className="rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <button
            type="submit"
            className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            Get my 10% off
          </button>
        </form>

        <button
          onClick={onClose}
          className="mt-3 text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground"
        >
          No thanks, I'll keep browsing
        </button>
      </div>
    </dialog>
  );
};

export default EmailPopup;
