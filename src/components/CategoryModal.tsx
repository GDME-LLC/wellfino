import { useEffect, useRef } from "react";
import { X, ShoppingBag, ArrowLeft } from "lucide-react";
import type { WellnessCategory } from "@/data/categories";

interface Props {
  category: WellnessCategory | null;
  onClose: () => void;
}

const CategoryModal = ({ category, onClose }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (category) {
      dialog.showModal();
      closeButtonRef.current?.focus();
    } else {
      dialog.close();
    }
  }, [category]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!category) return null;

  return (
    <dialog
      ref={dialogRef}
      className="fixed inset-0 z-50 m-auto w-[92vw] max-w-lg rounded-2xl border border-border bg-card p-0 shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      aria-label={`${category.label} — wellness category details`}
      onClick={(e) => {
        if (e.target === dialogRef.current) onClose();
      }}
    >
      <div className="p-6 sm:p-8">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between">
          <h3
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {category.label}
          </h3>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="rounded-full p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Description */}
        <p className="mb-6 leading-relaxed text-muted-foreground">{category.description}</p>

        {/* Top Picks */}
        <div className="mb-6">
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground/70">
            Top Picks
          </h4>
          <ul className="space-y-2">
            {category.topPicks.map((pick) => (
              <li
                key={pick}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {pick}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={category.shopUrl}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:shadow-md hover:brightness-110"
          >
            <ShoppingBag className="h-4 w-4" />
            Shop this branch
          </a>
          <button
            onClick={onClose}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" />
            Keep exploring
          </button>
        </div>
      </div>
    </dialog>
  );
};

export default CategoryModal;
