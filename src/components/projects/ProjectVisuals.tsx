import { Images } from "lucide-react";

import type { ProjectItem } from "../../data/projects";

interface ProjectVisualsProps {
  project: ProjectItem;
}

function ProjectVisuals({ project }: ProjectVisualsProps) {
  const visuals =
    project.screenshots && project.screenshots.length > 0
      ? project.screenshots
      : project.coverImage
        ? [project.coverImage]
        : [];

  if (visuals.length === 0) {
    return null;
  }

  return (
    <section className="container py-16">
      <article className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] sm:p-8">
        <div className="flex items-center gap-3">
          <Images size={20} className="text-[var(--color-primary)]" />

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Product gallery
            </p>

            <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em]">
              Screenshots & product views
            </h2>
          </div>
        </div>

        <div
          className={`mt-8 grid gap-5 ${
            visuals.length === 1 ? "grid-cols-1" : "md:grid-cols-2"
          }`}
        >
          {visuals.map((visual, index) => (
            <div
              key={`${visual}-${index}`}
              className="overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-[var(--color-background)]"
            >
              <img
                src={visual}
                alt={`${project.title} visual ${index + 1}`}
                className={`w-full object-contain transition duration-500 hover:scale-[1.01] ${
                  visuals.length === 1 ? "max-h-[620px]" : "aspect-video"
                }`}
              />
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default ProjectVisuals;
