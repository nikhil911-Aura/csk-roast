"use client";
import { COPIUM } from "@/lib/content";
import { SectionLabel } from "./RealityCheck";

export default function CopiumFeed() {
  const list = [...COPIUM, ...COPIUM];
  return (
    <section className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionLabel>05 — Live Fan Copium Feed</SectionLabel>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="text-4xl font-black md:text-6xl">
            <span className="text-gradient">Copium</span> in 4K
          </h2>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-csk-yellow/80">
            <span className="h-2 w-2 rounded-full bg-csk-yellow animate-pulse" /> Live • Streaming hopes
          </div>
        </div>

        <div className="mt-12 relative h-[420px] overflow-hidden glass rounded-3xl">
          <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-24 bg-gradient-to-b from-black to-transparent" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-black to-transparent" />
          <div className="animate-marquee px-8 py-6 space-y-4">
            {list.map((c, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-2xl bg-white/[0.03] p-4 hover:bg-white/[0.06] transition"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-csk-yellow/20 text-csk-yellow font-bold">
                  {String.fromCharCode(65 + (i % 26))}
                </div>
                <div className="flex-1">
                  <div className="text-xs text-white/40">@yellow_army_{i + 1} · {((i * 7) % 59) + 1}s</div>
                  <p className="mt-1 text-sm text-white/90">{c}</p>
                </div>
                <div className="text-xs text-white/40">♥ {(i * 113) % 999}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
