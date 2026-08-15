import { ExternalLink } from "lucide-react";

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

        {hasVideo && (
          <div className="mt-8 overflow-hidden rounded-[var(--radius-medium)] border border-white/10 bg-black shadow-[var(--shadow-medium)]">
            <video
              src={project.video}
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full bg-black object-contain"
            >
              Your browser does not support HTML video.
            </video>
          </div>
        )}

        {hasDemo && (
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.demo} target="_blank" rel="noreferrer">
              <Button
                variant="secondary"
                className="!border-white !bg-white !text-black hover:!bg-white/90 hover:!text-black"
              >
                <ExternalLink size={18} />
                Open live demo
              </Button>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectDemo;
