"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import OpeningCover from "@/components/sections/OpeningCover";
import CoupleReveal from "@/components/sections/CoupleReveal";
import BaraatReveal from "@/components/sections/BaraatReveal";
import VenueReveal from "@/components/sections/VenueReveal";
import ClosingReveal from "@/components/sections/ClosingReveal";

export default function WeddingInvitation() {
  const [opened, setOpened] = useState(false);

  return (
    <div className="invitation-root">
      <div className="paper-texture" aria-hidden="true" />
      <div className="grain-overlay" aria-hidden="true" />

      <main className="relative z-10 mx-auto flex min-h-dvh max-w-[430px] flex-col md:max-w-[480px]">
        <AnimatePresence>
          {!opened && (
            <OpeningCover key="cover" onOpen={() => setOpened(true)} />
          )}
        </AnimatePresence>

        <div
          className={
            opened
              ? "flex flex-col"
              : "pointer-events-none h-0 overflow-hidden"
          }
        >
          <CoupleReveal />
          <BaraatReveal />
          <VenueReveal />
          <ClosingReveal />
        </div>
      </main>
    </div>
  );
}
