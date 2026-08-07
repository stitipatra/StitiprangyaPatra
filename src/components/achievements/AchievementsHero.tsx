import { Trophy } from "lucide-react";

function AchievementsHero() {
  return (
    <section className="container py-20 sm:py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)]">
          <Trophy size={16} className="text-[var(--color-primary)]" />
          Achievements
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
          Milestones across
          <span className="text-[var(--color-primary)]">
            {" "}
            different arenas.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
          Academic milestones, competitive sport, engineering impact, hackathons
          and community work — a few moments I&apos;m proud of.
        </p>
      </div>
    </section>
  );
}

export default AchievementsHero;
