import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";

export default function BaraatReveal() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.2 }}
      >
        <p className="mb-5 text-[10px] tracking-[0.45em] uppercase">The</p>
        <h2 className="text-[clamp(4rem,20vw,9rem)] tracking-[0.04em]">
          {invitation.event}
        </h2>
        <div className="mx-auto my-8 h-px w-20 bg-[var(--gold)]" />
        <p className="text-sm tracking-[0.35em] uppercase">
          {invitation.date}
        </p>
      </motion.div>
    </section>
  );
}
