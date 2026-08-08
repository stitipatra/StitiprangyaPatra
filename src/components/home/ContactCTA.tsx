import { Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import { siteConfig } from "../../data/site";
import Button from "../common/Button";
import Section from "../common/Section";

function ContactCTA() {
  return (
    <Section className="pb-16 pt-10 sm:pb-20">
      <div className="overflow-hidden rounded-[32px] bg-neutral-950 px-6 py-10 text-center text-white shadow-[var(--shadow-medium)] sm:px-10 sm:py-12 md:px-14">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-neutral-400">
          Let&apos;s build something meaningful
        </p>

        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-[-0.05em] sm:text-4xl md:text-5xl">
          Great software starts with great conversations.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-neutral-300">
          Whether it&apos;s backend engineering, distributed systems, applied
          AI, product development or simply an interesting idea, I&apos;d be
          glad to connect.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${siteConfig.email}`}>
            <Button>
              <Mail size={17} />
              Email me
            </Button>
          </a>

          <a
            href={siteConfig.socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary">
              <FaLinkedinIn size={17} />
              LinkedIn
            </Button>
          </a>

          <a
            href={siteConfig.socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary">
              <FaGithub size={17} />
              GitHub
            </Button>
          </a>

          <a href={siteConfig.resumePath} target="_blank" rel="noreferrer">
            <Button variant="secondary">
              <Download size={17} />
              Résumé
            </Button>
          </a>
        </div>

        <div className="mx-auto mt-9 h-px max-w-2xl bg-white/10" />

        <p className="mt-5 text-xs text-neutral-500">
          Designed and developed by {siteConfig.name} using React, TypeScript
          and Tailwind CSS.
        </p>
      </div>
    </Section>
  );
}

export default ContactCTA;
