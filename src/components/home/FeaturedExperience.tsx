import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router";

import Button from "../common/Button";
import Section from "../common/Section";

function FeaturedExperience() {
  return (
    <Section
      eyebrow="Current work"
      title="Building reliable systems at scale."
      description="A concise preview of my current role at Nielsen. The full experience page will cover projects, engineering decisions, impact and lessons in much greater depth."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[var(--radius-large)] bg-[var(--color-surface-dark)] p-8 text-white shadow-[var(--shadow-medium)] sm:p-10">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/60">
            <BriefcaseBusiness size={18} />
            Current role
          </div>

          <p className="mt-10 text-sm font-semibold text-blue-300">
            Nielsen Media India
          </p>

          <h3 className="mt-3 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            Member of Technical Staff — 1
          </h3>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            I work on backend systems and distributed data workflows that
            process production workloads across multiple datasets, with a focus
            on reliability, orchestration, deterministic execution and cloud
            efficiency.
          </p>

          <div className="mt-8">
            <Link to="/experience">
              <Button className="bg-white text-black hover:bg-white/90">
                View full experience
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </article>

        <div className="grid gap-5">
          <article className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-small)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Systems
            </p>

            <h3 className="mt-3 text-2xl font-bold tracking-[-0.04em]">
              Production orchestration
            </h3>

            <p className="mt-3 leading-7 text-[var(--color-text-muted)]">
              Designing dependency-aware, retry-safe and deterministic workflows
              for large recurring data-processing workloads.
            </p>
          </article>

          <div className="grid gap-5 sm:grid-cols-2">
            <article className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-small)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
                Reliability
              </p>

              <h3 className="mt-3 text-xl font-bold tracking-[-0.04em]">
                Safer reprocessing
              </h3>

              <p className="mt-3 leading-7 text-[var(--color-text-muted)]">
                Improving recoverability through idempotent processing,
                validation windows and failure-aware execution.
              </p>
            </article>

            <article className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-small)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-emerald-600">
                Platform
              </p>

              <h3 className="mt-3 text-xl font-bold tracking-[-0.04em]">
                Cloud efficiency
              </h3>

              <p className="mt-3 leading-7 text-[var(--color-text-muted)]">
                Working across Python, Java, Airflow, AWS, SQL and Redshift to
                improve scale, latency and operational stability.
              </p>
            </article>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FeaturedExperience;
