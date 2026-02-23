import { cn } from "@/lib/utils";
import wellfinoIcon from "@/assets/wellfino-icon.svg";

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
};

const BrandLogo = ({ className, iconClassName, textClassName }: BrandLogoProps) => {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img src={wellfinoIcon} alt="Wellfino icon" className={cn("h-9 w-9 object-contain", iconClassName)} />
      <span
        className={cn("text-5xl font-semibold leading-none tracking-tight text-foreground", textClassName)}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Wellfino.
      </span>
    </span>
  );
};

export default BrandLogo;
