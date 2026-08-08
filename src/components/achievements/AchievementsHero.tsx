import { Trophy } from "lucide-react";

function AchievementsHero() {
  return (
    <section className="container pt-14 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-6xl">
        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 shadow-[var(--shadow-small)]">
          <Trophy size={18} className="text-[var(--color-primary)]" />

          <span className="text-base font-semibold">Achievements</span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[4.8rem]">
          Milestones across
          <span className="text-[var(--color-primary)]">
            {" "}
            different arenas.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
          Academic milestones, competitive sport, engineering impact, hackathons
          and community work — a few moments I&apos;m proud of.
        </p>
      </div>
    </section>
  );
}

export default AchievementsHero;
