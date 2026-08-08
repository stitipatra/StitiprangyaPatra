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
    text: "Competed at the state level in football and later represented BITS Pilani, learning teamwork, consistency and decision-making under pressure.",
  },
  {
    icon: Footprints,
    title: "Distance Running",
    text: "District-level athletics and long-distance running, with a 10K personal best of 38:30.",
  },
  {
    icon: Brain,
    title: "Competitive Chess",
    text: "Maintained a rating around 1600 on Chess.com, sharpening pattern recognition, calculation and patience.",
  },
  {
    icon: Dumbbell,
    title: "Training & Fitness",
    text: "Strength training, football and endurance work remain a consistent part of how I train and reset.",
  },
];

function BeyondCodePreview() {
  return (
    <Section
      eyebrow="Beyond code"
      title="Competition shaped how I work."
      description="Sport, running, chess and training taught me how to stay disciplined, adapt under pressure and keep improving over long periods."
    >
      <div className="mb-7 flex flex-wrap gap-2.5">
        <a
          href="https://strava.app.link/zvDes3yYk5b"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3.5 py-2 text-xs font-semibold shadow-[var(--shadow-small)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-medium)]"
        >
          <Timer size={15} className="text-[var(--color-primary)]" />
          10K PB · 38:30
        </a>

        <a
          href="https://www.icfn.in/static/v2/2019/11/14/2016.pdf"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3.5 py-2 text-xs font-semibold shadow-[var(--shadow-small)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-medium)]"
        >
          <HeartHandshake size={15} className="text-rose-600" />
          ₹52,500 raised for Tamana
        </a>

        <a
          href="https://www.chess.com/member/stitipatra"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-3.5 py-2 text-xs font-semibold shadow-[var(--shadow-small)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-medium)]"
        >
          <Brain size={15} className="text-violet-600" />
          Chess.com · ~1600
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <article
              key={item.title}
              className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-background)]">
                <Icon size={19} />
              </div>

              <h3 className="mt-5 text-lg font-bold tracking-[-0.04em]">
                {item.title}
              </h3>

              <p className="mt-3 text-[15px] leading-7 text-[var(--color-text-muted)]">
                {item.text}
              </p>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://strava.app.link/zvDes3yYk5b"
          target="_blank"
          rel="noreferrer"
        >
          <Button>
            View my Strava
            <ArrowRight size={17} />
          </Button>
        </a>

        <Link to="/life">
          <Button variant="secondary">
            Explore beyond code
            <ArrowRight size={17} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default BeyondCodePreview;
