"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import {
  Send,
  FileSearch,
  ShieldAlert,
  BarChart3,
  Sparkles,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
} from "lucide-react";
import Header from "../components/Header";
import { getAssistantReply } from "../lib/assistant";
import { useLanguage, type Lang } from "../lib/LanguageContext";

type Message = {
  role: "user" | "assistant";
  text: string;
};

type SpeechRecognitionResultLike = { transcript: string };
type SpeechRecognitionLike = {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  onstart: (() => void) | null;
  onend: (() => void) | null;
  onerror: (() => void) | null;
  onresult: ((event: { results: SpeechRecognitionResultLike[][] }) => void) | null;
};

const SUGGESTED_PROMPTS: Record<Lang, string[]> = {
  en: [
    "Which programs are at risk?",
    "Summarize current risks",
    "What programs are delayed?",
    "How does document analysis work?",
  ],
  fr: [
    "Quels programmes sont à risque ?",
    "Résume les risques actuels",
    "Quels programmes sont en retard ?",
    "Comment fonctionne l'analyse des documents ?",
  ],
};

const CAPABILITIES: Record<Lang, { icon: ReactNode; label: string }[]> = {
  en: [
    { icon: <BarChart3 size={18} />, label: "Program status summaries" },
    { icon: <ShieldAlert size={18} />, label: "Risk & RAID log insights" },
    { icon: <FileSearch size={18} />, label: "Document analysis (NLP/OCR/RAG)" },
    { icon: <Sparkles size={18} />, label: "Predictive program insights" },
  ],
  fr: [
    { icon: <BarChart3 size={18} />, label: "Résumés de l'état des programmes" },
    { icon: <ShieldAlert size={18} />, label: "Aperçus des risques (journal RAID)" },
    { icon: <FileSearch size={18} />, label: "Analyse de documents (NLP/OCR/RAG)" },
    { icon: <Sparkles size={18} />, label: "Aperçus prédictifs des programmes" },
  ],
};

const GREETING: Record<Lang, string> = {
  en: "Hello! I'm Mamadou, the Sidibe AI Assistant. Ask me about program status, risks, or documents — by typing or by voice.",
  fr: "Bonjour ! Je suis Mamadou, l'assistant IA de Sidibe Enterprises. Posez vos questions sur l'état des programmes, les risques ou les documents — à l'écrit ou à la voix.",
};

const UI_TEXT: Record<Lang, Record<string, string>> = {
  en: {
    tag: "24/7 VOICE ASSISTANCE",
    title: "Meet Mamadou",
    subtitle:
      "Your bilingual AI assistant — ask about programs, risks, and documents by typing or speaking, in English or French.",
    suggested: "SUGGESTED PROMPTS",
    capabilities: "CAPABILITIES",
    online: "Online",
    listening: "Listening…",
    thinking: "Thinking…",
    placeholder: "Ask about your programs, risks, or documents...",
    micUnsupported: "Voice input isn't supported in this browser — try Chrome or Edge.",
  },
  fr: {
    tag: "ASSISTANCE VOCALE 24/7",
    title: "Découvrez Mamadou",
    subtitle:
      "Votre assistant IA bilingue — posez vos questions sur les programmes, les risques et les documents, à l'écrit ou à la voix, en anglais ou en français.",
    suggested: "SUGGESTIONS",
    capabilities: "CAPACITÉS",
    online: "En ligne",
    listening: "Écoute en cours…",
    thinking: "Réflexion…",
    placeholder: "Posez une question sur vos programmes, risques ou documents...",
    micUnsupported: "La saisie vocale n'est pas prise en charge par ce navigateur — essayez Chrome ou Edge.",
  },
};

export default function AIAssistant() {
  const { lang } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", text: GREETING.en }]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [micSupported, setMicSupported] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null);

  const t = UI_TEXT[lang];

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isThinking]);

  useEffect(() => {
    const w = window as unknown as { SpeechRecognition?: unknown; webkitSpeechRecognition?: unknown };
    setMicSupported(Boolean(w.SpeechRecognition || w.webkitSpeechRecognition));
  }, []);

  function speak(text: string) {
    if (!voiceEnabled || typeof window === "undefined" || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang === "fr" ? "fr-FR" : "en-US";
    window.speechSynthesis.speak(utterance);
  }

  function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setInput("");
    setIsThinking(true);

    setTimeout(() => {
      const reply = getAssistantReply(trimmed, lang);
      setMessages((prev) => [...prev, { role: "assistant", text: reply }]);
      setIsThinking(false);
      speak(reply);
    }, 600);
  }

  function toggleListening() {
    if (isListening) {
      recognitionRef.current?.stop();
      return;
    }

    const w = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionLike;
      webkitSpeechRecognition?: new () => SpeechRecognitionLike;
    };
    const SpeechRecognitionCtor = w.SpeechRecognition || w.webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) return;

    const recognition = new SpeechRecognitionCtor();
    recognition.lang = lang === "fr" ? "fr-FR" : "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onstart = () => setIsListening(true);
    recognition.onend = () => setIsListening(false);
    recognition.onerror = () => setIsListening(false);
    recognition.onresult = (event) => {
      const transcript = event.results[0]?.[0]?.transcript;
      if (transcript) sendMessage(transcript);
    };

    recognitionRef.current = recognition;
    recognition.start();
  }

  useEffect(() => {
    setMessages([{ role: "assistant", text: GREETING[lang] }]);
  }, [lang]);

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="AI Assistant" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <p className="text-blue-600 font-bold">{t.tag}</p>
        <h1 className="text-4xl font-extrabold mt-2">{t.title}</h1>
        <p className="mt-3 text-slate-700 max-w-2xl">{t.subtitle}</p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20 grid grid-cols-1 xl:grid-cols-4 gap-8">
        <div className="xl:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
            <p className="text-blue-600 font-bold text-sm mb-4">{t.suggested}</p>
            <div className="space-y-2">
              {SUGGESTED_PROMPTS[lang].map((prompt) => (
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
            <p className="text-blue-600 font-bold text-sm mb-4">{t.capabilities}</p>
            <div className="space-y-3">
              {CAPABILITIES[lang].map((cap) => (
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
          <div className="flex items-center justify-between gap-3 px-6 py-5 border-b border-blue-50">
            <div className="flex items-center gap-3">
              <Image
                src="/bot/mamadou.jpg"
                alt="Mamadou"
                width={88}
                height={88}
                className="w-11 h-11 rounded-2xl object-cover bg-blue-100"
              />
              <div>
                <p className="font-bold">Mamadou</p>
                <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  {isListening ? t.listening : t.online}
                </p>
              </div>
            </div>

            <button
              onClick={() => setVoiceEnabled((v) => !v)}
              title={voiceEnabled ? "Mute voice replies" : "Unmute voice replies"}
              className="text-slate-500 hover:text-blue-600 w-9 h-9 rounded-xl flex items-center justify-center border border-blue-100"
            >
              {voiceEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>
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
                  {t.thinking}
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
            <button
              type="button"
              onClick={toggleListening}
              disabled={!micSupported}
              title={micSupported ? "Speak to Mamadou" : t.micUnsupported}
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                isListening
                  ? "bg-rose-600 text-white border-rose-600 animate-pulse"
                  : micSupported
                  ? "bg-white text-blue-600 border-blue-100 hover:bg-blue-50"
                  : "bg-slate-50 text-slate-300 border-slate-100 cursor-not-allowed"
              }`}
            >
              {isListening ? <MicOff size={18} /> : <Mic size={18} />}
            </button>

            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
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
