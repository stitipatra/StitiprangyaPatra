import { ArrowRight, Download, MapPin, Sparkles } from "lucide-react";
import { Link } from "react-router";

import Button from "../components/common/Button";
import ExploreDashboard from "../components/home/ExploreDashboard";
import FeaturedExperience from "../components/home/FeaturedExperience";
import FeaturedProjects from "../components/home/FeaturedProjects";
import AboutPreview from "../components/home/AboutPreview";
import JourneyPreview from "../components/home/JourneyPreview";
import BeyondCodePreview from "../components/home/BeyondCodePreview";
import GalleryPreview from "../components/home/GalleryPreview";
import ContactCTA from "../components/home/ContactCTA";

import { siteConfig } from "../data/site";

function HomePage() {
  return (
    <>
      <section className="container grid min-h-[calc(100vh-var(--navbar-height))] gap-12 py-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-16">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)]">
            <Sparkles size={16} className="text-[var(--color-primary)]" />

            {siteConfig.tagline}
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-[4.9rem]">
            Building reliable systems
            <br />
            and ambitious
            <span className="text-[var(--color-primary)]"> products.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            {siteConfig.introduction}
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[var(--color-text-muted)]">
            <MapPin size={17} />
            {siteConfig.location}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
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
              <Button variant="secondary">
                My journey
                <ArrowRight size={17} />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[500px] lg:mx-0 lg:justify-self-end">
          <div className="aspect-[4/4.6] overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-medium)]">
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-blue-100 via-white to-orange-100 text-center">
              <div className="px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
                  Portrait placeholder
                </p>

                <p className="mt-3 text-base font-semibold">
                  Your main photograph will go here
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 left-4 rounded-2xl border border-[var(--color-border)] bg-white px-4 py-3 shadow-[var(--shadow-small)] sm:-left-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
              Currently
            </p>

            <p className="mt-1 text-sm font-bold">MTS-1 at Nielsen</p>
          </div>

          <div className="absolute -right-2 top-8 rounded-2xl bg-[var(--color-surface-dark)] px-4 py-3 text-white shadow-[var(--shadow-medium)] sm:-right-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
              Focus
            </p>

            <p className="mt-1 text-sm font-bold">Systems + AI</p>
          </div>
        </div>
      </section>

      <ExploreDashboard />

      <FeaturedExperience />

      <FeaturedProjects />

      <AboutPreview />

      <JourneyPreview />

      <BeyondCodePreview />

      <GalleryPreview />

      <ContactCTA />
    </>
  );
}

export default HomePage;
