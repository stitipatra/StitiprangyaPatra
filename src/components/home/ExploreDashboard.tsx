import {
  BriefcaseBusiness,
  FolderKanban,
  GraduationCap,
  Images,
  Medal,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router";

import Section from "../common/Section";

const exploreItems = [
  {
    title: "Experience",
    description:
      "Production systems, internships, engineering impact and the work behind the numbers.",
    path: "/experience",
    icon: BriefcaseBusiness,
    accent: "bg-blue-100 text-blue-700",
  },
  {
    title: "Projects",
    description:
      "VoxBridge, ArthaMitra and the products I’ve designed, built and shipped.",
    path: "/projects",
    icon: FolderKanban,
    accent: "bg-violet-100 text-violet-700",
  },
  {
    title: "Journey",
    description:
      "BITS Pilani, Mathematics, ECE, academics, exams and the path that shaped me.",
    path: "/journey",
    icon: GraduationCap,
    accent: "bg-emerald-100 text-emerald-700",
  },
  {
    title: "Achievements",
    description:
      "Hackathons, engineering milestones, football, athletics and competitions.",
    path: "/achievements",
    icon: Medal,
    accent: "bg-amber-100 text-amber-700",
  },
  {
    title: "Beyond Code",
    description:
      "Football, long-distance running, fitness, people, travel and everything else.",
    path: "/life",
    icon: Sparkles,
    accent: "bg-orange-100 text-orange-700",
  },
  {
    title: "Gallery",
    description:
      "A curated collection of friends, family, college, sports, travel and memories.",
    path: "/gallery",
    icon: Images,
    accent: "bg-rose-100 text-rose-700",
  },
];

function ExploreDashboard() {
  return (
    <Section className="py-16 sm:py-20">
      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Explore
          </p>

          <h2 className="mt-3 max-w-2xl text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            More than a résumé.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-[var(--color-text-muted)] lg:justify-self-end">
          Explore my work, projects, academic journey, achievements and the
          experiences beyond engineering that shaped how I think and build.
        </p>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {exploreItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.title}
              to={item.path}
              className="group relative overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-medium)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.accent}`}
                >
                  <Icon size={20} />
                </div>

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-base transition group-hover:border-[var(--color-text)] group-hover:bg-[var(--color-text)] group-hover:text-white">
                  ↗
                </span>
              </div>

              <h3 className="mt-6 text-xl font-bold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-2 text-[15px] leading-7 text-[var(--color-text-muted)]">
                {item.description}
              </p>

              <p className="mt-5 text-sm font-semibold text-[var(--color-primary)]">
                Open section
              </p>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}

export default ExploreDashboard;
