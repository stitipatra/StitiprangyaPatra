export type ExperienceType = "Full-time" | "Internship";

export interface ExperienceItem {
  id: string;

  company: string;
  companyShort: string;
  role: string;

  location: string;
  period: string;
  type: ExperienceType;

  featured?: boolean;

  website: string;
  logo: string;

  summary: string;

  impact: string[];
  work: string[];
  technologies: string[];
  lessons: string[];

  projects?: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "nielsen",

    company: "Nielsen Media India",
    companyShort: "Nielsen",
    role: "Member of Technical Staff — 1",

    location: "Bengaluru, India",
    period: "July 2025 — Present",
    type: "Full-time",

    featured: true,

    website: "https://www.nielsen.com/about-us/locations/india/",
    logo: "/images/media/Nielsen_New_Logo_2021.png",

    summary:
      "Building reliable backend systems and distributed data workflows for large-scale media-processing platforms. My work focuses on production orchestration, deterministic reprocessing, validation, cloud efficiency and dependable delivery across recurring data pipelines.",

    impact: [
      "Support production workflows across more than 15 datasets processing approximately 1.3 TB of data each day.",
      "Reduced AWS compute costs by approximately 30% through controlled, resource-aware execution.",
      "Improved processing latency by approximately 10% across critical workflows.",
      "Improved SLA adherence from approximately 85% to 95%.",
      "Reduced recurring workflow failures by approximately 35%.",
      "Improved the safety and predictability of historical reprocessing through retry-safe execution and idempotent partition overwrites.",
    ],

    work: [
      "Re-architected recurring production jobs by replacing uncontrolled parallel executions with dependency-aware and resource-conscious Airflow orchestration.",
      "Designed deterministic reprocessing workflows that safely overwrite affected partitions without creating duplicate or inconsistent output.",
      "Built rolling-window validations across 7, 14, 21, 28 and 35-day processing periods to identify incomplete or inconsistent data.",
      "Created an automated Airflow DAG to replace a manual rollups process, including pre-run and post-run validation stages.",
      "Modified the underlying rollups logic and collaborated with the reporting team to investigate mismatches, reconcile expected output and correct downstream reporting results.",
      "Worked across NTAM, Panel, Big Data, RI and other production datasets with different dependencies, schedules and operational constraints.",
      "Contributed to resource-aware scheduling strategies that prevent competing workloads from exhausting shared compute capacity.",
      "Improved recovery paths for partial failures by designing workflows that could resume or reprocess safely rather than restarting all downstream work.",
      "Handled production incidents, including a Sev-1 incomplete-data issue caused by a subtle alert-string mismatch involving unexpected whitespace.",
      "Built a temporary recovery DAG to restore affected processing while the long-term alerting issue was corrected.",
      "Worked with engineering, data and reporting stakeholders to validate outputs, investigate discrepancies and coordinate production fixes.",
      "Contributed to Git-based development, code review, CI/CD workflows and controlled production releases.",
    ],

    technologies: [
      "Python",
      "Java",
      "Apache Airflow",
      "SQL",
      "Amazon Redshift",
      "Amazon S3",
      "Amazon EC2",
      "AWS Lambda",
      "Amazon RDS",
      "Amazon SQS",
      "Amazon SNS",
      "Git",
      "CI/CD",
      "Distributed Workflows",
      "Data Validation",
    ],

    lessons: [
      "Production reliability depends as much on recoverability and observability as it does on the happy-path implementation.",
      "Idempotent systems make incident recovery and historical reprocessing substantially safer.",
      "Small inconsistencies in alerts, configuration or metadata can have disproportionately large downstream consequences.",
      "Cross-team debugging is often necessary because technically correct processing must still match business and reporting expectations.",
      "Resource-aware orchestration is essential when multiple large workloads share the same infrastructure.",
    ],

    projects: [
      "Resource-aware production orchestration",
      "Deterministic dataset reprocessing",
      "Rolling-window data validation",
      "Automated rollups DAG",
      "Reporting-output reconciliation",
      "Production incident recovery",
    ],
  },

  {
    id: "rahi",

    company: "Rahi Platform Technologies",
    companyShort: "Rahi",
    role: "Software Engineering Intern",

    location: "Pune, India",
    period: "January 2025 — June 2025",
    type: "Internship",

    website: "https://www.rahitechnologies.com/",
    logo: "/images/media/rahi_platform_technologies_logo.jfif",

    summary:
      "Built production backend services for a lending platform using Java 21 and Spring Boot, with a strong focus on clean architecture, financial correctness, automated testing and API performance.",

    impact: [
      "Developed 21 backend endpoints supporting penal-charge calculations and financial transaction workflows.",
      "Reduced average API response time from approximately 420 ms to 280 ms.",
      "Supported more than 5,000 transactions per day.",
      "Maintained approximately 95% automated test coverage through test-driven development.",
      "Achieved approximately 99.9% calculation accuracy across supported financial scenarios.",
    ],

    work: [
      "Built a penal-charge calculation engine using Java 21, Spring Boot 3.3 and hexagonal architecture.",
      "Implemented REST endpoints for calculating, applying and retrieving financial charges.",
      "Modelled business rules for overdue amounts, charge periods, repayment conditions and transaction states.",
      "Implemented tax calculations across IGST, CGST and SGST scenarios.",
      "Separated domain logic from infrastructure concerns using ports and adapters.",
      "Worked with PostgreSQL and MongoDB for transactional and document-oriented persistence requirements.",
      "Wrote unit and integration tests before or alongside implementation as part of a TDD-oriented workflow.",
      "Improved API performance by reviewing query behaviour, service logic and unnecessary processing.",
      "Handled validation, error responses and edge cases involving financial calculations.",
      "Collaborated through code review, Git workflows and iterative backend releases.",
    ],

    technologies: [
      "Java 21",
      "Spring Boot 3.3",
      "PostgreSQL",
      "MongoDB",
      "REST APIs",
      "Hexagonal Architecture",
      "Test-Driven Development",
      "JUnit",
      "Mockito",
      "Git",
    ],

    lessons: [
      "Financial systems require correctness, traceability and predictable behaviour across edge cases.",
      "Hexagonal architecture makes business logic easier to test and less dependent on frameworks.",
      "High test coverage is most useful when tests protect domain behaviour rather than merely executing lines of code.",
      "Clear API contracts reduce ambiguity between backend, product and integration teams.",
    ],

    projects: [
      "Penal-charge calculation engine",
      "Financial transaction APIs",
      "Tax-calculation workflows",
      "Backend performance optimization",
    ],
  },

  {
    id: "tif-labs",

    company: "TIF Labs",
    companyShort: "TIF Labs",
    role: "AI Engineering Intern",

    location: "Bengaluru, India",
    period: "July 2024 — December 2024",
    type: "Internship",

    website: "https://tiflabs.in/",
    logo: "/images/media/tif.jfif",

    summary:
      "Worked on computer-vision and applied generative-AI systems for vehicle-damage inspection, segmentation, severity assessment and automated customer communication.",

    impact: [
      "Achieved an approximate mAP50 of 0.86 for bounding-box detection and 0.844 for segmentation masks using YOLOv8.",
      "Built a CNN-based damaged-part detection model with approximately 85% accuracy.",
      "Reduced model overfitting by approximately 15% through augmentation and hyperparameter tuning.",
      "Contributed to a real-time visual-inspection pipeline reaching approximately 92% mAP.",
    ],

    work: [
      "Developed a three-layer neural-network model for damaged vehicle-part detection.",
      "Used data augmentation and hyperparameter tuning to improve model generalization.",
      "Built image-segmentation workflows using YOLOv8 and OpenCV.",
      "Developed a Flet-based application for processing vehicle images and visualizing detected damage.",
      "Integrated the visual-inspection workflow with APIs for real-time customer updates.",
      "Used LangChain, Amazon Bedrock and Claude models for prompt-driven damaged-part and severity analysis.",
      "Conducted web scraping using BeautifulSoup to collect and compare competitor information.",
      "Explored AI-assisted image-quality and output-evaluation approaches.",
      "Worked on inference pipelines, model evaluation and practical deployment constraints.",
    ],

    technologies: [
      "Python",
      "YOLOv8",
      "OpenCV",
      "Computer Vision",
      "CNN",
      "TensorFlow",
      "Flet",
      "LangChain",
      "Amazon Bedrock",
      "Claude",
      "BeautifulSoup",
      "REST APIs",
    ],

    lessons: [
      "A model with strong offline accuracy still needs usable inference speed and reliable integration to deliver real value.",
      "Data quality and augmentation choices can matter as much as model architecture.",
      "Applied AI systems work best when model output is combined with clear product workflows.",
      "Prompt engineering requires structured evaluation rather than relying on a few convincing examples.",
    ],

    projects: [
      "Vehicle-damage segmentation",
      "Damaged-part classification",
      "AI severity assessment",
      "Real-time customer-update workflow",
    ],
  },

  {
    id: "bi-professionals",

    company: "Business Intelligence Professionals",
    companyShort: "BI Professionals",
    role: "Backend Developer Intern",

    location: "India",
    period: "July 2023 — August 2023",
    type: "Internship",

    website: "http://bipros.com",
    logo: "/images/media/bi_prof.png",

    summary:
      "Contributed to BIColab, an internal collaboration platform, by developing backend APIs, authentication workflows and PostgreSQL-backed services.",

    impact: [
      "Contributed to improvements associated with an approximately 20% increase in platform usage.",
      "Improved backend integration and application responsiveness through REST API development.",
      "Secured protected application workflows using JWT and Microsoft authentication.",
    ],

    work: [
      "Developed REST APIs for communication, collaboration and issue-resolution workflows.",
      "Integrated backend endpoints with the frontend application.",
      "Implemented authentication and authorization using JSON Web Tokens.",
      "Integrated Microsoft authentication for organizational users.",
      "Worked with PostgreSQL for persistence, query design and relational data modelling.",
      "Collaborated with frontend developers to debug integration issues and improve user flows.",
    ],

    technologies: [
      "REST APIs",
      "JWT",
      "Microsoft Authentication",
      "PostgreSQL",
      "Backend Development",
      "SQL",
      "Git",
    ],

    lessons: [
      "Frontend-backend integration succeeds when API behaviour and error states are clearly documented.",
      "Authentication affects nearly every application layer and should be designed early.",
      "Good database design simplifies both API implementation and future feature development.",
    ],

    projects: ["BIColab backend", "Authentication and authorization"],
  },

  {
    id: "perceptiviti",

    company: "Perceptiviti Data Solutions",
    companyShort: "Perceptiviti",
    role: "Software Engineering Intern",

    location: "India",
    period: "May 2023 — June 2023",
    type: "Internship",

    website: "https://www.perceptiviti.com/",
    logo: "/images/media/perceptiviti.png",

    summary:
      "Worked on Sherlock, an insurance-claims intelligence platform focused on automating adjudication and identifying fraud, waste and abuse.",

    impact: [
      "Improved fraud-detection accuracy by approximately 25% through model experimentation and refinement.",
      "Contributed to a platform associated with approximately AED 5.4 million in identified savings for a major insurer.",
      "Reduced manual ETL errors by automating data transfer from Oracle to MySQL.",
      "Improved validation efficiency through Python and SQL-based medical-claim rules.",
    ],

    work: [
      "Built and evaluated fraud-detection models using deep neural networks, random forests and XGBoost.",
      "Worked with medical-insurance claim data to identify suspicious patterns and invalid claims.",
      "Developed Python scripts to automate ETL workflows between Oracle and MySQL.",
      "Created business rules using Python and SQL to validate claims against medical-necessity criteria.",
      "Compared model performance and contributed to feature-engineering experiments.",
      "Worked with structured financial and healthcare data under practical business constraints.",
    ],

    technologies: [
      "Python",
      "Deep Neural Networks",
      "Random Forest",
      "XGBoost",
      "Feature Engineering",
      "Oracle",
      "MySQL",
      "SQL",
      "ETL",
      "Data Analysis",
    ],

    lessons: [
      "Machine-learning impact depends on how effectively predictions fit into real business decisions.",
      "Domain rules and machine-learning models can complement each other rather than compete.",
      "Automated data pipelines reduce both operational effort and model-quality risks.",
      "Evaluation metrics should reflect the business cost of false positives and false negatives.",
    ],

    projects: [
      "Insurance fraud detection",
      "Claims-validation rules",
      "Oracle-to-MySQL ETL automation",
    ],
  },

  {
    id: "swecha",

    company: "Swecha",
    companyShort: "Swecha",
    role: "Software Engineering Intern",

    location: "India",
    period: "June 2022 — July 2022",
    type: "Internship",

    website: "https://swecha.org/home",
    logo: "/images/media/Swechalogo.png",

    summary:
      "Built early web and mobile applications centred on speech accessibility, audio playback and cross-platform software development.",

    impact: [
      "Built a browser-based text-to-speech experience for real-time speech synthesis.",
      "Contributed to an Android audiobook application and improved audio-playback behaviour.",
      "Gained early experience collaborating across web and mobile development.",
    ],

    work: [
      "Developed a text-to-speech web application using HTML, CSS, JavaScript and the Web Speech API.",
      "Built user controls for text entry, voice selection and real-time speech synthesis.",
      "Contributed to an Android audiobook application using Java and ExoPlayer.",
      "Worked with audio libraries and playback controls to improve the listening experience.",
      "Coordinated with teammates to maintain consistent behaviour across web and mobile implementations.",
    ],

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Web Speech API",
      "Java",
      "Android",
      "ExoPlayer",
      "Audio Processing",
    ],

    lessons: [
      "Simple user-facing products are an effective way to learn end-to-end software development.",
      "Accessibility features can turn basic browser APIs into genuinely useful experiences.",
      "Cross-platform work requires thinking beyond the implementation details of a single device.",
    ],

    projects: [
      "Text-to-speech web application",
      "Android audiobook application",
    ],
  },
];
