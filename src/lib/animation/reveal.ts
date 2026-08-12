import { gsap } from "gsap";

export interface RevealOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  duration?: number;
  y?: number;
  opacity?: number;
  scale?: number;
  scrub?: boolean | number;
  once?: boolean;
  ease?: string;
  delay?: number;
}

export function createReveal(options: RevealOptions = {}) {
  const {
    trigger,
    start = "top 85%",
    end = "bottom 20%",
    duration = 1.1,
    y = 40,
    opacity = 0,
    scale = 1,
    scrub = false,
    once = true,
    ease = "power3.out",
    delay = 0,
  } = options;

  const ctx = gsap.context(() => {
    const el = typeof trigger === "string" ? document.querySelector(trigger) : trigger;
    if (!el) return;

    gsap.fromTo(
      el,
      { y, opacity, scale },
      {
        y: 0,
        opacity: 1,
        scale,
        duration,
        ease,
        delay,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          toggleActions: once ? "play none none none" : "play none none reverse",
          scrub,
        },
      }
    );
  });

  return ctx;
}

export function createRevealStagger(
  selector: string,
  options: RevealOptions & { stagger?: number } = {}
) {
  const {
    stagger = 0.12,
    start = "top 85%",
    once = true,
    ...revealOptions
  } = options;

  const ctx = gsap.context(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;

    gsap.fromTo(
      elements,
      { y: revealOptions.y ?? 40, opacity: revealOptions.opacity ?? 0, scale: revealOptions.scale ?? 1 },
      {
        y: 0,
        opacity: 1,
        scale: revealOptions.scale ?? 1,
        duration: revealOptions.duration ?? 1.1,
        ease: revealOptions.ease ?? "power3.out",
        stagger,
        scrollTrigger: {
          trigger: elements[0] as Element,
          start,
          toggleActions: once ? "play none none none" : "play none none reverse",
        },
      }
    );
  });

  return ctx;
}
