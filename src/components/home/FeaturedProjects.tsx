import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

import Button from "../common/Button";
import Section from "../common/Section";

const featuredProjects = [
  {
    title: "VoxBridge",
    subtitle: "Offline multilingual media translation",
    description:
      "A platform for translating video, audio and documents with transcription, multilingual translation, subtitles, voice synthesis and media synchronization.",
    technologies: ["Python", "FastAPI", "Faster-Whisper", "NLLB-200", "FFmpeg"],
    path: "/projects/voxbridge",
    github: "https://github.com/stitipatra/VoxBridge",
    demo: "#",
    imageClass: "from-blue-950 via-blue-800 to-cyan-500",
    label: "AI · Media · Language",
  },
  {
    title: "ArthaMitra",
    subtitle: "AI-powered financial digital twin",
    description:
      "A financial intelligence platform that models health, behaviour and future decisions through simulations, recommendations and an AI wealth coach.",
    technologies: [
      "Python",
      "Streamlit",
      "Financial Modelling",
      "AI",
      "Data Visualization",
    ],
    path: "/projects/arthamitra",
    github: "https://github.com/stitipatra/ArthaMitra",
    demo: "#",
    imageClass: "from-slate-950 via-indigo-900 to-violet-500",
    label: "FinTech · AI · Product",
  },
];

function FeaturedProjects() {
  return (
    <Section
      eyebrow="Selected projects"
      title="Ideas turned into working products."
      description="A preview of two projects where I combined engineering, applied AI and product thinking. Full case studies will cover architecture, trade-offs, performance and lessons learned."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {featuredProjects.map((project) => (
          <article
            key={project.title}
            className="group overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-medium)]"
          >
            <div
              className={`relative flex aspect-[16/10] items-end overflow-hidden bg-gradient-to-br ${project.imageClass} p-7 text-white`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.28),transparent_35%)]" />

              <div className="relative z-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
                  {project.label}
                </p>

                <h3 className="mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-2 text-lg text-white/75">{project.subtitle}</p>
              </div>
            </div>

            <div className="p-7 sm:p-8">
              <p className="text-lg leading-8 text-[var(--color-text-muted)]">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-background)] px-3 py-1.5 text-sm font-medium"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link to={project.path}>
                  <Button>
                    View case study
                    <ArrowRight size={18} />
                  </Button>
                </Link>

                <a href={project.github} target="_blank" rel="noreferrer">
                  <Button variant="secondary">
                    <FaGithub size={18} />
                    GitHub
                  </Button>
                </a>

                {project.demo !== "#" && (
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
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/projects">
          <Button variant="secondary">
            View all projects
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default FeaturedProjects;
