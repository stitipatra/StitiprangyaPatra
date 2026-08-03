import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

function Section({ eyebrow, title, description, children }: SectionProps) {
  return (
    <section className="container py-24">
      <div className="mb-12 max-w-3xl">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {eyebrow}
          </p>
        )}

        <h2 className="text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}

export default Section;
