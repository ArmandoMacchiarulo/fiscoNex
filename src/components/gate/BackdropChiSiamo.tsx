export default function BackdropChiSiamo() {
  return (
    <div className="fn-backdrop-layer fn-no-veil" aria-hidden="true">
      <svg
        className="fn-backdrop-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* CHI SIAMO — Gate (lighter ~ -40% elements)
            - NO background rect (bg è sul main)
            - Linee sottili + forme piccole/medie
            - Opacity 0.8–0.9 (var --fn-shape-opacity)
        */}

        {/* --- FORME (primari) --- */}
        <rect
          x="-6"
          y="8"
          width="30"
          height="26"
          rx="12"
          fill="var(--fn-c-primary-bus)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(-8 9 20)"
        />
        <rect
          x="72"
          y="-6"
          width="30"
          height="28"
          rx="12"
          fill="var(--fn-c-primary-pro)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(10 87 8)"
        />

        <rect
          x="6"
          y="58"
          width="22"
          height="22"
          rx="10"
          fill="var(--fn-c-primary-pro)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(10 17 69)"
        />
        <rect
          x="72"
          y="62"
          width="26"
          height="26"
          rx="12"
          fill="var(--fn-c-primary-bus)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(-10 85 75)"
        />

        <rect
          x="38"
          y="14"
          width="18"
          height="18"
          rx="8"
          fill="var(--fn-c-primary-pro)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(-14 47 23)"
        />
        <rect
          x="44"
          y="68"
          width="18"
          height="18"
          rx="8"
          fill="var(--fn-c-primary-bus)"
          opacity="var(--fn-shape-opacity)"
          transform="rotate(12 53 77)"
        />

        {/* --- LINEE SOTTILI (accenti) --- */}
        <path
          d="M -8 26 C 12 12, 30 38, 50 24 S 78 16, 110 32"
          fill="none"
          stroke="var(--fn-c-accent-blue)"
          strokeWidth="1.35"
          strokeLinecap="round"
          opacity="var(--fn-shape-opacity)"
        />
        <path
          d="M -8 58 L 16 48 L 34 54 L 54 44 L 76 50 L 110 40"
          fill="none"
          stroke="var(--fn-c-accent-blue)"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="var(--fn-shape-opacity)"
        />
        <path
          d="M -8 74 L 12 66 L 30 72 L 52 60 L 72 66 L 110 58"
          fill="none"
          stroke="var(--fn-c-accent-red)"
          strokeWidth="1.15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="var(--fn-shape-opacity)"
        />

        {/* hairline dashed (solo uno) */}
        <path
          d="M 6 14 L 22 10 L 38 16 L 56 10 L 76 18 L 96 14"
          fill="none"
          stroke="var(--fn-c-accent-blue)"
          strokeWidth="0.9"
          strokeLinecap="round"
          opacity="0.55"
          strokeDasharray="2.2 2.8"
        />

        {/* --- ACCENTO puntuale (solo 2, più pulito) --- */}
        <circle
          cx="10"
          cy="50"
          r="6"
          fill="none"
          stroke="var(--fn-c-accent-blue)"
          strokeWidth="1.05"
          opacity="0.62"
        />
        <circle
          cx="90"
          cy="44"
          r="7"
          fill="none"
          stroke="var(--fn-c-accent-red)"
          strokeWidth="1.05"
          opacity="0.62"
        />
      </svg>
    </div>
  );
}
