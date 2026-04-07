import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        csk: {
          yellow: "#FFD60A",
          gold: "#F5B301",
          ink: "#0a0a0a",
        },
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 18s linear infinite",
        glitch: "glitch 600ms steps(2) 1",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        glitch: {
          "0%": { transform: "translate(0,0)", filter: "hue-rotate(0deg)" },
          "20%": { transform: "translate(-2px,1px)", filter: "hue-rotate(90deg)" },
          "40%": { transform: "translate(2px,-1px)" },
          "60%": { transform: "translate(-1px,2px)", filter: "hue-rotate(-60deg)" },
          "100%": { transform: "translate(0,0)" },
        },
        marquee: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
