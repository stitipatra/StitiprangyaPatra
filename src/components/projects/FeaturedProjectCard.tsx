import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

import type { ProjectItem } from "../../data/projects";
import Button from "../common/Button";

interface FeaturedProjectCardProps {
  project: ProjectItem;
  reverse?: boolean;
}

function FeaturedProjectCard({
  project,
  reverse = false,
}: FeaturedProjectCardProps) {
  return (
    <article
      className={`grid overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-medium)] lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative min-h-[360px] overflow-hidden bg-gradient-to-br from-slate-950 via-slate-800 to-blue-700">
        {project.coverImage && (
          <img
            src={project.coverImage}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-7 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {project.category}
          </p>

          <h2 className="mt-2 text-4xl font-bold tracking-[-0.05em]">
            {project.title}
          </h2>
        </div>
      </div>

      <div className="flex flex-col justify-center p-8 sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-[var(--color-surface-dark)] px-3 py-1.5 text-xs font-semibold text-white">
            {project.status}
          </span>

          {project.role && (
            <span className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold">
              {project.role}
            </span>
          )}

          <span className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold">
            {project.period}
          </span>
        </div>

        <h3 className="mt-6 text-3xl font-bold tracking-[-0.045em]">
          {project.subtitle}
        </h3>

        <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
          {project.summary}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.slice(0, 6).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-[var(--color-background)] px-3 py-1.5 text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to={`/projects/${project.id}`}>
            <Button>
              View case study
              <ArrowRight size={18} />
            </Button>
          </Link>

          {project.github && (
            <a href={project.github} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                <FaGithub size={18} />
                GitHub
              </Button>
            </a>
          )}

          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <Button variant="ghost">
                <ExternalLink size={18} />
                Live demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default FeaturedProjectCard;
