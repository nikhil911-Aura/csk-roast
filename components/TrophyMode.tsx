"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { SectionLabel } from "./RealityCheck";
import RoastButton from "./RoastButton";
import { sparkle, sadTrombone } from "@/lib/sound";

const TrophyScene = dynamic(() => import("./TrophyScene"), { ssr: false });
const TROPHIES = ["2010", "2011", "2018", "2021", "2023"];

export default function TrophyMode() {
  const [on, setOn] = useState(false);

  return (
    <section id="trophy" className="relative py-20 sm:py-28 md:py-32 px-5 sm:px-6">
      <AnimatePresence>
        {on && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 pointer-events-none bg-gradient-to-b from-csk-yellow/30 via-csk-gold/10 to-transparent"
          />
        )}
      </AnimatePresence>

      <div className="mx-auto max-w-6xl">
        <SectionLabel>03 — Trophy Memory Mode</SectionLabel>
        <h2 className="mt-4 text-3xl sm:text-4xl font-black md:text-6xl">
          Living in <span className="text-gradient">Past Tense</span>
        </h2>
        <p className="mt-4 max-w-xl text-white/60">
          A safe space. No 2020. No 2022. No 2024. No questions. Just throwbacks and therapy.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="relative h-[280px] sm:h-[360px] overflow-hidden glass rounded-3xl">
            <TrophyScene />
            <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-csk-yellow/70">
              real-time 3D · still polishing it from 2021
            </div>
          </div>

          <div className="glass rounded-3xl p-6 sm:p-10 flex flex-col justify-center">
            <RoastButton
              onClick={() => {
                setOn((s) => {
                  const next = !s;
                  if (next) sparkle();
                  else sadTrombone();
                  return next;
                });
              }}
            >
              {on ? "Back to Reality 😬" : "Activate Nostalgia Mode ✨"}
            </RoastButton>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {TROPHIES.map((y, i) => (
                <motion.div
                  key={y}
                  animate={
                    on
                      ? { scale: 1, opacity: 1, y: 0, rotate: [0, -3, 3, 0] }
                      : { scale: 0.85, opacity: 0.25, y: 6 }
                  }
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="flex flex-col items-center"
                >
                  <div className="text-5xl">🏆</div>
                  <div className="mt-1 text-xs font-bold text-csk-yellow">{y}</div>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {on && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-6 text-sm italic text-white/60"
                >
                  Beautiful, isn't it? Now imagine the present. We'll wait.
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
