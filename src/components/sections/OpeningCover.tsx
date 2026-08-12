"use client";

import { motion } from "framer-motion";

type Props = { isOpen: boolean; onOpen: () => void };

const ornamentSvg = (
  <svg
    viewBox="0 0 120 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mx-auto h-5 w-24 text-[var(--gold)]"
    aria-hidden
  >
    <path
      d="M60 4.5C63.5 4.5 66.5 6 68.5 8.5L75 2.5L68.5 15.5C66.5 18 63.5 19.5 60 19.5C56.5 19.5 53.5 18 51.5 15.5L45 2.5L51.5 8.5C53.5 6 56.5 4.5 60 4.5Z"
      fill="currentColor"
      opacity="0.35"
    />
    <path
      d="M60 9.5C62 9.5 63.5 10.5 64.5 12L68.5 7.5L64.5 16.5C63.5 18 62 19 60 19C58 19 56.5 18 55.5 16.5L51.5 7.5L55.5 12C56.5 10.5 58 9.5 60 9.5Z"
      fill="currentColor"
      opacity="0.55"
    />
    <circle cx="60" cy="12" r="2.5" fill="currentColor" opacity="0.8" />
  </svg>
);

const cornerOrnament = (
  <svg
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute h-28 w-28 text-[var(--gold)] opacity-25"
    aria-hidden
  >
    <path
      d="M10 10C10 10 10 30 30 30C50 30 50 10 50 10"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M14 14C14 14 14 28 28 28C42 28 42 14 42 14"
      stroke="currentColor"
      strokeWidth="0.75"
      fill="none"
      opacity="0.6"
    />
    <circle cx="30" cy="30" r="1.5" fill="currentColor" opacity="0.5" />
    <circle cx="22" cy="22" r="1" fill="currentColor" opacity="0.4" />
  </svg>
);

const fingerIndicator = (
  <svg
    viewBox="0 0 32 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="h-10 w-6 text-[var(--gold)]"
    aria-hidden
  >
    <path
      d="M16 4C20 4 23 7 23 11V20C25 21 26 23 26 25V34C26 38 23 41 19 41H13C9 41 6 38 6 34V25C6 23 7 21 9 20V11C9 7 12 4 16 4Z"
      stroke="currentColor"
      strokeWidth="1.4"
      fill="none"
    />
    <path
      d="M12 14C12 12 14 11 16 11C18 11 20 12 20 14"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
    />
    <circle cx="16" cy="18" r="1" fill="currentColor" opacity="0.6" />
  </svg>
);

export default function OpeningCover({ isOpen, onOpen }: Props) {
  return (
    <motion.section
      id="opening-cover"
      animate={
        isOpen
          ? { opacity: 0, scale: 1.05, y: -30, filter: "blur(8px)" }
          : { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
      }
      transition={{
        duration: 1.8,
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
      <div className="grain-overlay" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        {cornerOrnament}
        <div className="absolute -right-10 -top-10 rotate-90">{cornerOrnament}</div>
        <div className="absolute -bottom-10 -left-10 -rotate-90">{cornerOrnament}</div>
        <div className="absolute -bottom-10 -right-10 rotate-180">{cornerOrnament}</div>
      </div>

      <div className="relative z-10 flex w-full max-w-[390px] flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
        >
          {ornamentSvg}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="mt-6 font-amiri text-[clamp(1.6rem,8vw,2.2rem)] leading-tight text-[var(--gold)]"
          style={{ fontFamily: "var(--font-amiri)" }}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.75, ease: "easeInOut" }}
          className="mt-8 h-px w-16 origin-center bg-[var(--gold)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: "easeOut" }}
          className="mt-6 text-[10px] font-normal tracking-[0.4em] uppercase text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          You Are Cordially Invited
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.15, ease: "easeOut" }}
          whileTap={{ scale: 0.96 }}
          onClick={onOpen}
          type="button"
          className="relative mt-10 rounded-full border border-[var(--gold)] px-8 py-4 text-[11px] tracking-[0.28em] uppercase text-[var(--charcoal)] transition-colors duration-300 hover:bg-[var(--gold)] hover:text-[var(--ivory)] active:bg-[var(--gold)] active:text-[var(--ivory)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Open Invitation
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="mt-10 flex flex-col items-center text-[var(--gold)]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {fingerIndicator}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
