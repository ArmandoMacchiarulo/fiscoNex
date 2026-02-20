import type { ReactNode } from "react";

export function Section({
  id,
  bgImage,
  className,
  overlay = true,
  children,
}: {
  id: string;
  bgImage?: string;
  className?: string;
  overlay?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={
        "relative w-full overflow-hidden " +
        (bgImage ? "min-h-screen " : "") +
        (className ?? "")
      }
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {overlay ? (
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />
      ) : null}

      {/* contenuto: se min-h-screen centra verticalmente, altrimenti normale */}
      <div
        className={
          "relative mx-auto max-w-6xl px-6 " +
          (bgImage ? "flex min-h-screen items-center py-16" : "py-14")
        }
      >
        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
