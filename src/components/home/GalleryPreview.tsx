import { ArrowRight, ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router";

import Button from "../common/Button";
import Section from "../common/Section";

const galleryItems = [
  {
    title: "Football",
    image:
      "/images/media/Football @ InterBITS_24 [DoPy] (225)~2_result_result.webp",
    className: "md:col-span-2 md:row-span-2",
    fit: "contain",
  },
  {
    title: "College",
    image: "/images/media/20210919_145755_result_result.webp",
    className: "",
    fit: "cover",
  },
  {
    title: "Friends",
    image: "/images/media/pic1_result.webp",
    className: "",
    fit: "contain",
  },
  {
    title: "Running",
    image: "/images/media/DSC_9499_result.webp",
    className: "",
    fit: "cover",
  },
  {
    title: "Travel",
    image: "/images/media/DSC_0011_result.webp",
    className: "",
    fit: "cover",
  },
];

function GalleryPreview() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) {
        return null;
      }

      return current === 0 ? galleryItems.length - 1 : current - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) {
        return null;
      }

      return current === galleryItems.length - 1 ? 0 : current + 1;
    });
  }, []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, closeLightbox, showNext, showPrevious]);

  const activeItem = activeIndex !== null ? galleryItems[activeIndex] : null;

  return (
    <>
      <Section
        eyebrow="Gallery"
        title="Moments behind the milestones."
        description="A visual preview of football, college, friends, running, travel and the experiences that sit behind the rest of the site."
      >
        <div className="grid auto-rows-[150px] gap-3 sm:auto-rows-[180px] md:grid-cols-4 md:auto-rows-[155px]">
          {galleryItems.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`group relative overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-[var(--color-background)] text-left shadow-[var(--shadow-small)] ${item.className}`}
            >
              {item.fit === "contain" ? (
                <>
                  {/* Blurred background fills the large card */}
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-55 blur-xl"
                  />

                  <div className="absolute inset-0 bg-black/10" />

                  {/* Full football photograph */}
                  <img
                    src={item.image}
                    alt={`${item.title} gallery preview`}
                    loading="lazy"
                    className="relative h-full w-full object-contain transition duration-500 group-hover:scale-[1.025]"
                  />
                </>
              ) : (
                <img
                  src={item.image}
                  alt={`${item.title} gallery preview`}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Gallery
                  </p>

                  <h3 className="mt-1 text-xl font-bold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                </div>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition group-hover:bg-white group-hover:text-black">
                  <Images size={15} />
                </span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/gallery">
            <Button variant="secondary">
              Open full gallery
              <ArrowRight size={17} />
            </Button>
          </Link>
        </div>
      </Section>

      {activeItem && activeIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="presentation"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close preview"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
          >
            <ChevronLeft size={25} />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
          >
            <ChevronRight size={25} />
          </button>

          <div
            className="flex max-h-[92vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <img
              key={activeItem.image}
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[78vh] max-w-full rounded-2xl object-contain"
            />

            <div className="mt-5 text-center text-white">
              <h2 className="text-xl font-bold">{activeItem.title}</h2>

              <p className="mt-2 text-xs text-white/45">
                {activeIndex + 1} / {galleryItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryPreview;
