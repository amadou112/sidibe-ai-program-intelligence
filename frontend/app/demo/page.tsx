"use client";

import { useState } from "react";
import { Play, Pause, Clock, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import Reveal, { RevealStagger, RevealItem } from "../components/Reveal";
import { DEMO_TOPICS } from "../lib/demos";
import { useLanguage } from "../lib/LanguageContext";

const DEMO_TEXT = {
  en: {
    tag: "WATCH DEMO",
    title: "See the Platform in Action",
    subtitle:
      "A guided walkthrough of the AI concepts powering Sidibe Enterprises — from the machine learning models under the hood to how they show up in the AI Assistant.",
    moreTopics: "More Topics",
    nowPlaying: "Now Playing",
    watch: "Watch",
  },
  fr: {
    tag: "VOIR LA DÉMO",
    title: "La Plateforme en Action",
    subtitle:
      "Une visite guidée des concepts d'IA qui font fonctionner Sidibe Enterprises — des modèles d'apprentissage automatique en coulisses jusqu'à leur intégration dans l'Assistant IA.",
    moreTopics: "Plus de Sujets",
    nowPlaying: "En cours de lecture",
    watch: "Regarder",
  },
};

export default function Demo() {
  const { lang } = useLanguage();
  const t = DEMO_TEXT[lang];
  const [activeId, setActiveId] = useState<string>(DEMO_TOPICS[0].id);
  const active = DEMO_TOPICS.find((topic) => topic.id === activeId)!;

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <Reveal>
          <p className="text-primary-600 font-bold">{t.tag}</p>
          <h1 className="text-4xl font-extrabold mt-2 font-display">{t.title}</h1>
          <p className="mt-3 text-slate-700 max-w-2xl">{t.subtitle}</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <Reveal className="bg-grain bg-slate-950 rounded-3xl overflow-hidden shadow-deep">
          <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 relative">
            <button
              onClick={() => {}}
              className="w-20 h-20 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-white transition-all duration-200 hover:scale-105 active:scale-95"
            >
              <Play size={32} className="ml-1" />
            </button>
            <span className="absolute top-6 left-6 text-xs font-bold text-primary-300 bg-white/10 px-3 py-1.5 rounded-full">
              {active.tag}
            </span>
            <span className="absolute bottom-6 right-6 text-xs font-semibold text-white/70 flex items-center gap-1.5">
              <Clock size={14} /> {active.duration}
            </span>
          </div>

          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold font-display">{active.title}</h2>
            <p className="text-slate-300 mt-3 max-w-3xl">{active.description}</p>

            <div className="mt-6 space-y-2">
              {active.keyPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle size={16} className="text-primary-400 mt-0.5 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <h3 className="text-xl font-bold mt-12 mb-6">{t.moreTopics}</h3>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {DEMO_TOPICS.map((topic) => (
            <RevealItem key={topic.id}>
              <button
                onClick={() => setActiveId(topic.id)}
                className={`text-left w-full h-full bg-white rounded-2xl shadow-soft border transition-all duration-200 hover:shadow-lift hover:-translate-y-1 p-6 ${
                  topic.id === activeId
                    ? "border-primary-500 ring-2 ring-primary-100"
                    : "border-primary-100 hover:border-primary-300"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {topic.tag}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                    <Clock size={12} /> {topic.duration}
                  </span>
                </div>

                <h4 className="font-bold mt-4">{topic.title}</h4>
                <p className="text-sm text-slate-600 mt-2 line-clamp-2">{topic.description}</p>

                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-primary-600 mt-4">
                  {topic.id === activeId ? (
                    <>
                      <Pause size={14} /> {t.nowPlaying}
                    </>
                  ) : (
                    <>
                      <Play size={14} /> {t.watch}
                    </>
                  )}
                </span>
              </button>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </main>
  );
}
