import { useEffect, useState } from "react";

import { experiences } from "../../data/experience";

function ExperienceTimelineNav() {
  const [activeExperienceId, setActiveExperienceId] = useState(
    experiences[0]?.id ?? "",
  );

  const scrollToExperience = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    experiences.forEach((experience) => {
      const element = document.getElementById(experience.id);

      if (!element) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveExperienceId(experience.id);
          }
        },
        {
          rootMargin: "-35% 0px -55% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className="sticky top-[var(--navbar-height)] z-40 border-y border-[var(--color-border)] bg-[var(--color-background)]/90 py-3 backdrop-blur-xl">
      <div className="container">
        <div className="overflow-x-auto rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-2 shadow-[var(--shadow-small)]">
          <div className="flex min-w-max gap-2">
            {experiences.map((experience, index) => {
              const isActive = activeExperienceId === experience.id;

              return (
                <button
                  key={experience.id}
                  type="button"
                  onClick={() => scrollToExperience(experience.id)}
                  className={`group flex min-w-[190px] items-center gap-3 rounded-2xl px-4 py-3 text-left transition ${
                    isActive
                      ? "bg-[var(--color-surface-dark)] text-white"
                      : "hover:bg-[var(--color-background)]"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition ${
                      isActive
                        ? "bg-[var(--color-primary)] text-white"
                        : "bg-[var(--color-surface-dark)] text-white group-hover:bg-[var(--color-primary)]"
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <span>
                    <span className="block text-sm font-bold">
                      {experience.companyShort}
                    </span>

                    <span
                      className={`mt-1 block text-xs ${
                        isActive
                          ? "text-white/60"
                          : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      {experience.period}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTimelineNav;
