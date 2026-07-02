import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "../../components/Header";
import Reveal, { RevealStagger, RevealItem } from "../../components/Reveal";
import { TECHNOLOGIES } from "../../lib/technology";
import { TechnologyIcon } from "../../lib/technologyIcons";
import { btnSecondary, cardBase, arrowIconClass } from "../../lib/ui";

export function generateStaticParams() {
  return TECHNOLOGIES.map((tech) => ({ slug: tech.slug }));
}

export default async function TechnologyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tech = TECHNOLOGIES.find((t) => t.slug === slug);

  if (!tech) notFound();

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <Reveal>
          <Link href="/#tech-stack" className="link-underline text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            &larr; Our AI Technology Stack
          </Link>

          <div className="flex items-center gap-4 mt-6">
            <div className="text-primary-600 bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
              <TechnologyIcon icon={tech.icon} size={28} />
            </div>
            <div>
              <p className="text-primary-600 font-bold">{tech.category.toUpperCase()}</p>
              <h1 className="text-4xl font-extrabold mt-1">{tech.name}</h1>
            </div>
          </div>

          <p className="mt-5 text-xl text-slate-700 max-w-3xl">{tech.summary}</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RevealStagger className="lg:col-span-2 space-y-8">
          <RevealItem className={`${cardBase} p-8`}>
            <h2 className="text-xl font-bold mb-4">How Sidibe Enterprises Uses {tech.name}</h2>
            <p className="text-slate-700 leading-relaxed">{tech.howWeUseIt}</p>
          </RevealItem>

          <RevealItem className={`${cardBase} p-8`}>
            <h2 className="text-xl font-bold mb-4">Capabilities It Powers</h2>
            <div className="space-y-3">
              {tech.capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{capability}</span>
                </div>
              ))}
            </div>
          </RevealItem>
        </RevealStagger>

        <Reveal delay={0.1} className="space-y-6">
          <div className={`${cardBase} p-6`}>
            <p className="text-primary-600 font-semibold text-sm">Category</p>
            <h3 className="text-2xl font-extrabold mt-1">{tech.category}</h3>
          </div>

          <div className="bg-cta-gradient bg-grain rounded-3xl p-6 shadow-glow text-white">
            <h3 className="font-bold text-lg">See it in the platform</h3>
            <p className="text-primary-100 text-sm mt-2">
              Explore the AI-powered pages built on this technology.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link href="/insights" className={`${btnSecondary} justify-center group`}>
                View AI Insights <ArrowRight size={16} className={arrowIconClass} />
              </Link>
              <Link
                href="/ai-assistant"
                className="bg-primary-500/40 border border-white/30 text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:bg-primary-500/60 hover:-translate-y-0.5"
              >
                Ask the AI Assistant
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
