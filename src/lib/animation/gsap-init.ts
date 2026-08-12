import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGSAPContext() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.defaults({ toggleActions: "play none none reverse" });
    });

    return () => ctx.revert();
  }, []);
}

export { gsap, ScrollTrigger };
