"use client";

import type { HTMLAttributes } from "react";

interface OrnamentalDividerProps extends HTMLAttributes<HTMLDivElement> {
  scale?: number;
  opacity?: number;
  rotation?: number;
  animationDelay?: number;
  className?: string;
}

export default function OrnamentalDivider({
  scale = 1,
  opacity = 0.6,
  rotation = 0,
  animationDelay = 0,
  className = "",
  ...props
}: OrnamentalDividerProps) {
  return (
    <div
      className={`pointer-events-none relative z-10 flex items-center justify-center ${className}`}
      style={{ opacity, animationDelay: `${animationDelay}s` }}
      aria-hidden="true"
      {...props}
    >
      <div style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}>
        <img
          src="/wedding/ornaments/ornamental-divider.svg"
          alt=""
          className="h-6 w-40 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
