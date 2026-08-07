import { GraduationCap } from "lucide-react";

function JourneyHero() {
  return (
    <section className="container py-20 sm:py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)]">
          <GraduationCap size={16} className="text-[var(--color-primary)]" />
          Journey
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
          The path that
          <span className="text-[var(--color-primary)]"> shaped me.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
          From school and sport to engineering, mathematics, internships and
          production systems — this is the timeline behind the résumé.
        </p>
      </div>
    </section>
  );
}

export default JourneyHero;
