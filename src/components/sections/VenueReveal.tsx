import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";

export default function VenueReveal() {
  return (
    <section className="relative flex min-h-[85dvh] items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        <p className="mb-8 text-[10px] tracking-[0.45em] uppercase">
          {invitation.venue.title}
        </p>

        <div className="mx-auto h-px w-16 bg-[var(--gold)]" />

        {/* Venue name/address intentionally empty for now. */}
      </motion.div>
    </section>
  );
}
