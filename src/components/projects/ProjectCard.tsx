import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

import type { ProjectItem } from "../../data/projects";
import Button from "../common/Button";

interface ProjectCardProps {
  project: ProjectItem;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-medium)]">
      {/* PROJECT COVER */}
      <div className="relative flex aspect-[16/10] items-end overflow-hidden bg-gradient-to-br from-slate-950 via-slate-800 to-blue-600 text-white">
        {project.coverImage && (
          <img
            src={project.coverImage}
            alt={`${project.title} cover`}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
        )}

        {/* Makes text readable over any image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

        {/* Project information */}
        <div className="relative z-10 p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            {project.category}
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em]">
            {project.title}
          </h2>

          <p className="mt-2 text-lg text-white/80">{project.subtitle}</p>
        </div>
      </div>

      {/* PROJECT CONTENT */}
      <div className="p-7 sm:p-8">
        <p className="text-lg leading-8 text-[var(--color-text-muted)]">
          {project.summary}
        </p>

        {/* TECHNOLOGIES */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 6).map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 text-sm font-medium"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* ACTIONS */}
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
              <Button variant="secondary">
                <ExternalLink size={18} />
                Live Demo
              </Button>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
