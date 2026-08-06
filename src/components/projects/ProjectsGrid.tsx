import { useMemo, useState } from "react";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const categoryOptions = ["All", "AI", "Engineering", "Mathematics", "Product"];

function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.category.toLowerCase().includes(activeCategory.toLowerCase()),
    );
  }, [activeCategory]);

  return (
    <section className="container pb-24">
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
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="rounded-[var(--radius-large)] border border-dashed border-[var(--color-border)] bg-white p-12 text-center">
          <p className="text-lg font-semibold">
            No projects in this category yet.
          </p>
        </div>
      )}
    </section>
  );
}

export default ProjectsGrid;
