const REDUCED_MOTION_MEDIA = "(prefers-reduced-motion: reduce)";

export function getReducedMotionPreference(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_MOTION_MEDIA).matches;
}

export function useReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(REDUCED_MOTION_MEDIA).matches;
}

export function getAnimationDuration(base: number): number {
  if (typeof window === "undefined") return base;
  return getReducedMotionPreference() ? 0.01 : base;
}

export function getAnimationDelay(base: number): number {
  if (typeof window === "undefined") return base;
  return getReducedMotionPreference() ? 0 : base;
}
