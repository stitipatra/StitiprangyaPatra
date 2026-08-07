import { Sparkles } from "lucide-react";

function LifeHero() {
  return (
    <section className="container py-20 sm:py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)]">
          <Sparkles size={16} className="text-[var(--color-primary)]" />
          Beyond code
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
          The things that
          <span className="text-[var(--color-primary)]">
            {" "}
            make life interesting.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
          Football, running, chess, adventure, books and the people behind the
          memories — the parts of my life that have shaped how I think, compete
          and keep learning.
        </p>
      </div>
    </section>
  );
}

export default LifeHero;
