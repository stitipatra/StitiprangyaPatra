import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Lightbulb,
  Target,
  Wrench,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link, useParams } from "react-router";

import ProjectVisuals from "../components/projects/ProjectVisuals";
import Button from "../components/common/Button";
import { projects } from "../data/projects";

import ProjectNavigation from "../components/projects/ProjectNavigation";
import ProjectDemo from "../components/projects/ProjectDemo";

function ProjectDetailPage() {
  const { projectSlug } = useParams();

  const project = projects.find((item) => item.id === projectSlug);

  if (!project) {
    return (
      <section className="container py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          Project not found
        </p>

        <h1 className="mt-4 text-5xl font-bold tracking-[-0.05em]">
          This project doesn&apos;t exist.
        </h1>

        <div className="mt-8">
          <Link to="/projects">
            <Button>
              <ArrowLeft size={18} />
              Back to projects
            </Button>
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="container py-20 sm:py-24">
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
        >
          <ArrowLeft size={17} />
          Back to projects
        </Link>

        <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              {project.category} · {project.period}
            </p>

            <h1 className="mt-4 text-5xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-7xl">
              {project.title}
            </h1>

            <p className="mt-5 text-2xl font-semibold tracking-[-0.03em]">
              {project.subtitle}
            </p>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
              {project.summary}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button>
                    <FaGithub size={18} />
                    GitHub
                  </Button>
                </a>
              )}

              {project.demo && (
                <a href={project.demo} target="_blank" rel="noreferrer">
                  <Button variant="secondary">
                    <ExternalLink size={18} />
                    Live demo
                  </Button>
                </a>
              )}

              {project.report && (
                <a href={project.report} target="_blank" rel="noreferrer">
                  <Button variant="secondary">
                    <FileText size={18} />
                    View project report
                  </Button>
                </a>
              )}
            </div>
          </div>

          <div className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  Status
                </p>

                <p className="mt-2 font-bold">{project.status}</p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                  Role
                </p>

                <p className="mt-2 font-bold">
                  {project.role ?? "Project Contributor"}
                </p>
              </div>

              {project.teamSize && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    Team
                  </p>

                  <p className="mt-2 font-bold">{project.teamSize}</p>
                </div>
              )}

              {project.duration && (
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-muted)]">
                    Duration
                  </p>

                  <p className="mt-2 font-bold">{project.duration}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="container pb-16">
        <div className="overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-gradient-to-br from-slate-950 via-slate-800 to-blue-700 shadow-[var(--shadow-medium)]">
          <div className="aspect-[16/8]">
            {project.coverImage && (
              <img
                src={project.coverImage}
                alt={`${project.title} cover`}
                className="h-full w-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            )}
          </div>
        </div>
      </section>

      <section className="container grid gap-6 py-16 lg:grid-cols-2">
        <article className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-small)]">
          <div className="flex items-center gap-3">
            <Target size={20} className="text-[var(--color-primary)]" />

            <h2 className="text-2xl font-bold tracking-[-0.04em]">
              The problem
            </h2>
          </div>

          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
            {project.problem}
          </p>
        </article>

        <article className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface-dark)] p-8 text-white shadow-[var(--shadow-medium)]">
          <div className="flex items-center gap-3">
            <Lightbulb size={20} className="text-blue-300" />

            <h2 className="text-2xl font-bold tracking-[-0.04em]">
              The solution
            </h2>
          </div>

          <p className="mt-5 text-lg leading-8 text-white/70">
            {project.solution}
          </p>
        </article>
      </section>

      <section className="container py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="flex items-center gap-3">
              <Wrench size={20} className="text-[var(--color-primary)]" />

              <h2 className="text-3xl font-bold tracking-[-0.04em]">
                Technology
              </h2>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold tracking-[-0.04em]">
              Highlights
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5"
                >
                  <p className="leading-7 text-[var(--color-text-muted)]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProjectVisuals project={project} />

      <ProjectDemo project={project} />

      <section className="container grid gap-8 py-16 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-[-0.04em]">Challenges</h2>

          <div className="mt-6 grid gap-4">
            {project.challenges.map((challenge) => (
              <div
                key={challenge}
                className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5"
              >
                <p className="leading-7 text-[var(--color-text-muted)]">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-[-0.04em]">
            What I learned
          </h2>

          <div className="mt-6 grid gap-4">
            {project.lessons.map((lesson) => (
              <div
                key={lesson}
                className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-[var(--color-background)] p-5"
              >
                <p className="leading-7 text-[var(--color-text-muted)]">
                  {lesson}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProjectNavigation currentProjectId={project.id} />
    </>
  );
}

export default ProjectDetailPage;
