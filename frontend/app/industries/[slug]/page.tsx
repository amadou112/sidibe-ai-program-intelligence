import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import Header from "../../components/Header";
import Reveal, { RevealStagger, RevealItem } from "../../components/Reveal";
import { INDUSTRIES } from "../../lib/industries";
import { IndustryIcon } from "../../lib/industryIcons";
import { btnSecondary, cardBase, arrowIconClass } from "../../lib/ui";

export function generateStaticParams() {
  return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = INDUSTRIES.find((i) => i.slug === slug);

  if (!industry) notFound();

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <Reveal>
          <Link href="/#industries" className="text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
            &larr; Industries We Serve
          </Link>

          <div className="flex items-center gap-4 mt-6">
            <div className="text-primary-600 bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
              <IndustryIcon icon={industry.icon} size={28} />
            </div>
            <div>
              <p className="text-primary-600 font-bold">INDUSTRY</p>
              <h1 className="text-4xl font-extrabold mt-1">{industry.name}</h1>
            </div>
          </div>

          <p className="mt-5 text-xl text-slate-700 max-w-3xl">{industry.tagline}</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <RevealStagger className="lg:col-span-2 space-y-8">
          <RevealItem className={`${cardBase} p-8`}>
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-slate-700 leading-relaxed">{industry.overview}</p>
          </RevealItem>

          <RevealItem className={`${cardBase} p-8`}>
            <h2 className="text-xl font-bold mb-4">Common Challenges</h2>
            <div className="space-y-3">
              {industry.challenges.map((challenge) => (
                <div key={challenge} className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-warning-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{challenge}</span>
                </div>
              ))}
            </div>
          </RevealItem>

          <RevealItem className={`${cardBase} p-8`}>
            <h2 className="text-xl font-bold mb-4">How Sidibe Enterprises Helps</h2>
            <div className="space-y-3">
              {industry.howWeHelp.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-primary-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </RevealItem>
        </RevealStagger>

        <Reveal delay={0.1} className="space-y-6">
          <div className={`${cardBase} p-6`}>
            <p className="text-primary-600 font-semibold text-sm">{industry.stat.label}</p>
            <h3 className="text-3xl font-extrabold mt-1">{industry.stat.value}</h3>
          </div>

          <div className="bg-primary-600 rounded-3xl p-6 shadow-glow text-white">
            <h3 className="font-bold text-lg">See it on your programs</h3>
            <p className="text-primary-100 text-sm mt-2">
              Explore the dashboard or ask the AI Assistant how this applies to your portfolio.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link href="/dashboard" className={`${btnSecondary} justify-center group`}>
                Explore Dashboard <ArrowRight size={16} className={arrowIconClass} />
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
