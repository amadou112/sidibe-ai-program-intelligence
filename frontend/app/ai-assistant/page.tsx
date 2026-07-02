"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Send, FileSearch, ShieldAlert, BarChart3, Sparkles } from "lucide-react";
import Header from "../components/Header";
import { getAssistantReply } from "../lib/assistant";

type Message = {
  role: "user" | "assistant";
  text: string;
};

const SUGGESTED_PROMPTS = [
  "Which programs are at risk?",
  "Summarize current risks",
  "What programs are delayed?",
  "How does document analysis work?",
];

const CAPABILITIES = [
  { icon: <BarChart3 size={18} />, label: "Program status summaries" },
  { icon: <ShieldAlert size={18} />, label: "Risk & RAID log insights" },
  { icon: <FileSearch size={18} />, label: "Document analysis (NLP/OCR/RAG)" },
  { icon: <Sparkles size={18} />, label: "Predictive program insights" },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      text: "Hello! I'm the Sidibe AI Assistant. Ask me about program status, risks, or documents across your portfolio.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isThinking]);

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsThinking(true);

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", text: getAssistantReply(trimmed) }]);
      setIsThinking(false);
    }, 600);
  }

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="AI Assistant" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <p className="text-blue-600 font-bold">24/7 ASSISTANCE</p>
        <h1 className="text-4xl font-extrabold mt-2">AI Assistant</h1>
        <p className="mt-3 text-slate-700 max-w-2xl">
          Ask questions about your programs, risks, and documents. The
          assistant draws on live portfolio data to help you make faster
          decisions.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20 grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
            <p className="text-blue-600 font-bold text-sm mb-4">SUGGESTED PROMPTS</p>
            <div className="space-y-2">
              {SUGGESTED_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => sendMessage(prompt)}
                  className="w-full text-left text-sm font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl px-4 py-3"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
            <p className="text-blue-600 font-bold text-sm mb-4">CAPABILITIES</p>
            <div className="space-y-3">
              {CAPABILITIES.map((cap) => (
                <div key={cap.label} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="text-blue-600 bg-blue-100 w-9 h-9 rounded-xl flex items-center justify-center shrink-0">
                    {cap.icon}
                  </div>
                  {cap.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="xl:col-span-3 bg-white rounded-3xl shadow-xl border border-blue-100 flex flex-col h-[640px]">
          <div className="flex items-center gap-3 px-6 py-5 border-b border-blue-50">
            <div className="text-blue-600 bg-blue-100 w-11 h-11 rounded-2xl flex items-center justify-center">
              <Brain size={22} />
            </div>
            <div>
              <p className="font-bold">Sidibe AI Assistant</p>
              <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Online
              </p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <p
                  className={`max-w-[75%] whitespace-pre-line text-sm px-4 py-3 rounded-2xl ${
                    message.role === "user"
                      ? "bg-blue-600 text-white rounded-br-sm"
                      : "bg-blue-50 text-slate-800 rounded-bl-sm"
                  }`}
                >
                  {message.text}
                </p>
              </div>
            ))}

            {isThinking && (
              <div className="flex justify-start">
                <p className="bg-blue-50 text-slate-500 text-sm px-4 py-3 rounded-2xl rounded-bl-sm">
                  Thinking&hellip;
                </p>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-3 border-t border-blue-50 p-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about your programs, risks, or documents..."
              className="flex-1 border border-blue-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
            >
              <Send size={18} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
