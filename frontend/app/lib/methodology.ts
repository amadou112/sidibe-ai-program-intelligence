export const LIFECYCLE_STAGES = [
  {
    name: "Initiate",
    items: [
      "Project charter creation",
      "Project kick-off",
      "High-level requirements analysis",
      "Architecture design",
    ],
  },
  {
    name: "Plan",
    items: [
      "Business requirements",
      "High-level technical design",
      "Low-level technical design",
      "Detailed project plan",
    ],
  },
  {
    name: "Execute",
    items: ["Execution — develop & test", "Deploy to production"],
  },
  {
    name: "Closeout",
    items: [
      "Lessons learned",
      "Project financials review and closure",
      "Project closure",
    ],
  },
  {
    name: "Maintenance",
    items: ["Operational support"],
  },
];

export const LIFECYCLE_THREADS = [
  "Risk Management",
  "Communication Management",
  "Metrics Management",
  "Change Management",
];

export const LAYMAN_ANALOGY = [
  { label: "Piece of land", detail: "Business case & charter" },
  { label: "Building House", detail: "Design, develop & test" },
  { label: "Housewarming", detail: "Release & go-live" },
  { label: "Moving in", detail: "Support & adoption" },
];

export const SDLC_PHASES = [
  {
    name: "Prep",
    duration: "12 days",
    summary:
      "Not an official SDLC phase, but I always run it — it's where I de-risk the project before the clock officially starts.",
    tasks: [
      "Stakeholder analysis",
      "Request and onboard resources",
      "Create project onboarding process",
      "Schedule high-level scope review meetings",
      "Finalize and set up kick-off meeting",
    ],
  },
  {
    name: "Analysis",
    duration: "29 days",
    summary:
      "I align product, business, and technical stakeholders on scope before a single line of design work starts.",
    tasks: [
      "Conduct project kick-off",
      "Create project charter",
      "Create risk register",
      "Schedule detailed scope review meetings",
      "Complete Business Requirements Document (BRD) and sign-off",
    ],
  },
  {
    name: "Design",
    duration: "20 days",
    summary:
      "Architecture, environments, data, security, and infrastructure requirements get locked down in parallel.",
    tasks: [
      "Define high-level and low-level technical design",
      "Complete System Requirements Document (SRD)",
      "Prepare test, training, and validation environments",
      "Confirm data sources and preprocessing plan",
      "Define security policies and validate infrastructure needs",
    ],
  },
  {
    name: "Develop",
    duration: "32 days",
    summary:
      "Model training kicks off here — it's the longest-lead-time piece, so I sequence everything else around it.",
    tasks: [
      "Coding and unit testing",
      "Integrate with target channels (browser, mobile, email, etc.)",
      "Train, validate, and finalize the model",
      "Review results and sign-off",
    ],
  },
  {
    name: "Test",
    duration: "23 days",
    summary:
      "Testing starts only after model training completes — I plan the schedule so QA isn't blocked waiting on data science.",
    tasks: [
      "Define test strategy and test plan",
      "Functional, integration, cross-platform, regression, and load testing",
      "Defect triage review",
      "User Acceptance Testing (UAT) and sign-off",
    ],
  },
  {
    name: "Release",
    duration: "~19 weeks incl. hypercare",
    summary:
      "Deployment is a single milestone; hypercare is where I actually earn my keep, watching the model in production.",
    tasks: [
      "Communicate release date to stakeholders",
      "Deploy the model to production",
      "Smoke testing and model optimization",
      "Hypercare monitoring",
      "Training material, schedule, and change management (OCM)",
    ],
  },
  {
    name: "Support",
    duration: "26 days",
    summary:
      "I don't disappear at go-live — I run a formal handover so operations can own the model with confidence.",
    tasks: [
      "Define development-to-operations hand-off checklist",
      "Shadow support during hypercare",
      "Update asset register and support catalogue",
      "Communicate support channels to end-users",
    ],
  },
  {
    name: "Close",
    duration: "1 day",
    summary: "Every project gets a formal close — no loose ends, no tribal knowledge.",
    tasks: [
      "Conduct lessons-learned session",
      "Reconcile project budget",
      "Update project documentation",
      "Communicate project closure to stakeholders",
    ],
  },
];

export const METHODOLOGIES = [
  {
    name: "Waterfall",
    tag: "Phased gates and handshakes",
    description:
      "Best when requirements are firm and compliance sign-off matters more than speed — common in regulated, infrastructure-heavy AI programs.",
  },
  {
    name: "Agile",
    tag: "Incremental and iterative",
    description:
      "2-week sprints (Analyze → Design → Develop → Test) building toward a release — best when the model or product needs to evolve with feedback.",
  },
];

export const AI_TIMELINE = [
  { era: "1950s", detail: "Alan Turing introduces the Turing Test; the 1956 Dartmouth Conference coins the term \"Artificial Intelligence.\"" },
  { era: "1960s", detail: "ELIZA, an early NLP program, demonstrates human-like conversation." },
  { era: "1970s", detail: "Rule-based expert systems like MYCIN and Dendral emerge." },
  { era: "1990s", detail: "Deep Blue defeats a world chess champion." },
  { era: "2000s+", detail: "Alexa, Siri, Watson, ChatGPT, and quantum-AI research go mainstream." },
];

export const AI_SUBFIELDS = [
  {
    name: "Machine Learning",
    detail: "Algorithms that learn from data to make predictions and decisions — supervised, unsupervised, and reinforcement learning.",
  },
  {
    name: "Natural Language Processing",
    detail: "Lets machines understand, interpret, and generate human language — chatbots, translation, sentiment analysis.",
  },
  {
    name: "Computer Vision",
    detail: "Teaches computers to interpret images and video — object detection, facial recognition, image classification.",
  },
];

export const DATA_LIFECYCLE = [
  "Data Collection",
  "Data Storage",
  "Data Usage",
  "Data Sharing",
  "Data Deletion",
  "Data Archiving",
];

export const INFRASTRUCTURE_PILLARS = [
  {
    name: "Compute",
    detail: "The processing power — including GPUs — needed to train and run AI models.",
  },
  {
    name: "Storage",
    detail: "Where AI data, applications, and trained models live, on-prem or in the cloud.",
  },
  {
    name: "Networking",
    detail: "Connects distributed training, model deployment, and data sharing across systems.",
  },
];

export const ETHICS_PILLARS = [
  { name: "Fairness", detail: "Minimizing inherited bias in training data to prevent discriminatory outcomes." },
  { name: "Privacy", detail: "Data protection and compliance regulations for any model touching sensitive data." },
  { name: "Transparency", detail: "Understanding how a model reaches a decision, to build trust and accountability." },
  { name: "Accountability", detail: "Clear ownership for AI system behavior across every team involved." },
  { name: "Sustainability", detail: "Promoting responsible, human-centered outcomes from AI systems." },
];

export const SECURITY_PILLARS = [
  { name: "Data Security", detail: "Protecting training data from poisoning and misuse." },
  { name: "Model Security", detail: "Encryption and access controls on production-deployed models." },
  { name: "Runtime Security", detail: "Detecting and responding to attacks on live AI systems." },
];

export const TOOLS_TABLE = [
  { category: "Project Management", tools: "Microsoft Project, Jira, SharePoint, Confluence" },
  { category: "Machine Learning Frameworks", tools: "TensorFlow, PyTorch, Scikit-Learn, Apache MXNet" },
  { category: "Natural Language Processing", tools: "NLTK, GPT-based models, spaCy" },
  { category: "Computer Vision", tools: "OpenCV, ImageNet" },
  { category: "Data Processing", tools: "Pandas, NumPy" },
  { category: "Big Data & Distributed Computing", tools: "Apache Hadoop, Apache Spark" },
  { category: "Cloud Platforms", tools: "AWS, Google Cloud Platform, Microsoft Azure" },
  { category: "Development Environments", tools: "Jupyter Notebook, VS Code" },
  { category: "Deployment & Model Serving", tools: "Docker, Kubernetes, TensorFlow Serving" },
  { category: "Data Visualization", tools: "Matplotlib, Tableau" },
];

export const AI_ROLES = [
  { role: "AI Project Manager", skills: "Project planning & execution, resource allocation, risk management, budget management" },
  { role: "AI Product Manager", skills: "Roadmap development, stakeholder communication, market research, decision-making" },
  { role: "AI Business Analyst", skills: "Requirements analysis, data-driven decision-making, reporting" },
  { role: "AI Software Developer", skills: "Integrating AI components into applications, AI libraries & APIs" },
  { role: "Data Engineer", skills: "Data pipelines, ETL, database management, big data tooling" },
  { role: "Data Scientist", skills: "Data analysis, modeling, preprocessing, visualization" },
  { role: "Machine Learning Engineer", skills: "Model development & training, productionization, MLOps" },
  { role: "Deep Learning Engineer", skills: "Neural network architecture, GPU/TPU utilization, model tuning" },
  { role: "AI Research Scientist", skills: "Advanced modeling, experiment design, algorithm development" },
  { role: "AI Ethics & Security SME", skills: "Bias evaluation, ethical guidelines, regulatory compliance" },
];

export const CHALLENGES = [
  {
    challenge: "Technical skills unavailability",
    mitigation: "I map required skills during Prep and pre-onboard cross-functional resources before kickoff, not after.",
  },
  {
    challenge: "Data-related issues (quality, availability)",
    mitigation: "Data sourcing and preprocessing sign-off happens in Design — before development starts, not during it.",
  },
  {
    challenge: "Infrastructure delays or unready environments",
    mitigation: "Infrastructure validation is a scheduled Design-phase deliverable with its own sign-off, run in parallel with architecture.",
  },
  {
    challenge: "Exhaustive model training impacting timelines",
    mitigation: "I treat training as the critical path and sequence QA and release planning around it, not after it.",
  },
  {
    challenge: "Dynamic testing/training delaying release dates",
    mitigation: "I build hypercare and optimization time into the release plan up front, so drift doesn't blow the deadline.",
  },
];

export const PRE_KICKOFF_CHECKLIST = [
  "Approved business case",
  "Technical resource availability with required skills",
  "Availability of core and cross-functional teams",
  "Research on similar projects already delivered in the company",
  "Available templates and compliance mandates",
];

export const SCOPE_DEPENDENCIES = [
  { team: "IT Support Leads", need: "Understand their operational needs" },
  { team: "Data team", need: "Train and test the model" },
  { team: "Engineering team", need: "Develop the model" },
  { team: "Infrastructure team", need: "Confirm infrastructure needs" },
  { team: "DevOps team", need: "Build across environments" },
  { team: "Product team", need: "Document the requirements" },
  { team: "Architecture team", need: "Recommend enterprise-aligned design" },
  { team: "Security & Compliance", need: "Weigh in on regulations" },
];

export const TIME_ALLOCATION = [
  { label: "Cross-team collaboration & management", value: 55 },
  { label: "Project plan management", value: 15 },
  { label: "Stakeholder management", value: 10 },
  { label: "Risk and issue management", value: 10 },
  { label: "Metrics management", value: 5 },
  { label: "Communication management", value: 5 },
];

export const CAPSTONE = {
  name: "AIHA — AI-Powered IT Helpdesk Assistant",
  description:
    "A strategic initiative to build an AI model that handles self-service password resets and basic IT troubleshooting — reducing IT support costs and increasing productivity.",
  totalDuration: "132 working days",
  team: ["Architect", "Business Analyst", "Security SME", "Developers (ML, Data)", "Testers", "DevOps", "Solution Manager"],
};

export const METHODOLOGY_PAGE_TEXT = {
  en: {
    heroTag: "MEET YOUR AI PROGRAM MANAGER",
    heroTitle: "How I Run AI Projects",
    heroSubtitle:
      "I'm Amadou Sidibe. This page walks through exactly how I take an AI program from a blank charter to a production model with a support team behind it — the same playbook whether I'm running one project or five at once.",
    seeItLive: "See It Running Live",
    askAssistant: "Ask the AI Assistant",
    presenter1:
      '"Every AI program I run follows the same backbone — Initiate, Plan, Execute, Closeout, Maintenance — with Risk, Communication, Metrics, and Change Management running underneath the whole thing. Let me show you exactly how that works."',
    bigPicture: "THE BIG PICTURE",
    lifecycleTitle: "The Project Lifecycle I Run",
    plainEnglish: "IN PLAIN ENGLISH",
    houseTitle: "Building a House, Not Just Writing Code",
    houseClosing: "Project Management is the thread that runs through all four steps — same as building a house.",
    phaseByPhase: "PHASE BY PHASE",
    sdlcTitle: "The SDLC Phases I Manage",
    sdlcSubtitle: "Eight phases, every time. Names sometimes vary by company, but the sequence and the discipline don't.",
    deliveryApproach: "DELIVERY APPROACH",
    methodologyTitle: "Waterfall or Agile — I Pick Based on the Project",
    presenter2:
      '"A lot of PMs manage AI projects like any other software project. I don\'t — I understand what\'s actually happening under the hood, from model training to data lifecycle to AI ethics. That\'s what lets me ask the right questions before they become blockers."',
    aiUnderstandTag: "WHAT I ACTUALLY UNDERSTAND ABOUT AI",
    aiUnderstandTitle: "Not Just the PM Side — the AI Side Too",
    evolutionTitle: "Evolution of AI",
    subfieldsTitle: "Sub-Fields of AI",
    dataLifecycleTitle: "The Data Lifecycle Behind Every Model",
    infraTitle: "Infrastructure Fundamentals",
    aiEthics: "AI Ethics",
    aiSecurity: "AI Security",
    toolsTag: "TOOLS & TECHNOLOGY",
    toolsTitle: "What's In My Toolbox",
    toolsFooterPrefix: "See how some of these power this platform on the",
    toolsFooterLink: "Technology pages",
    rolesTag: "CROSS-FUNCTIONAL ORCHESTRATION",
    rolesTitle: "The Team I Coordinate",
    rolesSubtitle:
      "Being an effective AI Project Manager means knowing what every role on the team actually does — so I can plan realistic timelines and unblock the right person fast.",
    roleCol: "Role",
    skillsCol: "Key Skills",
    presenter3:
      '"Talk is easy — so here\'s a real project I ran end-to-end: AIHA, an AI-powered IT helpdesk assistant. Same playbook you just read, applied to an actual 132-day delivery."',
    caseStudy: "CASE STUDY",
    kickoffToClose: "kickoff to close",
    teamCoordinated: "Team I coordinated",
    multiProjectTag: "THE ACTUAL QUESTION YOU CAME HERE WITH",
    multiProjectTitle: "How I Run Multiple AI Projects at Once",
    multiProjectSubtitle: "One project running well is a process. Five running well at the same time is a system. Here's the system.",
    seePortfolio: "See the Portfolio Dashboard",
    seePrograms: "See All Active Programs",
    timeAllocationTitle: "Where My Time Actually Goes",
    challengesTag: "HONEST CHALLENGES",
    challengesTitle: "What Actually Goes Wrong, and How I Handle It",
    checklistTitle: "What I Check Before Any Project Starts",
    dependenciesTitle: "Who I Align With, and Why",
    presenterClosing:
      '"That\'s the whole playbook — no smoke and mirrors. If you\'re evaluating AI Project Managers, ask any candidate to walk through their last project phase by phase like I just did. I\'ll gladly do the same for yours."',
    ctaTitle: "Ready to Run Your Next AI Program?",
    ctaSubtitle: "Explore the platform, ask the AI Assistant a question, or reach out directly.",
    getStarted: "Get Started",
  },
  fr: {
    heroTag: "RENCONTREZ VOTRE CHEF DE PROGRAMME IA",
    heroTitle: "Comment Je Gère les Projets d'IA",
    heroSubtitle:
      "Je suis Amadou Sidibe. Cette page explique exactement comment je fais passer un programme d'IA d'une charte vierge à un modèle en production, appuyé par une équipe de soutien — la même méthode, que je gère un seul projet ou cinq à la fois.",
    seeItLive: "Voir la Plateforme en Direct",
    askAssistant: "Demander à l'Assistant IA",
    presenter1:
      '"Chaque programme d\'IA que je gère suit la même ossature — Initier, Planifier, Exécuter, Clôturer, Maintenir — avec la gestion des risques, des communications, des métriques et du changement en toile de fond. Laissez-moi vous montrer exactement comment cela fonctionne."',
    bigPicture: "LA VUE D'ENSEMBLE",
    lifecycleTitle: "Le Cycle de Vie de Projet Que Je Gère",
    plainEnglish: "EN TERMES SIMPLES",
    houseTitle: "Construire une Maison, Pas Seulement du Code",
    houseClosing: "La gestion de projet est le fil conducteur des quatre étapes — tout comme la construction d'une maison.",
    phaseByPhase: "PHASE PAR PHASE",
    sdlcTitle: "Les Phases du SDLC Que Je Gère",
    sdlcSubtitle: "Huit phases, à chaque fois. Les noms varient parfois d'une entreprise à l'autre, mais pas la séquence ni la rigueur.",
    deliveryApproach: "APPROCHE DE LIVRAISON",
    methodologyTitle: "Cascade ou Agile — Je Choisis Selon le Projet",
    presenter2:
      '"Beaucoup de chefs de projet gèrent les projets d\'IA comme n\'importe quel projet logiciel. Pas moi — je comprends ce qui se passe réellement sous le capot, de l\'entraînement des modèles au cycle de vie des données jusqu\'à l\'éthique de l\'IA. C\'est ce qui me permet de poser les bonnes questions avant qu\'elles ne deviennent des obstacles."',
    aiUnderstandTag: "CE QUE JE COMPRENDS VRAIMENT DE L'IA",
    aiUnderstandTitle: "Pas Seulement le Côté Gestion — le Côté IA Aussi",
    evolutionTitle: "Évolution de l'IA",
    subfieldsTitle: "Sous-Domaines de l'IA",
    dataLifecycleTitle: "Le Cycle de Vie des Données Derrière Chaque Modèle",
    infraTitle: "Fondamentaux de l'Infrastructure",
    aiEthics: "Éthique de l'IA",
    aiSecurity: "Sécurité de l'IA",
    toolsTag: "OUTILS ET TECHNOLOGIE",
    toolsTitle: "Ce Qui Se Trouve Dans Ma Boîte à Outils",
    toolsFooterPrefix: "Découvrez comment certains de ces outils font fonctionner cette plateforme sur les",
    toolsFooterLink: "pages Technologie",
    rolesTag: "ORCHESTRATION INTERFONCTIONNELLE",
    rolesTitle: "L'Équipe Que Je Coordonne",
    rolesSubtitle:
      "Être un chef de programme IA efficace, c'est savoir ce que chaque rôle de l'équipe fait réellement — afin de planifier des échéanciers réalistes et de débloquer rapidement la bonne personne.",
    roleCol: "Rôle",
    skillsCol: "Compétences Clés",
    presenter3:
      '"Parler, c\'est facile — voici donc un vrai projet que j\'ai mené de bout en bout : AIHA, un assistant IA de support informatique. La même méthode que vous venez de lire, appliquée à une livraison réelle de 132 jours."',
    caseStudy: "ÉTUDE DE CAS",
    kickoffToClose: "du lancement à la clôture",
    teamCoordinated: "Équipe que j'ai coordonnée",
    multiProjectTag: "LA VRAIE QUESTION QUI VOUS AMÈNE ICI",
    multiProjectTitle: "Comment Je Gère Plusieurs Projets d'IA à la Fois",
    multiProjectSubtitle:
      "Bien gérer un projet, c'est un processus. Bien en gérer cinq à la fois, c'est un système. Voici le système.",
    seePortfolio: "Voir le Tableau de Bord du Portefeuille",
    seePrograms: "Voir Tous les Programmes Actifs",
    timeAllocationTitle: "Où Va Réellement Mon Temps",
    challengesTag: "DÉFIS HONNÊTES",
    challengesTitle: "Ce Qui Tourne Mal en Réalité, et Comment Je le Gère",
    checklistTitle: "Ce Que Je Vérifie Avant le Début de Tout Projet",
    dependenciesTitle: "Avec Qui Je M'Aligne, et Pourquoi",
    presenterClosing:
      '"Voilà toute la méthode — sans artifice. Si vous évaluez des chefs de programme IA, demandez à n\'importe quel candidat de décrire son dernier projet phase par phase, comme je viens de le faire. Je ferai volontiers de même pour le vôtre."',
    ctaTitle: "Prêt à Gérer Votre Prochain Programme d'IA ?",
    ctaSubtitle: "Explorez la plateforme, posez une question à l'Assistant IA, ou contactez-moi directement.",
    getStarted: "Commencer",
  },
};

export const MULTI_PROJECT_PRINCIPLES = [
  {
    title: "Standardized templates across every program",
    detail:
      "Charters, RAID logs, BRDs, and SRDs follow the same template on every project. That's what makes running five programs feel like running one — I'm not relearning a format each time I switch context.",
  },
  {
    title: "One portfolio view, not five spreadsheets",
    detail:
      "Every active program rolls up into a single dashboard — status, risk, and progress in one place, not scattered across email threads. This platform's Dashboard and Programs pages are literally how I do this.",
  },
  {
    title: "Risk logs roll up, they don't stay siloed",
    detail:
      "A risk on one program can be a leading indicator for another (a vendor delay on Program A often predicts the same delay on Program B with the same vendor). I track RAID logs at the portfolio level, not just per-project.",
  },
  {
    title: "Time-boxed context switching",
    detail:
      "Roughly 55% of my time goes to cross-team collaboration — that only scales across multiple projects if meetings are batched and status updates are async by default, not ad hoc.",
  },
  {
    title: "Delegate execution, own accountability",
    detail:
      "Servant leadership means the team owns execution details; I own removing blockers, managing risk, and making sure nothing silently slips — across every program I'm running at once.",
  },
];
