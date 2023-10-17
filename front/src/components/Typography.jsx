import { cn } from "../lib/utils";
import { cva } from "class-variance-authority";
import * as React from "react";

const variants = cva("text-left", {
  variants: {
    variant: {
      ligth: "font-light",
      thin: "font-thin",
      normal: "font-base",
      strong: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      darker: "font-extrabold",
    },
    size: {
      h1: "text-3xl",
      h2: "text-2xl",
      h3: "text-xl",
      h4: "text-lg",
      h5: "text-md",
      h6: "text-base",
      sm: "text-sm",
      comment: "text-xs",
    },
    color: {
      comment: "text-gray-600",
      primary: "text-base",
      success: "text-green-700",
      error: "text-red-900",
      info: "text-blue-700",
      warning: "text-yellow-700",
    },
  },
  defaultVariants: {
    variant: "strong",
    size: "h4",
    color: "primary",
  },
});

const DgtTypography = React.forwardRef(
  ({ className, variant, size, color, ...props }, ref) => {
    return (
      <p
        className={cn(variants({ variant, size, color, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

DgtTypography.displayName = "IwTypography";

export { DgtTypography, variants };
