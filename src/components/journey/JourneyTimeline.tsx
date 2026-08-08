import { ExternalLink } from "lucide-react";

import { journeyItems } from "../../data/journey";

function JourneyTimeline() {
  return (
    <section className="container pb-20">
      <div className="relative mx-auto max-w-6xl">
        <div className="absolute left-[18px] top-0 h-full w-px bg-[var(--color-border)] md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-8 md:space-y-10">
          {journeyItems.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <article key={item.id} className="relative grid md:grid-cols-2">
                <span className="absolute left-[11px] top-7 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-[var(--color-background)] bg-[var(--color-primary)] md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={`
                    pl-11
                    md:pl-0
                    ${isLeft ? "md:pr-10" : "md:col-start-2 md:pl-10"}
                  `}
                >
                  <div className="overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]">
                    {item.image && (
                      <div className="relative aspect-[16/8.5] overflow-hidden bg-[var(--color-background)]">
                        <img
                          src={item.image}
                          alt={item.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
                      </div>
                    )}

                    <div className="p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-[var(--color-surface-dark)] px-3 py-1 text-[11px] font-semibold text-white">
                          {item.year}
                        </span>

                        <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-[11px] font-semibold text-[var(--color-text-muted)]">
                          {item.type}
                        </span>
                      </div>

                      <h2 className="mt-4 text-xl font-bold tracking-[-0.04em] sm:text-2xl">
                        {item.title}
                      </h2>

                      {item.subtitle && (
                        <p className="mt-2 text-sm font-semibold text-[var(--color-primary)]">
                          {item.subtitle}
                        </p>
                      )}

                      <p className="mt-4 text-[15px] leading-7 text-[var(--color-text-muted)]">
                        {item.description}
                      </p>

                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-5 grid gap-2.5">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 text-[14px] leading-6 text-[var(--color-text-muted)]"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[var(--color-background)] px-2.5 py-1 text-[11px] font-semibold"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] transition hover:opacity-70"
                        >
                          View source
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;
