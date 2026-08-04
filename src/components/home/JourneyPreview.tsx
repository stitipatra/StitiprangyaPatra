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
    >
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-[var(--color-border)] md:left-0 md:top-5 md:h-px md:w-full" />

        <div className="grid gap-8 md:grid-cols-5">
          {journeyItems.map((item, index) => (
            <article
              key={item.title}
              className="relative pl-12 md:pl-0 md:pt-12"
            >
              <span className="absolute left-[9px] top-1 flex h-4 w-4 items-center justify-center rounded-full border-4 border-[var(--color-background)] bg-[var(--color-primary)] md:left-0 md:top-[13px]" />

              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary)]">
                {item.year}
              </p>

              <h3 className="mt-3 text-xl font-bold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-[var(--color-text-muted)]">
                {item.description}
              </p>

              <span className="mt-5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-white text-sm font-semibold">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 flex justify-center">
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
