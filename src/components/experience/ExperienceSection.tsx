import {
  ArrowUpRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  Lightbulb,
  MapPin,
  Wrench,
} from "lucide-react";
import CompanyLogo from "./CompanyLogo";
import type { ExperienceItem } from "../../data/experience";

interface ExperienceSectionProps {
  experience: ExperienceItem;
  index: number;
}

function ExperienceSection({ experience, index }: ExperienceSectionProps) {
  return (
    <section
      id={experience.id}
      className="container scroll-mt-28 py-16 sm:py-20"
    >
      <article className="overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)]">
        <div className="grid lg:grid-cols-[0.38fr_0.62fr]">
          <div
            className={`p-8 text-white sm:p-10 ${
              experience.featured
                ? "bg-[var(--color-surface-dark)]"
                : "bg-slate-800"
            }`}
          >
            <div className="flex items-start justify-between gap-5">
              <CompanyLogo
                src={experience.logo}
                company={experience.company}
                companyShort={experience.companyShort}
                className="h-16 w-16"
              />

              <span className="text-sm font-semibold text-white/45">
                0{index + 1}
              </span>
            </div>

            <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
              {experience.type}
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
              {experience.company}
            </h2>

            <p className="mt-3 text-lg font-semibold text-blue-300">
              {experience.role}
            </p>

            <div className="mt-6 space-y-3 text-sm text-white/65">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                {experience.location}
              </div>

              <div className="flex items-center gap-2">
                <Building2 size={16} />
                {experience.period}
              </div>
            </div>

            <p className="mt-8 leading-7 text-white/70">{experience.summary}</p>

            <a
              href={experience.website}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-semibold transition hover:bg-white hover:text-black"
            >
              Visit company
              <ExternalLink size={16} />
            </a>
            {experience.projects && experience.projects.length > 0 && (
              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">
                  Key workstreams
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.projects.map((project) => (
                    <span
                      key={project}
                      className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-white/75"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="p-8 sm:p-10">
            <div>
              <div className="flex items-center gap-3">
                <CheckCircle2
                  size={20}
                  className="text-[var(--color-primary)]"
                />

                <h3 className="text-2xl font-bold tracking-[-0.04em]">
                  Impact
                </h3>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {experience.impact.map((item) => (
                  <div
                    key={item}
                    className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-[var(--color-background)] p-5"
                  >
                    <p className="leading-7 text-[var(--color-text-muted)]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-[var(--color-border)] pt-10">
              <div className="flex items-center gap-3">
                <Wrench size={20} className="text-[var(--color-primary)]" />

                <h3 className="text-2xl font-bold tracking-[-0.04em]">
                  What I worked on
                </h3>
              </div>

              <ul className="mt-6 grid gap-4">
                {experience.work.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-[var(--color-text-muted)]"
                  >
                    <ArrowUpRight
                      size={17}
                      className="mt-1.5 shrink-0 text-[var(--color-primary)]"
                    />

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 border-t border-[var(--color-border)] pt-10">
              <h3 className="text-2xl font-bold tracking-[-0.04em]">
                Technologies
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1.5 text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10 border-t border-[var(--color-border)] pt-10">
              <div className="flex items-center gap-3">
                <Lightbulb size={20} className="text-amber-500" />

                <h3 className="text-2xl font-bold tracking-[-0.04em]">
                  What I learned
                </h3>
              </div>

              <div className="mt-6 grid gap-4">
                {experience.lessons.map((lesson) => (
                  <div
                    key={lesson}
                    className="rounded-[var(--radius-medium)] border border-[var(--color-border)] p-5"
                  >
                    <p className="leading-7 text-[var(--color-text-muted)]">
                      {lesson}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default ExperienceSection;
