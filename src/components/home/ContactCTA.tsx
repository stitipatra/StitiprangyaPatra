import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { siteConfig } from "../../data/site";
import Button from "../common/Button";
import Section from "../common/Section";

function ContactCTA() {
  return (
    <Section className="pb-24">
      <div className="overflow-hidden rounded-[40px] bg-neutral-950 px-8 py-16 text-center text-white shadow-[var(--shadow-medium)] md:px-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-neutral-400">
          Let&apos;s build something meaningful
        </p>

        <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-[-0.05em] md:text-6xl">
          Great software starts with
          <br />
          great conversations.
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-neutral-300">
          Whether it&apos;s backend engineering, distributed systems, applied
          AI, product development or simply an interesting idea, I&apos;d be
          glad to connect.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a href={`mailto:${siteConfig.email}`}>
            <Button>
              <Mail size={18} />
              Email me
            </Button>
          </a>

          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary">
              <FaLinkedinIn size={18} />
              LinkedIn
            </Button>
          </a>

          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary">
              <FaGithub size={18} />
              GitHub
            </Button>
          </a>

          <a href={siteConfig.resumePath} target="_blank" rel="noreferrer">
            <Button variant="secondary">
              <Download size={18} />
              Résumé
            </Button>
          </a>
        </div>

        <p className="mt-16 text-sm text-neutral-500">
          Designed and developed by {siteConfig.name} using React, TypeScript
          and Tailwind CSS.
        </p>
      </div>
    </Section>
  );
}

export default ContactCTA;
