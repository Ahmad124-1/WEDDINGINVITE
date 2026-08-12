import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import {
  FloralCorner,
  BotanicalBranch,
  OrnamentalDivider,
  DecorativeFrame,
  CircularSeal,
  GoldFlourish,
} from "@/lib/ornaments";

const cornerPositions = [
  "top-6 left-6",
  "top-6 right-6 rotate-90",
  "bottom-6 left-6 -rotate-90",
  "bottom-6 right-6 rotate-180",
];

export default function CoupleReveal() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <DecorativeFrame className="h-[88vmin] w-[88vmin] max-h-[760px] max-w-[760px] text-[var(--gold)] opacity-25" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {cornerPositions.map((pos, i) => (
          <div key={i} className={`absolute ${pos}`}>
            <FloralCorner className="h-16 w-16 text-[var(--gold)] opacity-35 sm:h-20 sm:w-20" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 sm:left-6">
        <BotanicalBranch className="h-40 w-5 text-[var(--gold)] opacity-25 sm:h-56 sm:w-6" />
      </div>
      <div className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 sm:right-6">
        <BotanicalBranch className="h-40 w-5 -scale-x-100 text-[var(--gold)] opacity-25 sm:h-56 sm:w-6" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.4 }}
        className="relative flex w-full max-w-[390px] flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <CircularSeal className="h-14 w-14 text-[var(--gold)] opacity-40 sm:h-16 sm:w-16" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-[10px] tracking-[0.55em] uppercase text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          The Wedding Of
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.35, ease: "easeInOut" }}
          className="mt-6 h-px w-12 origin-center bg-[var(--gold)]"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative mt-8 text-balance text-[clamp(2.4rem,10.5vw,4.8rem)] leading-[0.92] tracking-[0.01em] text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
        >
          {invitation.bride}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          className="my-7"
        >
          <OrnamentalDivider className="h-5 w-36 text-[var(--gold)]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 35, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative text-balance text-[clamp(2.4rem,10.5vw,4.8rem)] leading-[0.92] tracking-[0.01em] text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)", fontWeight: 400 }}
        >
          {invitation.groom}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 1.05 }}
          className="mt-10"
        >
          <GoldFlourish className="h-4 w-24 text-[var(--gold)] opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
