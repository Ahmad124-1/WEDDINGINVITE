"use client";

import type { HTMLAttributes } from "react";

interface CentralMedallionProps extends HTMLAttributes<HTMLDivElement> {
  scale?: number;
  opacity?: number;
  rotation?: number;
  animationDelay?: number;
  size?: number;
  className?: string;
}

export default function CentralMedallion({
  scale = 1,
  opacity = 0.5,
  rotation = 0,
  animationDelay = 0,
  size = 80,
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
          className="object-contain"
          style={{ height: `${size}px`, width: `${size}px` }}
          loading="lazy"
        />
      </div>
    </div>
  );
}
