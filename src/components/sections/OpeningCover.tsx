"use client";

import { useLayoutEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { invitation } from "@/data/invitation";
import FloralDecoration from "@/components/wedding/FloralDecoration";
import OrnamentalFrame from "@/components/wedding/OrnamentalFrame";
import OrnamentalDivider from "@/components/wedding/OrnamentalDivider";
import CentralMedallion from "@/components/wedding/CentralMedallion";
import WeddingText from "@/components/wedding/WeddingText";

type Props = { isOpen: boolean; onOpen: () => void };

export default function OpeningCover({ isOpen, onOpen }: Props) {
  const cardRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (isOpen || !cardRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".op-bg", { opacity: 0 }, { opacity: 1, duration: 0.7 })
        .fromTo(".op-botanical", { opacity: 0, scale: 0.82 }, { opacity: (_, t) => parseFloat((t as HTMLElement).style.opacity || "0.6"), scale: 1, duration: 1.15, stagger: 0.07 }, "-=0.35")
        .fromTo(".op-frame", { opacity: 0, scale: 0.93 }, { opacity: 0.42, scale: 1.06, duration: 0.95 }, "-=0.55")
        .fromTo(".op-medallion", { opacity: 0, scale: 0.65 }, { opacity: 0.65, scale: 1, duration: 0.75 }, "-=0.35")
        .fromTo(".op-text", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.85, stagger: 0.06 }, "-=0.25")
        .fromTo(".op-seal", { opacity: 0, scale: 0.7 }, { opacity: 1, scale: 1, duration: 0.75 }, "-=0.15")
        .fromTo(".op-indicator", { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.1");
    }, cardRef);

    return () => ctx.revert();
  }, [isOpen]);

  return (
    <motion.section
      id="opening-cover"
      animate={
        isOpen
          ? { opacity: 0, scale: 1.04, y: -24, filter: "blur(10px)" }
          : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{
        duration: 1.6,
        ease: [0.76, 0, 0.24, 1],
      }}
      onAnimationComplete={() => {
        if (isOpen) {
          const el = document.getElementById("opening-cover");
          if (el) {
            el.style.pointerEvents = "none";
            el.style.visibility = "hidden";
          }
        }
      }}
      className="fixed inset-0 z-50 flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[var(--ivory)]"
    >
      <div
        ref={cardRef}
        className="op-bg relative flex h-full w-full max-w-[430px] flex-col items-center justify-center px-5 py-10 md:px-8 md:py-14"
      >
        <div className="grain-overlay" aria-hidden="true" />
        <div className="paper-texture-v2" aria-hidden="true" />

        <FloralDecoration
          position="top-left"
          scale={1.55}
          opacity={0.72}
          rotation={-7}
          maxWidth={180}
          className="op-botanical"
        />
        <FloralDecoration
          position="top-right"
          scale={1.35}
          opacity={0.62}
          rotation={9}
          maxWidth={160}
          className="op-botanical"
        />
        <FloralDecoration
          position="bottom-left"
          scale={1.45}
          opacity={0.68}
          rotation={5}
          maxWidth={170}
          className="op-botanical"
        />
        <FloralDecoration
          position="bottom-right"
          scale={1.25}
          opacity={0.58}
          rotation={-8}
          maxWidth={150}
          className="op-botanical"
        />

        <FloralDecoration
          position="left"
          scale={1.7}
          opacity={0.28}
          rotation={14}
          maxWidth={200}
          className="op-botanical"
        />
        <FloralDecoration
          position="right"
          scale={1.7}
          opacity={0.28}
          rotation={-14}
          maxWidth={200}
          className="op-botanical"
        />

        <OrnamentalFrame scale={1.06} opacity={0.42} className="op-frame">
          <div className="flex h-full w-full flex-col items-center justify-center px-7 py-10 md:px-10 md:py-14">
            <p
              className="op-text font-amiri text-[clamp(1.7rem,7.5vw,2.5rem)] leading-tight text-[var(--gold)]"
              style={{ fontFamily: "var(--font-amiri)" }}
            >
              بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
            </p>

            <OrnamentalDivider className="my-5 op-text" />

            <WeddingText variant="label" className="mb-7 op-text">
              You Are Cordially Invited
            </WeddingText>

            <div className="op-text">
              <WeddingText variant="display" className="text-[clamp(2.4rem,11vw,4.2rem)] text-[var(--charcoal)]">
                {invitation.bride}
              </WeddingText>

              <div className="my-3 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-[var(--gold)] opacity-60" />
                <WeddingText variant="display" className="mx-1 text-[var(--gold)]">
                  &
                </WeddingText>
                <span className="h-px w-10 bg-[var(--gold)] opacity-60" />
              </div>

              <WeddingText variant="display" className="text-[clamp(2.4rem,11vw,4.2rem)] text-[var(--charcoal)]">
                {invitation.groom}
              </WeddingText>
            </div>

            <OrnamentalDivider className="my-5 op-text" />

            <WeddingText variant="serif" className="op-text text-[var(--charcoal-soft)]">
              {invitation.event} — {invitation.date}
            </WeddingText>

            <motion.button
              onClick={onOpen}
              type="button"
              className="op-seal relative mt-9 flex h-24 w-24 items-center justify-center rounded-full border-2 border-[var(--gold)] bg-[var(--ivory)]/75 backdrop-blur-sm transition-colors duration-300 hover:bg-[var(--gold)]/10 active:bg-[var(--gold)]/15"
              whileTap={{ scale: 0.94 }}
            >
              <CentralMedallion
                size={88}
                scale={1}
                opacity={0.65}
                className="op-medallion absolute inset-0 h-full w-full"
              />
              <span
                className="relative z-10 text-center text-[10px] leading-tight tracking-[0.2em] uppercase text-[var(--charcoal)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Open<br />Invitation
              </span>
            </motion.button>

            <div
              className="op-indicator mt-10 flex flex-col items-center text-[var(--gold)]"
            >
              <motion.div
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.div>
            </div>
          </div>
        </OrnamentalFrame>
      </div>
    </motion.section>
  );
}
