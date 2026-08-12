"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAPContext } from "@/lib/animation/gsap-init";
import { useReducedMotion, getAnimationDuration } from "@/lib/animation/reduced-motion";
import type { HTMLAttributes, ReactNode } from "react";

interface AnimatedRevealProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  duration?: number;
  y?: number;
  opacity?: number;
  scale?: number;
  stagger?: number;
  scrub?: boolean;
  once?: boolean;
  start?: string;
  delay?: number;
  trigger?: string | Element;
  className?: string;
}

export default function AnimatedReveal({
  children,
  duration = 1.1,
  y = 40,
  opacity = 0,
  scale = 1,
  stagger = 0.12,
  scrub = false,
  once = true,
  start = "top 85%",
  delay = 0,
  trigger,
  className = "",
  ...props
}: AnimatedRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAPContext();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (reducedMotion) {
        gsap.set(el, { opacity: 1, y: 0, scale });
        return;
      }

      const elements = el.querySelectorAll("[data-reveal]");

      if (!elements.length) {
        gsap.fromTo(
          el,
          { y, opacity, scale },
          {
            y: 0,
            opacity: 1,
            scale,
            duration: getAnimationDuration(duration),
            delay: getAnimationDuration(delay),
            ease: "power3.out",
            scrollTrigger: {
              trigger: typeof trigger === "string" ? el : trigger,
              start,
              toggleActions: once ? "play none none none" : "play none none reverse",
              scrub,
            },
          }
        );
        return;
      }

      gsap.fromTo(
        elements,
        { y, opacity, scale },
        {
          y: 0,
          opacity: 1,
          scale,
          duration: getAnimationDuration(duration),
          stagger: getAnimationDuration(stagger),
          delay: getAnimationDuration(delay),
          ease: "power3.out",
          scrollTrigger: {
            trigger: typeof trigger === "string" ? el : trigger,
            start,
            toggleActions: once ? "play none none none" : "play none none reverse",
            scrub,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [reducedMotion, duration, y, opacity, scale, stagger, scrub, once, start, delay, trigger]);

  return (
    <div ref={containerRef} className={className} {...props}>
      {children}
    </div>
  );
}
