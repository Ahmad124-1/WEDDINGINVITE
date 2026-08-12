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
  "top-4 left-4",
  "top-4 right-4 rotate-90",
  "bottom-4 left-4 -rotate-90",
  "bottom-4 right-4 rotate-180",
];

export default function ClosingReveal() {
  return (
    <section className="relative flex min-h-[80dvh] items-center justify-center px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <DecorativeFrame className="h-[80vmin] w-[80vmin] max-h-[680px] max-w-[680px] text-[var(--gold)] opacity-20" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {cornerPositions.map((pos, i) => (
          <div key={i} className={`absolute ${pos}`}>
            <FloralCorner className="h-14 w-14 text-[var(--gold)] opacity-25 sm:h-16 sm:w-16" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 sm:left-6">
        <BotanicalBranch className="h-32 w-5 text-[var(--gold)] opacity-20 sm:h-44 sm:w-6" />
      </div>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 sm:right-6">
        <BotanicalBranch className="h-32 w-5 -scale-x-100 text-[var(--gold)] opacity-20 sm:h-44 sm:w-6" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.4 }}
        className="relative flex w-full max-w-[390px] flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <CircularSeal className="h-12 w-12 text-[var(--gold)] opacity-40 sm:h-14 sm:w-14" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-[10px] tracking-[0.55em] uppercase text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          With Love
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
          className="mt-6 mb-8 h-px w-14 origin-center bg-[var(--gold)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.4, ease: "easeOut" }}
          className="text-[clamp(1.6rem,6vw,2.4rem)] leading-[0.95] tracking-tight text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {invitation.bride}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.55, ease: "easeOut" }}
          className="my-4"
        >
          <OrnamentalDivider className="h-4 w-28 text-[var(--gold)]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.65, ease: "easeOut" }}
          className="text-[clamp(1.6rem,6vw,2.4rem)] leading-[0.95] tracking-tight text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {invitation.groom}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
          className="mt-8 h-px w-10 origin-center bg-[var(--gold)]"
        />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          className="mt-6 text-[10px] tracking-[0.4em] uppercase text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {invitation.date}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 1.05 }}
          className="mt-10"
        >
          <GoldFlourish className="h-4 w-20 text-[var(--gold)] opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
