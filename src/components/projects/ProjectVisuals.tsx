import { Images, Workflow } from "lucide-react";

import type { ProjectItem } from "../../data/projects";

interface ProjectVisualsProps {
  project: ProjectItem;
}

function ProjectVisuals({ project }: ProjectVisualsProps) {
  const hasScreenshots = project.screenshots && project.screenshots.length > 0;

  return (
    <section className="container py-16">
      <div className="grid gap-8">
        <article className="overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)]">
          <div className="flex items-center gap-3 border-b border-[var(--color-border)] p-6">
            <Workflow size={20} className="text-[var(--color-primary)]" />

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                System view
              </p>

              <h2 className="mt-1 text-2xl font-bold tracking-[-0.04em]">
                Architecture & workflow
              </h2>
            </div>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-800 to-blue-700 p-8 text-center text-white">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                Architecture image placeholder
              </p>

              <p className="mx-auto mt-4 max-w-xl text-lg leading-8 text-white/70">
                We&apos;ll add the real architecture diagram here during the
                visual-polish phase.
              </p>
            </div>
          </div>
        </article>

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

          {hasScreenshots ? (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {project.screenshots?.map((screenshot, index) => (
                <div
                  key={`${screenshot}-${index}`}
                  className="overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-[var(--color-background)]"
                >
                  <img
                    src={screenshot}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="aspect-video h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {[1, 2, 3, 4].map((item) => (
                <div
                  key={item}
                  className="flex aspect-video items-center justify-center rounded-[var(--radius-medium)] border border-dashed border-[var(--color-border)] bg-[var(--color-background)] p-6 text-center"
                >
                  <div>
                    <p className="font-semibold">Screenshot {item}</p>

                    <p className="mt-2 text-sm text-[var(--color-text-muted)]">
                      Product image coming during the asset pass.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>
      </div>
    </section>
  );
}

export default ProjectVisuals;
