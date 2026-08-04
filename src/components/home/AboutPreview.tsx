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
      eyebrow="About me"
      title="Engineering is only part of the story."
      description="My work, side projects, academic background and life outside code all shape how I approach difficult problems."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {aboutItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className={`rounded-[var(--radius-large)] border border-[var(--color-border)] p-7 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-medium)] sm:p-8 ${
                index === 1
                  ? "bg-[var(--color-surface-dark)] text-white"
                  : "bg-white"
              }`}
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  index === 1 ? "bg-white/10 text-white" : item.accent
                }`}
              >
                <Icon size={22} />
              </div>

              <p
                className={`mt-8 text-sm font-semibold uppercase tracking-[0.18em] ${
                  index === 1 ? "text-white/60" : "text-[var(--color-primary)]"
                }`}
              >
                0{index + 1}
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p
                className={`mt-5 leading-7 ${
                  index === 1
                    ? "text-white/70"
                    : "text-[var(--color-text-muted)]"
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
