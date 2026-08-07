import { ExternalLink, PlayCircle } from "lucide-react";

import type { ProjectItem } from "../../data/projects";
import Button from "../common/Button";

interface ProjectDemoProps {
  project: ProjectItem;
}

function ProjectDemo({ project }: ProjectDemoProps) {
  const hasDemo = Boolean(project.demo);
  const hasVideo = Boolean(project.video);

  if (!hasDemo && !hasVideo) {
    return null;
  }

  return (
    <section className="container py-16">
      <div className="overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-[var(--color-surface-dark)] p-8 text-white shadow-[var(--shadow-medium)] sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
          Demo
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
          See {project.title} in action.
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
          Explore the working product or watch a walkthrough of the main
          workflow and features.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {hasDemo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              <Button className="bg-white text-black hover:bg-white/90">
                <ExternalLink size={18} />
                Open live demo
              </Button>
            </a>
          )}

          {hasVideo && (
            <a href={project.video} target="_blank" rel="noreferrer">
              <Button
                variant="secondary"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                <PlayCircle size={18} />
                Watch walkthrough
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDemo;
