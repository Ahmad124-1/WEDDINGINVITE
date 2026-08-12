"use client";

import { useState } from "react";
import OpeningCover from "@/components/sections/OpeningCover";
import CoupleReveal from "@/components/sections/CoupleReveal";
import BaraatReveal from "@/components/sections/BaraatReveal";
import VenueReveal from "@/components/sections/VenueReveal";
import ClosingReveal from "@/components/sections/ClosingReveal";
import LenisProvider from "@/components/wedding/LenisProvider";
import GSAPProvider from "@/components/wedding/GSAPProvider";

export default function WeddingInvitation() {
  const [opened, setOpened] = useState(false);

  return (
    <LenisProvider>
      <GSAPProvider>
        <div className="invitation-root wedding-texture-root">
          <div className="grain-overlay" aria-hidden="true" />
          <div className="paper-texture-v2" aria-hidden="true" />

          <main className="relative z-10 mx-auto flex min-h-dvh max-w-[430px] flex-col md:max-w-[480px]">
            <OpeningCover isOpen={opened} onOpen={() => setOpened(true)} />

            <div
              className={
                opened
                  ? "block"
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
      </GSAPProvider>
    </LenisProvider>
  );
}
