"use client";

import { Clock, User, Layers } from "lucide-react";
import Header from "../components/Header";
import Reveal, { RevealStagger, RevealItem } from "../components/Reveal";
import { PROGRAMS, STATUS_STYLES } from "../lib/data";
import { useLanguage } from "../lib/LanguageContext";
import { STATUS_LABELS } from "../lib/translations";
import { cardBase } from "../lib/ui";

const PROGRAMS_TEXT = {
  en: {
    tag: "PORTFOLIO",
    title: "Programs",
    subtitle: "Every active program across the portfolio, with live status, delivery progress, and ownership at a glance.",
    allPrograms: "All Programs",
    shownOf: (n: number) => `${n} shown of 24`,
    due: "Due",
  },
  fr: {
    tag: "PORTEFEUILLE",
    title: "Programmes",
    subtitle: "Tous les programmes actifs du portefeuille, avec l'état en direct, l'avancement de la livraison et la responsabilité en un coup d'œil.",
    allPrograms: "Tous les Programmes",
    shownOf: (n: number) => `${n} affichés sur 24`,
    due: "Échéance",
  },
};

export default function Programs() {
  const { lang } = useLanguage();
  const t = PROGRAMS_TEXT[lang];
  const statusLabels = STATUS_LABELS[lang];

  const onTrack = PROGRAMS.filter((p) => p.status === "On Track").length;
  const atRisk = PROGRAMS.filter((p) => p.status === "At Risk").length;
  const delayed = PROGRAMS.filter((p) => p.status === "Delayed").length;

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="Programs" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <Reveal>
          <p className="text-primary-600 font-bold">{t.tag}</p>
          <h1 className="text-4xl font-extrabold mt-2 font-display">{t.title}</h1>
          <p className="mt-3 text-slate-700 max-w-2xl">{t.subtitle}</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <RevealItem className={`${cardBase} p-6`}>
            <p className="text-success-600 font-semibold text-sm">{statusLabels["On Track"]}</p>
            <h3 className="text-3xl font-extrabold mt-1">{onTrack}</h3>
          </RevealItem>
          <RevealItem className={`${cardBase} p-6`}>
            <p className="text-warning-600 font-semibold text-sm">{statusLabels["At Risk"]}</p>
            <h3 className="text-3xl font-extrabold mt-1">{atRisk}</h3>
          </RevealItem>
          <RevealItem className={`${cardBase} p-6`}>
            <p className="text-danger-600 font-semibold text-sm">{statusLabels.Delayed}</p>
            <h3 className="text-3xl font-extrabold mt-1">{delayed}</h3>
          </RevealItem>
        </RevealStagger>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">{t.allPrograms}</h2>
          <span className="text-sm text-slate-500 font-semibold">{t.shownOf(PROGRAMS.length)}</span>
        </div>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => (
            <RevealItem key={program.name} className={`${cardBase} p-6 flex flex-col`}>
              <div className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-1.5 text-xs font-bold text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                  <Layers size={12} /> {program.industry}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${STATUS_STYLES[program.status]}`}
                >
                  {statusLabels[program.status]}
                </span>
              </div>

              <h3 className="font-bold text-lg mt-4">{program.name}</h3>
              <p className="text-sm text-slate-600 mt-2 flex-1">
                {program.description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex-1 h-2 bg-primary-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-600 rounded-full transition-[width] duration-700 ease-out"
                    style={{ width: `${program.progress}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-slate-700 w-10 text-right">
                  {program.progress}%
                </span>
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm text-slate-500 border-t border-primary-50 pt-4">
                <span className="flex items-center gap-1">
                  <User size={14} /> {program.owner}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> {t.due} {program.due}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </main>
  );
}
