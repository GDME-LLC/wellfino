import { cn } from "@/lib/utils";
import wellfinoLabelLogo from "@/assets/wellfino-logo.jpg";

type BrandLogoProps = {
  className?: string;
  wrapperClassName?: string;
  imageClassName?: string;
};

const BrandLogo = ({ className, wrapperClassName, imageClassName }: BrandLogoProps) => {
  return (
    <span
      className={cn(
        "inline-flex rounded-lg bg-background/90 p-1 backdrop-blur-md",
        wrapperClassName,
      )}
    >
      <img
        src={wellfinoLabelLogo}
        alt="Wellfino"
        className={cn("h-12 w-auto object-contain", imageClassName, className)}
      />
    </span>
  );
};

export default BrandLogo;
