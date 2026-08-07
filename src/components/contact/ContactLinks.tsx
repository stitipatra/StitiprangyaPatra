import { Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router";

import { siteConfig } from "../../data/site";
import Button from "../common/Button";

const chessUrl = "https://www.chess.com/member/stitipatra";
const stravaUrl = "https://strava.app.link/zvDes3yYk5b";

function ContactLinks() {
  return (
    <section className="container pb-24">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="rounded-[var(--radius-large)] bg-[var(--color-surface-dark)] p-8 text-white shadow-[var(--shadow-medium)] sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Get in touch
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
            The easiest way is email.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            For opportunities, collaborations, projects, graduate-school
            conversations or anything genuinely interesting, feel free to reach
            out.
          </p>

          <div className="mt-8">
            <a href={`mailto:${siteConfig.email}`}>
              <Button className="bg-white text-black hover:bg-white/90">
                <Mail size={18} />
                Email me
              </Button>
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-white/50">
            <MapPin size={16} />
            Bengaluru, India
          </div>
        </article>

        <div className="grid gap-4">
          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
          >
            <div className="flex items-center justify-between">
              <FaLinkedinIn size={22} />
              <span className="text-sm text-[var(--color-text-muted)]">
                Professional
              </span>
            </div>

            <h3 className="mt-7 text-2xl font-bold">LinkedIn</h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Experience, updates and professional connections.
            </p>
          </a>

          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noreferrer"
            className="group rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
          >
            <div className="flex items-center justify-between">
              <FaGithub size={22} />
              <span className="text-sm text-[var(--color-text-muted)]">
                Code
              </span>
            </div>

            <h3 className="mt-7 text-2xl font-bold">GitHub</h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Projects, experiments and engineering work.
            </p>
          </a>

          <a
            href={stravaUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
          >
            <h3 className="text-xl font-bold">Strava</h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Running, training and the occasional painful 10K.
            </p>
          </a>

          <a
            href={chessUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-small)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
          >
            <h3 className="text-xl font-bold">Chess.com</h3>
            <p className="mt-2 text-[var(--color-text-muted)]">
              Rapid, blitz and a rating around 1600.
            </p>
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={siteConfig.resumePath} target="_blank" rel="noreferrer">
          <Button variant="secondary">
            <Download size={18} />
            Download résumé
          </Button>
        </a>

        <Link to="/projects">
          <Button variant="secondary">Explore projects</Button>
        </Link>

        <Link to="/gallery">
          <Button variant="secondary">View gallery</Button>
        </Link>
      </div>
    </section>
  );
}

export default ContactLinks;
