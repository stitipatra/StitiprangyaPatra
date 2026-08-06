import { BriefcaseBusiness, MapPin } from "lucide-react";

function ExperienceHero() {
  return (
    <section className="container py-20 sm:py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)]">
          <BriefcaseBusiness
            size={16}
            className="text-[var(--color-primary)]"
          />
          Professional experience
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
          Building systems that
          <span className="text-[var(--color-primary)]">
            {" "}
            hold up in production.
          </span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
          My experience spans backend engineering, distributed data platforms,
          financial systems, applied AI and machine learning. Across each role,
          I&apos;ve focused on building dependable systems, improving
          performance and turning complex requirements into practical software.
        </p>

        <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)]">
          <MapPin size={17} />
          Bengaluru, India
        </div>
      </div>
    </section>
  );
}

export default ExperienceHero;
