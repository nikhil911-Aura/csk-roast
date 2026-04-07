"use client";
import { useState } from "react";
import { setMuted, clickPop, sadTrombone } from "@/lib/sound";

export default function SoundToggle() {
  const [on, setOn] = useState(true);
  const [clicks, setClicks] = useState(0);

  const handle = () => {
    const next = !on;
    setOn(next);
    setMuted(!next);
    if (next) clickPop();
    setClicks((c) => c + 1);
    if (clicks + 1 === 7) setTimeout(sadTrombone, 100);
  };

  return (
    <button
      onClick={handle}
      title={on ? "Sound: ON (roast mode)" : "Sound: OFF"}
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full glass text-csk-yellow text-lg hover:scale-110 active:scale-90 transition"
    >
      {on ? "🔊" : "🔇"}
      {clicks >= 7 && (
        <span className="absolute -top-9 right-0 whitespace-nowrap rounded-md bg-csk-yellow px-2 py-1 text-[10px] font-bold text-black">
          easter egg unlocked 🥚
        </span>
      )}
    </button>
  );
}
