export default function BackdropPro() {
  return (
    <div className="fn-backdrop-layer" aria-hidden="true">
      <svg
        className="fn-backdrop-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Base is applied by page background (var --fn-page-bg). This SVG draws only overlays. */}

        {/* ======================
            Soft shapes (CENTERED)
            bus 50%  -> two shapes
            pro 35%  -> one shape
            blue 5%  -> one thin line
            red 10%  -> one thin arc
           ====================== */}

        {/* BUS shape 1 (center-left) */}
        <path
          d="M360 290C420 210 560 180 670 220C780 260 820 370 760 450C700 530 560 560 450 520C340 480 300 370 360 290Z"
          fill="var(--fn-c-primary-bus)"
          opacity="0.8"
        />

        {/* BUS shape 2 (center-right / lower) */}
        <path
          d="M850 470C920 390 1060 360 1170 410C1280 460 1310 590 1220 660C1130 730 980 740 880 690C780 640 780 550 850 470Z"
          fill="var(--fn-c-primary-bus)"
          opacity="0.8"
        />

        {/* PRO shape (center-top) */}
        <path
          d="M650 110C760 70 930 90 1010 170C1090 250 1030 360 910 400C790 440 640 420 570 340C500 260 540 150 650 110Z"
          fill="var(--fn-c-primary-pro)"
          opacity="0.8"
        />

        {/* BLUE line (thin, subtle, centered) */}
        <path
          d="M220 520C380 420 520 410 670 470C820 530 980 560 1220 500"
          fill="none"
          stroke="var(--fn-c-accent-blue)"
          strokeOpacity="0.8"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* RED arc (slightly more present than blue, centered high) */}
        <path
          d="M430 210C580 120 760 110 920 160C1080 210 1180 300 1230 360"
          fill="none"
          stroke="var(--fn-c-accent-red)"
          strokeOpacity="0.8"
          strokeWidth="14"
          strokeLinecap="round"
        />

        {/* Very light grid/diagonal lines (premium, minimal) */}
        <path
          d="M0 160L1440 820M0 380L1440 1040M0 -20L1440 640"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}
