import { FolderKanban } from "lucide-react";

function ProjectsHero() {
  return (
    <section className="container py-20 sm:py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)]">
          <FolderKanban size={16} className="text-[var(--color-primary)]" />
          Selected work
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
          Projects built from
          <span className="text-[var(--color-primary)]"> real problems.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
          A collection of engineering, AI, mathematical modelling and product
          projects—from offline media translation to financial simulations and
          communication systems.
        </p>
      </div>
    </section>
  );
}

export default ProjectsHero;
