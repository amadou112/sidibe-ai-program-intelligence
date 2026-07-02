import type { Lang } from "./LanguageContext";

export const NAV_LABELS: Record<Lang, Record<string, string>> = {
  en: {
    Home: "Home",
    Dashboard: "Dashboard",
    Programs: "Programs",
    "AI Assistant": "AI Assistant",
    Documents: "Documents",
    Insights: "Insights",
    "How I Work": "How I Work",
    "Sign In": "Sign In",
  },
  fr: {
    Home: "Accueil",
    Dashboard: "Tableau de bord",
    Programs: "Programmes",
    "AI Assistant": "Assistant IA",
    Documents: "Documents",
    Insights: "Analyses",
    "How I Work": "Ma méthode",
    "Sign In": "Connexion",
  },
};

export const METRIC_LABELS: Record<Lang, Record<string, string>> = {
  en: {
    Programs: "Programs",
    Documents: "Documents",
    Risks: "Risks",
    Tasks: "Tasks",
    "AI Insights": "AI Insights",
  },
  fr: {
    Programs: "Programmes",
    Documents: "Documents",
    Risks: "Risques",
    Tasks: "Tâches",
    "AI Insights": "Analyses IA",
  },
};

export const INDUSTRY_NAMES: Record<Lang, Record<string, string>> = {
  en: {
    "Financial Services": "Financial Services",
    Healthcare: "Healthcare",
    Government: "Government",
    "Real Estate": "Real Estate",
    Construction: "Construction",
    Education: "Education",
    "Non-Profit": "Non-Profit",
    "Retail & E-Commerce": "Retail & E-Commerce",
  },
  fr: {
    "Financial Services": "Services financiers",
    Healthcare: "Santé",
    Government: "Gouvernement",
    "Real Estate": "Immobilier",
    Construction: "Construction",
    Education: "Éducation",
    "Non-Profit": "Organismes à but non lucratif",
    "Retail & E-Commerce": "Commerce & E-Commerce",
  },
};

export const STATUS_LABELS: Record<Lang, Record<string, string>> = {
  en: { "On Track": "On Track", "At Risk": "At Risk", Delayed: "Delayed" },
  fr: { "On Track": "En bonne voie", "At Risk": "À risque", Delayed: "En retard" },
};

export const SEVERITY_LABELS: Record<Lang, Record<string, string>> = {
  en: { High: "High", Medium: "Medium", Low: "Low" },
  fr: { High: "Élevé", Medium: "Moyen", Low: "Faible" },
};

export const CATEGORY_LABELS: Record<Lang, Record<string, string>> = {
  en: {
    "Weekly Status Reports": "Weekly Status Reports",
    "Architecture & Design": "Architecture & Design",
    "Meeting Notes": "Meeting Notes",
    "Requirements & Specifications": "Requirements & Specifications",
    "Contracts & Legal": "Contracts & Legal",
    "RAID Logs & Risk Registers": "RAID Logs & Risk Registers",
    "Financial Reports": "Financial Reports",
    "Compliance & Audit": "Compliance & Audit",
    Presentations: "Presentations",
    "Structured Datasets": "Structured Datasets",
  },
  fr: {
    "Weekly Status Reports": "Rapports d'état hebdomadaires",
    "Architecture & Design": "Architecture et conception",
    "Meeting Notes": "Comptes rendus de réunion",
    "Requirements & Specifications": "Exigences et spécifications",
    "Contracts & Legal": "Contrats et affaires juridiques",
    "RAID Logs & Risk Registers": "Journaux RAID et registres de risques",
    "Financial Reports": "Rapports financiers",
    "Compliance & Audit": "Conformité et audit",
    Presentations: "Présentations",
    "Structured Datasets": "Jeux de données structurées",
  },
};

export const COMMON: Record<Lang, Record<string, string>> = {
  en: {
    exploreDashboard: "Explore Dashboard",
    watchDemo: "Watch Demo",
    learnMore: "Learn More",
    getStarted: "Get Started",
    getStartedToday: "Get Started Today",
    signIn: "Sign In",
    backToHome: "Back to home",
  },
  fr: {
    exploreDashboard: "Explorer le tableau de bord",
    watchDemo: "Voir la démo",
    learnMore: "En savoir plus",
    getStarted: "Commencer",
    getStartedToday: "Commencer dès aujourd'hui",
    signIn: "Connexion",
    backToHome: "Retour à l'accueil",
  },
};
