"use client";

import type { ReactNode, HTMLAttributes } from "react";

type FloralPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right"
  | "bottom";

interface FloralDecorationProps extends HTMLAttributes<HTMLDivElement> {
  position: FloralPosition;
  scale?: number;
  opacity?: number;
  rotation?: number;
  animationDelay?: number;
  maxWidth?: number;
  className?: string;
  children?: ReactNode;
}

const positionClasses: Record<FloralPosition, string> = {
  "top-left": "top-4 left-4",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-right": "bottom-4 right-4",
  left: "top-1/2 -translate-y-1/2 left-0",
  right: "top-1/2 -translate-y-1/2 right-0",
  bottom: "bottom-0 left-1/2 -translate-x-1/2",
};

const svgMap: Record<string, string> = {
  "top-left": "/wedding/flowers/corner-top-left.svg",
  "top-right": "/wedding/flowers/corner-top-right.svg",
  "bottom-left": "/wedding/flowers/corner-bottom-left.svg",
  "bottom-right": "/wedding/flowers/corner-bottom-right.svg",
  left: "/wedding/flowers/branch-left.svg",
  right: "/wedding/flowers/branch-right.svg",
  bottom: "/wedding/flowers/floral-bottom.svg",
};

export default function FloralDecoration({
  position,
  scale = 1,
  opacity = 0.6,
  rotation = 0,
  animationDelay = 0,
  maxWidth = 140,
  className = "",
  ...props
}: FloralDecorationProps) {
  return (
    <div
      className={`pointer-events-none absolute z-10 ${positionClasses[position]} ${className}`}
      style={{ transform: `scale(${scale}) rotate(${rotation}deg)`, opacity }}
      aria-hidden="true"
      {...props}
    >
      <img
        src={svgMap[position]}
        alt=""
        className="h-auto w-auto"
        style={{ maxWidth: `${maxWidth}px`, animationDelay: `${animationDelay}s` }}
        loading="lazy"
      />
    </div>
  );
}
