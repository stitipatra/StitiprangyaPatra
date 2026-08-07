import { ExternalLink } from "lucide-react";
import { useCallback, useMemo, useState } from "react";

import type { LifeSection } from "../../data/life";
import LifeLightbox from "./LifeLightbox";

interface LifeSectionCardProps {
  section: LifeSection;
  reverse?: boolean;
}

function LifeSectionCard({ section, reverse = false }: LifeSectionCardProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const heroImage = section.images?.hero;
  const gallery = section.images?.gallery ?? [];

  const allImages = useMemo(() => {
    return heroImage ? [heroImage, ...gallery] : gallery;
  }, [heroImage, gallery]);

  const openImage = (index: number) => {
    setActiveImageIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null) {
        return null;
      }

      return current === 0 ? allImages.length - 1 : current - 1;
    });
  }, [allImages.length]);

  const showNext = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null) {
        return null;
      }

      return current === allImages.length - 1 ? 0 : current + 1;
    });
  }, [allImages.length]);

  return (
    <>
      <article className="container py-12">
        <div
          className={`grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center ${
            reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="overflow-hidden rounded-[var(--radius-large)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-medium)]">
            {heroImage ? (
              <button
                type="button"
                onClick={() => openImage(0)}
                className="group relative block aspect-[4/3] w-full overflow-hidden text-left"
              >
                <img
                  src={heroImage.src}
                  alt={heroImage.alt}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                {heroImage.caption && (
                  <p className="absolute bottom-5 left-5 right-5 text-sm font-semibold text-white">
                    {heroImage.caption}
                  </p>
                )}
              </button>
            ) : (
              <div className="flex aspect-[4/3] items-center justify-center bg-[var(--color-background)] text-6xl">
                {section.icon}
              </div>
            )}

            {gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3">
                {gallery.slice(0, 6).map((image, index) => {
                  const lightboxIndex = heroImage ? index + 1 : index;

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => openImage(lightboxIndex)}
                      className="group relative aspect-square overflow-hidden rounded-xl bg-[var(--color-background)]"
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        onError={(event) => {
                          event.currentTarget.style.display = "none";
                        }}
                      />

                      {image.caption && (
                        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-3 opacity-0 transition group-hover:opacity-100">
                          <p className="text-left text-xs font-semibold text-white">
                            {image.caption}
                          </p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <div>
            <p className="text-5xl">{section.icon}</p>

            <h2 className="mt-5 text-4xl font-bold tracking-[-0.05em] sm:text-5xl">
              {section.title}
            </h2>

            <p className="mt-3 text-lg font-semibold text-[var(--color-primary)]">
              {section.subtitle}
            </p>

            <p className="mt-6 text-lg leading-8 text-[var(--color-text-muted)]">
              {section.description}
            </p>

            <div className="mt-7 grid gap-3">
              {section.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex gap-3 rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white p-4"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)]" />

                  <p className="leading-7 text-[var(--color-text-muted)]">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {section.links && section.links.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-3">
                {section.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white px-4 py-2.5 text-sm font-semibold transition hover:-translate-y-1 hover:shadow-[var(--shadow-small)]"
                  >
                    {link.label}
                    <ExternalLink size={15} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>

      {activeImageIndex !== null && allImages.length > 0 && (
        <LifeLightbox
          images={allImages}
          activeIndex={activeImageIndex}
          onClose={closeLightbox}
          onPrevious={showPrevious}
          onNext={showNext}
        />
      )}
    </>
  );
}

export default LifeSectionCard;
