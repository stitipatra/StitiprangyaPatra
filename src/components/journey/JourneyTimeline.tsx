import { ExternalLink } from "lucide-react";

import { journeyItems } from "../../data/journey";

function JourneyTimeline() {
  return (
    <section className="container pb-24">
      <div className="relative">
        <div className="absolute left-[18px] top-0 h-full w-px bg-[var(--color-border)] md:left-1/2 md:-translate-x-1/2" />

        <div className="space-y-10 md:space-y-14">
          {journeyItems.map((item, index) => {
            const isLeft = index % 2 === 0;

            return (
              <article
                key={item.id}
                className={`relative grid gap-6 md:grid-cols-2 ${
                  isLeft ? "" : "md:[&>*:first-child]:order-2"
                }`}
              >
                <span className="absolute left-[10px] top-7 z-10 h-4 w-4 rounded-full border-4 border-[var(--color-background)] bg-[var(--color-primary)] md:left-1/2 md:-translate-x-1/2" />

                <div
                  className={`pl-12 md:pl-0 ${
                    isLeft ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] transition duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]">
                    {item.image && (
                      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--color-background)]">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                          onError={(event) => {
                            event.currentTarget.style.display = "none";
                          }}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                      </div>
                    )}

                    <div className="p-7">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-[var(--color-surface-dark)] px-3 py-1.5 text-xs font-semibold text-white">
                          {item.year}
                        </span>

                        <span className="rounded-full border border-[var(--color-border)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-muted)]">
                          {item.type}
                        </span>
                      </div>

                      <h2 className="mt-5 text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                        {item.title}
                      </h2>

                      {item.subtitle && (
                        <p className="mt-2 font-semibold text-[var(--color-primary)]">
                          {item.subtitle}
                        </p>
                      )}

                      <p className="mt-5 leading-7 text-[var(--color-text-muted)]">
                        {item.description}
                      </p>

                      {item.highlights && item.highlights.length > 0 && (
                        <ul className="mt-6 grid gap-3">
                          {item.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 leading-7 text-[var(--color-text-muted)]"
                            >
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {item.tags && item.tags.length > 0 && (
                        <div className="mt-6 flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full bg-[var(--color-background)] px-3 py-1.5 text-xs font-semibold"
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
                          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)]"
                        >
                          View source
                          <ExternalLink size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="hidden md:block" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default JourneyTimeline;
