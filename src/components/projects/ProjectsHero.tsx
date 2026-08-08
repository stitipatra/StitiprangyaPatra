import { FolderKanban } from "lucide-react";

function ProjectsHero() {
  return (
    <section className="container pt-14 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-6xl">
        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 shadow-[var(--shadow-small)]">
          <FolderKanban
            size={18}
            className="text-[var(--color-primary)]"
          />

          <span className="text-base font-semibold">
            Selected work
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[4.8rem]">
          Projects built from
          <span className="text-[var(--color-primary)]">
            {" "}
            real problems.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
          A collection of engineering, AI, mathematical modelling and product
          projects—from offline media translation to financial simulations and
          communication systems.
        </p>
      </div>
    </section>
  );
}

export default ProjectsHero;