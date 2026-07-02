export type Technology = {
  slug: string;
  name: string;
  category: string;
  icon: string;
  summary: string;
  howWeUseIt: string;
  capabilities: string[];
};

export const TECHNOLOGIES: Technology[] = [
  {
    slug: "python",
    name: "Python",
    category: "Programming Language",
    icon: "Code2",
    summary:
      "The core language behind our data pipelines, machine learning models, and backend services.",
    howWeUseIt:
      "Python powers the services that clean, transform, and score program data before it ever reaches a dashboard — from document parsing scripts to the model-serving layer behind predictive insights.",
    capabilities: [
      "Data pipeline and ETL scripting",
      "Model training and inference services",
      "Automation for document ingestion workflows",
    ],
  },
  {
    slug: "pytorch",
    name: "PyTorch",
    category: "ML Framework",
    icon: "Cpu",
    summary:
      "A deep learning framework used to train and fine-tune the models behind risk prediction and document classification.",
    howWeUseIt:
      "PyTorch underpins the neural networks that classify document types, extract entities, and score program risk — trained on historical portfolio data and refined as new outcomes come in.",
    capabilities: [
      "Risk-scoring model training",
      "Document classification networks",
      "Rapid experimentation for new predictive features",
    ],
  },
  {
    slug: "tensorflow",
    name: "TensorFlow",
    category: "ML Framework",
    icon: "Boxes",
    summary:
      "A production-grade machine learning framework used for models that need to run reliably at scale.",
    howWeUseIt:
      "TensorFlow serves models where deployment stability and scale matter most, including parts of the forecasting pipeline behind portfolio health trends.",
    capabilities: [
      "Scalable model serving in production",
      "Time-series forecasting for portfolio trends",
      "Cross-platform deployment of trained models",
    ],
  },
  {
    slug: "openai",
    name: "OpenAI",
    category: "LLM Provider",
    icon: "Bot",
    summary:
      "Large language models that give the AI Assistant its natural-language understanding and reasoning.",
    howWeUseIt:
      "OpenAI models interpret free-form questions in the AI Assistant, reason over portfolio context, and generate clear, structured answers instead of raw data dumps.",
    capabilities: [
      "Natural-language question answering",
      "Summarization of program and risk data",
      "Structured reasoning over portfolio context",
    ],
  },
  {
    slug: "langchain",
    name: "LangChain",
    category: "Orchestration Framework",
    icon: "Workflow",
    summary:
      "An orchestration layer that chains together retrieval, tools, and language models into a single assistant workflow.",
    howWeUseIt:
      "LangChain coordinates the steps behind an AI Assistant response — retrieving relevant documents, calling the right internal tool, and passing context to the language model in the right order.",
    capabilities: [
      "Multi-step reasoning chains",
      "Tool and data source orchestration",
      "Prompt and context management",
    ],
  },
  {
    slug: "llamaindex",
    name: "LlamaIndex",
    category: "Retrieval Framework",
    icon: "Database",
    summary:
      "A retrieval framework that indexes documents so the AI Assistant can find and cite the right passage instantly.",
    howWeUseIt:
      "LlamaIndex builds and queries the vector index behind the Documents page, making every uploaded report, contract, or dataset searchable by meaning, not just keywords.",
    capabilities: [
      "Document chunking and embedding",
      "Semantic search across the document library",
      "Grounding AI answers in cited source documents",
    ],
  },
  {
    slug: "docker",
    name: "Docker",
    category: "Infrastructure",
    icon: "Container",
    summary:
      "Containerization that keeps every service — from APIs to model servers — consistent from development to production.",
    howWeUseIt:
      "Docker packages our services into portable containers, so the same environment that's tested locally runs identically in production, reducing deployment risk.",
    capabilities: [
      "Consistent environments across dev and production",
      "Isolated services for APIs, models, and pipelines",
      "Simplified scaling and deployment",
    ],
  },
  {
    slug: "aws",
    name: "AWS",
    category: "Cloud Platform",
    icon: "Server",
    summary:
      "Cloud infrastructure hosting core platform services, storage, and compute for model workloads.",
    howWeUseIt:
      "AWS hosts the platform's storage and compute-heavy workloads, including document storage and the infrastructure behind larger model training jobs.",
    capabilities: [
      "Scalable storage for documents and datasets",
      "Compute for model training and batch jobs",
      "Managed infrastructure for high availability",
    ],
  },
  {
    slug: "google-cloud",
    name: "Google Cloud",
    category: "Cloud Platform",
    icon: "Cloud",
    summary:
      "Additional cloud infrastructure and managed AI services supporting the platform's data and analytics workloads.",
    howWeUseIt:
      "Google Cloud provides managed data warehousing and analytics services that power some of the aggregate reporting shown in the Insights page.",
    capabilities: [
      "Managed data warehousing for analytics",
      "Support for large-scale data processing",
      "Redundant, multi-cloud infrastructure resilience",
    ],
  },
];
