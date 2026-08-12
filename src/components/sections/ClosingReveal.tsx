import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";

export default function ClosingReveal() {
  return (
    <section className="relative flex min-h-[75dvh] items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.4 }}
      >
        <p className="mb-8 text-[10px] tracking-[0.45em] uppercase">
          With Love
        </p>
        <p className="text-2xl">{invitation.bride}</p>
        <p className="my-3 text-[var(--gold)]">&amp;</p>
        <p className="text-2xl">{invitation.groom}</p>
        <p className="mt-10 text-[10px] tracking-[0.35em] uppercase">
          {invitation.date}
        </p>
      </motion.div>
    </section>
  );
}
