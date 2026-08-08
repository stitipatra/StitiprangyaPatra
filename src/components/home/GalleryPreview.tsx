import { ArrowRight, Images } from "lucide-react";
import { Link } from "react-router";

import Button from "../common/Button";
import Section from "../common/Section";

const galleryItems = [
  {
    title: "Football",
    image: "/images/gallery/football.jpg",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    title: "College",
    image: "/images/gallery/college.jpg",
    className: "",
  },
  {
    title: "Friends",
    image: "/images/gallery/friends.jpg",
    className: "",
  },
  {
    title: "Running",
    image: "/images/gallery/running.jpg",
    className: "",
  },
  {
    title: "Travel",
    image: "/images/gallery/travel.jpg",
    className: "",
  },
];

function GalleryPreview() {
  return (
    <Section
      eyebrow="Gallery"
      title="Moments behind the milestones."
      description="A visual preview of football, college, friends, running, travel and the experiences that sit behind the rest of the site."
    >
      <div className="grid auto-rows-[150px] gap-3 sm:auto-rows-[180px] md:grid-cols-4 md:auto-rows-[155px]">
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-[var(--color-background)] shadow-[var(--shadow-small)] ${item.className}`}
          >
            <img
              src={item.image}
              alt={`${item.title} gallery preview`}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />

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
          </article>
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
  );
}

export default GalleryPreview;
