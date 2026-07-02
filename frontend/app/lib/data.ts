export type ProgramStatus = "On Track" | "At Risk" | "Delayed";

export type Program = {
  name: string;
  industry: string;
  description: string;
  owner: string;
  due: string;
  progress: number;
  status: ProgramStatus;
};

export const PROGRAMS: Program[] = [
  {
    name: "Northgate Data Modernization",
    industry: "Government",
    description:
      "Migrating legacy case-management data into a unified, AI-searchable data warehouse.",
    owner: "A. Sidibe",
    due: "Sep 2026",
    progress: 82,
    status: "On Track",
  },
  {
    name: "Cloud Migration Phase II",
    industry: "Financial Services",
    description:
      "Lift-and-shift of core banking workloads to a hybrid cloud with zero-downtime cutover.",
    owner: "J. Diallo",
    due: "Aug 2026",
    progress: 54,
    status: "At Risk",
  },
  {
    name: "AI Document Intelligence Rollout",
    industry: "Healthcare",
    description:
      "NLP/OCR pipeline for automated intake and classification of patient records.",
    owner: "M. Traore",
    due: "Jul 2026",
    progress: 91,
    status: "On Track",
  },
  {
    name: "Cybersecurity Compliance Audit",
    industry: "Financial Services",
    description:
      "End-to-end audit and remediation program to meet updated regulatory security standards.",
    owner: "F. Keita",
    due: "Oct 2026",
    progress: 38,
    status: "Delayed",
  },
  {
    name: "Real Estate Portfolio Analytics",
    industry: "Real Estate",
    description:
      "Predictive analytics dashboard for portfolio valuation and lease renewal risk.",
    owner: "A. Sidibe",
    due: "Nov 2026",
    progress: 67,
    status: "On Track",
  },
  {
    name: "Campus Facilities AI Scheduler",
    industry: "Education",
    description:
      "Automated space and resource scheduling powered by demand forecasting models.",
    owner: "N. Camara",
    due: "Dec 2026",
    progress: 45,
    status: "At Risk",
  },
  {
    name: "Donor Insights Platform",
    industry: "Non-Profit",
    description:
      "Unified donor CRM with AI-driven giving predictions and outreach recommendations.",
    owner: "S. Toure",
    due: "Sep 2026",
    progress: 73,
    status: "On Track",
  },
  {
    name: "Site Safety Risk Monitoring",
    industry: "Construction",
    description:
      "Computer-vision monitoring of active job sites for real-time safety compliance.",
    owner: "F. Keita",
    due: "Jan 2027",
    progress: 29,
    status: "Delayed",
  },
  {
    name: "Retail Demand Forecasting",
    industry: "Retail & E-Commerce",
    description:
      "AI forecasting engine to optimize inventory allocation across regional warehouses.",
    owner: "M. Traore",
    due: "Aug 2026",
    progress: 88,
    status: "On Track",
  },
];

export type Risk = {
  title: string;
  program: string;
  owner: string;
  severity: "High" | "Medium" | "Low";
};

export const RISKS: Risk[] = [
  {
    title: "Vendor delay on cloud infrastructure procurement",
    program: "Cloud Migration Phase II",
    owner: "J. Diallo",
    severity: "High",
  },
  {
    title: "Data quality issues in legacy document corpus",
    program: "AI Document Intelligence Rollout",
    owner: "M. Traore",
    severity: "Medium",
  },
  {
    title: "Regulatory changes affecting compliance timeline",
    program: "Cybersecurity Compliance Audit",
    owner: "F. Keita",
    severity: "High",
  },
  {
    title: "Resource constraints in QA team",
    program: "Northgate Data Modernization",
    owner: "A. Sidibe",
    severity: "Low",
  },
];

export const STATUS_STYLES: Record<string, string> = {
  "On Track": "bg-emerald-100 text-emerald-700",
  "At Risk": "bg-amber-100 text-amber-700",
  Delayed: "bg-rose-100 text-rose-700",
};

export const SEVERITY_STYLES: Record<string, string> = {
  High: "bg-rose-100 text-rose-700",
  Medium: "bg-amber-100 text-amber-700",
  Low: "bg-slate-100 text-slate-600",
};
