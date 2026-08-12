import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import {
  FloralCorner,
  BotanicalBranch,
  OrnamentalDivider,
  DecorativeFrame,
  CircularSeal,
} from "@/lib/ornaments";

const cornerPositions = [
  "top-4 left-4",
  "top-4 right-4 rotate-90",
  "bottom-4 left-4 -rotate-90",
  "bottom-4 right-4 rotate-180",
];

export default function BaraatReveal() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <DecorativeFrame className="h-[90vmin] w-[90vmin] max-h-[800px] max-w-[800px] text-[var(--gold)] opacity-20" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {cornerPositions.map((pos, i) => (
          <div key={i} className={`absolute ${pos}`}>
            <FloralCorner className="h-20 w-20 text-[var(--gold)] opacity-30 sm:h-24 sm:w-24" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 sm:left-8">
        <BotanicalBranch className="h-52 w-7 text-[var(--gold)] opacity-25 sm:h-72 sm:w-8" />
      </div>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 sm:right-8">
        <BotanicalBranch className="h-52 w-7 -scale-x-100 text-[var(--gold)] opacity-25 sm:h-72 sm:w-8" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4 }}
        className="relative flex w-full max-w-[390px] flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -15 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-6"
        >
          <CircularSeal className="h-20 w-20 text-[var(--gold)] opacity-35 sm:h-24 sm:w-24" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 70, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.8, delay: 0.25, ease: [0.22, 0.1, 0.25, 1] }}
          className="text-[clamp(5rem,24vw,11rem)] leading-[0.78] tracking-[0.01em] text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 900 }}
        >
          {invitation.event}
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
          className="mt-10 mb-6 h-px w-20 origin-center bg-[var(--gold)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.2, delay: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm tracking-[0.5em] uppercase text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {invitation.date}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 1.05 }}
          className="mt-8"
        >
          <OrnamentalDivider className="h-4 w-36 text-[var(--gold)]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
