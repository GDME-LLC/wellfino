import { cn } from "@/lib/utils";
import wellfinoLabelLogo from "@/assets/wellfino-logo.jpg";

type BrandLogoProps = {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
};

const BrandLogo = ({ className, iconClassName, wordmarkClassName }: BrandLogoProps) => {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <img
        src="/favicon.png"
        alt="Wellfino icon"
        className={cn("h-9 w-9 object-contain mix-blend-multiply", iconClassName)}
      />
      <span className={cn("inline-block h-10 w-[190px] overflow-hidden", wordmarkClassName)}>
        <img
          src={wellfinoLabelLogo}
          alt="Wellfino"
          className="h-full w-full object-cover object-[50%_84%] mix-blend-multiply"
        />
      </span>
    </span>
  );
};

export default BrandLogo;
