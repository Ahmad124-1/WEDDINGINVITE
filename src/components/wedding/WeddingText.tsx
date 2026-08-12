"use client";

import type { HTMLAttributes, ReactNode } from "react";

type WeddingVariant = "display" | "serif" | "sans" | "arabic" | "label";

interface WeddingTextProps extends HTMLAttributes<HTMLDivElement> {
  variant?: WeddingVariant;
  scale?: number;
  opacity?: number;
  rotation?: number;
  animationDelay?: number;
  className?: string;
  children?: ReactNode;
}

const variantClasses: Record<WeddingVariant, string> = {
  display: "font-display text-[clamp(2.5rem,10vw,5rem)] leading-[0.95] tracking-wide",
  serif: "font-serif text-[clamp(1.2rem,4vw,2rem)] leading-tight",
  sans: "font-sans text-sm tracking-[0.25em] uppercase",
  arabic: "font-arabic text-[clamp(1.6rem,7vw,2.4rem)] leading-relaxed",
  label: "font-sans text-[10px] tracking-[0.4em] uppercase",
};

export default function WeddingText({
  variant = "label",
  scale = 1,
  opacity = 1,
  rotation = 0,
  animationDelay = 0,
  className = "",
  children,
  ...props
}: WeddingTextProps) {
  return (
    <div
      className={`${variantClasses[variant]} ${className}`}
      style={{
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        opacity,
        animationDelay: `${animationDelay}s`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
