export type Industry = {
  slug: string;
  name: string;
  icon: string;
  tagline: string;
  overview: string;
  challenges: string[];
  howWeHelp: string[];
  stat: { label: string; value: string };
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "financial-services",
    name: "Financial Services",
    icon: "Landmark",
    tagline: "Program delivery and risk oversight for regulated institutions.",
    overview:
      "Banks, insurers, and asset managers run large transformation programs under constant regulatory scrutiny. Sidibe Enterprises gives program teams a single source of truth for status, risk, and compliance evidence across every initiative.",
    challenges: [
      "Fragmented reporting across legacy systems and spreadsheets",
      "Regulatory audits requiring fast, accurate document retrieval",
      "Vendor and infrastructure risk spanning multi-year programs",
    ],
    howWeHelp: [
      "Centralized RAID logs with AI-flagged regulatory risk",
      "Document intelligence for contracts, audits, and compliance filings",
      "Executive dashboards that translate program status into board-ready summaries",
    ],
    stat: { label: "Programs under active oversight", value: "6" },
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: "HeartPulse",
    tagline: "AI-assisted document intelligence for patient and provider data.",
    overview:
      "Healthcare organizations manage sensitive records at scale — intake forms, provider credentialing, and compliance documentation. Our AI document pipeline automates classification and extraction while keeping oversight in human hands.",
    challenges: [
      "High-volume intake of unstructured patient and provider records",
      "Strict data handling and privacy requirements",
      "Slow manual review cycles for compliance-critical documents",
    ],
    howWeHelp: [
      "NLP/OCR pipeline for automated intake classification",
      "Risk tracking for compliance and credentialing programs",
      "AI Assistant for fast, portfolio-wide status queries",
    ],
    stat: { label: "Faster document intake", value: "3.4x" },
  },
  {
    slug: "government",
    name: "Government",
    icon: "Building2",
    tagline: "Modernization programs with full transparency and accountability.",
    overview:
      "Public sector modernization programs demand transparency, auditability, and careful stewardship of public funds. Sidibe Enterprises brings structured program tracking and predictive risk insight to multi-year government initiatives.",
    challenges: [
      "Legacy data trapped in siloed case-management systems",
      "Public accountability for budget and timeline commitments",
      "Coordinating multiple vendors and agencies on one program",
    ],
    howWeHelp: [
      "Unified data warehouse migration tracking with AI-searchable records",
      "Budget variance and delivery forecasting across agencies",
      "Audit-ready documentation with automatic version history",
    ],
    stat: { label: "Data modernization programs", value: "4" },
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Home",
    tagline: "Portfolio analytics and predictive insight for property programs.",
    overview:
      "Real estate portfolios span acquisitions, lease management, and capital projects simultaneously. Our predictive analytics surface valuation trends and lease-renewal risk before they impact the bottom line.",
    challenges: [
      "Valuation and lease data scattered across disconnected tools",
      "Capital project delays impacting portfolio performance",
      "Limited forward visibility into renewal and vacancy risk",
    ],
    howWeHelp: [
      "Predictive portfolio valuation and lease-renewal risk scoring",
      "Construction and capital project tracking in one dashboard",
      "Document intelligence for leases, appraisals, and contracts",
    ],
    stat: { label: "Portfolio programs tracked", value: "5" },
  },
  {
    slug: "construction",
    name: "Construction",
    icon: "HardHat",
    tagline: "Real-time safety monitoring and delivery risk for job sites.",
    overview:
      "Construction programs carry schedule, budget, and safety risk in parallel. We combine site monitoring signals with program data so delays and safety issues surface before they cascade.",
    challenges: [
      "Safety compliance monitoring across distributed job sites",
      "Schedule slippage from resourcing and permitting delays",
      "Fragmented reporting between field teams and program office",
    ],
    howWeHelp: [
      "Computer-vision-informed safety risk monitoring",
      "RAID logs that connect field-level issues to program timelines",
      "AI-generated status summaries from weekly site reports",
    ],
    stat: { label: "Active site programs", value: "3" },
  },
  {
    slug: "education",
    name: "Education",
    icon: "GraduationCap",
    tagline: "Operational intelligence for campus and district-wide programs.",
    overview:
      "Educational institutions run facilities, technology, and student-services programs with lean administrative teams. Sidibe Enterprises automates scheduling insight and status reporting so staff can focus on outcomes.",
    challenges: [
      "Manual scheduling and resource allocation across facilities",
      "Limited administrative capacity for program reporting",
      "Disconnected systems for budget, facilities, and academics",
    ],
    howWeHelp: [
      "AI-driven demand forecasting for space and resource scheduling",
      "Automated weekly status reporting for program stakeholders",
      "Document intelligence for grants, policies, and compliance filings",
    ],
    stat: { label: "Campus programs supported", value: "2" },
  },
  {
    slug: "non-profit",
    name: "Non-Profit",
    icon: "Users",
    tagline: "Donor intelligence and program impact tracking.",
    overview:
      "Non-profits need to prove impact with limited operational overhead. Our platform connects donor data, program delivery, and reporting so teams can spend less time compiling updates and more time on mission work.",
    challenges: [
      "Disconnected donor CRM and program delivery data",
      "Time-intensive manual impact reporting",
      "Limited visibility into giving trends and donor risk",
    ],
    howWeHelp: [
      "AI-driven donor giving predictions and outreach recommendations",
      "Unified view of program delivery alongside fundraising data",
      "Automated report generation for board and grantor updates",
    ],
    stat: { label: "Donor-funded programs tracked", value: "1" },
  },
  {
    slug: "retail-ecommerce",
    name: "Retail & E-Commerce",
    icon: "ShoppingCart",
    tagline: "Demand forecasting and program visibility for retail operations.",
    overview:
      "Retail and e-commerce operations run on tight margins and fast-moving demand signals. Our forecasting models help teams allocate inventory and track operational programs from one place.",
    challenges: [
      "Inventory misallocation from delayed demand signals",
      "Multiple concurrent operational programs across regions",
      "Manual reconciliation of forecasts against actuals",
    ],
    howWeHelp: [
      "AI demand forecasting for regional inventory allocation",
      "Program tracking for operational and technology rollouts",
      "Predictive insights flagging forecast-to-actual drift early",
    ],
    stat: { label: "Regional forecasting programs", value: "1" },
  },
];
