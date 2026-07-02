export type InsightTrend = "up" | "down" | "warning";

export type PredictiveInsight = {
  id: string;
  title: string;
  description: string;
  program: string;
  confidence: number;
  trend: InsightTrend;
};

export const PREDICTIVE_INSIGHTS: PredictiveInsight[] = [
  {
    id: "1",
    title: "Elevated delay risk detected",
    description:
      "Vendor procurement patterns suggest a high likelihood of missing the scheduled cutover date.",
    program: "Cloud Migration Phase II",
    confidence: 68,
    trend: "warning",
  },
  {
    id: "2",
    title: "Budget overrun predicted",
    description:
      "Current remediation pace suggests compliance spend will exceed budget before close-out.",
    program: "Cybersecurity Compliance Audit",
    confidence: 74,
    trend: "warning",
  },
  {
    id: "3",
    title: "On-time completion likely",
    description:
      "Current velocity and a low open-blocker count point to on-schedule delivery.",
    program: "AI Document Intelligence Rollout",
    confidence: 96,
    trend: "up",
  },
  {
    id: "4",
    title: "Resourcing gap flagged",
    description:
      "Field inspection throughput has slowed over the past two weeks, risking further schedule slippage.",
    program: "Site Safety Risk Monitoring",
    confidence: 71,
    trend: "down",
  },
];

export const HEALTH_TREND = [
  { month: "Feb", onTrack: 61, atRisk: 28, delayed: 11 },
  { month: "Mar", onTrack: 65, atRisk: 24, delayed: 11 },
  { month: "Apr", onTrack: 68, atRisk: 22, delayed: 10 },
  { month: "May", onTrack: 70, atRisk: 20, delayed: 10 },
  { month: "Jun", onTrack: 72, atRisk: 19, delayed: 9 },
  { month: "Jul", onTrack: 75, atRisk: 17, delayed: 8 },
];

export const MODEL_METRICS: { label: string; value: string; percent?: number }[] = [
  { label: "Document Classification Accuracy", value: "95%", percent: 95 },
  { label: "OCR Extraction Accuracy", value: "98%", percent: 98 },
  { label: "Risk Prediction Precision", value: "87%", percent: 87 },
  { label: "Avg. Processing Time", value: "4.2s / document" },
];
