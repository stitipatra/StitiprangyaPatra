import { ArrowLeft, ArrowRight, Grid2X2 } from "lucide-react";
import { Link } from "react-router";

import { projects } from "../../data/projects";

interface ProjectNavigationProps {
  currentProjectId: string;
}

function ProjectNavigation({ currentProjectId }: ProjectNavigationProps) {
  const currentIndex = projects.findIndex(
    (project) => project.id === currentProjectId,
  );

  const previousProject = currentIndex > 0 ? projects[currentIndex - 1] : null;

  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <section className="container py-16">
      <div className="border-t border-[var(--color-border)] pt-10">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          Keep exploring
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <div>
            {previousProject ? (
              <Link
                to={`/projects/${previousProject.id}`}
                className="group flex h-full items-center gap-4 rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 transition hover:-translate-y-1 hover:shadow-[var(--shadow-small)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-background)] transition group-hover:bg-[var(--color-surface-dark)] group-hover:text-white">
                  <ArrowLeft size={18} />
                </span>

                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                    Previous project
                  </span>

                  <span className="mt-1 block font-bold">
                    {previousProject.title}
                  </span>
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>

          <Link
            to="/projects"
            className="flex items-center justify-center gap-2 rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white px-6 py-5 font-semibold transition hover:bg-[var(--color-surface-dark)] hover:text-white"
          >
            <Grid2X2 size={18} />
            All projects
          </Link>

          <div>
            {nextProject ? (
              <Link
                to={`/projects/${nextProject.id}`}
                className="group flex h-full items-center justify-end gap-4 rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 text-right transition hover:-translate-y-1 hover:shadow-[var(--shadow-small)]"
              >
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-text-muted)]">
                    Next project
                  </span>

                  <span className="mt-1 block font-bold">
                    {nextProject.title}
                  </span>
                </span>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-background)] transition group-hover:bg-[var(--color-surface-dark)] group-hover:text-white">
                  <ArrowRight size={18} />
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectNavigation;
