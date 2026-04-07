"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EXCUSES } from "@/lib/content";
import { sadTrombone, glitchZap } from "@/lib/sound";
import RoastButton from "./RoastButton";

export default function RealityCheck() {
  const [excuse, setExcuse] = useState<string>("Click the button. We dare you.");
  const [glitch, setGlitch] = useState(0);
  const [shaking, setShaking] = useState(false);

  const generate = () => {
    let next = excuse;
    while (next === excuse) next = EXCUSES[Math.floor(Math.random() * EXCUSES.length)];
    setExcuse(next);
    setGlitch((g) => g + 1);
    glitchZap();
    setTimeout(sadTrombone, 200);
    setShaking(true);
    setTimeout(() => setShaking(false), 500);
  };

  return (
    <section id="reality" className="relative py-20 sm:py-28 md:py-32 px-5 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <SectionLabel>01 — Reality Check Engine</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl font-black md:text-6xl">
          Generate a <span className="text-gradient">CSK Excuse</span>
        </h2>
        <p className="mt-4 max-w-xl text-white/60">
          Powered by 16 years of post-match interviews, 4 trophies, and an industrial supply of denial.
        </p>

        <div className={`mt-10 glass rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden ${shaking ? "shake" : ""}`}>
          <div className="absolute -inset-32 bg-csk-yellow/5 blur-3xl pointer-events-none" />
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.p
                key={glitch}
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.45 }}
                className="text-2xl sm:text-3xl font-bold leading-tight md:text-5xl break-words"
              >
                "{excuse}"
              </motion.p>
            </AnimatePresence>

            <div className="mt-10">
              <RoastButton onClick={generate}>
                Generate Excuse <span>↻</span>
              </RoastButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-xs uppercase tracking-[0.3em] text-csk-yellow/80"
    >
      {children}
    </motion.div>
  );
}
