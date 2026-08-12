"use client";

import { useLenis } from "@/lib/animation/use-lenis";

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  useLenis();

  return <>{children}</>;
}
