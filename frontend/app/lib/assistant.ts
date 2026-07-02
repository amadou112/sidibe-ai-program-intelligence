import { PROGRAMS, RISKS } from "./data";

export function getAssistantReply(rawInput: string): string {
  const input = rawInput.toLowerCase();

  if (input.includes("at risk")) {
    const matches = PROGRAMS.filter((p) => p.status === "At Risk");
    return matches.length
      ? `${matches.length} program(s) currently at risk:\n${matches
          .map((p) => `- ${p.name} (${p.progress}% complete, owned by ${p.owner})`)
          .join("\n")}`
      : "No programs are currently flagged At Risk.";
  }

  if (input.includes("delayed")) {
    const matches = PROGRAMS.filter((p) => p.status === "Delayed");
    return matches.length
      ? `${matches.length} program(s) delayed:\n${matches
          .map((p) => `- ${p.name}, due ${p.due} (${p.progress}% complete)`)
          .join("\n")}`
      : "No programs are currently delayed.";
  }

  if (input.includes("on track")) {
    const matches = PROGRAMS.filter((p) => p.status === "On Track");
    return `${matches.length} program(s) on track:\n${matches
      .map((p) => `- ${p.name} (${p.progress}% complete)`)
      .join("\n")}`;
  }

  if (input.includes("risk")) {
    return `Top RAID risks in the portfolio:\n${RISKS.map(
      (r) => `- [${r.severity}] ${r.title} (${r.program})`
    ).join("\n")}`;
  }

  if (input.includes("program")) {
    return `The portfolio has ${PROGRAMS.length} programs shown here (24 total active). Ask me about programs that are "at risk", "delayed", or "on track" for a breakdown.`;
  }

  if (input.includes("document")) {
    return "I can analyze uploaded documents using NLP, OCR, and RAG to extract key terms, obligations, and risks. Head to the Documents page to upload a file.";
  }

  if (input.includes("hello") || input.includes("hi")) {
    return "Hello! I'm the Sidibe AI Assistant. Ask me about program status, risks, or documents across your portfolio.";
  }

  return "I can help summarize program status, surface risks, and answer questions about your portfolio. Try asking \"which programs are at risk?\" or \"summarize current risks\".";
}
