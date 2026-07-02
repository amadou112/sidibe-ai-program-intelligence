"use client";

import {
  FolderKanban,
  FileText,
  AlertTriangle,
  CheckCircle,
  Brain,
  Clock,
  User,
} from "lucide-react";
import Header from "../components/Header";
import Metric from "../components/Metric";
import Reveal, { RevealStagger, RevealItem } from "../components/Reveal";
import { PROGRAMS, RISKS, STATUS_STYLES, SEVERITY_STYLES } from "../lib/data";
import { useLanguage } from "../lib/LanguageContext";
import { METRIC_LABELS, STATUS_LABELS, SEVERITY_LABELS } from "../lib/translations";
import { cardBase } from "../lib/ui";

const DASHBOARD_TEXT = {
  en: {
    tag: "EXECUTIVE OVERVIEW",
    title: "Program Dashboard",
    subtitle: "Real-time visibility into program health, delivery progress, and active risks across the portfolio.",
    activePrograms: "Active Programs",
    shownOf: "5 shown of 24",
    due: "Due",
    recentRisks: "Recent Risks",
    raidLog: "RAID log",
  },
  fr: {
    tag: "APERÇU EXÉCUTIF",
    title: "Tableau de Bord des Programmes",
    subtitle: "Visibilité en temps réel sur la santé des programmes, l'avancement de la livraison et les risques actifs du portefeuille.",
    activePrograms: "Programmes Actifs",
    shownOf: "5 affichés sur 24",
    due: "Échéance",
    recentRisks: "Risques Récents",
    raidLog: "Journal RAID",
  },
};

export default function Dashboard() {
  const { lang } = useLanguage();
  const t = DASHBOARD_TEXT[lang];
  const metricLabels = METRIC_LABELS[lang];
  const statusLabels = STATUS_LABELS[lang];
  const severityLabels = SEVERITY_LABELS[lang];

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="Dashboard" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <Reveal>
          <p className="text-primary-600 font-bold">{t.tag}</p>
          <h1 className="text-4xl font-extrabold mt-2 font-display">{t.title}</h1>
          <p className="mt-3 text-slate-700 max-w-2xl">{t.subtitle}</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <RevealStagger className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <RevealItem>
            <Metric icon={<FolderKanban />} title={metricLabels.Programs} value="24" />
          </RevealItem>
          <RevealItem>
            <Metric icon={<FileText />} title={metricLabels.Documents} value="1,248" />
          </RevealItem>
          <RevealItem>
            <Metric icon={<AlertTriangle />} title={metricLabels.Risks} value="18" />
          </RevealItem>
          <RevealItem>
            <Metric icon={<CheckCircle />} title={metricLabels.Tasks} value="324" />
          </RevealItem>
          <RevealItem>
            <Metric icon={<Brain />} title={metricLabels["AI Insights"]} value="95%" />
          </RevealItem>
        </RevealStagger>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 xl:grid-cols-3 gap-8">
        <Reveal className={`xl:col-span-2 ${cardBase} p-8`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{t.activePrograms}</h2>
            <span className="text-sm text-slate-500 font-semibold">{t.shownOf}</span>
          </div>

          <div className="space-y-5">
            {PROGRAMS.slice(0, 5).map((program) => (
              <div
                key={program.name}
                className="border border-primary-100 rounded-2xl p-5 transition-all duration-200 hover:border-primary-200 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{program.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <User size={14} /> {program.owner}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {t.due} {program.due}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${STATUS_STYLES[program.status]}`}
                  >
                    {statusLabels[program.status]}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
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
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className={`${cardBase} p-8`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">{t.recentRisks}</h2>
            <span className="text-sm text-slate-500 font-semibold">{t.raidLog}</span>
          </div>

          <div className="space-y-4">
            {RISKS.map((risk) => (
              <div
                key={risk.title}
                className="border border-primary-100 rounded-2xl p-4 transition-all duration-200 hover:border-primary-200 hover:shadow-soft"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-sm leading-snug">
                    {risk.title}
                  </p>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${SEVERITY_STYLES[risk.severity]}`}
                  >
                    {severityLabels[risk.severity]}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  {risk.program} &middot; {risk.owner}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
