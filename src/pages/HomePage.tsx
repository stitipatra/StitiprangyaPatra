import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router";

import Button from "../components/common/Button";
import { siteConfig } from "../data/site";
import ExploreDashboard from "../components/home/ExploreDashboard";

function HomePage() {
  return (
    <>
      <section className="container grid min-h-[calc(100vh-var(--navbar-height))] items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)]">
            <Sparkles size={16} className="text-[var(--color-primary)]" />

            {siteConfig.tagline}
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.94] tracking-[-0.065em] sm:text-7xl lg:text-[5.6rem]">
            Building reliable systems
            <br />
            and ambitious
            <span className="text-[var(--color-primary)]"> products.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
            {siteConfig.introduction}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)]">
            <MapPin size={17} />
            {siteConfig.location}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/projects">
              <Button>
                Explore my work
                <ArrowRight size={18} />
              </Button>
            </Link>

            <a href={siteConfig.resumePath} target="_blank" rel="noreferrer">
              <Button variant="secondary">
                <Download size={18} />
                View résumé
              </Button>
            </a>

            <Link to="/journey">
              <Button variant="ghost">My journey</Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/5] overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-medium)]">
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 via-white to-orange-100 text-center">
              <div className="px-8">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
                  Portrait placeholder
                </p>

                <p className="mt-3 text-lg font-semibold">
                  Your main photograph will go here
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-[var(--color-border)] bg-white px-5 py-4 shadow-[var(--shadow-small)] sm:-left-8">
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Currently
            </p>

            <p className="mt-1 font-bold">MTS-1 at Nielsen</p>
          </div>

          <div className="absolute -right-3 top-8 rounded-2xl bg-[var(--color-surface-dark)] px-5 py-4 text-white shadow-[var(--shadow-medium)] sm:-right-8">
            <p className="text-xs uppercase tracking-[0.18em] text-white/60">
              Focus
            </p>

            <p className="mt-1 font-bold">Systems + AI</p>
          </div>
        </div>
      </section>
      <ExploreDashboard />
    </>
  );
}

export default HomePage;
