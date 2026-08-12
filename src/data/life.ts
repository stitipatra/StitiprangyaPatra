export interface LifeImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface LifeLink {
  label: string;
  url: string;
}

export interface LifeSection {
  id: string;

  title: string;
  subtitle: string;
  description: string;

  icon: string;

  highlights: string[];

  images?: {
    hero?: LifeImage;
    gallery?: LifeImage[];
  };

  links?: LifeLink[];
}

export interface BookItem {
  title: string;
  author?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
}

export const lifeSections: LifeSection[] = [
  {
    id: "football",

    title: "Football",
    subtitle: "Competition, teamwork and a lifelong obsession",

    icon: "⚽",

    description:
      "Football has been one of the longest-running constants in my life. From competitive school football to representing BITS Pilani, the sport shaped how I work with people, react under pressure and stay committed over long periods.",

    highlights: [
      "Competed at the state level in football.",
      "Core member of the BITS Pilani Goa Football Club.",
      "Represented BITS in multiple inter-college tournaments.",
      "Participated in the Goa State Football League.",
      "Still play whenever time allows.",
    ],

    images: {
      hero: {
        src: "/images/media/Football1.webp",
        alt: "Playing competitive football",
        caption: "Football has been part of my life for years.",
      },

      gallery: [
        {
          src: "/images/media/IMG-20231125-WA0013_result.webp",
          alt: "State-level football tournament",
          caption: "State-level football.",
        },
        {
          src: "/images/media/IMG-20240429-WA0110_result.webp",
          alt: "BITS Pilani Goa football team",
          caption: "BITS Football Club.",
        },
        {
          src: "/images/media/Football @ InterBITS_24 [DoPy] (226)_result.webp",
          alt: "Football match",
          caption: "Competitive football match.",
        },
        {
          src: "/images/media/FB_IMG_1702994157315_result.webp",
          alt: "Football team photograph",
          caption: "Football team photograph.",
        },
      ],
    },
  },

  {
    id: "running",

    title: "Running",
    subtitle: "Consistency measured in kilometres",

    icon: "🏃",

    description:
      "Running is both competition and reset time for me. I started with athletics and organised races and gradually moved deeper into long-distance running, where progress comes from showing up consistently over months rather than chasing one perfect session.",

    highlights: [
      "District-level athletics.",
      "10K personal best — 38:30.",
      "Long-distance running remains a regular part of my training.",
      "Participated in organised road races from a young age.",
      "Raised ₹52,500 for Tamana while participating in the Airtel Delhi Half Marathon 10K event.",
    ],

    images: {
      hero: {
        src: "/images/media/DSC_9499_result.webp",
        alt: "Running a road race",
        caption: "10K PB — 38:30.",
      },

      gallery: [
        {
          src: "/images/media/IMG_20210814_123236904_result.webp",
          alt: "Running during a race",
          caption: "Race day.",
        },
        {
          src: "/images/media/DELH3476.jpeg",
          alt: "Airtel Delhi Half Marathon 10K",
          caption: "Running for Tamana.",
        },
        {
          src: "/images/media/IMG_20210814_123334902_result_result.webp",
          alt: "Finishing a road race",
          caption: "Crossing the finish line.",
        },
      ],
    },

    links: [
      {
        label: "View my Strava",
        url: "https://strava.app.link/zvDes3yYk5b",
      },
      {
        label: "Tamana fundraiser recognition",
        url: "https://www.icfn.in/static/v2/2019/11/14/2016.pdf",
      },
    ],
  },

  {
    id: "travel",

    title: "Travel & Adventure",
    subtitle: "More interested in experiences than checklists",

    icon: "🌍",

    description:
      "Travel for me is less about ticking places off a list and more about collecting experiences. I especially enjoy trips that include something active, unfamiliar or slightly outside my comfort zone.",

    highlights: [
      "Travelled across several parts of India.",
      "Kayaking.",
      "Paragliding.",
      "Parasailing.",
      "River rafting.",
      "Always interested in trying something new when travelling.",
    ],

    images: {
      hero: {
        src: "/images/media/IMG-20240108-WA0087~2_result_result.webp",
        alt: "Adventure travel",
        caption: "Exploring through experiences.",
      },

      gallery: [
        {
          src: "/images/media/Screenshot_20260810_130251_Photos~2_result.webp",
          alt: "Paragliding",
          caption: "Paragliding.",
        },
        {
          src: "/images/media/20250728_141729_result.webp",
          alt: "Kayaking",
          caption: "Kayaking.",
        },
        {
          src: "/images/media/IMG-20161112-WA0109_result_result.webp",
          alt: "River rafting",
          caption: "River rafting.",
        },
        {
          src: "/images/media/20260612_122409_result.webp",
          alt: "Parasailing",
          caption: "Parasailing.",
        },
        {
          src: "/images/media/20230104_161410_result.webp",
          alt: "Travel in India",
          caption: "Exploring India.",
        },
        {
          src: "/images/media/trip-2.webp",
          alt: "Travel memory",
          caption: "Creating memories.",
        },
      ],
    },
  },

  {
    id: "people",

    title: "People",
    subtitle: "The best parts of most memories",

    icon: "👤👤👤",

    description:
      "A lot of the moments I value most are tied to the people I experienced them with. Friends, family, teammates and the people I met through college, work and travel are a large part of the story behind this website.",

    highlights: [
      "Family.",
      "Sister.",
      "Best friends.",
      "College friends.",
      "Football teammates.",
      "People from different chapters of life.",
    ],

    images: {
      hero: {
        src: "/images/media/20230104_113102(0)_result.webp",
        alt: "Friends and family",
        caption: "Family",
      },

      gallery: [
        {
          src: "/images/media/20250315_212626_result.webp",
          alt: "With my sister",
          caption: "Sister",
        },
        {
          src: "/images/media/20250611_213519_result.webp",
          alt: "With my sister",
          caption: "Sister",
        },
        {
          src: "/images/media/pic1_result.webp",
          alt: "Best friends",
          caption: "Home",
        },
        {
          src: "/images/media/20260410_210644_result.webp",
          alt: "Family",
          caption: "Bhuses missing",
        },
        {
          src: "/images/media/IMG-20240106-WA0032_result_result.webp",
          alt: "School friends",
          caption: "DPS memories.",
        },
        {
          src: "/images/media/IMG-20220417-WA0003_result_result.webp",
          alt: "Football teammates",
          caption: "Football teammates.",
        },
      ],
    },
  },

  {
    id: "training",

    title: "Training & Fitness",
    subtitle: "Strength without losing endurance",

    icon: "🏋️",

    description:
      "Strength training complements both football and running for me. I enjoy the slow, measurable process of becoming stronger while keeping enough endurance and mobility to continue playing sport and running well.",

    highlights: [
      "Regular strength training.",
      "Football and endurance remain part of the same routine.",
      "Focus on consistency rather than short bursts of motivation.",
      "Training is one of the simplest ways I keep structure outside work.",
    ],
  },

  {
    id: "chess",

    title: "Chess",
    subtitle: "Patterns, patience and calculation",

    icon: "♟️",

    description:
      "Chess scratches a very different competitive itch from sport. I enjoy the combination of pattern recognition, calculation, preparation and the fact that one careless decision can completely change a position.",

    highlights: [
      "Chess.com rating around 1600.",
      "Primarily play Rapid and Blitz.",
      "Enjoy tactical positions, calculation and pattern recognition.",
    ],

    links: [
      {
        label: "Chess.com profile",
        url: "https://www.chess.com/member/stitipatra",
      },
    ],
  },

  {
    id: "reading",

    title: "Reading",
    subtitle: "A habit that started long before engineering",

    icon: "📚",

    description:
      "I grew up reading a lot of fiction and still enjoy getting absorbed in a good story. Over time that expanded into the occasional non-fiction book around money, behaviour and how people think.",

    highlights: [
      "Read the complete Harry Potter series.",
      "Enjoy Dan Brown novels including Angels & Demons and Inferno.",
      "Also read non-fiction such as Rich Dad Poor Dad.",
    ],

    images: {
      hero: {
        src: "/images/life/reading/hero.webp",
        alt: "Books and reading",
      },
    },
  },

  {
    id: "community",

    title: "Community",
    subtitle: "Sport can create impact beyond competition",

    icon: "❤️",

    description:
      "One of my earliest memorable running experiences was also one of my first experiences with fundraising. In 2016, I participated in the Airtel Delhi Half Marathon 10K while raising money for Tamana.",

    highlights: [
      "Raised ₹52,500 through crowdfunding.",
      "Represented Tamana at the Airtel Delhi Half Marathon 10K.",
      "An early reminder that personal challenges can also contribute to something larger.",
    ],

    links: [
      {
        label: "View official recognition",
        url: "https://www.icfn.in/static/v2/2019/11/14/2016.pdf",
      },
    ],
  },
];

export const languages: LanguageItem[] = [
  {
    name: "English",
    level: "Fluent",
  },
  {
    name: "Hindi",
    level: "Fluent",
  },
  {
    name: "French",
    level: "Working knowledge",
  },
];

export const books: BookItem[] = [
  {
    title: "Harry Potter Series",
    author: "J. K. Rowling",
  },
  {
    title: "Angels & Demons",
    author: "Dan Brown",
  },
  {
    title: "Inferno",
    author: "Dan Brown",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
  },
];
