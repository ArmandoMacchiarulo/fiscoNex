import Reveal from "@/components/Reveal";

export default function HeroCurvePanel({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="fn-section relative overflow-hidden" aria-label="Hero">
      {/* rings: keep ABOVE the circle */}
      <div className="pointer-events-none absolute -left-28 top-10 z-20 h-72 w-72 rounded-full border border-black/5" />
      <div className="pointer-events-none absolute -right-24 top-20 z-20 h-80 w-80 rounded-full border border-black/5" />

      {/* content: ABOVE the circle */}
      <div
        className="relative z-20 mx-auto flex min-h-[100dvh] w-full max-w-6xl flex-col items-center px-4 text-center sm:px-6"
        style={{
          paddingTop: "calc(var(--fn-header-h) + 64px)",
          paddingBottom: "24vh",
        }}
      >
        <Reveal y={10}>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
        </Reveal>

        <Reveal delayMs={90} y={10}>
          <p className="mx-auto mt-3 w-full max-w-2xl text-center leading-relaxed fn-text-90">
            {body}
          </p>
        </Reveal>
      </div>

      {/* circle layer: BETWEEN backdrop and text 
      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{ height: "100vh" }}
      >
        <defs>
          <mask id="heroCut">
            <rect x="0" y="0" width="1440" height="900" fill="black" />
            <circle cx="720" cy="-450" r="980" fill="white" />
          </mask>
        </defs>

        <rect
          x="0"
          y="0"
          width="1440"
          height="900"
          fill="var(--fn-c-bg-base)"
          mask="url(#heroCut)"
        />
      </svg>
      */}
    </section>
  );
}
