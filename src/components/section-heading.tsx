import type { ReactNode } from "react";

export function SectionHeading({ index, title, intro }: { index?: string; title: string; intro?: ReactNode }) {
  return (
    <div className="section-heading">
      {index ? <span className="eyebrow">{index}</span> : null}
      <h2>{title}</h2>
      {intro ? <p>{intro}</p> : null}
    </div>
  );
}
