"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 300, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 300, damping: 28, mass: 0.4 });
  const [hover, setHover] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setHidden(false);
      const t = e.target as HTMLElement;
      setHover(!!t.closest("button, a, [data-cursor='hover']"));
    };
    const leave = () => setHidden(true);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  return (
    <>
      <motion.div
        style={{ x: sx, y: sy }}
        animate={{ scale: hover ? 2.6 : 1, opacity: hidden ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="pointer-events-none fixed left-0 top-0 z-[200] -ml-3 -mt-3 h-6 w-6 rounded-full mix-blend-difference bg-csk-yellow hidden md:block"
      />
      <motion.div
        style={{ x, y }}
        animate={{ opacity: hidden ? 0 : hover ? 0 : 0.7 }}
        className="pointer-events-none fixed left-0 top-0 z-[199] -ml-1 -mt-1 h-2 w-2 rounded-full bg-white hidden md:block"
      />
    </>
  );
}
