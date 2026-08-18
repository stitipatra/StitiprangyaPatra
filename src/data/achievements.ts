export type AchievementCategory =
  | "Academic"
  | "Sports"
  | "Hackathons"
  | "Community"
  | "Professional";

export interface AchievementItem {
  id: string;
  title: string;
  subtitle?: string;
  category: AchievementCategory;
  year?: string;

  description: string;
  highlights?: string[];

  link?: string;
  linkLabel?: string;
  image?: string;
  imagePosition?: string;

  featured?: boolean;
}

export const achievements: AchievementItem[] = [
  {
    id: "state-football",
    title: "State-level Football",
    subtitle: "Competitive football",
    category: "Sports",

    description:
      "Competed at the state level in football and later represented BITS Pilani Goa across inter-college competitions.",

    highlights: [
      "State-level football",
      "Core member of BITS Football Club",
      "Goa State Football League participation",
    ],

    image: "/images/media/IMG-20231121-WA0015_result.webp",
    featured: true,
  },

  {
    id: "district-athletics",
    title: "District Athletics",
    subtitle: "Running & athletics",
    category: "Sports",

    description:
      "Competed in athletics at the district level and continued into long-distance running and road races.",

    highlights: ["District-level athletics", "10K personal best — 38:30"],
    link: "https://strava.app.link/zvDes3yYk5b",
    linkLabel: "View my Strava",

    image: "/images/media/IMG-20220501-WA0054_result.webp",
    imagePosition: "center 30%",
    featured: true,
  },

  {
    id: "tamana",
    title: "₹52,500 Raised for Tamana",
    subtitle: "Airtel Delhi Half Marathon · 10K",
    category: "Community",
    year: "2016",

    description:
      "Raised ₹52,500 through crowdfunding while participating in the Airtel Delhi Half Marathon 10K on behalf of Tamana.",

    highlights: ["₹52,500 raised", "10K event", "Social-impact fundraising"],

    link: "https://www.icfn.in/static/v2/2019/11/14/2016.pdf",
    linkLabel: "View fundraiser source",
    image: "/images/media/DELH3476.jpeg",
    imagePosition: "center 30%",
    featured: true,
  },

  {
    id: "cbse-10",
    title: "CBSE Class X",
    subtitle: "Delhi Public School Bangalore East",
    category: "Academic",
    year: "2018",

    description: "Completed Class X with a score of 95.4%.",

    highlights: ["95.4%"],
    image: "/images/media/IMG_6004_result.webp",
    featured: true,
  },

  {
    id: "cbse-12",
    title: "CBSE Class XII",
    subtitle: "Delhi Public School Bangalore East",
    category: "Academic",
    year: "2020",

    description: "Completed Class XII with a score of 95.2%.",

    highlights: ["95.2%"],
    image: "/images/media/IMG-20240915-WA0029_result.webp",
    imagePosition: "center 34%",
    featured: true,
  },

  {
    id: "bits-dual-degree",
    title: "BITS Pilani Dual Degree",
    subtitle:
      "B.E. Electronics & Communication Engineering + M.Sc. Mathematics",
    category: "Academic",
    year: "2025",

    description:
      "Completed a five-year dual-degree programme at BITS Pilani, Goa Campus.",

    highlights: [
      "B.E. (Hons.) Electronics & Communication Engineering",
      "M.Sc. (Hons.) Mathematics",
    ],

    image: "/images/media/Screenshot_20250727_195407_YouTube_result.webp",
    featured: true,
  },

  {
    id: "gre",
    title: "GRE — 320",
    subtitle: "Graduate admissions",
    category: "Academic",
    year: "2026",

    description: "Completed the GRE with an overall score of 320.",

    highlights: ["320 overall"],
  },

  {
    id: "hackathons",
    title: "Hackathon Builds",
    subtitle: "Rapid product engineering",
    category: "Hackathons",
    year: "2026",

    description:
      "Built and shipped multiple end-to-end products under hackathon constraints, including ArthaMitra and VoxBridge-related iterations.",

    highlights: [
      "AI financial digital twin",
      "Multilingual media translation",
      "Product storytelling under time constraints",
    ],
  },

  {
    id: "nielsen-impact",
    title: "Production Engineering Impact",
    subtitle: "Nielsen Media India",
    category: "Professional",

    description:
      "Contributed to production backend and data-platform improvements across reliability, orchestration, reprocessing and cloud efficiency.",

    highlights: [
      "15+ production datasets",
      "~1.3 TB processed daily",
      "~30% AWS compute-cost reduction",
      "SLA improvement from ~85% to ~95%",
    ],
  },
];
