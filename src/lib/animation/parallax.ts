import { gsap } from "gsap";

export interface ParallaxOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  y?: number;
  x?: number;
  rotation?: number;
  scale?: number;
  scrub?: boolean | number;
  ease?: string;
  markers?: boolean;
}

export function createParallax(options: ParallaxOptions = {}) {
  const {
    trigger,
    start = "top bottom",
    end = "bottom top",
    y = 0,
    x = 0,
    rotation = 0,
    scale = 1,
    scrub = 1,
    ease = "none",
    markers = false,
  } = options;

  const ctx = gsap.context(() => {
    const el = typeof trigger === "string" ? document.querySelector(trigger) : trigger;
    if (!el) return;

    gsap.fromTo(
      el,
      { y: -y / 2, x: -x / 2, rotation: -rotation / 2, scale: 1 - (scale - 1) / 2 },
      {
        y: y / 2,
        x: x / 2,
        rotation: rotation / 2,
        scale,
        ease,
        scrollTrigger: {
          trigger: el,
          start,
          end,
          scrub,
          markers,
        },
      }
    );
  });

  return ctx;
}

export function createParallaxImage(
  imageSelector: string,
  containerSelector: string,
  options: Omit<ParallaxOptions, "trigger"> = {}
) {
  const ctx = gsap.context(() => {
    const container = document.querySelector(containerSelector);
    const image = document.querySelector(imageSelector);
    if (!container || !image) return;

    gsap.fromTo(
      image,
      { y: "-10%" },
      {
        y: "10%",
        ease: options.ease ?? "none",
        scrollTrigger: {
          trigger: container,
          start: options.start ?? "top bottom",
          end: options.end ?? "bottom top",
          scrub: options.scrub ?? 1,
        },
      }
    );
  });

  return ctx;
}
