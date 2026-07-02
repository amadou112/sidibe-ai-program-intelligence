"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Database,
  Server,
  Cloud,
  CheckCircle,
  AlertTriangle,
  Clock,
  Users,
  ShieldCheck,
  Scale,
  Handshake,
  ClipboardList,
  Target,
  GitBranch,
  Milestone,
  Rocket,
} from "lucide-react";
import Header from "../components/Header";
import Presenter from "../components/Presenter";
import Reveal, { RevealStagger, RevealItem } from "../components/Reveal";
import HeroBlobs from "../components/HeroBlobs";
import {
  LIFECYCLE_STAGES,
  LIFECYCLE_THREADS,
  LAYMAN_ANALOGY,
  SDLC_PHASES,
  METHODOLOGIES,
  AI_TIMELINE,
  AI_SUBFIELDS,
  DATA_LIFECYCLE,
  INFRASTRUCTURE_PILLARS,
  ETHICS_PILLARS,
  SECURITY_PILLARS,
  TOOLS_TABLE,
  AI_ROLES,
  CHALLENGES,
  PRE_KICKOFF_CHECKLIST,
  SCOPE_DEPENDENCIES,
  TIME_ALLOCATION,
  CAPSTONE,
  MULTI_PROJECT_PRINCIPLES,
  METHODOLOGY_PAGE_TEXT,
} from "../lib/methodology";
import { useLanguage } from "../lib/LanguageContext";
import { btnPrimary, btnSecondary, cardBase, cardStatic, arrowIconClass } from "../lib/ui";

export default function Methodology() {
  const { lang } = useLanguage();
  const t = METHODOLOGY_PAGE_TEXT[lang];
  const maxAllocation = Math.max(...TIME_ALLOCATION.map((row) => row.value));

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="How I Work" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <HeroBlobs />
        <div className="relative max-w-7xl mx-auto px-8 pt-16 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <Reveal className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute -inset-6 bg-primary-500/20 blur-3xl rounded-full" />
              <Image
                src="/team/amadou-sidibe.jpg"
                alt="Amadou Sidibe"
                width={360}
                height={360}
                className="relative w-56 h-56 rounded-[2rem] object-cover shadow-deep border-4 border-white"
                priority
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2">
            <p className="text-primary-600 font-bold">{t.heroTag}</p>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-2 leading-tight font-display">
              {t.heroTitle}
            </h1>
            <p className="mt-5 text-xl text-slate-700 max-w-2xl">{t.heroSubtitle}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/dashboard" className={`${btnPrimary} group`}>
                {t.seeItLive} <ArrowRight size={18} className={arrowIconClass} />
              </Link>
              <Link href="/ai-assistant" className={btnSecondary}>
                {t.askAssistant}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Intro presenter line */}
      <section className="max-w-4xl mx-auto px-8 pb-16">
        <Reveal>
          <Presenter text={t.presenter1} />
        </Reveal>
      </section>

      {/* Lifecycle */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal>
          <p className="text-primary-600 font-bold mb-2">{t.bigPicture}</p>
          <h2 className="text-3xl font-extrabold mb-8 font-display">{t.lifecycleTitle}</h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {LIFECYCLE_STAGES.map((stage, i) => (
            <RevealItem key={stage.name} className={`${cardBase} p-6`}>
              <div className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <h3 className="font-bold mt-4">{stage.name}</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-slate-600">
                {stage.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealStagger>

        <div className="mt-6 flex flex-wrap gap-3">
          {LIFECYCLE_THREADS.map((thread) => (
            <span key={thread} className="text-xs font-bold text-primary-700 bg-primary-100 px-4 py-2 rounded-full">
              {thread}
            </span>
          ))}
        </div>
      </section>

      {/* Layman analogy */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal className="bg-slate-950 rounded-3xl p-10 text-white">
          <p className="text-primary-300 font-bold mb-2">{t.plainEnglish}</p>
          <h2 className="text-2xl font-bold mb-8 font-display">{t.houseTitle}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {LAYMAN_ANALOGY.map((step, i) => (
              <div key={step.label} className="text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center font-bold text-lg">
                  {i + 1}
                </div>
                <p className="font-bold mt-3">{step.label}</p>
                <p className="text-sm text-slate-300 mt-1">{step.detail}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">{t.houseClosing}</p>
        </Reveal>
      </section>

      {/* SDLC phases */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal>
          <p className="text-primary-600 font-bold mb-2">{t.phaseByPhase}</p>
          <h2 className="text-3xl font-extrabold mb-3 font-display">{t.sdlcTitle}</h2>
          <p className="text-slate-700 max-w-3xl mb-8">{t.sdlcSubtitle}</p>
        </Reveal>

        <RevealStagger className="space-y-5">
          {SDLC_PHASES.map((phase, i) => (
            <RevealItem key={phase.name} className={`${cardBase} p-6 flex flex-col md:flex-row gap-6`}>
              <div className="md:w-48 shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-primary-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg">{phase.name}</h3>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary-700 bg-primary-100 px-3 py-1 rounded-full mt-3">
                  <Clock size={12} /> {phase.duration}
                </span>
              </div>

              <div className="flex-1">
                <p className="text-slate-700 italic">{phase.summary}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {phase.tasks.map((task) => (
                    <span key={task} className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full">
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Methodologies */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal>
          <p className="text-primary-600 font-bold mb-2">{t.deliveryApproach}</p>
          <h2 className="text-3xl font-extrabold mb-8 font-display">{t.methodologyTitle}</h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {METHODOLOGIES.map((method) => (
            <RevealItem key={method.name} className={`${cardBase} p-8`}>
              <div className="text-primary-600 bg-primary-100 w-12 h-12 rounded-2xl flex items-center justify-center">
                <GitBranch size={22} />
              </div>
              <h3 className="font-bold text-xl mt-4">{method.name}</h3>
              <p className="text-primary-600 text-sm font-semibold mt-1">{method.tag}</p>
              <p className="text-slate-700 mt-3">{method.description}</p>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Presenter: AI depth */}
      <section className="max-w-4xl mx-auto px-8 pb-10">
        <Reveal>
          <Presenter text={t.presenter2} />
        </Reveal>
      </section>

      {/* AI basics */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal>
          <p className="text-primary-600 font-bold mb-2">{t.aiUnderstandTag}</p>
          <h2 className="text-3xl font-extrabold mb-8 font-display">{t.aiUnderstandTitle}</h2>
        </Reveal>

        <h3 className="font-bold text-lg mb-4">{t.evolutionTitle}</h3>
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-12">
          {AI_TIMELINE.map((point) => (
            <RevealItem key={point.era} className={`${cardBase} p-5`}>
              <p className="font-extrabold text-primary-600">{point.era}</p>
              <p className="text-sm text-slate-600 mt-2">{point.detail}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <h3 className="font-bold text-lg mb-4">{t.subfieldsTitle}</h3>
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {AI_SUBFIELDS.map((field) => (
            <RevealItem key={field.name} className={`${cardBase} p-6`}>
              <div className="text-primary-600 bg-primary-100 w-11 h-11 rounded-2xl flex items-center justify-center">
                <Brain size={20} />
              </div>
              <h4 className="font-bold mt-4">{field.name}</h4>
              <p className="text-sm text-slate-600 mt-2">{field.detail}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <h3 className="font-bold text-lg mb-4">{t.dataLifecycleTitle}</h3>
        <div className="flex flex-wrap gap-3 mb-12">
          {DATA_LIFECYCLE.map((stage, i) => (
            <span key={stage} className="flex items-center gap-2 text-sm font-semibold text-slate-700 bg-white border border-primary-100 px-4 py-2.5 rounded-full shadow-soft">
              <span className="w-5 h-5 rounded-full bg-primary-600 text-white text-xs flex items-center justify-center font-bold">
                {i + 1}
              </span>
              {stage}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-lg mb-4">{t.infraTitle}</h3>
        <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {INFRASTRUCTURE_PILLARS.map((pillar) => (
            <RevealItem key={pillar.name} className={`${cardBase} p-6`}>
              <div className="text-primary-600 bg-primary-100 w-11 h-11 rounded-2xl flex items-center justify-center">
                {pillar.name === "Compute" && <Server size={20} />}
                {pillar.name === "Storage" && <Database size={20} />}
                {pillar.name === "Networking" && <Cloud size={20} />}
              </div>
              <h4 className="font-bold mt-4">{pillar.name}</h4>
              <p className="text-sm text-slate-600 mt-2">{pillar.detail}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <RevealStagger className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <RevealItem className={`${cardBase} p-6`}>
            <div className="flex items-center gap-2 mb-4">
              <Scale size={20} className="text-primary-600" />
              <h4 className="font-bold">{t.aiEthics}</h4>
            </div>
            <div className="space-y-3">
              {ETHICS_PILLARS.map((p) => (
                <div key={p.name}>
                  <p className="font-semibold text-sm">{p.name}</p>
                  <p className="text-sm text-slate-600">{p.detail}</p>
                </div>
              ))}
            </div>
          </RevealItem>

          <RevealItem className={`${cardBase} p-6`}>
            <div className="flex items-center gap-2 mb-4">
              <ShieldCheck size={20} className="text-primary-600" />
              <h4 className="font-bold">{t.aiSecurity}</h4>
            </div>
            <div className="space-y-3">
              {SECURITY_PILLARS.map((p) => (
                <div key={p.name}>
                  <p className="font-semibold text-sm">{p.name}</p>
                  <p className="text-sm text-slate-600">{p.detail}</p>
                </div>
              ))}
            </div>
          </RevealItem>
        </RevealStagger>
      </section>

      {/* Tools table */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal>
          <p className="text-primary-600 font-bold mb-2">{t.toolsTag}</p>
          <h2 className="text-3xl font-extrabold mb-8 font-display">{t.toolsTitle}</h2>

          <div className={`${cardStatic} overflow-hidden`}>
            <table className="w-full text-sm">
              <tbody>
                {TOOLS_TABLE.map((row, i) => (
                  <tr key={row.category} className={i % 2 === 0 ? "bg-primary-50/50" : ""}>
                    <td className="px-6 py-4 font-bold w-64 align-top">{row.category}</td>
                    <td className="px-6 py-4 text-slate-700 align-top">{row.tools}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-sm text-slate-500 mt-4">
            {t.toolsFooterPrefix}{" "}
            <Link href="/#tech-stack" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
              {t.toolsFooterLink}
            </Link>
            .
          </p>
        </Reveal>
      </section>

      {/* AI Roles */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal>
          <p className="text-primary-600 font-bold mb-2">{t.rolesTag}</p>
          <h2 className="text-3xl font-extrabold mb-3 font-display">{t.rolesTitle}</h2>
          <p className="text-slate-700 max-w-3xl mb-8">{t.rolesSubtitle}</p>

          <div className={`${cardStatic} overflow-hidden`}>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary-600 text-white text-left">
                  <th className="px-6 py-4 font-bold">{t.roleCol}</th>
                  <th className="px-6 py-4 font-bold">{t.skillsCol}</th>
                </tr>
              </thead>
              <tbody>
                {AI_ROLES.map((row, i) => (
                  <tr key={row.role} className={i % 2 === 0 ? "bg-primary-50/50" : ""}>
                    <td className="px-6 py-4 font-bold w-56 align-top">{row.role}</td>
                    <td className="px-6 py-4 text-slate-700 align-top">{row.skills}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </section>

      {/* Presenter: capstone intro */}
      <section className="max-w-4xl mx-auto px-8 pb-10">
        <Reveal>
          <Presenter text={t.presenter3} />
        </Reveal>
      </section>

      {/* Capstone */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal>
          <p className="text-primary-600 font-bold mb-2">{t.caseStudy}</p>
          <h2 className="text-3xl font-extrabold mb-8 font-display">{CAPSTONE.name}</h2>

          <div className={`${cardBase} p-8 mb-8`}>
            <p className="text-slate-700 max-w-3xl">{CAPSTONE.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-6">
              <span className="flex items-center gap-2 text-sm font-bold text-primary-700 bg-primary-100 px-4 py-2 rounded-full">
                <Milestone size={14} /> {CAPSTONE.totalDuration} {t.kickoffToClose}
              </span>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-slate-500 mb-3">{t.teamCoordinated}</p>
              <div className="flex flex-wrap gap-2">
                {CAPSTONE.team.map((role) => (
                  <span key={role} className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full">
                    <Users size={12} /> {role}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {SDLC_PHASES.map((phase, i) => (
              <div key={phase.name} className="flex items-center gap-3">
                <div className={`${cardBase} px-4 py-3 text-center`}>
                  <p className="font-bold text-sm">{phase.name}</p>
                  <p className="text-xs text-slate-500 mt-1">{phase.duration}</p>
                </div>
                {i < SDLC_PHASES.length - 1 && <ArrowRight size={16} className="text-primary-300 shrink-0" />}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Multi-project */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal className="bg-primary-600 rounded-3xl p-10 text-white">
          <p className="text-primary-200 font-bold mb-2">{t.multiProjectTag}</p>
          <h2 className="text-3xl font-extrabold mb-4 font-display">{t.multiProjectTitle}</h2>
          <p className="text-primary-100 max-w-3xl mb-8">{t.multiProjectSubtitle}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {MULTI_PROJECT_PRINCIPLES.map((p) => (
              <div key={p.title} className="bg-white/10 border border-white/20 rounded-2xl p-6 transition-colors hover:bg-white/15">
                <h3 className="font-bold">{p.title}</h3>
                <p className="text-primary-100 text-sm mt-2">{p.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="bg-white text-primary-700 px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lift transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
            >
              {t.seePortfolio} <ArrowRight size={16} className={arrowIconClass} />
            </Link>
            <Link
              href="/programs"
              className="bg-primary-500/40 border border-white/30 text-white px-6 py-3 rounded-xl font-bold transition-all duration-200 hover:bg-primary-500/60 hover:-translate-y-0.5"
            >
              {t.seePrograms}
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Time allocation */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal className={`${cardBase} p-8`}>
          <h2 className="text-xl font-bold mb-6">{t.timeAllocationTitle}</h2>
          <div className="space-y-4">
            {TIME_ALLOCATION.map((row) => (
              <div key={row.label} className="flex items-center gap-4">
                <span className="text-sm font-semibold text-slate-700 w-64 shrink-0">{row.label}</span>
                <div className="flex-1 h-2.5 bg-primary-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary-600 rounded-full transition-[width] duration-700 ease-out"
                    style={{ width: `${(row.value / maxAllocation) * 100}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-slate-700 w-10 text-right">{row.value}%</span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Challenges */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <Reveal>
          <p className="text-primary-600 font-bold mb-2">{t.challengesTag}</p>
          <h2 className="text-3xl font-extrabold mb-8 font-display">{t.challengesTitle}</h2>
        </Reveal>

        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CHALLENGES.map((c) => (
            <RevealItem key={c.challenge} className={`${cardBase} p-6`}>
              <div className="flex items-start gap-3">
                <AlertTriangle size={18} className="text-warning-500 mt-0.5 shrink-0" />
                <p className="font-bold">{c.challenge}</p>
              </div>
              <div className="flex items-start gap-3 mt-4">
                <CheckCircle size={18} className="text-primary-600 mt-0.5 shrink-0" />
                <p className="text-sm text-slate-700">{c.mitigation}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>

      {/* Pre-kickoff */}
      <section className="max-w-7xl mx-auto px-8 pb-16">
        <RevealStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <RevealItem className={`${cardBase} p-8`}>
            <div className="flex items-center gap-2 mb-5">
              <ClipboardList size={20} className="text-primary-600" />
              <h3 className="font-bold text-lg">{t.checklistTitle}</h3>
            </div>
            <div className="space-y-3">
              {PRE_KICKOFF_CHECKLIST.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-primary-600 mt-0.5 shrink-0" />
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </RevealItem>

          <RevealItem className={`${cardBase} p-8`}>
            <div className="flex items-center gap-2 mb-5">
              <Handshake size={20} className="text-primary-600" />
              <h3 className="font-bold text-lg">{t.dependenciesTitle}</h3>
            </div>
            <div className="space-y-3">
              {SCOPE_DEPENDENCIES.map((dep) => (
                <div key={dep.team} className="flex items-start gap-3 text-sm">
                  <Target size={14} className="text-primary-600 mt-1 shrink-0" />
                  <p>
                    <span className="font-semibold">{dep.team}</span>
                    <span className="text-slate-600"> — {dep.need}</span>
                  </p>
                </div>
              ))}
            </div>
          </RevealItem>
        </RevealStagger>
      </section>

      {/* Closing presenter */}
      <section className="max-w-4xl mx-auto px-8 pb-10">
        <Reveal>
          <Presenter size="lg" text={t.presenterClosing} />
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="bg-primary-600 text-white">
        <Reveal className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3 font-display">
              <Rocket size={28} /> {t.ctaTitle}
            </h2>
            <p className="mt-2 text-primary-100">{t.ctaSubtitle}</p>
          </div>

          <Link
            href="/sign-in"
            className="bg-white text-primary-700 px-7 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lift transition-all duration-200 hover:-translate-y-0.5 active:scale-95 group"
          >
            {t.getStarted} <ArrowRight size={18} className={arrowIconClass} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
