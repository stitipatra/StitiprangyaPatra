import type { ReactNode } from "react";

interface SectionProps {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

function Section({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`container py-16 sm:py-20 ${className}`}>
      {(eyebrow || title || description) && (
        <div className="mb-10 max-w-3xl">
          {eyebrow && (
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {eyebrow}
            </p>
          )}

          {title && (
            <h2 className="text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-[2.75rem]">
              {title}
            </h2>
          )}

          {description && (
            <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              {description}
            </p>
          )}
        </div>
      )}

      {children}
    </section>
  );
}

export default Section;
