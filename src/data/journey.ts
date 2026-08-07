export interface JourneyItem {
  id: string;
  year: string;
  title: string;
  subtitle?: string;

  type:
    | "School"
    | "University"
    | "Internship"
    | "Work"
    | "Achievement"
    | "Community";

  description: string;

  highlights?: string[];
  tags?: string[];

  image?: string;
  link?: string;
}

export const journeyItems: JourneyItem[] = [
  {
    id: "tamana-2016",
    year: "2016",
    title: "Airtel Delhi Half Marathon · 10K",
    subtitle: "Fundraiser for Tamana",
    type: "Community",

    description:
      "One of my earliest memorable running experiences also became a chance to create impact beyond sport.",

    highlights: [
      "Completed the 10K event at the Airtel Delhi Half Marathon.",
      "Raised ₹52,500 for Tamana through crowdfunding.",
      "Learned early that sport could be tied to community impact, not just competition.",
    ],

    tags: ["Running", "Fundraising", "Social Impact"],

    image: "/images/journey/tamana-2016.webp",

    link: "https://www.icfn.in/static/v2/2019/11/14/2016.pdf",
  },

  {
    id: "class-10",
    year: "2018",
    title: "CBSE Class X",
    subtitle: "Delhi Public School Bangalore East",
    type: "School",

    description:
      "Completed Class X while balancing academics with athletics, football and other school activities.",

    highlights: [
      "CBSE Class X — 95.4%",
      "Active participation in athletics and football.",
    ],

    tags: ["School", "Academics", "Sports"],

    image: "/images/journey/school.webp",
  },

  {
    id: "class-12",
    year: "2020",
    title: "CBSE Class XII",
    subtitle: "Delhi Public School Bangalore East",
    type: "School",

    description:
      "Finished school with a strong academic foundation before moving into engineering and mathematics at BITS Pilani.",

    highlights: [
      "CBSE Class XII — 95.2%",
      "Built the academic foundation that eventually led me toward engineering, mathematics and computing.",
    ],

    tags: ["School", "Academics"],

    image: "/images/journey/class-12.webp",
  },

  {
    id: "bits",
    year: "2020 — 2025",
    title: "BITS Pilani, Goa Campus",
    subtitle:
      "B.E. (Hons.) Electronics & Communication Engineering + M.Sc. (Hons.) Mathematics",
    type: "University",

    description:
      "Five years that shaped my interests across software engineering, mathematics, systems, AI and life beyond academics.",

    highlights: [
      "Dual-degree programme in Electronics & Communication Engineering and Mathematics.",
      "Worked across software engineering, signal processing, machine learning, mathematical modelling and game theory projects.",
      "Represented BITS through football and participated in inter-college competitions.",
      "Built friendships, technical foundations and experiences that strongly shaped my direction after college.",
    ],

    tags: ["BITS Pilani", "ECE", "Mathematics", "Software", "Football"],

    image: "/images/journey/bits.webp",
  },

  {
    id: "swecha",
    year: "2022",
    title: "First Software Internship",
    subtitle: "Swecha",
    type: "Internship",

    description:
      "My first hands-on experience building user-facing software across web and Android.",

    highlights: [
      "Built a browser-based text-to-speech application.",
      "Worked on an Android audiobook application.",
      "Got early exposure to collaborative software development.",
    ],

    tags: ["Web", "Android", "JavaScript", "Java"],
  },

  {
    id: "perceptiviti",
    year: "2023",
    title: "Machine Learning in Insurance",
    subtitle: "Perceptiviti Data Solutions",
    type: "Internship",

    description:
      "Moved deeper into applied machine learning by working on insurance fraud detection and automated claims analysis.",

    highlights: [
      "Worked with DNNs, Random Forest and XGBoost.",
      "Improved fraud-detection accuracy through model refinement.",
      "Automated ETL workflows between Oracle and MySQL.",
    ],

    tags: ["Machine Learning", "Python", "Fraud Detection"],
  },

  {
    id: "bi-professionals",
    year: "2023",
    title: "Backend Engineering",
    subtitle: "Business Intelligence Professionals",
    type: "Internship",

    description:
      "Shifted toward backend engineering through APIs, authentication and database-backed services.",

    highlights: [
      "Built REST APIs.",
      "Worked with JWT and Microsoft authentication.",
      "Used PostgreSQL for backend persistence.",
    ],

    tags: ["Backend", "REST APIs", "PostgreSQL"],
  },

  {
    id: "tif-labs",
    year: "2024",
    title: "Computer Vision & Applied AI",
    subtitle: "TIF Labs",
    type: "Internship",

    description:
      "Worked across computer vision, segmentation, generative AI and product-facing automation.",

    highlights: [
      "Worked with YOLOv8, OpenCV and CNN-based vision systems.",
      "Integrated LangChain and Amazon Bedrock.",
      "Built image-processing workflows for vehicle-damage analysis.",
    ],

    tags: ["Computer Vision", "AI", "YOLOv8", "Bedrock"],
  },

  {
    id: "rahi",
    year: "2025",
    title: "Production Backend Engineering",
    subtitle: "Rahi Platform Technologies",
    type: "Internship",

    description:
      "Built production backend systems where architecture, testing, financial correctness and API performance mattered every day.",

    highlights: [
      "Java 21 and Spring Boot 3.3.",
      "Hexagonal architecture and test-driven development.",
      "Built financial APIs and a penal-charge engine.",
    ],

    tags: ["Java", "Spring Boot", "Backend", "FinTech"],
  },

  {
    id: "graduation",
    year: "2025",
    title: "Graduated from BITS Pilani",
    subtitle: "Goa Campus",
    type: "Achievement",

    description:
      "Completed five years at BITS with dual degrees in Mathematics and Electronics & Communication Engineering.",

    highlights: [
      "B.E. (Hons.) Electronics & Communication Engineering.",
      "M.Sc. (Hons.) Mathematics.",
      "Closed one chapter and moved into full-time engineering.",
    ],

    tags: ["Graduation", "BITS Pilani"],

    image: "/images/journey/graduation.webp",
  },

  {
    id: "nielsen",
    year: "2025 — Present",
    title: "Member of Technical Staff — 1",
    subtitle: "Nielsen Media India",
    type: "Work",

    description:
      "Moved into full-time software engineering, working on backend systems and distributed production data workflows at scale.",

    highlights: [
      "Working across 15+ production datasets processing approximately 1.3 TB per day.",
      "Building Airflow-based orchestration, validation and reprocessing systems.",
      "Improving reliability, cloud efficiency and production recoverability.",
    ],

    tags: ["Software Engineering", "Distributed Systems", "Airflow", "AWS"],
  },

  {
    id: "gre",
    year: "2026",
    title: "GRE",
    subtitle: "Graduate study preparation",
    type: "Achievement",

    description:
      "Prepared for and completed the GRE as part of my graduate-school journey.",

    highlights: ["GRE score — 320"],

    tags: ["GRE", "Graduate Studies"],
  },
];
