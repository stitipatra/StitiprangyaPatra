import { Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { siteConfig } from "../../data/site";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-[var(--color-border)]">
      <div className="container grid gap-10 py-12 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold tracking-[-0.03em]">
            {siteConfig.name}
          </h2>

          <p className="mt-3 max-w-md text-[var(--color-text-muted)]">
            Software engineer building reliable systems, useful products and
            meaningful experiences.
          </p>

          <div className="mt-5 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <MapPin size={16} />
            {siteConfig.location}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-[var(--color-border)] p-3 transition hover:-translate-y-1 hover:bg-white"
            >
              <FaGithub size={18} />
            </a>

            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-[var(--color-border)] p-3 transition hover:-translate-y-1 hover:bg-white"
            >
              <FaLinkedinIn size={18} />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Email"
              className="rounded-full border border-[var(--color-border)] p-3 transition hover:-translate-y-1 hover:bg-white"
            >
              <Mail size={18} />
            </a>

            <a
              href={siteConfig.resumePath}
              target="_blank"
              rel="noreferrer"
              aria-label="View résumé"
              className="flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-3 text-sm font-semibold transition hover:-translate-y-1 hover:bg-white"
            >
              <Download size={17} />
              Résumé
            </a>
          </div>

          <p className="text-sm text-[var(--color-text-muted)]">
            © {currentYear} {siteConfig.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
