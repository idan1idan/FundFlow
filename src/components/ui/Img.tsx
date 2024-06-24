import { cn } from "@/lib/utils";
import * as React from "react";

const Img = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
  return (
    <img
      className={cn("h-auto w-full object-cover", className)}
      ref={ref}
      {...props}
    />
  );
});

Img.displayName = "Img";

export { Img };
