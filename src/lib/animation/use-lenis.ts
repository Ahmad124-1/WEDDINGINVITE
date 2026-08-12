import { useEffect, useRef } from "react";
import Lenis from "lenis";

export function useLenis(options?: ConstructorParameters<typeof Lenis>[0]) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      ...options,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [options]);

  return lenisRef;
}

export function useLenisScrollTrigger() {
  useEffect(() => {
    // Lenis auto-connects ScrollTrigger in recent versions
  }, []);
}
