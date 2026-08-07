import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";

import { achievements } from "../../data/achievements";

const categories = [
  "All",
  "Academic",
  "Sports",
  "Hackathons",
  "Community",
  "Professional",
];

function AchievementsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredAchievements = useMemo(() => {
    if (activeCategory === "All") {
      return achievements;
    }

    return achievements.filter(
      (achievement) => achievement.category === activeCategory,
    );
  }, [activeCategory]);

  return (
    <section className="container pb-24">
      <div className="mb-10 flex flex-wrap gap-3">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                  : "border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {filteredAchievements.map((achievement) => (
          <article
            key={achievement.id}
            className={`overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] ${
              achievement.featured
                ? "bg-[var(--color-surface-dark)] text-white"
                : "bg-white"
            }`}
          >
            {achievement.image && (
              <div className="aspect-[16/8] overflow-hidden bg-[var(--color-background)]">
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              </div>
            )}

            <div className="p-7 sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    achievement.featured
                      ? "bg-white/10 text-white"
                      : "bg-[var(--color-background)]"
                  }`}
                >
                  {achievement.category}
                </span>

                {achievement.year && (
                  <span
                    className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                      achievement.featured
                        ? "bg-white/10 text-white/70"
                        : "border border-[var(--color-border)] text-[var(--color-text-muted)]"
                    }`}
                  >
                    {achievement.year}
                  </span>
                )}
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-[-0.04em]">
                {achievement.title}
              </h2>

              {achievement.subtitle && (
                <p
                  className={`mt-2 font-semibold ${
                    achievement.featured
                      ? "text-blue-300"
                      : "text-[var(--color-primary)]"
                  }`}
                >
                  {achievement.subtitle}
                </p>
              )}

              <p
                className={`mt-5 leading-7 ${
                  achievement.featured
                    ? "text-white/70"
                    : "text-[var(--color-text-muted)]"
                }`}
              >
                {achievement.description}
              </p>

              {achievement.highlights && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {achievement.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                        achievement.featured
                          ? "border border-white/10 bg-white/5 text-white/75"
                          : "border border-[var(--color-border)] bg-[var(--color-background)]"
                      }`}
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              )}

              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-7 inline-flex items-center gap-2 text-sm font-semibold ${
                    achievement.featured
                      ? "text-white"
                      : "text-[var(--color-primary)]"
                  }`}
                >
                  View recognition
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AchievementsGrid;
