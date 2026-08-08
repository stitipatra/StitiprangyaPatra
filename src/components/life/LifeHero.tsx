import { Sparkles } from "lucide-react";

function LifeHero() {
  return (
    <section className="container pt-14 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-6xl">
        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 shadow-[var(--shadow-small)]">
          <Sparkles size={18} className="text-[var(--color-primary)]" />

          <span className="text-base font-semibold">Beyond code</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[4.8rem]">
          The things that
          <span className="text-[var(--color-primary)]">
            {" "}
            make life interesting.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
          Football, running, chess, adventure, books and the people behind the
          memories — the parts of my life that have shaped how I think, compete
          and keep learning.
        </p>
      </div>
    </section>
  );
}

export default LifeHero;
