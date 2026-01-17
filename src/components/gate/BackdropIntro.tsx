export default function BackdropIntro() {
  return (
    <div className="fn-backdrop-layer" aria-hidden="true">
      <svg
        className="fn-backdrop-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* ============================
            INTRO — Gate
            - NO background rect (bg è sul main)
            - Forme piccole/medie + linee sottili
            - Opacity 0.8–0.9
           ============================ */}

        {/* --- PRIMARY (business) #93B2BE ~35% --- */}
        <rect
          x="-6"
          y="66"
          width="36"
          height="36"
          rx="12"
          ry="12"
          fill="var(--fn-c-primary-bus)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(-10 12 84)"
        />
        <rect
          x="6"
          y="-10"
          width="30"
          height="30"
          rx="10"
          ry="10"
          fill="var(--fn-c-primary-bus)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(8 21 5)"
        />

        {/* --- PRIMARY (professional) #DBD3D8 ~35% --- */}
        <rect
          x="70"
          y="6"
          width="30"
          height="30"
          rx="12"
          ry="12"
          fill="var(--fn-c-primary-pro)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(-6 85 21)"
        />
        <rect
          x="68"
          y="64"
          width="34"
          height="34"
          rx="14"
          ry="14"
          fill="var(--fn-c-primary-pro)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(10 85 81)"
        />

        {/* --- ACCENT BLUE #16425B ~15% (linee sottili) --- */}
        <path
          d="M -5 44 C 12 30, 28 58, 46 44 S 72 34, 105 48"
          fill="none"
          stroke="var(--fn-c-accent-blue)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="var(--fn-shape-opacity)"
        />
        <path
          d="M 8 86 L 34 74 L 58 82"
          fill="none"
          stroke="var(--fn-c-accent-blue)"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="var(--fn-shape-opacity)"
        />

        {/* --- ACCENT ORANGE #DA6D58 ~15% (linee sottili) --- */}
        <path
          d="M 38 -6 C 46 10, 44 18, 54 30 S 78 44, 102 36"
          fill="none"
          stroke="var(--fn-c-accent-red)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="var(--fn-shape-opacity)"
        />
      </svg>
    </div>
  );
}
