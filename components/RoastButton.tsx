"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { clickPop } from "@/lib/sound";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function RoastButton({ children, onClick, variant = "primary", className = "" }: Props) {
  const [ripples, setRipples] = useState<{ id: number; x: number; y: number }[]>([]);

  const handle = (e: React.MouseEvent<HTMLButtonElement>) => {
    clickPop();
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples((r) => [...r, { id, x: e.clientX - rect.left, y: e.clientY - rect.top }]);
    setTimeout(() => setRipples((r) => r.filter((x) => x.id !== id)), 700);
    onClick?.();
  };

  const base =
    "relative overflow-hidden inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold transition will-change-transform";
  const styles =
    variant === "primary"
      ? "bg-csk-yellow text-black glow-yellow"
      : "glass text-white/85 hover:text-white";

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 420, damping: 18 }}
      onClick={handle}
      className={`${base} ${styles} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute block h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/50"
          style={{ left: r.x, top: r.y, animation: "ripple 650ms ease-out forwards" }}
        />
      ))}
    </motion.button>
  );
}
