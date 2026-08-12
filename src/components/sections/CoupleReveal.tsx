import { motion } from "framer-motion";
import { invitation } from "@/data/invitation";

export default function CoupleReveal() {
  return (
    <section className="relative flex min-h-[100dvh] items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.1 }}
      >
        <p className="mb-8 text-[10px] tracking-[0.4em] uppercase">
          The Wedding Of
        </p>
        <h1 className="text-[clamp(3rem,13vw,6rem)] leading-[0.92]">
          {invitation.bride}
        </h1>
        <p className="my-6 text-2xl text-[var(--gold)]">&amp;</p>
        <h2 className="text-[clamp(3rem,13vw,6rem)] leading-[0.92]">
          {invitation.groom}
        </h2>
      </motion.div>
    </section>
  );
}
