"use client";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { AGE_DATA } from "@/lib/content";
import { SectionLabel } from "./RealityCheck";

export default function AgeAnalytics() {
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>02 — Age Analytics™</SectionLabel>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-6">
          <h2 className="text-4xl font-black md:text-6xl">
            Squad Age vs <span className="text-gradient">Reaction Time</span>
          </h2>
          <p className="max-w-sm text-sm text-white/50">
            Real data*. *Vibes only. Just like the fielding. And the bowling. And the running.
          </p>
        </div>

        <div className="mt-14 glass rounded-3xl p-8 md:p-12">
          <div className="space-y-7">
            {AGE_DATA.map((row, i) => (
              <Row key={row.label} {...row} delay={i * 0.07} />
            ))}
          </div>

          <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 md:grid-cols-3">
            <Stat k={2} suffix=".0" label="overs to warm up" />
            <Stat k={404} label="sprints not found" />
            <Stat k={60} suffix="+" label="years till retirement" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ label, value, note, delay }: { label: string; value: number; note: string; delay: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="font-semibold text-white/90">{label}</span>
        <span className="text-csk-yellow/80">{note}</span>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-csk-gold via-csk-yellow to-yellow-200"
          style={{ boxShadow: "0 0 20px rgba(255,214,10,0.6)" }}
        />
      </div>
    </div>
  );
}

function Stat({ k, suffix = "", label }: { k: number; suffix?: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const display = useTransform(mv, (v) => Math.floor(v).toString() + suffix);
  useEffect(() => {
    if (inView) {
      const c = animate(mv, k, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
      return c.stop;
    }
  }, [inView, k, mv]);
  return (
    <div ref={ref} className="rounded-2xl bg-white/[0.02] p-5">
      <motion.div className="text-4xl font-black text-gradient">{display}</motion.div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{label}</div>
    </div>
  );
}
