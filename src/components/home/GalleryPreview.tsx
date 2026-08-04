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
      eyebrow="Life in frames"
      title="Some stories are better seen."
      description="A small collection of moments from football, college, running, travel and the people who made those chapters memorable."
    >
      <div className="grid auto-rows-[220px] gap-4 md:grid-cols-4">
        {galleryItems.map((item) => (
          <article
            key={item.title}
            className={`group relative overflow-hidden rounded-[var(--radius-medium)] border border-[var(--color-border)] bg-white shadow-[var(--shadow-small)] ${item.className}`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-5 text-white">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                  Gallery
                </p>

                <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
              </div>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15 backdrop-blur-md">
                <Images size={18} />
              </span>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link to="/gallery">
          <Button variant="secondary">
            Open full gallery
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </Section>
  );
}

export default GalleryPreview;
