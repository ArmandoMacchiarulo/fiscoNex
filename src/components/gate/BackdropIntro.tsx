export default function BackdropIntro() {
  return (
    <div className="fn-backdrop-layer" aria-hidden="true">
      {/* sfondo pieno */}
      <svg
        className="fn-backdrop-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* BACKGROUND */}
        <rect x="0" y="0" width="100" height="100" fill="var(--fn-gate-bg)" />

        {/* =========================================
            SOLO 2 FORME (morbide) + 2 LINEE
            - NIENTE rosso in intro
            - tutto parametrizzabile modificando i numeri
           ========================================= */}

        {/* FORMA 1: quadrato arrotondato “sabbia” (in basso a sinistra) */}
        <rect
          x="-12"
          y="60"
          width="62"
          height="62"
          rx="18"
          ry="18"
          fill="var(--fn-p-sand)"
          opacity="0.90"
          transform="rotate(-12 18 82)"
        />

        {/* FORMA 2: quadrato arrotondato “pesca” (in alto a destra) */}
        <rect
          x="62"
          y="-18"
          width="52"
          height="52"
          rx="16"
          ry="16"
          fill="var(--fn-p-peach)"
          opacity="0.78"
          transform="rotate(14 88 8)"
        />

        {/* LINEA 1: morbida a S (menta) */}
        <path
          d="M -10 32 C 12 18, 26 46, 48 32 S 78 28, 110 40"
          fill="none"
          stroke="var(--fn-p-mint)"
          strokeWidth="3.2"
          strokeLinecap="round"
          opacity="0.52"
        />

        {/* LINEA 2: dura “a Z” (profondo) */}
        <path
          d="M -10 69.5 L 44 58 L 74 66 L 110 52"
          fill="none"
          stroke="var(--fn-p-deep)"
          strokeWidth="3"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
