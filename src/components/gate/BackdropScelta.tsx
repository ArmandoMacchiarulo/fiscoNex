import React from "react";

type CSSVars = React.CSSProperties & Record<`--${string}`, string | number>;

function SceltaSvg({ variant }: { variant: "pro" | "bus" }) {
  const vars: CSSVars =
    variant === "pro"
      ? {
          "--fn-panel-bg": "var(--fn-c-primary-pro)",
          "--fn-panel-shape": "var(--fn-c-primary-bus)",
          "--fn-panel-accent": "var(--fn-c-accent-red)",
          "--fn-panel-accent-2": "var(--fn-c-accent-blue)",
          "--fn-panel-opacity": 0.92, // pannello semi-trasparente
        }
      : {
          "--fn-panel-bg": "var(--fn-c-primary-bus)",
          "--fn-panel-shape": "var(--fn-c-primary-pro)",
          "--fn-panel-accent": "var(--fn-c-accent-blue)",
          "--fn-panel-accent-2": "var(--fn-c-accent-red)",
          "--fn-panel-opacity": 0.92,
        };

  return (
    <svg
      className="fn-backdrop-svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      style={vars}
      aria-hidden="true"
    >
      {/* Panel background (serve per vedere la diagonale), semi-trasparente */}
      <rect
        x="0"
        y="0"
        width="100"
        height="100"
        fill="var(--fn-panel-bg)"
        opacity="var(--fn-panel-opacity)"
      />

      {/* forme piccole/medie */}
      <rect
        x="-10"
        y="64"
        width="44"
        height="34"
        rx="14"
        ry="14"
        fill="var(--fn-panel-shape)"
        opacity="var(--fn-shape-opacity)"
        transform="rotate(-10 12 82)"
      />
      <rect
        x="64"
        y="-12"
        width="40"
        height="36"
        rx="14"
        ry="14"
        fill="var(--fn-panel-shape)"
        opacity="var(--fn-shape-opacity)"
        transform="rotate(10 84 6)"
      />

      {/* linee sottili: accento principale del pannello */}
      <path
        d="M -8 38 C 10 28, 30 56, 52 40 S 80 30, 110 44"
        fill="none"
        stroke="var(--fn-panel-accent)"
        strokeWidth="1.6"
        strokeLinecap="round"
        opacity="var(--fn-shape-opacity)"
      />
      <path
        d="M -6 74 L 20 64 L 42 70 L 66 58 L 110 44"
        fill="none"
        stroke="var(--fn-panel-accent)"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="var(--fn-shape-opacity)"
      />

      {/* linea secondaria super sottile (accenno, non dominante) */}
      <path
        d="M 8 16 L 28 10 L 44 18 L 62 10 L 92 22"
        fill="none"
        stroke="var(--fn-panel-accent-2)"
        strokeWidth="1.05"
        strokeLinecap="round"
        opacity="0.55"
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
