import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

import Button from "../common/Button";
import Section from "../common/Section";

import { projects } from "../../data/projects";

const featuredProjectIds = ["voxbridge", "arthamitra"];

function FeaturedProjects() {
  const featuredProjects = featuredProjectIds
    .map((id) => projects.find((project) => project.id === id))
    .filter((project) => project !== undefined);

  return (
    <Section
      eyebrow="Projects"
      title="Ideas turned into working products."
      description="A preview of two projects where I combined engineering, applied AI and product thinking. Full case studies cover architecture, trade-offs, performance and lessons learned."
      className="py-12 sm:py-14"
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
          >
            <div className="relative flex aspect-[16/7] items-end overflow-hidden bg-gradient-to-br from-slate-950 via-slate-800 to-blue-700 text-white">
              {project.coverImage && (
                <img
                  src={project.coverImage}
                  alt={`${project.title} cover`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5" />

              <div className="relative z-10 p-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/65">
                  {project.category} · {project.tags.slice(0, 2).join(" · ")}
                </p>

                <h3 className="mt-2 text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                  {project.title}
                </h3>

                <p className="mt-1.5 text-base text-white/80">
                  {project.subtitle}
                </p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-[15px] leading-6 text-[var(--color-text-muted)]">
                {project.summary}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, 5).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-2.5 py-1 text-xs font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5">
                <Link to={`/projects/${project.id}`}>
                  <Button>
                    View case study
                    <ArrowRight size={17} />
                  </Button>
                </Link>

                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <Button variant="secondary">
                      <FaGithub size={17} />
                      GitHub
                    </Button>
                  </a>
                )}

                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    <Button variant="secondary">
                      <ExternalLink size={17} />
                      Live demo
                    </Button>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-7 flex justify-center">
        <Link to="/projects">
          <Button variant="secondary">
            View all projects
            <ArrowRight size={17} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default FeaturedProjects;
