"use client";
import { motion } from "framer-motion";
import RoastButton from "./RoastButton";
import { sadTrombone, whoosh } from "@/lib/sound";

export default function Final() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-csk-yellow/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-3xl text-center"
      >
        <div className="text-6xl">👏</div>
        <h2 className="mt-6 text-4xl font-black md:text-6xl">
          Respect where it's <span className="text-gradient">due.</span>
        </h2>
        <p className="mt-6 text-lg text-white/60">
          Five trophies. A whole generation of memories. The yellow army built the loudest stadiums in cricket.
          But maybe — just maybe — it's time to <em className="text-csk-yellow not-italic">rebuild</em>.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <RoastButton onClick={sadTrombone}>Try Next Season →</RoastButton>
          <RoastButton variant="ghost" onClick={whoosh}>
            Share the Roast
          </RoastButton>
        </div>

        <div className="mt-20 text-xs text-white/30">
          Made with ☕ and zero malice. CSK fans, we love you. Mostly.
        </div>
      </motion.div>
    </section>
  );
}
