import { Code2, Dumbbell, Layers3 } from "lucide-react";

import { siteConfig } from "../../data/site";
import Section from "../common/Section";

const aboutItems = [
  {
    title: "Engineering",
    icon: Code2,
    text: siteConfig.about,
    accent: "bg-blue-100 text-blue-700",
  },
  {
    title: "Building",
    icon: Layers3,
    text: siteConfig.aboutContinued,
    accent: "bg-violet-100 text-violet-700",
  },
  {
    title: "Beyond Code",
    icon: Dumbbell,
    text: siteConfig.aboutPersonal,
    accent: "bg-orange-100 text-orange-700",
  },
];

function AboutPreview() {
  return (
    <Section
      eyebrow="About"
      title="More than one dimension."
      description="Engineering is the core of what I do, but the way I build is shaped just as much by curiosity, competition and consistency."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {aboutItems.map((item, index) => {
          const Icon = item.icon;
          const isDark = index === 1;

          return (
            <article
              key={item.title}
              className={`rounded-[var(--radius-large)] border border-[var(--color-border)] p-6 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] ${
                isDark
                  ? "bg-[var(--color-surface-dark)] text-white"
                  : "bg-white"
              }`}
            >
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                  isDark ? "bg-white/10 text-white" : item.accent
                }`}
              >
                <Icon size={19} />
              </div>

              <p
                className={`mt-6 text-xs font-semibold uppercase tracking-[0.16em] ${
                  isDark ? "text-white/50" : "text-[var(--color-primary)]"
                }`}
              >
                0{index + 1}
              </p>

              <h3 className="mt-2 text-xl font-bold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p
                className={`mt-4 text-[15px] leading-7 ${
                  isDark ? "text-white/70" : "text-[var(--color-text-muted)]"
                }`}
              >
                {item.text}
              </p>
            </article>
          );
        })}
      </div>
    </Section>
  );
}

export default AboutPreview;
