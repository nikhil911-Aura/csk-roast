"use client";
import type { ArtKey } from "@/lib/content";

// Procedural SVG roast illustrations — zero external assets, zero copyright risk.
// Each piece is an original cartoon built with CSK-yellow on dark.

const Y = "#FFD60A";
const Y2 = "#F5B301";
const D = "#0a0a0a";
const W = "#ffffff";

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 200 140" className="w-full h-40 rounded-2xl">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#161616" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor={Y} stopOpacity="0.25" />
          <stop offset="100%" stopColor={Y} stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="200" height="140" fill="url(#bg)" />
      <rect width="200" height="140" fill="url(#glow)" />
      {children}
    </svg>
  );
}

export default function MemeArt({ kind }: { kind: ArtKey }) {
  switch (kind) {
    case "scoreboard":
      return (
        <Frame>
          <rect x="30" y="35" width="140" height="70" rx="6" fill="#000" stroke={Y} strokeWidth="2" />
          <text x="100" y="75" textAnchor="middle" fontSize="28" fontWeight="900" fill={Y} fontFamily="monospace">
            103/9
          </text>
          <text x="100" y="95" textAnchor="middle" fontSize="9" fill={W} opacity="0.6" fontFamily="monospace">
            CSK vs KKR · 20 ov
          </text>
          <circle cx="40" cy="45" r="2" fill={Y} />
          <circle cx="160" cy="45" r="2" fill={Y} />
        </Frame>
      );
    case "trophy":
      return (
        <Frame>
          <path d="M70 40 L130 40 L125 80 Q100 95 75 80 Z" fill={Y} stroke={Y2} strokeWidth="2" />
          <rect x="90" y="90" width="20" height="10" fill={Y2} />
          <rect x="80" y="100" width="40" height="6" fill={Y2} />
          <text x="100" y="68" textAnchor="middle" fontSize="10" fontWeight="900" fill={D}>
            2011
          </text>
          <text x="100" y="125" textAnchor="middle" fontSize="8" fill={W} opacity="0.5">
            * dust not included
          </text>
        </Frame>
      );
    case "fortress":
      return (
        <Frame>
          <path d="M30 100 L30 60 L45 60 L45 50 L60 50 L60 60 L80 60 L80 50 L95 50 L95 60 L115 60 L115 50 L130 50 L130 60 L150 60 L150 50 L165 50 L165 60 L170 60 L170 100 Z" fill="none" stroke={Y} strokeWidth="2.5" />
          <text x="100" y="120" textAnchor="middle" fontSize="9" fill={W} opacity="0.7">
            Chepauk · vacancy: yes
          </text>
          <circle cx="100" cy="78" r="3" fill="#ff5555" />
          <text x="108" y="81" fontSize="7" fill="#ff5555">
            BREACHED
          </text>
        </Frame>
      );
    case "bandage":
      return (
        <Frame>
          <rect x="55" y="55" width="90" height="30" rx="15" fill="#f4e4c1" stroke={Y2} strokeWidth="2" transform="rotate(-15 100 70)" />
          <circle cx="80" cy="65" r="2" fill={Y2} transform="rotate(-15 100 70)" />
          <circle cx="120" cy="75" r="2" fill={Y2} transform="rotate(-15 100 70)" />
          <text x="100" y="115" textAnchor="middle" fontSize="9" fill={W} opacity="0.7">
            "Tactical" replacement #6
          </text>
        </Frame>
      );
    case "zzz":
      return (
        <Frame>
          <text x="60" y="70" fontSize="32" fill={Y} fontWeight="900">
            Z
          </text>
          <text x="85" y="85" fontSize="24" fill={Y} fontWeight="900" opacity="0.7">
            z
          </text>
          <text x="100" y="95" fontSize="18" fill={Y} fontWeight="900" opacity="0.5">
            z
          </text>
          <text x="100" y="120" textAnchor="middle" fontSize="9" fill={W} opacity="0.7">
            Powerplay in progress
          </text>
        </Frame>
      );
    case "walker":
      return (
        <Frame>
          <circle cx="100" cy="50" r="10" fill={Y} />
          <rect x="97" y="60" width="6" height="25" fill={Y} />
          <line x1="100" y1="65" x2="85" y2="80" stroke={Y} strokeWidth="3" />
          <line x1="100" y1="65" x2="115" y2="80" stroke={Y} strokeWidth="3" />
          <line x1="80" y1="85" x2="80" y2="110" stroke={W} strokeWidth="2" />
          <line x1="120" y1="85" x2="120" y2="110" stroke={W} strokeWidth="2" />
          <line x1="78" y1="110" x2="122" y2="110" stroke={W} strokeWidth="2" />
          <text x="100" y="128" textAnchor="middle" fontSize="9" fill={W} opacity="0.7">
            Playing till 60
          </text>
        </Frame>
      );
    case "heli":
      return (
        <Frame>
          <ellipse cx="100" cy="70" rx="35" ry="12" fill={Y} />
          <line x1="60" y1="55" x2="140" y2="55" stroke={W} strokeWidth="2" />
          <line x1="100" y1="55" x2="100" y2="50" stroke={W} strokeWidth="1" />
          <rect x="95" y="82" width="10" height="6" fill={Y2} />
          <text x="100" y="115" textAnchor="middle" fontSize="9" fill={W} opacity="0.7">
            ⚠ engine stalled · 2011
          </text>
        </Frame>
      );
    case "hammer":
      return (
        <Frame>
          <rect x="80" y="40" width="40" height="20" fill={Y} />
          <rect x="95" y="58" width="10" height="40" fill="#8B4513" />
          <text x="100" y="125" textAnchor="middle" fontSize="9" fill={W} opacity="0.7">
            SOLD! to nostalgia
          </text>
        </Frame>
      );
    case "loading":
      return (
        <Frame>
          <rect x="40" y="65" width="120" height="10" rx="5" fill="#222" stroke={Y} strokeWidth="1" />
          <rect x="42" y="67" width="56" height="6" rx="3" fill={Y} />
          <text x="100" y="55" textAnchor="middle" fontSize="9" fill={Y} fontFamily="monospace">
            STRATEGY.EXE
          </text>
          <text x="100" y="95" textAnchor="middle" fontSize="9" fill={W} opacity="0.7" fontFamily="monospace">
            47% · ETA: 2031
          </text>
        </Frame>
      );
  }
}
