import { ChevronLeft, ChevronRight, Search, Users, X } from "lucide-react";

import { useCallback, useEffect, useMemo, useState } from "react";

import {
  galleryImages,
  type GalleryCategory,
  type GalleryImage,
} from "../../data/gallery";

const categoryOptions: Array<"All" | GalleryCategory> = [
  "All",
  "People",
  "Activity",
  "Place",
  "Milestone",
];

function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<"All" | GalleryCategory>(
    "All",
  );

  const [activePerson, setActivePerson] = useState("Everyone");

  const [searchQuery, setSearchQuery] = useState("");

  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const peopleOptions = useMemo(() => {
    const people = new Set<string>();

    galleryImages.forEach((image) => {
      image.people?.forEach((person) => {
        people.add(person);
      });
    });

    return [
      "Everyone",
      ...Array.from(people).sort((a, b) => a.localeCompare(b)),
    ];
  }, []);

  const filteredImages = useMemo(() => {
    const normalizedSearch = searchQuery.trim().toLowerCase();

    return galleryImages.filter((image) => {
      const matchesCategory =
        activeCategory === "All" || image.category === activeCategory;

      const matchesPerson =
        activePerson === "Everyone" || image.people?.includes(activePerson);

      const matchesSearch =
        normalizedSearch.length === 0 ||
        image.title?.toLowerCase().includes(normalizedSearch) ||
        image.caption?.toLowerCase().includes(normalizedSearch) ||
        image.location?.toLowerCase().includes(normalizedSearch) ||
        image.year?.toLowerCase().includes(normalizedSearch) ||
        image.tags.some((tag) =>
          tag.toLowerCase().includes(normalizedSearch),
        ) ||
        image.people?.some((person) =>
          person.toLowerCase().includes(normalizedSearch),
        );

      return matchesCategory && matchesPerson && matchesSearch;
    });
  }, [activeCategory, activePerson, searchQuery]);

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null || filteredImages.length === 0) {
        return null;
      }

      return current === 0 ? filteredImages.length - 1 : current - 1;
    });
  }, [filteredImages.length]);

  const showNext = useCallback(() => {
    setActiveImageIndex((current) => {
      if (current === null || filteredImages.length === 0) {
        return null;
      }

      return current === filteredImages.length - 1 ? 0 : current + 1;
    });
  }, [filteredImages.length]);

  useEffect(() => {
    if (activeImageIndex === null) {
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
  }, [activeImageIndex, closeLightbox, showNext, showPrevious]);

  const activeImage: GalleryImage | undefined =
    activeImageIndex !== null ? filteredImages[activeImageIndex] : undefined;

  const clearFilters = () => {
    setActiveCategory("All");
    setActivePerson("Everyone");
    setSearchQuery("");
  };

  return (
    <>
      <section className="container pb-24">
        <div className="mb-8 grid gap-5 xl:grid-cols-[1fr_auto] xl:items-center">
          <div className="max-w-xl">
            <label htmlFor="gallery-search" className="sr-only">
              Search gallery
            </label>

            <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-5 py-3 shadow-[var(--shadow-small)]">
              <Search
                size={18}
                className="shrink-0 text-[var(--color-text-muted)]"
              />

              <input
                id="gallery-search"
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search friends, football, travel, BITS..."
                className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--color-text-muted)]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "border-[var(--color-primary)] bg-[var(--color-primary)] text-white"
                      : "border-[var(--color-border)] bg-white text-[var(--color-text-muted)] hover:border-[var(--color-text)] hover:text-[var(--color-text)]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-4 py-2 shadow-[var(--shadow-small)]">
            <Users size={17} className="text-[var(--color-primary)]" />

            <label htmlFor="people-filter" className="text-sm font-semibold">
              Person
            </label>

            <select
              id="people-filter"
              value={activePerson}
              onChange={(event) => setActivePerson(event.target.value)}
              className="cursor-pointer bg-transparent text-sm font-semibold outline-none"
            >
              {peopleOptions.map((person) => (
                <option key={person} value={person}>
                  {person}
                </option>
              ))}
            </select>
          </div>

          {(activeCategory !== "All" ||
            activePerson !== "Everyone" ||
            searchQuery.length > 0) && (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-text-muted)] transition hover:text-[var(--color-text)]"
            >
              Clear filters
            </button>
          )}

          <p className="text-sm text-[var(--color-text-muted)]">
            {filteredImages.length}{" "}
            {filteredImages.length === 1 ? "photo" : "photos"}
          </p>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {filteredImages.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setActiveImageIndex(index)}
              className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white text-left shadow-[var(--shadow-small)] transition hover:-translate-y-1 hover:shadow-[var(--shadow-medium)]"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent opacity-70 transition group-hover:opacity-100" />

              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <div className="flex flex-wrap gap-2">
                  {image.featured && (
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] backdrop-blur-md">
                      Highlight
                    </span>
                  )}

                  {image.year && (
                    <span className="rounded-full bg-white/15 px-2.5 py-1 text-[10px] font-semibold backdrop-blur-md">
                      {image.year}
                    </span>
                  )}
                </div>

                {image.title && (
                  <h2 className="mt-3 text-xl font-bold tracking-[-0.03em]">
                    {image.title}
                  </h2>
                )}

                {image.caption && (
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/70">
                    {image.caption}
                  </p>
                )}

                {image.people && image.people.length > 0 && (
                  <p className="mt-3 text-xs font-medium text-white/55">
                    {image.people.join(" · ")}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="rounded-[var(--radius-large)] border border-dashed border-[var(--color-border)] bg-white p-12 text-center">
            <p className="text-lg font-semibold">No photos match this view.</p>

            <p className="mt-2 text-[var(--color-text-muted)]">
              Try another person, category or search term.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-5 text-sm font-semibold text-[var(--color-primary)]"
            >
              Clear all filters
            </button>
          </div>
        )}
      </section>

      {activeImage && activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
          role="presentation"
        >
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <X size={22} />
          </button>

          {filteredImages.length > 1 && (
            <>
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
            </>
          )}

          <div
            className="flex max-h-[92vh] max-w-6xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
            role="presentation"
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="max-h-[76vh] max-w-full rounded-2xl object-contain"
            />

            <div className="mt-5 max-w-2xl text-center text-white">
              {activeImage.title && (
                <h2 className="text-xl font-bold">{activeImage.title}</h2>
              )}

              {activeImage.caption && (
                <p className="mt-2 leading-7 text-white/70">
                  {activeImage.caption}
                </p>
              )}

              {activeImage.people && activeImage.people.length > 0 && (
                <div className="mt-3 flex flex-wrap justify-center gap-2">
                  {activeImage.people.map((person) => (
                    <span
                      key={person}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70"
                    >
                      {person}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs text-white/45">
                {activeImage.location && <span>{activeImage.location}</span>}

                {activeImage.location && activeImage.year && <span>•</span>}

                {activeImage.year && <span>{activeImage.year}</span>}

                <span>
                  • {activeImageIndex + 1} / {filteredImages.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryGrid;
