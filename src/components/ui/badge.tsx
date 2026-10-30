import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--primary)] text-[var(--primary-foreground)] shadow-xs",
        secondary:
          "border-transparent bg-[var(--surface-muted)] text-[var(--foreground)]",
        accent:
          "border-transparent bg-[var(--accent)] text-[var(--accent-foreground)] font-bold",
        outline:
          "border-[var(--border-color)] text-[var(--foreground)] bg-transparent",
        glow:
          "border-[var(--accent)]/30 bg-[var(--accent)]/15 text-[var(--accent)] font-bold backdrop-blur-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
