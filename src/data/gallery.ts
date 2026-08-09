export type GalleryCategory = "People" | "Activity" | "Place" | "Milestone";

export type GalleryMediaType = "image" | "video";

export interface GalleryImage {
  id: string;

  type?: GalleryMediaType;

  src: string;
  alt: string;

  poster?: string;

  title?: string;
  caption?: string;

  category: GalleryCategory;

  tags: string[];

  people?: string[];

  year?: string;
  location?: string;

  featured?: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: "football-state",

    type: "image",

    src: "/images/gallery/football/state-tournament.webp",
    alt: "State-level football tournament",

    title: "State Football",

    caption: "One of the competitive football chapters that shaped me.",

    category: "Activity",

    tags: ["Football", "Sports", "State Tournament"],

    people: ["Football Team"],

    featured: true,
  },

  {
    id: "bits-football",

    type: "image",

    src: "/images/gallery/football/bits-team.webp",
    alt: "BITS Pilani Goa football team",

    title: "BITS Football Club",

    category: "Activity",

    tags: ["Football", "BITS", "Friends"],

    people: ["Football Team", "College Friends"],
  },

  {
    id: "running-race",

    type: "image",

    src: "/images/gallery/running/race.webp",
    alt: "Running during a road race",

    title: "Race Day",

    caption: "Long-distance running has stayed with me for years.",

    category: "Activity",

    tags: ["Running", "Athletics", "Race"],

    featured: true,
  },

  {
    id: "tamana-run",

    type: "image",

    src: "/images/gallery/running/tamana.webp",
    alt: "Airtel Delhi Half Marathon Tamana fundraiser",

    title: "Running for Tamana",

    caption: "Raised ₹52,500 through crowdfunding.",

    category: "Milestone",

    tags: ["Running", "Tamana", "Fundraising", "Community"],

    year: "2016",

    featured: true,
  },

  {
    id: "graduation",

    type: "image",

    src: "/images/gallery/bits/graduation.webp",
    alt: "BITS Pilani Goa graduation",

    title: "Graduation",

    caption: "Closing five years at BITS Pilani Goa.",

    category: "Milestone",

    tags: ["BITS", "Graduation", "College"],

    people: ["Family", "College Friends"],

    year: "2025",

    featured: true,
  },

  {
    id: "bits-friends",

    type: "image",

    src: "/images/gallery/people/college-friends.webp",
    alt: "College friends at BITS Pilani Goa",

    title: "BITS Friends",

    category: "People",

    tags: ["Friends", "BITS", "College"],

    people: ["College Friends"],
  },

  {
    id: "family",

    type: "image",

    src: "/images/gallery/people/family.webp",
    alt: "Family",

    title: "Family",

    category: "People",

    tags: ["Family"],

    people: ["Family"],

    featured: true,
  },

  {
    id: "sister",

    type: "image",

    src: "/images/gallery/people/sister.webp",
    alt: "With my sister",

    title: "Sister",

    category: "People",

    tags: ["Family", "Sister"],

    people: ["Sister"],

    featured: true,
  },

  {
    id: "best-friends",

    type: "image",

    src: "/images/gallery/people/best-friends.webp",
    alt: "Best friends",

    title: "Best Friends",

    category: "People",

    tags: ["Friends", "Best Friends"],

    people: ["Best Friends"],
  },

  {
    id: "paragliding",

    type: "image",

    src: "/images/gallery/travel/paragliding.webp",
    alt: "Paragliding",

    title: "Paragliding",

    category: "Activity",

    tags: ["Travel", "Adventure", "Paragliding"],
  },

  {
    id: "kayaking",

    type: "image",

    src: "/images/gallery/travel/kayaking.webp",
    alt: "Kayaking",

    title: "Kayaking",

    category: "Activity",

    tags: ["Travel", "Adventure", "Kayaking"],
  },

  {
    id: "rafting",

    type: "image",

    src: "/images/gallery/travel/rafting.webp",
    alt: "River rafting",

    title: "River Rafting",

    category: "Activity",

    tags: ["Travel", "Adventure", "Rafting"],
  },

  {
    id: "parasailing",

    type: "image",

    src: "/images/gallery/travel/parasailing.webp",
    alt: "Parasailing",

    title: "Parasailing",

    category: "Activity",

    tags: ["Travel", "Adventure", "Parasailing"],
  },

  {
    id: "travel-india",

    type: "image",

    src: "/images/gallery/travel/india-trip.webp",
    alt: "Travel in India",

    title: "Exploring India",

    category: "Place",

    tags: ["Travel", "India"],
  },

  {
    id: "hackathon",

    type: "image",

    src: "/images/gallery/hackathons/hackathon.webp",
    alt: "Hackathon team",

    title: "Hackathon Build",

    category: "Milestone",

    tags: ["Hackathon", "Projects", "Friends"],

    people: ["Hackathon Team"],
  },

  /*
   * VIDEO EXAMPLE
   *
   * Uncomment this when you actually add the files.
   *
   * {
   *   id: "paragliding-video",
   *
   *   type: "video",
   *
   *   src: "/videos/gallery/travel/paragliding.mp4",
   *
   *   poster:
   *     "/images/gallery/travel/paragliding-poster.webp",
   *
   *   alt: "Paragliding flight",
   *
   *   title: "Paragliding",
   *
   *   caption:
   *     "A much better memory in motion.",
   *
   *   category: "Activity",
   *
   *   tags: [
   *     "Travel",
   *     "Adventure",
   *     "Paragliding",
   *   ],
   *
   *   location: "Manali",
   *
   *   year: "2026",
   * },
   */
];
