import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import { Link } from "react-router";

import Button from "../common/Button";
import Section from "../common/Section";

function FeaturedExperience() {
  return (
    <Section
      eyebrow="Experience"
      title="Building reliable systems at scale."
      description="A concise preview of my current role at Nielsen. The full experience page covers projects, engineering decisions, impact and lessons in much greater depth."
      className="py-12 sm:py-14"
    >
      <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr]">
        <article className="rounded-[var(--radius-large)] bg-[var(--color-surface-dark)] p-6 text-white shadow-[var(--shadow-medium)] sm:p-7">
          <div className="flex items-center gap-3 text-white/60">
            <BriefcaseBusiness size={17} />

            <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
              Current role
            </p>
          </div>

          <p className="mt-6 text-sm font-semibold text-blue-300">
            Nielsen Media India
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-[-0.05em] sm:text-[1.9rem]">
            Member of Technical Staff — 1
          </h3>

          <p className="mt-4 max-w-xl text-[15px] leading-6 text-white/70">
            I work on backend systems and distributed data workflows that
            process production workloads across multiple datasets, with a focus
            on reliability, orchestration, deterministic execution and cloud
            efficiency.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {["Airflow", "Python", "Java", "AWS", "SQL", "Redshift"].map(
              (technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold text-white/70"
                >
                  {technology}
                </span>
              ),
            )}
          </div>

          <div className="mt-6">
            <Link to="/experience">
              <Button className="border border-blue-500 bg-blue-500 text-white hover:bg-blue-600">
                View full experience
                <ArrowRight size={17} />
              </Button>
            </Link>
          </div>
        </article>

        <div className="grid gap-4 sm:grid-cols-2">
          <article className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
              Systems
            </p>

            <h3 className="mt-2 text-lg font-bold tracking-[-0.04em]">
              Production orchestration
            </h3>

            <p className="mt-2 text-[15px] leading-5 text-[var(--color-text-muted)]">
              Designing dependency-aware, retry-safe and deterministic workflows
              for large recurring data-processing workloads.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                Airflow
              </span>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                Scheduling
              </span>
              <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700">
                Dependencies
              </span>
            </div>
          </article>

          <article className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-violet-600">
              Reliability
            </p>

            <h3 className="mt-2 text-lg font-bold tracking-[-0.04em]">
              Safer reprocessing
            </h3>

            <p className="mt-2 text-[15px] leading-5 text-[var(--color-text-muted)]">
              Improving recoverability through idempotent processing, validation
              windows and failure-aware execution.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                Idempotency
              </span>
              <span className="rounded-full bg-violet-50 px-2.5 py-1 text-[11px] font-semibold text-violet-700">
                Validation
              </span>
            </div>
          </article>

          <article className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-emerald-600">
              Platform
            </p>

            <h3 className="mt-2 text-lg font-bold tracking-[-0.04em]">
              Cloud efficiency
            </h3>

            <p className="mt-2 text-[15px] leading-5 text-[var(--color-text-muted)]">
              Improving scale, latency and operational stability across
              production workloads running on AWS.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                AWS
              </span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                Redshift
              </span>
              <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                Cost
              </span>
            </div>
          </article>

          <article className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-orange-600">
              Automation
            </p>

            <h3 className="mt-2 text-lg font-bold tracking-[-0.04em]">
              Rollups & validation
            </h3>

            <p className="mt-2 text-[15px] leading-5 text-[var(--color-text-muted)]">
              Automating manual rollup workflows with pre- and post-run
              validation and reporting reconciliation.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-700">
                Automation
              </span>
              <span className="rounded-full bg-orange-50 px-2.5 py-1 text-[11px] font-semibold text-orange-700">
                Reporting
              </span>
            </div>
          </article>
        </div>
      </div>
    </Section>
  );
}

export default FeaturedExperience;
