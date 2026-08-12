"use client";

import type { HTMLAttributes, ReactNode } from "react";

interface OrnamentalFrameProps extends HTMLAttributes<HTMLDivElement> {
  scale?: number;
  opacity?: number;
  rotation?: number;
  animationDelay?: number;
  className?: string;
  children?: ReactNode;
}

export default function OrnamentalFrame({
  scale = 1,
  opacity = 0.45,
  rotation = 0,
  animationDelay = 0,
  className = "",
  children,
  ...props
}: OrnamentalFrameProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-10 flex items-center justify-center ${className}`}
      style={{ opacity, animationDelay: `${animationDelay}s` }}
      aria-hidden="true"
      {...props}
    >
      <div
        className="relative h-full w-full"
        style={{ transform: `scale(${scale}) rotate(${rotation}deg)` }}
      >
        <img
          src="/wedding/ornaments/invitation-frame.svg"
          alt=""
          className="absolute inset-0 h-full w-full object-contain"
          loading="lazy"
        />
        {children && (
          <div className="relative z-10 flex h-full w-full items-center justify-center">
            {children}
          </div>
        )}
      </div>
    </div>
  );
}
