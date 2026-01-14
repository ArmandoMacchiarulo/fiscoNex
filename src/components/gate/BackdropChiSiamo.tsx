export default function BackdropChiSiamo() {
  return (
    <div className="fn-backdrop-layer fn-backdrop-chisiamo" aria-hidden="true">
      {/* SFONDO: Cielo (z basso) */}
      <div className="fn-layer fn-layer--cielo" />

      {/* PIANI INTERMEDI (SVG) */}
      <svg
        className="fn-layer fn-layer--piani-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        {/* =========================
            DESKTOP (default)
           ========================= */}

        {/* PIANO 9 (DESKTOP) — sand */}
        <path
          className="chisiamo-desktop p9"
          d="
            M -1 25
            L 10 20
            L 22 30
            L 34 23
            L 48 35
            L 62 25
            L 76 39
            L 90 30
            L 110 41
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-sand)"
        />

        {/* PIANO 8 (DESKTOP) — peach */}
        <path
          className="chisiamo-desktop p8"
          d="
            M -1 40
            L 6 35
            L 12 44
            L 18 35
            L 26 43
            L 34 40
            L 42 48
            L 50 43
            L 60 50
            L 70 41
            L 78 49
            L 86 44
            L 94 50
            L 102 42
            L 110 48
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-peach)"
        />

        {/* PIANO 7 (DESKTOP) — red (prima era 6a) */}
        <path
          className="chisiamo-desktop p7"
          d="
            M -1 35
            L 13 38
            L 17 43
            L 25 40
            L 35 55
            L 50 70
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-red)"
        />

        {/* PIANO 6 (DESKTOP) — darkred (prima era 6b) */}
        <path
          className="chisiamo-desktop p6"
          d="
            M -1 35
            L 2 33
            L 10 40
            L 13 48
            L 17 50
            L 25 63
            L 35 70
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-darkred)"
        />

        {/* PIANO 5 (DESKTOP) */}
        <path
          className="chisiamo-desktop p5"
          d="
            M -1 42
            L 10 58
            L 18 70
            L 55 70
            L 70 58
            L 80 63
            L 98 55
            L 110 30
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-deep)"
        />

        {/* PIANO 4 (DESKTOP) */}
        <path
          className="chisiamo-desktop p4"
          d="
            M -1 50
            L 8 60
            L 25 70
            L 55 70
            L 70 58
            L 80 63
            L 98 50
            L 110 30
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-red)"
        />

        {/* PIANO 3 (DESKTOP) */}
        <path
          className="chisiamo-desktop p3"
          d="
            M -1 55
            L 3 61
            L 13 70
            L 85 70
            L 90 58
            L 94 50
            L 98 45
            L 110 30
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-darkred)"
        />

        {/* PIANO 2 (DESKTOP) */}
        <path
          className="chisiamo-desktop p2"
          d="
            M -1 58
            L 2 63
            L 12 70
            L 85 70
            L 94 56
            L 96 60
            L 98 58
            L 110 70
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-deep)"
        />

        {/* =========================
            MOBILE (<= 840px)
            Regola: 65 è “non visibile”
            - punti desktop >= 65 restano >= 65
            - punti desktop < 65 non diventano > 64
           ========================= */}

        {/* PIANO 9 (MOBILE) — sand (meno punte) */}
        <path
          className="chisiamo-mobile p9"
          d="
            M -1 35
            L 18 33
            L 40 39
            L 64 35
            L 88 43
            L 96 39
            L 110 44
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-sand)"
        />

        {/* PIANO 8 (MOBILE) — peach (meno punte) */}
        <path
          className="chisiamo-mobile p8"
          d="
            M -1 56
            L 22 46
            L 48 56
            L 68 50
            L 76 54
            L 94 48
            L 110 56
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-peach)"
        />

        {/* PIANO 7 (MOBILE) — red (ex 6a) */}
        <path
          className="chisiamo-mobile p7"
          d="
            M -1 45
            L 13 48
            L 17 50
            L 25 56
            L 50 64
            L 50 70
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-red)"
        />

        {/* PIANO 6 (MOBILE) — darkred (ex 6b) */}
        <path
          className="chisiamo-mobile p6"
          d="
            M -1 45
            L 2 43
            L 10 50
            L 15 58
            L 17 60
            L 38 70
            L 50 70
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-darkred)"
        />

        {/* PIANO 5 (MOBILE) */}
        <path
          className="chisiamo-mobile p5"
          d="
            M -1 52
            L 4 60
            L 5 58
            L 6 60
            L 10 64
            L 18 70
            L 55 70
            L 70 64
            L 80 63
            L 98 64
            L 110 38
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-deep)"
        />

        {/* PIANO 4 (MOBILE) */}
        <path
          className="chisiamo-mobile p4"
          d="
            M -1 58
            L 8 63
            L 25 70
            L 55 70
            L 70 64
            L 80 64
            L 98 58
            L 110 38
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-red)"
        />

        {/* PIANO 3 (MOBILE) */}
        <path
          className="chisiamo-mobile p3"
          d="
            M -1 59
            L 2 62
            L 3 60
            L 4 61
            L 13 70
            L 85 70
            L 90 64
            L 94 56
            L 98 51
            L 110 36
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-darkred)"
        />

        {/* PIANO 2 (MOBILE) */}
        <path
          className="chisiamo-mobile p2"
          d="
            M -1 64
            L 2 63
            L 12 70
            L 80 70
            L 94 61
            L 96 63
            L 98 65
            L 110 70
            L 110 100
            L -10 100
            Z
          "
          fill="var(--fn-p-deep)"
        />
      </svg>

      {/* PRIMO PIANO: Mare/terra (z alto) */}
      <div className="fn-layer fn-layer--primo-piano" />
    </div>
  );
}
