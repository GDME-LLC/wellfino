import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ShopNowButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  shopUrl: string;
};

const ShopNowButton = ({ shopUrl, className, children = "Shop Now", ...props }: ShopNowButtonProps) => {
  return (
    <a
      href={shopUrl}
      data-shop-url={shopUrl}
      className={cn(className)}
      {...props}
    >
      {children}
    </a>
  );
};

export default ShopNowButton;
