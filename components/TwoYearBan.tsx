"use client";
import { motion } from "framer-motion";
import { SectionLabel } from "./RealityCheck";

const TIMELINE = [
  { year: "2013", text: "Spot-fixing scandal breaks. Vibes: shaken, not stirred." },
  { year: "2015", text: "Lodha Committee drops the hammer. CSK & RR suspended for two years." },
  { year: "2016", text: "Rebrand era: Rising Pune Supergiant(s). The 's' kept changing — much like the strategy." },
  { year: "2017", text: "Year two of the timeout. Whistle Podu in mute mode." },
  { year: "2018", text: "Return + trophy. Convenient narrative arc, screenwriters approve." },
];

export default function TwoYearBan() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-3xl pointer-events-none" />
      <div className="mx-auto max-w-5xl relative">
        <SectionLabel>06 — The Two-Year Timeout 🚫</SectionLabel>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-black md:text-6xl">
            Suspended. <span className="text-gradient">For Two Years.</span>
          </h2>
          <div className="rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-red-400">
            BANNED · 2016 – 2017
          </div>
        </div>
        <p className="mt-4 max-w-2xl text-white/60">
          The only IPL franchise to ever sit out two full seasons. Other teams take losses. CSK once
          took an entire <em className="text-csk-yellow not-italic">sabbatical</em>. Imagine being so
          legendary the BCCI had to ask you to <em className="text-csk-yellow not-italic">leave the chat</em>.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          <Stat k="2" v="seasons missed" />
          <Stat k="1" v="franchise rebrand required" />
          <Stat k="∞" v="copium since" />
        </div>

        <div className="mt-12 glass rounded-3xl p-8 md:p-12">
          <div className="mb-8 text-xs uppercase tracking-[0.3em] text-csk-yellow/80">
            ⚠ Timeline of the Timeout
          </div>
          <div className="relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-csk-yellow via-csk-yellow/30 to-transparent" />
            <div className="space-y-7">
              {TIMELINE.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-1 flex h-7 w-7 items-center justify-center rounded-full bg-csk-yellow text-[10px] font-black text-black">
                    {t.year.slice(2)}
                  </div>
                  <div className="text-sm font-bold text-csk-yellow">{t.year}</div>
                  <div className="text-white/75">{t.text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-5 text-sm text-white/70">
            <span className="font-bold text-white">Fun fact:</span> CSK's 2-year suspension is still
            the longest involuntary nap in IPL history. They've been making up for it by{" "}
            <span className="text-csk-yellow">napping during powerplays</span> ever since.
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-2xl glass p-6">
      <div className="text-5xl font-black text-gradient">{k}</div>
      <div className="mt-1 text-xs uppercase tracking-wider text-white/50">{v}</div>
    </div>
  );
}
