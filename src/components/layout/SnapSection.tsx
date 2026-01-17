import type { ReactNode } from "react";

export default function SnapSection({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`fn-section fn-vcenter ${className}`.trim()}>
      {children}
    </section>
  );
}
