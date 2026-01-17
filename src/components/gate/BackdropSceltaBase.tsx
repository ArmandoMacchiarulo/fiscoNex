export default function BackdropSceltaBase() {
  return (
    <div className="fn-backdrop-layer fn-choice-base" aria-hidden="true">
      {/* Base astratta: NO background rect (bg è sul main) */}
      <svg
        className="fn-backdrop-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* piccoli blocchi (primari) */}
        <rect
          x="-8"
          y="64"
          width="32"
          height="32"
          rx="12"
          ry="12"
          fill="var(--fn-c-primary-bus)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(-10 8 80)"
        />
        <rect
          x="72"
          y="8"
          width="28"
          height="28"
          rx="12"
          ry="12"
          fill="var(--fn-c-primary-pro)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(10 86 22)"
        />

        {/* linee sottili (accenti) */}
        <path
          d="M -6 40 C 14 28, 32 58, 52 42 S 78 30, 106 46"
          fill="none"
          stroke="var(--fn-c-accent-blue)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="var(--fn-shape-opacity)"
        />
        <path
          d="M 4 78 L 26 68 L 46 74 L 68 62 L 104 50"
          fill="none"
          stroke="var(--fn-c-accent-red)"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="var(--fn-shape-opacity)"
        />

        {/* micro-dettagli (piccoli) */}
        <rect
          x="8"
          y="10"
          width="14"
          height="14"
          rx="6"
          ry="6"
          fill="var(--fn-c-primary-pro)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(-12 15 17)"
        />
        <rect
          x="78"
          y="74"
          width="16"
          height="16"
          rx="7"
          ry="7"
          fill="var(--fn-c-primary-bus)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(14 86 82)"
        />
      </svg>
    </div>
  );
}
