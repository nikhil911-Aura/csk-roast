"use client";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REEL } from "@/lib/content";

export default function RoastReel() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".reel-panel");

      const scrollTween = gsap.to(track.current!, {
        x: () => -(track.current!.scrollWidth - window.innerWidth + 48),
        ease: "none",
        scrollTrigger: {
          trigger: root.current!,
          pin: true,
          scrub: 1,
          end: () => "+=" + (track.current!.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true,
        },
      });

      panels.forEach((p) => {
        const targets = [
          p.querySelector(".reel-num"),
          p.querySelector(".reel-title"),
          p.querySelector(".reel-body"),
        ].filter(Boolean) as Element[];
        if (!targets.length) return;
        gsap.from(targets, {
          y: 60,
          opacity: 0,
          stagger: 0.12,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: p,
            containerAnimation: scrollTween,
            start: "left 80%",
          },
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute top-6 sm:top-10 left-5 md:left-12 z-20 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-csk-yellow/80">
        07 — The Roast Reel · scroll →
      </div>
      <div
        ref={track}
        className="absolute top-0 left-0 flex h-full items-center gap-6 sm:gap-12 pl-5 md:pl-12 will-change-transform"
      >
        {REEL.map((r, i) => (
          <div
            key={r.n}
            className="reel-panel flex h-[72vh] w-[85vw] sm:w-[78vw] md:w-[60vw] shrink-0 flex-col justify-between rounded-3xl glass p-7 sm:p-10 md:p-14 relative overflow-hidden"
          >
            <div
              className="reel-num text-[7rem] sm:text-[11rem] md:text-[14rem] font-black leading-none text-csk-yellow/10 absolute -top-4 sm:-top-8 -right-2 sm:-right-4 select-none"
            >
              {r.n}
            </div>
            <div className="text-[10px] sm:text-xs uppercase tracking-widest text-csk-yellow/70">
              chapter {r.n}
            </div>
            <div className="relative">
              <h3 className="reel-title text-4xl sm:text-5xl md:text-7xl font-black leading-[0.95]">
                {r.title}
              </h3>
              <p className="reel-body mt-4 sm:mt-6 max-w-md text-base sm:text-lg text-white/65">{r.body}</p>
            </div>
            <div className="text-[10px] uppercase tracking-widest text-white/30">
              csk · roast.exe · panel {i + 1} / {REEL.length}
            </div>
          </div>
        ))}
        <div className="w-12 shrink-0" />
      </div>

      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
    </section>
  );
}
