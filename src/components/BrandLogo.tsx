import { cn } from "@/lib/utils";
import wellfinoLabelLogo from "@/assets/wellfino-logo.jpg";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
};

const BrandLogo = ({ className, imageClassName }: BrandLogoProps) => {
  return (
    <img
      src={wellfinoLabelLogo}
      alt="Wellfino"
      className={cn("h-12 w-auto object-contain mix-blend-multiply", imageClassName, className)}
    />
  );
};

export default BrandLogo;
