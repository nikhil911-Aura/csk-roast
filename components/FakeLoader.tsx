"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINES = [
  "Booting CSK strategy.exe…",
  "Loading playing XI…",
  "Negotiating with knees…",
  "Buffering powerplay…",
  "Consulting 2011 highlights…",
  "Whistling. Loudly.",
];

export default function FakeLoader() {
  const [show, setShow] = useState(true);
  const [pct, setPct] = useState(0);
  const [line, setLine] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 3200);
    const i = setInterval(() => {
      setPct((p) => (p < 87 ? p + Math.random() * 5 : 87 + Math.random() * 0.3));
    }, 100);
    const l = setInterval(() => setLine((n) => (n + 1) % LINES.length), 520);
    return () => {
      clearTimeout(t);
      clearInterval(i);
      clearInterval(l);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
          className="fixed inset-0 z-[300] flex items-center justify-center bg-black"
        >
          <div className="absolute inset-0 grid-bg opacity-40" />
          <div className="relative w-[340px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] uppercase tracking-[0.4em] text-csk-yellow/70"
            >
              csk_roast · v1.0
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="mt-4 text-3xl font-black"
            >
              <span className="text-gradient">Whistle Podu</span> ↻
            </motion.h1>
            <div className="mt-8 h-[2px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-csk-yellow"
                style={{
                  width: `${Math.min(pct, 87)}%`,
                  boxShadow: "0 0 18px #FFD60A, 0 0 32px #FFD60A",
                }}
                transition={{ ease: "linear" }}
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] font-mono text-white/50">
              <span>{Math.floor(Math.min(pct, 87))}%</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={line}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className="text-csk-yellow/80"
                >
                  {LINES[line]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
