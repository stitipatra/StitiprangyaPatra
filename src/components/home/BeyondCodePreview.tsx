import {
  ArrowRight,
  Brain,
  Dumbbell,
  Footprints,
  HeartHandshake,
  Timer,
  Trophy,
} from "lucide-react";
import { Link } from "react-router";

import Button from "../common/Button";
import Section from "../common/Section";

const items = [
  {
    icon: Trophy,
    title: "State-level Football",
    text: "Competed at the state level in football, developing teamwork, decision-making under pressure and the consistency to perform across long seasons.",
  },
  {
    icon: Footprints,
    title: "Distance Running",
    text: "District-level athletics and long-distance running, with a 10K personal best of 38:30. Running remains one of my clearest lessons in discipline and sustained progress.",
  },
  {
    icon: Brain,
    title: "Competitive Chess",
    text: "Maintained a rating around 1600 on Chess.com, sharpening pattern recognition, calculation and the patience to work through complex positions.",
  },
  {
    icon: Dumbbell,
    title: "Training & Fitness",
    text: "Strength training, football and endurance work remain a consistent part of my routine and shape how I approach long-term improvement.",
  },
];

function BeyondCodePreview() {
  return (
    <Section
      eyebrow="Beyond code"
      title="Competition shaped how I work."
      description="Football, athletics, running, chess and training taught me how to stay disciplined, adapt under pressure and keep improving over long periods."
    >
      <div className="mb-8 flex flex-wrap gap-3">
        <a
          href="https://strava.app.link/zvDes3yYk5b"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
        >
          <Timer size={16} className="text-[var(--color-primary)]" />
          10K PB · 38:30
        </a>

        <a
          href="https://www.icfn.in/static/v2/2019/11/14/2016.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
        >
          <HeartHandshake size={16} className="text-rose-600" />
          ₹52,500 raised for Tamana
        </a>

        <a
          href="https://www.chess.com/member/stitipatra"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
        >
          <Brain size={16} className="text-violet-600" />
          Chess.com · ~1600
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-2 hover:shadow-[var(--shadow-medium)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-background)]">
                <Icon size={22} />
              </div>

              <h3 className="mt-6 text-2xl font-bold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-[var(--color-text-muted)]">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href="https://strava.app.link/zvDes3yYk5b"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            View my Strava
            <ArrowRight size={18} />
          </Button>
        </a>

        <Link to="/life">
          <Button variant="secondary">
            Explore beyond code
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default BeyondCodePreview;
