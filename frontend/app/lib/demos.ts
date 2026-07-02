export type DemoTopic = {
  id: string;
  title: string;
  tag: string;
  duration: string;
  description: string;
  keyPoints: string[];
};

export const DEMO_TOPICS: DemoTopic[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning Foundations",
    tag: "AI & ML",
    duration: "6 min",
    description:
      "How the platform's machine learning models turn raw program data into health scores, forecasts, and early warning signals.",
    keyPoints: [
      "Models are trained on historical program timelines, budgets, and risk logs.",
      "Health scores update automatically as new status reports come in.",
      "Every prediction ships with a confidence score, not a black-box verdict.",
    ],
  },
  {
    id: "llm",
    title: "Large Language Models (LLM)",
    tag: "LLM",
    duration: "5 min",
    description:
      "The language model layer that powers natural-language conversations in the AI Assistant, turning plain-English questions into structured answers.",
    keyPoints: [
      "Understands questions like \"which programs are at risk?\" without rigid query syntax.",
      "Synthesizes answers across programs, risks, and documents in one response.",
      "Runs with guardrails so answers stay grounded in your actual portfolio data.",
    ],
  },
  {
    id: "rag",
    title: "Retrieval-Augmented Generation (RAG)",
    tag: "RAG",
    duration: "7 min",
    description:
      "How the assistant retrieves relevant passages from your uploaded documents before generating an answer, instead of relying on memory alone.",
    keyPoints: [
      "Documents are chunked, embedded, and indexed automatically on upload.",
      "Answers cite the specific report or contract they were pulled from.",
      "Keeps responses current — no retraining needed when new documents arrive.",
    ],
  },
  {
    id: "mcp",
    title: "Model Context Protocol (MCP)",
    tag: "MCP",
    duration: "4 min",
    description:
      "The connective layer that lets the AI Assistant securely reach into program data, document stores, and external tools through a standard protocol.",
    keyPoints: [
      "Gives the assistant controlled, auditable access to internal systems.",
      "New data sources plug in without rebuilding the assistant itself.",
      "Keeps permissions and access scoped per integration.",
    ],
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence (OCR & NLP)",
    tag: "Document AI",
    duration: "6 min",
    description:
      "The ingestion pipeline behind the Documents page — turning scanned PDFs, spreadsheets, and slide decks into searchable, structured knowledge.",
    keyPoints: [
      "OCR extracts text from scans, images, and non-native PDFs.",
      "NLP classifies each file into a category and pulls out key entities.",
      "Every document gets an AI-generated summary the moment it's processed.",
    ],
  },
  {
    id: "predictive-risk",
    title: "Predictive Risk Analytics",
    tag: "Predictive Analytics",
    duration: "5 min",
    description:
      "How the Insights page forecasts delays and budget overruns before they happen, based on patterns across the portfolio.",
    keyPoints: [
      "Flags programs trending toward delay weeks before the deadline slips.",
      "Learns from historical RAID logs to spot recurring risk patterns.",
      "Surfaces predictions directly next to the programs they affect.",
    ],
  },
];
