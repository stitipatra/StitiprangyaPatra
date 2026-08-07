import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { projects } from "../../data/projects";
import FeaturedProjectCard from "./FeaturedProjectCard";
import ProjectCard from "./ProjectCard";

const categoryOptions = [
  "All",
  "AI",
  "Backend",
  "Data",
  "FinTech",
  "Mathematics",
  "Signal Processing",
  "Product",
];

function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const featuredProjects = projects.filter((project) => project.featured);

  const otherProjects = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return projects
      .filter((project) => !project.featured)
      .filter((project) => {
        const matchesCategory =
          activeCategory === "All" ||
          project.category === activeCategory ||
          project.tags.some(
            (tag) => tag.toLowerCase() === activeCategory.toLowerCase(),
          );

        const matchesSearch =
          normalizedSearch.length === 0 ||
          project.title.toLowerCase().includes(normalizedSearch) ||
          project.subtitle.toLowerCase().includes(normalizedSearch) ||
          project.summary.toLowerCase().includes(normalizedSearch) ||
          project.category.toLowerCase().includes(normalizedSearch) ||
          project.tags.some((tag) =>
            tag.toLowerCase().includes(normalizedSearch),
          ) ||
          project.technologies.some((technology) =>
            technology.toLowerCase().includes(normalizedSearch),
          );

        return matchesCategory && matchesSearch;
      });
  }, [activeCategory, searchQuery]);

  return (
    <>
      <section className="container pb-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Featured projects
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            The projects I&apos;d start with.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            Two projects where engineering, product thinking and applied AI came
            together most strongly.
          </p>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="container pb-24">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            More projects
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            Engineering across different domains.
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            Academic and engineering projects spanning backend development,
            mathematics, signal processing and system modelling.
          </p>
        </div>

        <div className="mb-6 max-w-xl">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>

          <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 shadow-[var(--shadow-small)]">
            <Search
              size={18}
              className="shrink-0 text-[var(--color-text-muted)]"
            />

            <input
              id="project-search"
              type="search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search by project, technology or topic..."
              className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--color-text-muted)]"
            />
          </div>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categoryOptions.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                    : "border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {otherProjects.length === 0 && (
          <div className="rounded-[var(--radius-large)] border border-dashed border-[var(--color-border)] bg-white p-12 text-center">
            <p className="text-lg font-semibold">No matching projects.</p>

            <p className="mt-2 text-[var(--color-text-muted)]">
              Try another category or search term.
            </p>
          </div>
        )}
      </section>
    </>
  );
}

export default ProjectsGrid;
