import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";
import {
  FloralCorner,
  BotanicalBranch,
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

export default function VenueReveal() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center px-6 py-24 text-center">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <DecorativeFrame className="h-[88vmin] w-[88vmin] max-h-[760px] max-w-[760px] text-[var(--gold)] opacity-25" />
      </div>

      <div className="pointer-events-none absolute inset-0">
        {cornerPositions.map((pos, i) => (
          <div key={i} className={`absolute ${pos}`}>
            <FloralCorner className="h-16 w-16 text-[var(--gold)] opacity-30 sm:h-20 sm:w-20" />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 sm:left-6">
        <BotanicalBranch className="h-40 w-5 text-[var(--gold)] opacity-20 sm:h-56 sm:w-6" />
      </div>
      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 sm:right-6">
        <BotanicalBranch className="h-40 w-5 -scale-x-100 text-[var(--gold)] opacity-20 sm:h-56 sm:w-6" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2 }}
        className="relative flex w-full max-w-[390px] flex-col items-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          <CircularSeal className="h-14 w-14 text-[var(--gold)] opacity-40 sm:h-16 sm:w-16" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-[10px] tracking-[0.55em] uppercase text-[var(--charcoal)]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {invitation.venue.title}
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.35, ease: "easeInOut" }}
          className="mt-6 mb-10 h-px w-16 origin-center bg-[var(--gold)]"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.1, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-4 text-[var(--charcoal)]"
        >
          <p
            className="text-[clamp(1.8rem,6.5vw,2.8rem)] leading-[0.95] tracking-tight text-[var(--charcoal)] opacity-0 transition-opacity duration-700"
            style={{ fontFamily: "var(--font-playfair)" }}
            data-venue-name
          >
            {/* Venue name — fill in data/invitation.ts when available. */}
          </p>

          <p
            className="text-sm tracking-[0.3em] uppercase text-[var(--charcoal)] opacity-0 transition-opacity duration-700"
            style={{ fontFamily: "var(--font-inter)" }}
            data-venue-address
          >
            {/* Venue address — fill in data/invitation.ts when available. */}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-12"
        >
          <GoldFlourish className="h-4 w-24 text-[var(--gold)] opacity-40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
