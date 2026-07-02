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

export default function Home() {
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
            <p className="text-blue-600 font-bold mb-4">
              SIDIBE ENTERPRISES AI PLATFORM
            </p>

            <h1 className="text-6xl font-extrabold leading-tight">
              AI Program <br />
              <span className="text-blue-600">Intelligence Platform</span>
            </h1>

            <p className="mt-6 text-xl text-slate-700 max-w-2xl">
              Empowering organizations with AI-driven insights to manage
              programs, automate processes, analyze documents, predict risks,
              and accelerate strategic outcomes.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-blue-300"
              >
                Explore Dashboard <ArrowRight size={18} />
              </Link>

              <Link
                href="/demo"
                className="bg-white hover:bg-blue-50 text-blue-700 px-7 py-4 rounded-xl font-bold flex items-center gap-2 shadow-lg"
              >
                <PlayCircle size={20} />
                Watch Demo
              </Link>
            </div>

            <div className="mt-10 bg-white/80 backdrop-blur-xl border border-blue-100 rounded-2xl shadow-xl p-4 flex flex-wrap gap-5">
              <Pill icon={<Brain />} label="AI & ML" />
              <Pill icon={<BarChart3 />} label="Data Analytics" />
              <Pill icon={<Cloud />} label="Cloud & Cybersecurity" />
              <Pill icon={<FolderKanban />} label="Program Management" />
              <Pill icon={<Building2 />} label="Real Estate" />
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
          <Metric icon={<FolderKanban />} title="Programs" value="24" />
          <Metric icon={<FileText />} title="Documents" value="1,248" />
          <Metric icon={<AlertTriangle />} title="Risks" value="18" />
          <Metric icon={<CheckCircle />} title="Tasks" value="324" />
          <Metric icon={<Brain />} title="AI Insights" value="95%" />
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
          <p className="text-blue-600 font-bold">
            INTELLIGENT. AUTOMATED. IMPACTFUL.
          </p>

          <h2 className="text-4xl font-extrabold mt-4">
            AI-Powered Program Management for the Future
          </h2>

          <p className="text-slate-700 mt-5 text-lg">
            Our platform combines AI, real-time data, document intelligence, and
            program delivery automation to help teams plan, execute, and deliver
            with confidence.
          </p>

          <div className="mt-8 space-y-4">
            <Feature text="Intelligent document analysis using NLP, OCR, and RAG" />
            <Feature text="AI agents and chatbot assistance 24/7" />
            <Feature text="Executive dashboards and predictive insights" />
            <Feature text="Risk management and RAID log intelligence" />
            <Feature text="Secure, scalable, and enterprise-ready architecture" />
          </div>

          <Link
            href="/insights"
            className="mt-8 inline-flex bg-blue-600 text-white px-7 py-4 rounded-xl font-bold items-center gap-2"
          >
            Learn More <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section id="industries" className="max-w-7xl mx-auto px-8 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
          <p className="text-blue-600 font-bold mb-6">INDUSTRIES WE SERVE</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {INDUSTRIES.map((industry) => (
              <Industry key={industry.slug} slug={industry.slug} icon={industry.icon} label={industry.name} />
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
            <h3 className="text-3xl font-bold">
              Rooted in Wisdom. Building Solutions That Last.
            </h3>

            <p className="mt-5 text-slate-200">
              We blend heritage and innovation to create lasting impact for
              generations to come.
            </p>

            <div className="mt-8 bg-white rounded-2xl p-5 text-slate-950 shadow-xl">
              <Feature text="Innovation with purpose" dark />
              <Feature text="Security with trust" dark />
              <Feature text="Impact that empowers" dark />
            </div>
          </div>
        </div>
      </section>

      <section id="tech-stack" className="max-w-7xl mx-auto px-8 pb-20">
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100 text-center">
          <p className="text-blue-600 font-bold mb-8">
            OUR AI TECHNOLOGY STACK
          </p>

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
            <h2 className="text-3xl font-bold">
              Let’s Build the Future Together
            </h2>
            <p className="mt-2 text-blue-100">
              Transform your data into decisions and your vision into impact.
            </p>
          </div>

          <Link
            href="/sign-in"
            className="bg-white text-blue-700 px-7 py-4 rounded-xl font-bold"
          >
            Get Started Today
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