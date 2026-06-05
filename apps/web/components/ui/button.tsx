"use client";

import React from "react";
import { cn } from "./utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "donate";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-saffron-500 text-white hover:bg-saffron-600 focus:ring-saffron-400 shadow-lg hover:shadow-saffron-200 hover:shadow-xl hover:-translate-y-0.5",
    secondary:
      "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-400 shadow-lg hover:shadow-xl hover:-translate-y-0.5",
    outline:
      "border-2 border-saffron-500 text-saffron-600 hover:bg-saffron-50 focus:ring-saffron-400",
    ghost:
      "text-saffron-600 hover:bg-saffron-50 focus:ring-saffron-400",
    donate:
      "bg-gradient-to-r from-saffron-500 to-saffron-600 text-white hover:from-saffron-600 hover:to-saffron-700 shadow-lg shadow-saffron-200 hover:shadow-xl hover:-translate-y-1 focus:ring-saffron-400 font-bold tracking-wide",
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4",
  };

  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
