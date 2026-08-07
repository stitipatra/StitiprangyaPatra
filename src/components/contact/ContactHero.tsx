import { Mail } from "lucide-react";

function ContactHero() {
  return (
    <section className="container py-20 sm:py-24">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold shadow-[var(--shadow-small)]">
          <Mail size={16} className="text-[var(--color-primary)]" />
          Contact
        </div>

        <h1 className="mt-8 text-5xl font-bold leading-[0.95] tracking-[-0.065em] sm:text-7xl lg:text-8xl">
          Let&apos;s build something
          <span className="text-[var(--color-primary)]"> interesting.</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-[var(--color-text-muted)] sm:text-xl">
          Whether it&apos;s software engineering, backend systems, applied AI,
          research, collaboration or just a good technical conversation,
          I&apos;m always happy to connect.
        </p>
      </div>
    </section>
  );
}

export default ContactHero;
