export type GalleryCategory = "People" | "Activity" | "Place" | "Milestone";

export type GalleryMediaType = "image" | "video";

export interface GalleryImage {
  id: string;

  type?: GalleryMediaType;

  src: string;
  alt: string;

  poster?: string;
  imagePosition?: string;

  title?: string;
  caption?: string;

  category: GalleryCategory;

  tags: string[];

  people?: string[];

  year?: string;
  location?: string;

  featured?: boolean;
}

interface GalleryDefaults {
  title?: string;
  caption?: string;

  category: GalleryCategory;

  tags: string[];

  people?: string[];

  year?: string;
  location?: string;

  featured?: boolean;
}

const MEDIA_PATH = "/images/media";

function createId(filename: string) {
  return filename
    .replace(/\.[^/.]+$/, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function createImages(
  filenames: string[],
  defaults: GalleryDefaults,
): GalleryImage[] {
  return filenames.map((filename) => ({
    id: createId(filename),
    type: "image",
    src: `${MEDIA_PATH}/${filename}`,
    alt: defaults.title ?? "Gallery memory",

    title: defaults.title,
    caption: defaults.caption,

    category: defaults.category,

    tags: defaults.tags,

    people: defaults.people,

    year: defaults.year,
    location: defaults.location,

    featured: defaults.featured,
  }));
}

/* -------------------------------------------------------------------------- */
/*                                   SISTERS                                  */
/* -------------------------------------------------------------------------- */

/*
 * Sister is the broad relationship group.
 *
 * people[] includes "Sister" so the existing people dropdown can show
 * every sister photo together, while Rupali Di and Diya remain separately
 * filterable.
 *
 * Sister photos are intentionally NOT included under the Family filter.
 */

const sisterBatch = [
  "20250214_225231.jpg",
  "20250214_225340_result.webp",
  "20250222_161703_result.webp",
  "20250228_010524_result.webp",
  "20250315_212626_result.webp",
  "20250324_183621_result.webp",
  "20250324_183626_result_result.webp",
  "20250330_133232_result.webp",
  "20250414_172041_result.webp",
  "20250507_192737_result.webp",
  "20250604_200136_result.webp",
  "20250605_234605_result.webp",
  "20250611_213519_result.webp",
  "20250611_213520_result.webp",
  "20251004_174348_result.webp",
  "20260102_004919_result.webp",
  "IMG-20250213-WA0000_result.webp",
  "IMG-20250303-WA0033_result.webp",
  "IMG-20250304-WA0011_result_result.webp",
  "IMG-20250314-WA0094_result_result.webp",
  "IMG-20250314-WA0100_result.webp",
  "IMG-20250314-WA0158_result.webp",
  "IMG-20250314-WA0160_result.webp",
  "IMG-20250314-WA0162_result_result.webp",
  "IMG-20250322-WA0032_result.webp",
  "IMG-20250330-WA0070_result_result.webp",
  "IMG-20250330-WA0086_result.webp",
  "IMG-20250330-WA0128_result.webp",
  "IMG-20250515-WA0018_result.webp",
  "IMG-20250607-WA0093_result.webp",
  "IMG-20250607-WA0094_result.webp",
  "IMG-20250611-WA0036_result.webp",
  "IMG-20250611-WA0056_result.webp",
  "IMG-20250611-WA0075_result.webp",
  "IMG-20251006-WA0014_result.webp",
  "IMG-20251006-WA0016_result.webp",
  "IMG-20260106-WA0034_result.webp",
  "IMG-20260607-WA0034_result.webp",
  "IMG-20260607-WA0040_result_result.webp",
  "pic1_result.webp",
];

const diyaOnly = new Set([
  "20250222_161703_result.webp",
  "20250228_010524_result.webp",
  "20250315_212626_result.webp",
  "20250330_133232_result.webp",
  "20250414_172041_result.webp",
  "IMG-20250314-WA0094_result_result.webp",
  "IMG-20250314-WA0158_result.webp",
  "IMG-20250322-WA0032_result.webp",
  "IMG-20250330-WA0070_result_result.webp",
]);

const diyaFriends = new Set([
  "IMG-20250314-WA0100_result.webp",
  "IMG-20250314-WA0160_result.webp",
  "IMG-20250314-WA0162_result_result.webp",
  "IMG-20260106-WA0034_result.webp",
]);

const rupaliDiya = new Set([
  "IMG-20250330-WA0086_result.webp",
  "IMG-20250330-WA0128_result.webp",
]);

const rupaliDiyaFriends = new Set(["IMG-20250303-WA0033_result.webp"]);

const rupaliDiyaHemangFriends = new Set(["IMG-20250611-WA0036_result.webp"]);

const rupaliHemangFriends = new Set(["20250605_234605_result.webp"]);

const rupaliHemang = new Set(["pic1_result.webp"]);

function createSisterImages(): GalleryImage[] {
  return sisterBatch.map((filename) => {
    let people = ["Sister", "Rupali Di"];
    let tags = ["Sister"];

    if (diyaOnly.has(filename)) {
      people = ["Sister", "Diya"];
    }

    if (diyaFriends.has(filename)) {
      people = ["Sister", "Diya", "Friends"];
      tags = ["Sister", "Friends"];
    }

    if (rupaliDiya.has(filename)) {
      people = ["Sister", "Rupali Di", "Diya"];
    }

    if (rupaliDiyaFriends.has(filename)) {
      people = ["Sister", "Rupali Di", "Diya", "Friends"];
      tags = ["Sister", "Friends"];
    }

    if (rupaliDiyaHemangFriends.has(filename)) {
      people = ["Sister", "Rupali Di", "Diya", "Hemang", "Friends"];
      tags = ["Sister", "Friends"];
    }

    if (rupaliHemangFriends.has(filename)) {
      people = ["Sister", "Rupali Di", "Hemang", "Friends"];
      tags = ["Sister", "Friends"];
    }

    if (rupaliHemang.has(filename)) {
      people = ["Sister", "Rupali Di", "Hemang", "Friends"];
      tags = ["Sister", "Friends"];
    }

    const extraTags =
      filename === "IMG-20250322-WA0032_result.webp" ? ["Hugs"] : [];

    return {
      id: createId(filename),
      type: "image",

      src: `${MEDIA_PATH}/${filename}`,
      alt: "With my sister",

      title: "Sisters",
      category: "People",

      tags: [...tags, ...extraTags],

      people,
    };
  });
}

/* -------------------------------------------------------------------------- */
/*                                   FAMILY                                   */
/* -------------------------------------------------------------------------- */

const familyImages = createImages(
  [
    "20210918_101749_result.webp",
    "20210919_122423_result.webp",
    "20220220_190208_result.webp",
    "20220303_115602_result_result.webp",
    "20230104_113102(0)_result.webp",
    "20260314_071242_result.webp",
  ],
  {
    title: "Family",
    category: "People",
    tags: ["Family"],
    people: ["Family"],
  },
);

const mumImages = createImages(["20210919_145815_result_result.webp"], {
  title: "With Mum",
  category: "People",
  tags: ["Family", "Mum"],
  people: ["Family", "Mum"],
});

const brotherImages = createImages(["20220807_144059_result.webp"], {
  title: "Brother",
  category: "People",
  tags: ["Family", "Brother"],
  people: ["Family", "Brother"],
});

const udayRiyanshiFamily = createImages(["20260410_210644_result.webp"], {
  title: "Family & Friends",
  category: "People",
  tags: ["Friends"],
  people: ["Friends", "Uday", "Riyanshi"],
});

/* -------------------------------------------------------------------------- */
/*                                   DIWALI                                   */
/* -------------------------------------------------------------------------- */

const diwaliImages = createImages(["20211104_195252_result.webp"], {
  title: "Diwali",
  category: "Milestone",
  tags: ["Diwali", "Festival"],
});

/* -------------------------------------------------------------------------- */
/*                                   UDAIPUR                                  */
/* -------------------------------------------------------------------------- */

const udaipurImages = createImages(
  [
    "20230104_124803_result.webp",
    "20230104_125214_result.webp",
    "20230104_125238_result.webp",
    "20230104_133503_result.webp",
    "20230104_161236_result.webp",
    "20230104_161410_result.webp",
    "20230104_163831_result.webp",
    "20230104_163835_result.webp",
    "20230104_164242_result.webp",
    "20230104_172627_result.webp",
    "20230106_123429_result.webp",
  ],
  {
    title: "Udaipur",
    category: "Place",
    tags: ["Travel", "Udaipur"],
    location: "Udaipur, India",
  },
);

/* -------------------------------------------------------------------------- */
/*                                   FRIENDS                                  */
/* -------------------------------------------------------------------------- */

const friendsImages = createImages(["20250214_023919_result.webp"], {
  title: "Friends",
  category: "People",
  tags: ["Friends"],
  people: ["Friends"],
});

const rishabhImages = createImages(["IMG-20251231-WA0024_result.webp"], {
  title: "With Rishabh",
  category: "People",
  tags: ["Friends", "Close Friends"],
  people: ["Friends", "Rishabh Bandodkar"],
});

/* -------------------------------------------------------------------------- */
/*                                  GRADUATION                                */
/* -------------------------------------------------------------------------- */

const graduationImages = createImages(
  [
    "20250727_135450_result.webp",
    "IMG-20250727-WA0014_result.webp",
    "IMG-20250727-WA0024_result.webp",
    "Screenshot_20250727_195407_YouTube_result.webp",
    "Screenshot_20250728_014621_WhatsApp_result.webp",
  ],
  {
    title: "Graduation",
    category: "Milestone",
    tags: ["Graduation", "BITS", "BITS Goa"],
    year: "2025",
    location: "BITS Pilani, Goa Campus",
    featured: true,
  },
);

/* -------------------------------------------------------------------------- */
/*                                   KAYAKING                                 */
/* -------------------------------------------------------------------------- */

const kayakingImages = createImages(
  [
    "20250728_141729_result.webp",
    "20250728_141953_result.webp",
    "20250728_141954_result_result.webp",
    "20250728_142501_result.webp",
    "20250728_142508_result_result.webp",
  ],
  {
    title: "Kayaking",
    category: "Activity",
    tags: ["Travel", "Adventure", "Kayaking"],
  },
);

/* -------------------------------------------------------------------------- */
/*                                PARASAILING                                 */
/* -------------------------------------------------------------------------- */

const parasailingImages = createImages(["20260612_122409_result.webp"], {
  title: "Parasailing",
  category: "Activity",
  tags: ["Travel", "Adventure", "Parasailing"],
  featured: true,
});

/* -------------------------------------------------------------------------- */
/*                                PARAGLIDING                                 */
/* -------------------------------------------------------------------------- */

const paraglidingImages = createImages(
  ["DSC_0011_result.webp", "Screenshot_20260810_130251_Photos~2_result.webp"],
  {
    title: "Paragliding",
    category: "Activity",
    tags: ["Travel", "Adventure", "Paragliding"],
    featured: true,
  },
);

/* -------------------------------------------------------------------------- */
/*                                   RAFTING                                  */
/* -------------------------------------------------------------------------- */

const raftingImages = createImages(["IMG-20161112-WA0109_result_result.webp"], {
  title: "River Rafting",
  category: "Activity",
  tags: ["Travel", "Adventure", "Rafting", "Friends"],
  people: ["Friends"],
});

/* -------------------------------------------------------------------------- */
/*                                   RUNNING                                  */
/* -------------------------------------------------------------------------- */

const runningImages = createImages(
  [
    "DELH3476.jpeg",
    "DSC_9499_result.webp",
    "DSC_9505_result.webp",
    "IMG_20201116_222149854~3_result.webp",
    "IMG_20210814_123236904_result.webp",
    "IMG_20210814_123334902_result_result.webp",
    "IMG-20220501-WA0054_result.webp",
  ],
  {
    title: "Running",
    category: "Activity",
    tags: ["Running", "Athletics", "Sports"],
  },
);

/* -------------------------------------------------------------------------- */
/*                                  FOOTBALL                                  */
/* -------------------------------------------------------------------------- */

const footballImages = createImages(
  [
    "Football @ InterBITS_24 [DoPy]  (200)_result.webp",
    "Football @ InterBITS_24 [DoPy]  (209)_result_result.webp",
    "Football @ InterBITS_24 [DoPy] (225)~2_result_result.webp",
    "Football @ InterBITS_24 [DoPy] (226)_result.webp",
    "Football @ InterBITS_24 [DoPy] (228)_result.webp",
    "Football @ InterBITS_24 [DoPy] (288)_result_result.webp",
    "Football1.webp",
    "IMG_0068_result.webp",
    "IMG_0116_result.webp",
    "IMG_0119_result.webp",
    "IMG_0152_result.webp",
    "IMG_0152_result_result.webp",
    "IMG_0153_result.webp",
    "IMG_2281_result.webp",
    "IMG-20230318-WA0023_result.webp",
    "WhatsApp Image 2023-11-25 at 7.05.18 PM_result.webp",
  ],
  {
    title: "Football",
    category: "Activity",
    tags: ["Football", "Sports"],
  },
);

/* -------------------------------------------------------------------------- */
/*                               BITS FOOTBALL CLUB                           */
/* -------------------------------------------------------------------------- */

const bitsFootballImages = createImages(
  [
    "BITS FC Banter 22🥰 20220414_205445_result.webp",
    "Closing Ceremony @ InterBITS _24 [DoPy]  (17)_result.webp",
    "FB_IMG_1702994157315_result.webp",
    "IMG-20220417-WA0003_result_result.webp",
    "IMG-20230415-WA0032_result.webp",
    "IMG-20231121-WA0015_result.webp",
    "IMG-20231125-WA0013_result.webp",
    "IMG-20240421-WA0217_result.webp",
    "IMG-20240429-WA0110_result.webp",
  ],
  {
    title: "BITS Football Club",
    category: "People",
    tags: ["BITS", "BITS Goa", "Football", "Sports", "Friends"],
    people: ["BITS FC", "Football Team", "Friends"],
    location: "BITS Pilani, Goa Campus",
  },
);

/* -------------------------------------------------------------------------- */
/*                                  BITS GOA                                  */
/* -------------------------------------------------------------------------- */

const bitsGoaImages = createImages(
  [
    "20210919_145755_result_result.webp",
    "IMG-20230525-WA0016_result.webp",
    "IMG-20231111-WA0000_result_result.webp",
    "IMG-20240421-WA0043_result.webp",
    "WhatsApp Image 2021-10-14 at 2.28.14 PM_result_result.webp",
    "WhatsApp Image 2021-10-14 at 2.26.52 PM (5)_result.webp",
  ],
  {
    title: "BITS Goa",
    category: "Place",
    tags: ["BITS", "BITS Goa", "College"],
    location: "BITS Pilani, Goa Campus",
  },
);

/* -------------------------------------------------------------------------- */
/*                                     GOA                                    */
/* -------------------------------------------------------------------------- */

const goaImages = createImages(
  [
    "IMG_2325_result.webp",
    "IMG_2377_result_result.webp",
    "IMG_2417_result.webp",
    "IMG_2566_result_result.webp",
    "Screenshot_20240523_225945_Photos_result_result.webp",
  ],
  {
    title: "Goa",
    category: "Place",
    tags: ["Travel", "Goa", "BITS"],
    location: "Goa, India",
  },
);

/* -------------------------------------------------------------------------- */
/*                                  DPS EAST                                  */
/* -------------------------------------------------------------------------- */

const dpsImages = createImages(
  ["IMG_6004_result.webp", "IMG_20251221_140924_893_result.webp"],
  {
    title: "DPS Bangalore East",
    category: "Milestone",
    tags: ["School", "DPS East"],
    location: "Bengaluru, India",
  },
);

const dpsFriendsImages = createImages(
  [
    "IMG_20251221_140853_040_result.webp",
    "IMG_20251221_140920_240_result.webp",
    "IMG-20240106-WA0020_result.webp",
    "IMG-20240106-WA0032_result_result.webp",
  ],
  {
    title: "School Friends",
    category: "People",
    tags: ["School", "DPS East", "Friends"],
    people: ["Friends", "DPS Friends"],
  },
);

const dpsTeacherImages = createImages(
  ["IMG-20240915-WA0029_result.webp", "IMG-20251222-WA0002_result.webp"],
  {
    title: "DPS Teachers",
    category: "People",
    tags: ["School", "DPS East", "Teachers"],
    people: ["Teachers"],
  },
);

/* -------------------------------------------------------------------------- */
/*                                DHARAMSHALA                                 */
/* -------------------------------------------------------------------------- */

const dharamshalaImages = createImages(
  [
    "IMG-20240108-WA0047_result.webp",
    "IMG-20240108-WA0085_result_result.webp",
    "IMG-20240108-WA0086_result.webp",
    "IMG-20240108-WA0087~2_result_result.webp",
  ],
  {
    title: "Dharamshala",
    category: "Place",
    tags: ["Travel", "Dharamshala"],
    location: "Dharamshala, India",
  },
);

/* -------------------------------------------------------------------------- */
/*                                   TRAVEL                                   */
/* -------------------------------------------------------------------------- */

const travelImages = createImages(
  [
    "IMG_20201120_185622_556_result_result.webp",
    "Screenshot_20251022_140132_Photos_result.webp",
  ],
  {
    title: "Travel",
    category: "Place",
    tags: ["Travel"],
  },
);

/* -------------------------------------------------------------------------- */
/*                                   ARTWORK                                  */
/* -------------------------------------------------------------------------- */

const artworkImages = createImages(["IMG-20210114-WA0041_result.jpg"], {
  title: "Artwork",
  category: "Activity",
  tags: ["Artwork", "Creative"],
});

/* -------------------------------------------------------------------------- */
/*                                  ISL FINAL                                 */
/* -------------------------------------------------------------------------- */

const islFinalImages = createImages(["IMG-20230318-WA0023_result.webp"], {
  title: "ISL Final",
  category: "Activity",
  tags: ["Football", "Sports", "ISL"],
});

/* -------------------------------------------------------------------------- */
/*                                 FINAL ARRAY                                */
/* -------------------------------------------------------------------------- */

export const galleryImages: GalleryImage[] = [
  ...createSisterImages(),

  ...familyImages,
  ...mumImages,
  ...brotherImages,
  ...udayRiyanshiFamily,

  ...diwaliImages,

  ...friendsImages,
  ...rishabhImages,

  ...udaipurImages,
  ...goaImages,
  ...dharamshalaImages,
  ...travelImages,

  ...graduationImages,

  ...kayakingImages,
  ...parasailingImages,
  ...paraglidingImages,
  ...raftingImages,

  ...runningImages,

  ...footballImages,
  ...bitsFootballImages,

  ...bitsGoaImages,

  ...dpsImages,
  ...dpsFriendsImages,
  ...dpsTeacherImages,

  ...artworkImages,
  ...islFinalImages,

  /*
   * VIDEO EXAMPLE
   *
   * {
   *   id: "paragliding-video",
   *   type: "video",
   *
   *   src: "/videos/media/paragliding.mp4",
   *   poster: "/images/media/paragliding-poster.webp",
   *
   *   alt: "Paragliding flight",
   *   title: "Paragliding",
   *
   *   category: "Activity",
   *
   *   tags: ["Travel", "Adventure", "Paragliding"],
   * }
   */
];
