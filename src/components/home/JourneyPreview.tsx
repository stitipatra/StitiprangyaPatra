import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

import Button from "../common/Button";
import Section from "../common/Section";

const journeyItems = [
  {
    year: "2018–2020",
    title: "DPS Bangalore East",
    description:
      "Built a strong academic foundation while competing in athletics and football.",
  },
  {
    year: "2020–2025",
    title: "BITS Pilani Goa",
    description:
      "Studied Mathematics and Electronics & Communication Engineering while exploring software, systems and AI.",
  },
  {
    year: "2023–2025",
    title: "Engineering Internships",
    description:
      "Worked across backend development, machine learning, computer vision, fintech and production systems.",
  },
  {
    year: "2025–Present",
    title: "Nielsen Media",
    description:
      "Building reliable backend systems and distributed data workflows for large-scale production workloads.",
  },
  {
    year: "Next Chapter",
    title: "Systems, Products and MS",
    description:
      "Deepening my software engineering foundations while preparing for graduate study and product-focused roles.",
  },
];

function JourneyPreview() {
  return (
    <Section
      eyebrow="Journey"
      title="A path shaped by curiosity and consistency."
      description="A quick view of the academic, professional and personal milestones that brought me here."
      className="py-16 sm:py-20"
    >
      <div className="relative mt-10">
        <div className="absolute left-5 top-0 h-full w-px bg-[var(--color-border)] md:left-0 md:top-6 md:h-px md:w-full" />

        <div className="relative grid gap-4 md:grid-cols-5">
          {journeyItems.map((item, index) => (
            <article
              key={item.title}
              className="relative pl-12 md:pl-0 md:pt-10"
            >
              <span className="absolute left-[13px] top-6 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--color-background)] bg-[var(--color-primary)] md:left-1/2 md:top-[18px] md:-translate-x-1/2" />

              <div className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                    {item.year}
                  </p>

                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--color-background)] text-xs font-bold">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-bold tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-[var(--color-text-muted)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Link to="/journey">
          <Button variant="secondary">
            View full journey
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default JourneyPreview;
