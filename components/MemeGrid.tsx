"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { MEMES, type ArtKey } from "@/lib/content";
import { SectionLabel } from "./RealityCheck";
import { useRef } from "react";
import MemeArt from "./MemeArt";
import { clickPop, sadTrombone } from "@/lib/sound";

export default function MemeGrid() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>04 — The Meme Vault</SectionLabel>
        <h2 className="mt-4 text-4xl font-black md:text-6xl">
          Premium <span className="text-gradient">Roast Cards</span>
        </h2>
        <p className="mt-4 max-w-xl text-white/60">
          Inspired by real headlines from IPL 2025. Click any card. Regret follows.
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MEMES.map((m, i) => (
            <TiltCard key={m.title} index={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({
  title,
  caption,
  art,
  index,
}: {
  title: string;
  caption: string;
  art: ArtKey;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [12, -12]);
  const rotateY = useTransform(x, [-50, 50], [-12, 12]);

  const handle = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };
  const onClick = () => {
    clickPop();
    setTimeout(sadTrombone, 120);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.97 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.6 }}
      className="group relative rounded-3xl glass p-6 cursor-pointer hover:border-csk-yellow/40 transition"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-csk-yellow/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
      <div className="relative">
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <MemeArt kind={art} />
        </div>
        <div className="mt-5 flex items-center justify-between">
          <div className="text-[10px] uppercase tracking-widest text-csk-yellow/70">
            #{String(index + 1).padStart(2, "0")} · roast
          </div>
          <div className="text-[10px] text-white/40">{((index * 37 + 13) % 90) + 10}k 🔥</div>
        </div>
        <h3 className="mt-2 text-2xl font-black">{title}</h3>
        <p className="mt-2 text-sm text-white/60">{caption}</p>
      </div>
    </motion.div>
  );
}
