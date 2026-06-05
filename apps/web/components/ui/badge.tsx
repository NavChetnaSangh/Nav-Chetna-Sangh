import React from "react";
import { cn } from "./utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "saffron" | "teal" | "gold";
  className?: string;
}

export function Badge({ children, variant = "saffron", className }: BadgeProps) {
  const variants = {
    saffron: "bg-saffron-100 text-saffron-700 border border-saffron-200",
    teal: "bg-teal-100 text-teal-700 border border-teal-200",
    gold: "bg-gold-100 text-gold-700 border border-gold-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
