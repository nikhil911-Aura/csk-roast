"use client";
import { useLayoutEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import gsap from "gsap";
import RoastButton from "./RoastButton";
import { whoosh } from "@/lib/sound";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  const root = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: root, offset: ["start start", "end start"] });
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const sceneScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".h-badge", { y: -20, opacity: 0, duration: 0.6 })
        .from(".h-word", { y: 80, opacity: 0, stagger: 0.08, duration: 1 }, "-=0.2")
        .from(".h-sub", { y: 20, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".h-cta > *", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4");
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative min-h-screen w-full overflow-hidden grid-bg noise">
      <motion.div style={{ y: sceneY, scale: sceneScale }} className="absolute inset-0">
        <HeroScene />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black pointer-events-none" />

      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center"
      >
        <div className="h-badge mb-8 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-csk-yellow">
          <span className="h-1.5 w-1.5 rounded-full bg-csk-yellow animate-pulse" />
          A Cinematic CSK Roast · Powered by Cope
        </div>

        <h1 className="text-[2.6rem] sm:text-6xl font-black leading-[0.9] tracking-tight md:text-8xl">
          <span className="block overflow-hidden">
            <span className="h-word inline-block">Five</span>{" "}
            <span className="h-word inline-block">Trophies.</span>
          </span>
          <span className="block overflow-hidden">
            <span className="h-word inline-block text-gradient">Zero</span>{" "}
            <span className="h-word inline-block text-gradient">Knees.</span>
          </span>
        </h1>

        <p className="h-sub mt-6 max-w-2xl text-balance text-base text-white/70 sm:text-lg md:text-2xl px-2">
          Whistle Podu loud enough and maybe the playing XI will wake up. <br className="hidden md:block" />
          <span className="text-csk-yellow/80">Average squad age: yes.</span>
        </p>

        <div className="h-cta mt-10 flex flex-wrap items-center justify-center gap-4">
          <RoastButton
            onClick={() => {
              whoosh();
              document.getElementById("reality")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Expose Them →
          </RoastButton>
          <RoastButton
            variant="ghost"
            onClick={() => document.getElementById("trophy")?.scrollIntoView({ behavior: "smooth" })}
          >
            Cry in 2011
          </RoastButton>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs text-white/40"
        >
          scroll for the autopsy ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
