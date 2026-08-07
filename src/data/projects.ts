export type ProjectCategory =
  | "AI"
  | "Backend"
  | "Data"
  | "FinTech"
  | "Mathematics"
  | "Signal Processing"
  | "Product";

export type ProjectStatus = "Completed" | "In Progress" | "Archived";

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;

  category: ProjectCategory;
  tags: string[];

  period: string;
  status: ProjectStatus;

  featured?: boolean;

  role?: string;
  teamSize?: string;
  duration?: string;

  summary: string;
  problem: string;
  solution: string;

  technologies: string[];

  highlights: string[];
  challenges: string[];
  lessons: string[];

  github?: string;
  demo?: string;
  video?: string;

  coverImage?: string;
  screenshots?: string[];
}

export const projects: ProjectItem[] = [
  {
    id: "voxbridge",
    title: "VoxBridge",
    subtitle: "Offline multilingual media translation platform",

    category: "AI",

    tags: [
      "Offline AI",
      "Media",
      "Translation",
      "Speech",
      "Multilingual",
      "FastAPI",
      "FFmpeg",
    ],

    period: "2026",
    status: "Completed",

    featured: true,

    role: "Full-stack / AI Engineer",
    teamSize: "Personal Project",
    duration: "Ongoing development",

    summary:
      "An offline translation platform for video, audio and documents, combining transcription, multilingual translation, subtitle generation, voice synthesis and media synchronization.",

    problem:
      "Most translation workflows depend on cloud services, upload limits and disconnected tools. The goal was to create one local pipeline capable of handling multiple media formats while preserving usability, privacy and control.",

    solution:
      "Built a modular pipeline that prepares media, transcribes speech, translates text, generates subtitles and speech, synchronizes output audio and renders the final media file.",

    technologies: [
      "Python",
      "FastAPI",
      "Streamlit",
      "Faster-Whisper",
      "NLLB-200",
      "Piper TTS",
      "FFmpeg",
      "SRT",
      "ASS",
    ],

    highlights: [
      "Supports video, audio and document translation through one interface.",
      "Runs locally without requiring external translation APIs.",
      "Generates translated subtitles and synthesized speech.",
      "Handles media files up to approximately 2 GB.",
      "Supports English, Hindi and Marathi workflows.",
      "Includes progress tracking across long-running translation stages.",
    ],

    challenges: [
      "Balancing transcription accuracy with CPU inference time.",
      "Synchronizing synthesized speech with the original video duration.",
      "Improving Marathi transcription and translation quality.",
      "Managing long-running jobs and large media files reliably.",
      "Preserving document formatting across translated outputs.",
    ],

    lessons: [
      "Model quality is only one part of a useful AI product; orchestration and user feedback matter just as much.",
      "Media processing pipelines need careful handling of timing, encoding and failure recovery.",
      "Offline AI systems require deliberate trade-offs between speed, accuracy and hardware requirements.",
    ],

    github: "https://github.com/stitipatra/VoxBridge",
    demo: "",
    video: "",

    coverImage: "/images/projects/voxbridge/cover.webp",
    screenshots: [],
  },

  {
    id: "arthamitra",
    title: "ArthaMitra",
    subtitle: "AI-powered financial digital twin",

    category: "FinTech",

    tags: [
      "AI",
      "Financial Modelling",
      "Digital Twin",
      "Simulation",
      "Product",
      "Streamlit",
    ],

    period: "2026",
    status: "Completed",

    featured: true,

    role: "Product / Backend / AI",
    teamSize: "Hackathon Team",
    duration: "Hackathon Build",

    summary:
      "A financial intelligence platform that models a user’s current financial health, future decisions, behavioural patterns and personalized recommendations.",

    problem:
      "Traditional financial dashboards explain the present but rarely help users understand how major decisions could affect their future financial position.",

    solution:
      "Built a financial digital twin composed of health, behaviour, prediction, recommendation and simulation engines, presented through an interactive product experience.",

    technologies: [
      "Python",
      "Streamlit",
      "Financial Modelling",
      "AI",
      "Data Visualization",
      "Simulation",
      "PDF Generation",
    ],

    highlights: [
      "Models financial health, emergency reserves and future affordability.",
      "Simulates decisions such as purchasing a house or an expensive device.",
      "Generates personalized financial recommendations.",
      "Includes an AI Wealth Coach and downloadable financial report.",
      "Uses confidence-aware recommendation logic.",
      "Designed as a polished banking-hackathon product.",
    ],

    challenges: [
      "Turning financial calculations into outputs that users can understand quickly.",
      "Balancing recommendation strength with uncertainty and incomplete user data.",
      "Designing a professional interface within Streamlit constraints.",
      "Keeping simulations internally consistent across multiple financial engines.",
    ],

    lessons: [
      "Financial products must explain recommendations rather than only display numbers.",
      "Product storytelling is critical during hackathons.",
      "A strong interface can make complex financial modelling feel approachable.",
    ],

    github: "https://github.com/stitipatra/ArthaMitra",
    demo: "",
    video: "",

    coverImage: "/images/projects/arthamitra/cover.webp",
    screenshots: [],
  },

  {
    id: "digital-communication-system",
    title: "Digital Communication System",
    subtitle: "End-to-end signal transmission simulation",

    category: "Signal Processing",

    tags: [
      "MATLAB",
      "Digital Communication",
      "Modulation",
      "Noise Simulation",
      "Signal Processing",
    ],

    period: "2023",
    status: "Completed",

    role: "Engineering Project",
    teamSize: "Academic Project",

    summary:
      "A MATLAB simulation for transmitting text, images, voice and random bit streams through a noisy digital communication channel.",

    problem:
      "The project explored how coding, modulation, noise and filtering affect transmitted information and bit-error performance.",

    solution:
      "Created an end-to-end communication pipeline covering input processing, encoding, modulation, noisy-channel simulation, demodulation and output reconstruction.",

    technologies: [
      "MATLAB",
      "Signal Processing",
      "Digital Communication",
      "Modulation",
      "Filtering",
    ],

    highlights: [
      "Supported text, image, voice and random-bit inputs.",
      "Simulated noisy real-world communication channels.",
      "Improved bit-error performance by approximately 20%.",
      "Compared transmission behaviour across different input types.",
    ],

    challenges: [
      "Handling multiple input formats in one simulation.",
      "Selecting suitable modulation and filtering strategies.",
      "Evaluating communication quality under different noise conditions.",
    ],

    lessons: [
      "End-to-end system behaviour depends on every individual processing stage.",
      "Simulation is useful for exposing trade-offs before hardware implementation.",
    ],

    github: "",
    demo: "",
    video: "",

    coverImage: "/images/projects/digital-communication/cover.webp",
    screenshots: [],
  },
  {
    id: "traffic-flow-optimization",
    title: "Traffic Flow Optimization",
    subtitle: "Nonlinear dynamical-system model for road congestion",

    category: "Mathematics",

    tags: [
      "ODEs",
      "Nonlinear Systems",
      "Traffic Modelling",
      "Stability Analysis",
      "MATLAB",
    ],

    period: "2022",
    status: "Completed",

    role: "Mathematical Modelling Project",
    teamSize: "Academic Project",

    summary:
      "A mathematical model of traffic flow using a three-dimensional nonlinear dynamical system to study congestion, stability and control behaviour.",

    problem:
      "Road congestion emerges from multiple interacting variables and requires more than a simple linear model to understand system behaviour.",

    solution:
      "Formulated a nonlinear ODE system and studied well-posedness, local and global stability, equilibrium behaviour and parameter sensitivity.",

    technologies: [
      "Mathematical Modelling",
      "Ordinary Differential Equations",
      "Stability Analysis",
      "Sensitivity Analysis",
      "MATLAB",
    ],

    highlights: [
      "Modelled traffic flow through a three-dimensional nonlinear system.",
      "Studied local and global stability.",
      "Performed sensitivity analysis across model parameters.",
      "Explored traffic-control strategies through simulation.",
    ],

    challenges: [
      "Choosing meaningful state variables and interaction terms.",
      "Interpreting mathematical stability in the context of road congestion.",
      "Connecting theoretical results to realistic traffic-control insights.",
    ],

    lessons: [
      "Mathematical models are most useful when assumptions are explicit.",
      "Sensitivity analysis helps identify which interventions matter most.",
    ],

    github: "",
    demo: "",
    video: "",

    coverImage: "/images/projects/traffic-flow/cover.webp",
    screenshots: [],
  },

  {
    id: "voting-theory",
    title: "Voting Theory Analysis",
    subtitle: "Game-theoretic comparison of electoral systems",

    category: "Mathematics",

    tags: ["Game Theory", "Voting Systems", "Payoff Modelling", "Fairness"],

    period: "2023",
    status: "Completed",

    role: "Game Theory Project",
    teamSize: "Academic Project",

    summary:
      "A comparison of single-winner and multi-winner voting systems using voter satisfaction and game-theoretic reasoning.",

    problem:
      "Different voting systems produce different trade-offs in representation, fairness and voter dissatisfaction.",

    solution:
      "Defined a dissatisfaction-based payoff function and used it to compare voting systems under different assumptions and scenarios.",

    technologies: [
      "Game Theory",
      "Voting Theory",
      "Mathematical Analysis",
      "Payoff Modelling",
    ],

    highlights: [
      "Compared single-winner and multi-winner voting mechanisms.",
      "Designed a voter-dissatisfaction payoff function.",
      "Evaluated fairness and representation trade-offs.",
      "Recommended systems based on modelled outcomes.",
    ],

    challenges: [
      "Representing voter satisfaction numerically.",
      "Comparing systems with different objectives.",
      "Making model assumptions sufficiently transparent.",
    ],

    lessons: [
      "Fairness depends heavily on the objective being optimized.",
      "Game-theoretic models are powerful but sensitive to assumptions.",
    ],

    github: "",
    demo: "",
    video: "",

    coverImage: "/images/projects/voting-theory/cover.webp",
    screenshots: [],
  },

  {
    id: "social-media-analysis",
    title: "Social Media Analysis Tool",
    subtitle: "Object-oriented engagement analytics simulator",

    category: "Backend",

    tags: [
      "Java",
      "OOP",
      "Analytics",
      "Simulation",
      "Object-Oriented Programming",
    ],

    period: "2024",
    status: "Completed",

    role: "Backend Developer",
    teamSize: "Academic Project",

    summary:
      "An object-oriented tool for modelling social-media engagement, audience behaviour and campaign performance for a marketing agency.",

    problem:
      "Marketing teams need structured ways to compare engagement patterns and test campaign assumptions before working with live data.",

    solution:
      "Built reusable classes and test-data generators for simulating likes, views, dislikes and audience-demographic behaviour.",

    technologies: [
      "Java",
      "Object-Oriented Programming",
      "Data Modelling",
      "Test Data Generation",
    ],

    highlights: [
      "Created reusable object-oriented models for social-media entities.",
      "Generated more than 100 test cases.",
      "Simulated multiple engagement metrics.",
      "Designed the codebase for modularity and future extension.",
    ],

    challenges: [
      "Designing a flexible object model.",
      "Generating varied and meaningful test scenarios.",
      "Keeping analytics logic separate from data generation.",
    ],

    lessons: [
      "A good object model makes future features easier to add.",
      "Synthetic test data is useful when real datasets are unavailable.",
    ],

    github: "",
    demo: "",
    video: "",

    coverImage: "/images/projects/social-media-analysis/cover.webp",
    screenshots: [],
  },
];
