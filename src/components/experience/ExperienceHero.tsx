import { BriefcaseBusiness, MapPin } from "lucide-react";

function ExperienceHero() {
  return (
    <section className="container pt-14 pb-10 sm:pt-16 sm:pb-12">
      <div className="max-w-6xl">
        <div className="inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 shadow-[var(--shadow-small)]">
          <BriefcaseBusiness
            size={18}
            className="text-[var(--color-primary)]"
          />

          <span className="text-base font-semibold">
            Professional experience
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-6xl lg:text-[4.8rem]">
          Building systems that
          <span className="text-[var(--color-primary)]">
            {" "}
            hold up in production.
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)]">
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