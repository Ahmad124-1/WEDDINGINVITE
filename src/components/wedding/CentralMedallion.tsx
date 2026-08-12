"use client";

import type { HTMLAttributes } from "react";

interface CentralMedallionProps extends HTMLAttributes<HTMLDivElement> {
  scale?: number;
  opacity?: number;
  rotation?: number;
  animationDelay?: number;
  className?: string;
}

export default function CentralMedallion({
  scale = 1,
  opacity = 0.5,
  rotation = 0,
  animationDelay = 0,
  className = "",
  ...props
}: CentralMedallionProps) {
  return (
    <div
      className={`pointer-events-none relative z-10 flex items-center justify-center ${className}`}
      style={{ opacity, animationDelay: `${animationDelay}s` }}
      aria-hidden="true"
      {...props}
    >
      <div style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}>
        <img
          src="/wedding/ornaments/central-medallion.svg"
          alt=""
          className="h-20 w-20 object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
