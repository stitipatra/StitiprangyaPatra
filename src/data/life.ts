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
        src: "/images/life/football/hero.webp",
        alt: "Playing competitive football",
        caption: "Football has been part of my life for years.",
      },

      gallery: [
        {
          src: "/images/life/football/state-tournament.webp",
          alt: "State-level football tournament",
          caption: "State-level football.",
        },
        {
          src: "/images/life/football/bits-team.webp",
          alt: "BITS Pilani Goa football team",
          caption: "BITS Football Club.",
        },
        {
          src: "/images/life/football/match.webp",
          alt: "Football match",
        },
        {
          src: "/images/life/football/team.webp",
          alt: "Football team photograph",
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
        src: "/images/life/running/hero.webp",
        alt: "Running a road race",
        caption: "10K PB — 38:30.",
      },

      gallery: [
        {
          src: "/images/life/running/race.webp",
          alt: "Running during a race",
          caption: "Race day.",
        },
        {
          src: "/images/life/running/tamana.webp",
          alt: "Airtel Delhi Half Marathon 10K",
          caption: "Running for Tamana.",
        },
        {
          src: "/images/life/running/finish.webp",
          alt: "Finishing a road race",
        },
        {
          src: "/images/life/running/training.webp",
          alt: "Running training session",
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

    images: {
      hero: {
        src: "/images/life/training/hero.webp",
        alt: "Strength training",
      },

      gallery: [
        {
          src: "/images/life/training/gym-1.webp",
          alt: "Gym training session",
        },
        {
          src: "/images/life/training/gym-2.webp",
          alt: "Strength workout",
        },
      ],
    },
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

    images: {
      hero: {
        src: "/images/life/chess/hero.webp",
        alt: "Chess board",
      },

      gallery: [
        {
          src: "/images/life/chess/chess-1.webp",
          alt: "Playing chess",
        },
        {
          src: "/images/life/chess/chess-2.webp",
          alt: "Chess position",
        },
      ],
    },

    links: [
      {
        label: "Chess.com profile",
        url: "https://www.chess.com/member/stitipatra",
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
        src: "/images/life/travel/hero.webp",
        alt: "Adventure travel",
        caption: "Exploring through experiences.",
      },

      gallery: [
        {
          src: "/images/life/travel/paragliding.webp",
          alt: "Paragliding",
          caption: "Paragliding.",
        },
        {
          src: "/images/life/travel/kayaking.webp",
          alt: "Kayaking",
          caption: "Kayaking.",
        },
        {
          src: "/images/life/travel/rafting.webp",
          alt: "River rafting",
          caption: "River rafting.",
        },
        {
          src: "/images/life/travel/parasailing.webp",
          alt: "Parasailing",
          caption: "Parasailing.",
        },
        {
          src: "/images/life/travel/trip-1.webp",
          alt: "Travel in India",
        },
        {
          src: "/images/life/travel/trip-2.webp",
          alt: "Travel memory",
        },
      ],
    },
  },

  {
    id: "people",

    title: "People",
    subtitle: "The best parts of most memories",

    icon: "🫶",

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
        src: "/images/life/people/hero.webp",
        alt: "Friends and family",
      },

      gallery: [
        {
          src: "/images/life/people/family.webp",
          alt: "Family",
          caption: "Family.",
        },
        {
          src: "/images/life/people/sister.webp",
          alt: "With my sister",
          caption: "Sister.",
        },
        {
          src: "/images/life/people/best-friends.webp",
          alt: "Best friends",
          caption: "Best friends.",
        },
        {
          src: "/images/life/people/college-friends.webp",
          alt: "College friends",
          caption: "BITS memories.",
        },
        {
          src: "/images/life/people/football-friends.webp",
          alt: "Football teammates",
        },
      ],
    },
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

    images: {
      hero: {
        src: "/images/life/community/tamana.webp",
        alt: "Tamana fundraiser and Airtel Delhi Half Marathon",
        caption: "₹52,500 raised for Tamana.",
      },
    },

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
