export default function BackdropSceltaBase() {
  return (
    <div className="fn-backdrop-layer fn-choice-base" aria-hidden="true">
      {/* Base astratta (stile Intro): poche forme, colori condivisi */}
      <svg
        className="fn-backdrop-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        <rect x="0" y="0" width="100" height="100" fill="var(--fn-gate-bg)" />

        {/* sabbia (basso) */}
        <rect
          x="-16"
          y="62"
          width="70"
          height="56"
          rx="18"
          ry="18"
          fill="var(--fn-p-sand)"
          opacity="0.95"
          transform="rotate(-10 20 86)"
        />

        {/* menta (alto) */}
        <rect
          x="56"
          y="-18"
          width="58"
          height="46"
          rx="16"
          ry="16"
          fill="var(--fn-p-mint)"
          opacity="0.95"
          transform="rotate(14 86 6)"
        />

        {/* linea morbida */}
        <path
          d="M -10 28 C 18 14, 28 46, 52 30 S 84 28, 112 38"
          fill="none"
          stroke="var(--fn-p-deep)"
          strokeWidth="2.6"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* linea dura */}
        <path
          d="M -10 72 L 36 60 L 66 68 L 112 52"
          fill="none"
          stroke="var(--fn-p-red)"
          strokeWidth="3.2"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          opacity="0.9"
        />
      </svg>
    </div>
  );
}
