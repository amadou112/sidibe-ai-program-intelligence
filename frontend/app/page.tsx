"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Brain,
  BarChart3,
  Cloud,
  Building2,
  FolderKanban,
  FileText,
  AlertTriangle,
  CheckCircle,
  PlayCircle,
  ArrowRight,
} from "lucide-react";
import Header from "./components/Header";
import Metric from "./components/Metric";
import { INDUSTRIES } from "./lib/industries";
import { IndustryIcon } from "./lib/industryIcons";
import { TECHNOLOGIES } from "./lib/technology";
import { useLanguage } from "./lib/LanguageContext";
import { COMMON, METRIC_LABELS, INDUSTRY_NAMES } from "./lib/translations";

const HOME_TEXT = {
  en: {
    tag: "SIDIBE ENTERPRISES AI PLATFORM",
    heroLine1: "AI Program",
    heroLine2: "Intelligence Platform",
    heroSubtitle:
      "Empowering organizations with AI-driven insights to manage programs, automate processes, analyze documents, predict risks, and accelerate strategic outcomes.",
    pills: ["AI & ML", "Data Analytics", "Cloud & Cybersecurity", "Program Management", "Real Estate"],
    section2Tag: "INTELLIGENT. AUTOMATED. IMPACTFUL.",
    section2Title: "AI-Powered Program Management for the Future",
    section2Body:
      "Our platform combines AI, real-time data, document intelligence, and program delivery automation to help teams plan, execute, and deliver with confidence.",
    features: [
      "Intelligent document analysis using NLP, OCR, and RAG",
      "AI agents and chatbot assistance 24/7",
      "Executive dashboards and predictive insights",
      "Risk management and RAID log intelligence",
      "Secure, scalable, and enterprise-ready architecture",
    ],
    industriesTag: "INDUSTRIES WE SERVE",
    visionTitle: "Rooted in Wisdom. Building Solutions That Last.",
    visionBody: "We blend heritage and innovation to create lasting impact for generations to come.",
    visionFeatures: ["Innovation with purpose", "Security with trust", "Impact that empowers"],
    techTag: "OUR AI TECHNOLOGY STACK",
    ctaTitle: "Let's Build the Future Together",
    ctaBody: "Transform your data into decisions and your vision into impact.",
  },
  fr: {
    tag: "PLATEFORME IA DE SIDIBE ENTERPRISES",
    heroLine1: "Plateforme IA",
    heroLine2: "d'Intelligence des Programmes",
    heroSubtitle:
      "Nous aidons les organisations grâce à des analyses pilotées par l'IA pour gérer les programmes, automatiser les processus, analyser les documents, prédire les risques et accélérer les résultats stratégiques.",
    pills: ["IA & apprentissage automatique", "Analyse de données", "Cloud & cybersécurité", "Gestion de programmes", "Immobilier"],
    section2Tag: "INTELLIGENT. AUTOMATISÉ. PERCUTANT.",
    section2Title: "La gestion de programmes propulsée par l'IA, pour l'avenir",
    section2Body:
      "Notre plateforme combine l'IA, les données en temps réel, l'intelligence documentaire et l'automatisation de la livraison de programmes pour aider les équipes à planifier, exécuter et livrer en toute confiance.",
    features: [
      "Analyse intelligente de documents grâce au NLP, à l'OCR et au RAG",
      "Agents IA et assistance par chatbot 24 h/24, 7 j/7",
      "Tableaux de bord exécutifs et analyses prédictives",
      "Gestion des risques et intelligence du journal RAID",
      "Architecture sécurisée, évolutive et prête pour l'entreprise",
    ],
    industriesTag: "INDUSTRIES QUE NOUS SERVONS",
    visionTitle: "Enracinés dans la sagesse. Bâtir des solutions durables.",
    visionBody: "Nous mêlons héritage et innovation pour créer un impact durable pour les générations à venir.",
    visionFeatures: ["Innovation avec un but", "Sécurité et confiance", "Un impact qui donne du pouvoir"],
    techTag: "NOTRE PILE TECHNOLOGIQUE IA",
    ctaTitle: "Construisons l'avenir ensemble",
    ctaBody: "Transformez vos données en décisions et votre vision en impact.",
  },
};

export default function Home() {
  const { lang } = useLanguage();
  const t = HOME_TEXT[lang];
  const common = COMMON[lang];
  const metricLabels = METRIC_LABELS[lang];
  const industryNames = INDUSTRY_NAMES[lang];

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="Home" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50 to-blue-200" />
        <Image
          src="/assets/img1.jpg"
          alt="Architecture"
          fill
          className="object-cover opacity-20"
          priority
        />
        <Image
          src="/assets/img2.jpg"
          alt="Blueprint"
          width={600}
          height={400}
          className="hidden xl:block absolute right-0 top-20 opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-600 font-bold mb-4">{t.tag}</p>

            <h1 className="text-6xl font-extrabold leading-tight">
              {t.heroLine1} <br />
              <span className="text-blue-600">{t.heroLine2}</span>
            </h1>

            <p className="mt-6 text-xl text-slate-700 max-w-2xl">{t.heroSubtitle}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-300"
              >
                {common.exploreDashboard} <ArrowRight size={18} />
              </Link>

              <Link
                href="/demo"
                className="bg-white hover:bg-blue-50 text-blue-700 px-7 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg"
              >
                <PlayCircle size={20} />
                {common.watchDemo}
              </Link>
            </div>

            <div className="mt-10 bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-4 flex flex-wrap gap-5">
              <Pill icon={<Brain />} label={t.pills[0]} />
              <Pill icon={<BarChart3 />} label={t.pills[1]} />
              <Pill icon={<Cloud />} label={t.pills[2]} />
              <Pill icon={<FolderKanban />} label={t.pills[3]} />
              <Pill icon={<Building2 />} label={t.pills[4]} />
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-10 bg-blue-500/20 blur-3xl rounded-full" />
            <Image
              src="/assets/img4.jpg"
              alt="Amadou Sidibe"
              width={520}
              height={620}
              className="relative rounded-[2rem] shadow-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <Metric icon={<FolderKanban />} title={metricLabels.Programs} value="24" />
          <Metric icon={<FileText />} title={metricLabels.Documents} value="1,248" />
          <Metric icon={<AlertTriangle />} title={metricLabels.Risks} value="18" />
          <Metric icon={<CheckCircle />} title={metricLabels.Tasks} value="324" />
          <Metric icon={<Brain />} title={metricLabels["AI Insights"]} value="95%" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Image
          src="/assets/img6.jpg"
          alt="Automation"
          width={650}
          height={500}
          className="rounded-3xl shadow-2xl"
        />

        <div>
          <p className="text-blue-600 font-bold">{t.section2Tag}</p>

          <h2 className="text-4xl font-extrabold mt-4">{t.section2Title}</h2>

          <p className="text-slate-700 mt-5 text-lg">{t.section2Body}</p>

          <div className="mt-8 space-y-4">
            {t.features.map((feature) => (
              <Feature key={feature} text={feature} />
            ))}
          </div>

          <Link
            href="/insights"
            className="mt-8 inline-flex bg-blue-600 text-white px-7 py-4 rounded-xl font-bold items-center gap-2"
          >
            {common.learnMore} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section id="industries" className="max-w-7xl mx-auto px-8 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
          <p className="text-blue-600 font-bold mb-6">{t.industriesTag}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {INDUSTRIES.map((industry) => (
              <Industry
                key={industry.slug}
                slug={industry.slug}
                icon={industry.icon}
                label={industryNames[industry.name] ?? industry.name}
              />
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl shadow-xl min-h-[360px]">
          <Image
            src="/assets/img5.jpeg"
            alt="Sidibe Enterprises Vision"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-blue-950/40" />

          <div className="relative z-10 p-10 text-white max-w-lg">
            <h3 className="text-3xl font-bold">{t.visionTitle}</h3>

            <p className="mt-5 text-slate-200">{t.visionBody}</p>

            <div className="mt-8 bg-white rounded-2xl p-5 text-slate-950 shadow-xl">
              {t.visionFeatures.map((feature) => (
                <Feature key={feature} text={feature} dark />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="max-w-7xl mx-auto px-8 pb-20">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 text-center">
          <p className="text-blue-600 font-bold mb-8">{t.techTag}</p>

          <div className="flex flex-wrap justify-center gap-8 text-lg font-bold text-slate-700">
            {TECHNOLOGIES.map((tech) => (
              <Link
                key={tech.slug}
                href={`/technology/${tech.slug}`}
                className="hover:text-blue-600"
              >
                {tech.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold">{t.ctaTitle}</h2>
            <p className="mt-2 text-blue-100">{t.ctaBody}</p>
          </div>

          <Link
            href="/sign-in"
            className="bg-white text-blue-700 px-7 py-4 rounded-xl font-bold"
          >
            {common.getStartedToday}
          </Link>
        </div>
      </section>
    </main>
  );
}

function Pill({ icon, label }: any) {
  return (
    <div className="flex items-center gap-2 text-blue-700 font-semibold text-sm">
      {icon}
      {label}
    </div>
  );
}

function Feature({ text, dark }: any) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle
        size={20}
        className={dark ? "text-blue-600" : "text-blue-600"}
      />
      <span className={dark ? "text-slate-800" : "text-slate-700"}>
        {text}
      </span>
    </div>
  );
}

function Industry({ slug, icon, label }: { slug: string; icon: string; label: string }) {
  return (
    <Link href={`/industries/${slug}`} className="text-center group">
      <div className="mx-auto text-blue-600 bg-blue-100 group-hover:bg-blue-200 w-14 h-14 rounded-2xl flex items-center justify-center transition-colors">
        <IndustryIcon icon={icon} size={22} />
      </div>
      <p className="text-sm font-semibold mt-3 group-hover:text-blue-600">{label}</p>
    </Link>
  );
}
