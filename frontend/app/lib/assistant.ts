import { PROGRAMS, RISKS } from "./data";

export type Lang = "en" | "fr";

function matches(input: string, ...phrases: string[]): boolean {
  return phrases.some((phrase) => input.includes(phrase));
}

export function getAssistantReply(rawInput: string, lang: Lang = "en"): string {
  const input = rawInput.toLowerCase();

  if (matches(input, "at risk", "à risque", "a risque")) {
    const list = PROGRAMS.filter((p) => p.status === "At Risk");
    if (!list.length) {
      return lang === "fr" ? "Aucun programme n'est actuellement signalé à risque." : "No programs are currently flagged At Risk.";
    }
    return lang === "fr"
      ? `${list.length} programme(s) actuellement à risque :\n${list
          .map((p) => `- ${p.name} (${p.progress}% complété, responsable : ${p.owner})`)
          .join("\n")}`
      : `${list.length} program(s) currently at risk:\n${list
          .map((p) => `- ${p.name} (${p.progress}% complete, owned by ${p.owner})`)
          .join("\n")}`;
  }

  if (matches(input, "delayed", "retard")) {
    const list = PROGRAMS.filter((p) => p.status === "Delayed");
    if (!list.length) {
      return lang === "fr" ? "Aucun programme n'est actuellement en retard." : "No programs are currently delayed.";
    }
    return lang === "fr"
      ? `${list.length} programme(s) en retard :\n${list
          .map((p) => `- ${p.name}, échéance ${p.due} (${p.progress}% complété)`)
          .join("\n")}`
      : `${list.length} program(s) delayed:\n${list
          .map((p) => `- ${p.name}, due ${p.due} (${p.progress}% complete)`)
          .join("\n")}`;
  }

  if (matches(input, "on track", "en cours", "dans les temps", "bonne voie")) {
    const list = PROGRAMS.filter((p) => p.status === "On Track");
    return lang === "fr"
      ? `${list.length} programme(s) en bonne voie :\n${list
          .map((p) => `- ${p.name} (${p.progress}% complété)`)
          .join("\n")}`
      : `${list.length} program(s) on track:\n${list
          .map((p) => `- ${p.name} (${p.progress}% complete)`)
          .join("\n")}`;
  }

  if (matches(input, "risk", "risque")) {
    return lang === "fr"
      ? `Principaux risques du portefeuille (journal RAID) :\n${RISKS.map(
          (r) => `- [${r.severity}] ${r.title} (${r.program})`
        ).join("\n")}`
      : `Top RAID risks in the portfolio:\n${RISKS.map(
          (r) => `- [${r.severity}] ${r.title} (${r.program})`
        ).join("\n")}`;
  }

  if (matches(input, "program", "programme")) {
    return lang === "fr"
      ? `Le portefeuille compte ${PROGRAMS.length} programmes affichés ici (24 actifs au total). Demandez-moi lesquels sont « à risque », « en retard » ou « en bonne voie » pour un résumé.`
      : `The portfolio has ${PROGRAMS.length} programs shown here (24 total active). Ask me about programs that are "at risk", "delayed", or "on track" for a breakdown.`;
  }

  if (matches(input, "document")) {
    return lang === "fr"
      ? "Je peux analyser les documents téléversés grâce au NLP, à l'OCR et au RAG pour en extraire les termes clés, les obligations et les risques. Rendez-vous sur la page Documents pour téléverser un fichier."
      : "I can analyze uploaded documents using NLP, OCR, and RAG to extract key terms, obligations, and risks. Head to the Documents page to upload a file.";
  }

  if (matches(input, "hello", "hi", "bonjour", "salut")) {
    return lang === "fr"
      ? "Bonjour ! Je suis Mamadou, l'assistant IA de Sidibe Enterprises. Posez-moi vos questions sur l'état des programmes, les risques ou les documents de votre portefeuille."
      : "Hello! I'm Mamadou, the Sidibe AI Assistant. Ask me about program status, risks, or documents across your portfolio.";
  }

  return lang === "fr"
    ? "Je peux vous aider à résumer l'état des programmes, faire ressortir les risques et répondre à vos questions sur votre portefeuille. Essayez de demander « quels programmes sont à risque ? » ou « résume les risques actuels »."
    : 'I can help summarize program status, surface risks, and answer questions about your portfolio. Try asking "which programs are at risk?" or "summarize current risks".';
}
