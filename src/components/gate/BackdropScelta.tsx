import React from "react";

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

function SceltaSvg({ variant }: { variant: "pro" | "bus" }) {
  const vars: CSSVars =
    variant === "pro"
      ? {
          // Professional: palette completa
          "--fn-choice-main": "#468d8b",
          "--fn-choice-deep": "#213843",
          "--fn-choice-mint": "#74b3a8",
          "--fn-choice-sand": "#f6dac0",
          "--fn-choice-peach": "#feaf76",
          "--fn-choice-red": "#da6d58",
          "--fn-choice-darkred": "#7d3533",
        }
      : {
          // Business: meno colori — mappo gli extra (peach/red/darkred) su sand
          "--fn-choice-main": "#468d8b",
          "--fn-choice-deep": "#213843",
          "--fn-choice-mint": "#74b3a8",
          "--fn-choice-sand": "#f6dac0",
          "--fn-choice-peach": "#f6dac0",
          "--fn-choice-red": "#f6dac0",
          "--fn-choice-darkred": "#f6dac0",
        };

  return (
    <svg
      className="fn-backdrop-svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={vars}
      aria-hidden="true"
    >
      {/* background */}
      <rect x="0" y="0" width="100" height="100" fill="var(--fn-choice-main)" />

      {/* deep band */}
      <path
        d="M -10 8 C 22 18, 34 0, 58 12 S 92 34, 112 18 L 112 -10 L -10 -10 Z"
        fill="var(--fn-choice-deep)"
        opacity="0.9"
      />

      {/* mint soft blob */}
      <path
        d="M -8 58 C 10 40, 36 46, 52 58 C 66 68, 88 66, 112 50 L 112 112 L -8 112 Z"
        fill="var(--fn-choice-mint)"
        opacity="0.8"
      />

      {/* shared sand geometry */}
      <rect
        x="-10"
        y="62"
        width="62"
        height="50"
        rx="18"
        ry="18"
        fill="var(--fn-choice-sand)"
        opacity="0.9"
        transform="rotate(-12 16 88)"
      />

      {/* peach geometry (in business diventa sand) */}
      <rect
        x="60"
        y="-20"
        width="54"
        height="54"
        rx="16"
        ry="16"
        fill="var(--fn-choice-peach)"
        opacity="0.9"
        transform="rotate(12 88 6)"
      />

      {/* red accent (business => sand) */}
      <path
        d="M -10 38 L 20 44 L 36 58 L 56 80 L 112 112 L -10 112 Z"
        fill="var(--fn-choice-red)"
        opacity="0.7"
      />

      {/* darkred tiny accent (business => sand) */}
      <path
        d="M 18 50 L 28 54 L 36 66 L 46 74 L 60 86 L 44 90 L 18 62 Z"
        fill="var(--fn-choice-darkred)"
        opacity={variant === "pro" ? 0.7 : 0.6}
      />

      {/* line: diagonal echo */}
      <path
        d="M -10 78 L 22 66 L 44 72 L 70 60 L 112 46"
        fill="none"
        stroke="var(--fn-choice-deep)"
        strokeWidth="2.2"
        opacity="0.8"
      />
    </svg>
  );
}

export default function BackdropScelta() {
  return (
    <div
      className="fn-backdrop-layer fn-choice-overlay fn-no-veil"
      aria-hidden="true"
    >
      <div className="fn-choice-panel fn-choice-panel--pro">
        <SceltaSvg variant="pro" />
      </div>

      <div className="fn-choice-panel fn-choice-panel--bus">
        <SceltaSvg variant="bus" />
      </div>
    </div>
  );
}
