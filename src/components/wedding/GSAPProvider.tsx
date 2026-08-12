"use client";

import { useGSAPContext } from "@/lib/animation/gsap-init";

export default function GSAPProvider({ children }: { children: React.ReactNode }) {
  useGSAPContext();

  return <>{children}</>;
}
