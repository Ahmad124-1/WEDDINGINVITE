"use client";

import { motion } from "framer-motion";
import {
  FloralCorner,
  BotanicalBranch,
  OrnamentalDivider,
  DecorativeFrame,
  CircularSeal,
  FineGeometric,
  GoldFlourish,
} from "@/lib/ornaments";

type Props = { onOpen: () => void };

const cornerPositions = [
  "top-4 left-4",
  "top-4 right-4 rotate-90",
  "bottom-4 left-4 -rotate-90",
  "bottom-4 right-4 rotate-180",
];

export default function OpeningCover({ onOpen }: Props) {
  return (
    <motion.section
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        y: -30,
        filter: "blur(8px)",
        transition: {
          duration: 1.8,
          ease: [0.76, 0, 0.24, 1],
        },
      }}
      className="fixed inset-0 z-50 flex min-h-[100dvh] items-center justify-center overflow-hidden bg-[var(--ivory)]"
    >
      <div className="grain-overlay" />

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <DecorativeFrame className="h-[92vmin] w-[92vmin] max-h-[820px] max-w-[820px] text-[var(--gold)] opacity-30" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {cornerPositions.map((pos, i) => (
          <div key={i} className={`absolute ${pos}`}>
            <FloralCorner className="h-20 w-20 text-[var(--gold)] opacity-40 sm:h-24 sm:w-24" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 sm:left-8">
        <BotanicalBranch className="h-48 w-6 text-[var(--gold)] opacity-30 sm:h-64 sm:w-8" />
      </div>
      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 sm:right-8">
        <BotanicalBranch className="h-48 w-6 -scale-x-100 text-[var(--gold)] opacity-30 sm:h-64 sm:w-8" />
      </div>

      <div className="relative z-10 flex w-full max-w-[390px] flex-col items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <CircularSeal className="h-16 w-16 text-[var(--gold)] opacity-50 sm:h-20 sm:w-20" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mb-6"
        >
          <FineGeometric className="h-12 w-12 text-[var(--gold)] opacity-40" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
          className="text-[clamp(1.3rem,6vw,1.8rem)] leading-snug text-[var(--gold)]"
          style={{ fontFamily: "var(--font-amiri)" }}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.9, ease: "easeInOut" }}
          className="mt-8 h-px w-20 origin-center bg-[var(--gold)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          className="mt-6 text-[10px] tracking-[0.5em] uppercase text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          You Are Cordially Invited
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="mt-8"
        >
          <OrnamentalDivider className="h-4 w-40 text-[var(--gold)]" />
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
          whileTap={{ scale: 0.94 }}
          onClick={onOpen}
          type="button"
          className="group relative mt-10 flex flex-col items-center gap-2 outline-none"
        >
          <span className="relative flex h-32 w-32 items-center justify-center rounded-full border border-[var(--gold)] bg-[var(--ivory)] transition-all duration-500 hover:bg-[var(--gold)] sm:h-36 sm:w-36">
            <span className="absolute inset-2 rounded-full border border-[var(--gold)] opacity-20 transition-opacity duration-500 group-hover:opacity-0" />
            <span className="flex flex-col items-center gap-1.5 transition-colors duration-500 group-hover:text-[var(--ivory)]">
              <span
                className="text-[10px] tracking-[0.4em] uppercase text-[var(--charcoal)] transition-colors duration-500 group-hover:text-[var(--ivory)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Open
              </span>
              <span
                className="text-[10px] tracking-[0.4em] uppercase text-[var(--charcoal)] transition-colors duration-500 group-hover:text-[var(--ivory)]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                Invitation
              </span>
            </span>
          </span>
          <GoldFlourish className="h-4 w-20 text-[var(--gold)] opacity-50" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-10 flex flex-col items-center text-[var(--gold)]"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg viewBox="0 0 32 48" fill="none" className="h-10 w-6" aria-hidden="true">
              <path d="M16 4C20 4 23 7 23 11V20C25 21 26 23 26 25V34C26 38 23 41 19 41H13C9 41 6 38 6 34V25C6 23 7 21 9 20V11C9 7 12 4 16 4Z" stroke="currentColor" strokeWidth="1.4" fill="none"/>
              <path d="M12 14C12 12 14 11 16 11C18 11 20 12 20 14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              <circle cx="16" cy="18" r="1" fill="currentColor" opacity="0.6"/>
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
