import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, AlertTriangle } from "lucide-react";
import Header from "../../components/Header";
import { INDUSTRIES } from "../../lib/industries";
import { IndustryIcon } from "../../lib/industryIcons";

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
        <Link href="/#industries" className="text-sm font-semibold text-blue-600">
          &larr; Industries We Serve
        </Link>

        <div className="flex items-center gap-4 mt-6">
          <div className="text-blue-600 bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
            <IndustryIcon icon={industry.icon} size={28} />
          </div>
          <div>
            <p className="text-blue-600 font-bold">INDUSTRY</p>
            <h1 className="text-4xl font-extrabold mt-1">{industry.name}</h1>
          </div>
        </div>

        <p className="mt-5 text-xl text-slate-700 max-w-3xl">{industry.tagline}</p>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-xl font-bold mb-4">Overview</h2>
            <p className="text-slate-700 leading-relaxed">{industry.overview}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-xl font-bold mb-4">Common Challenges</h2>
            <div className="space-y-3">
              {industry.challenges.map((challenge) => (
                <div key={challenge} className="flex items-start gap-3">
                  <AlertTriangle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{challenge}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-xl font-bold mb-4">How Sidibe Enterprises Helps</h2>
            <div className="space-y-3">
              {industry.howWeHelp.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
            <p className="text-blue-600 font-semibold text-sm">{industry.stat.label}</p>
            <h3 className="text-3xl font-extrabold mt-1">{industry.stat.value}</h3>
          </div>

          <div className="bg-blue-600 rounded-3xl p-6 shadow-xl text-white">
            <h3 className="font-bold text-lg">See it on your programs</h3>
            <p className="text-blue-100 text-sm mt-2">
              Explore the dashboard or ask the AI Assistant how this applies to your portfolio.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/dashboard"
                className="bg-white text-blue-700 px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Explore Dashboard <ArrowRight size={16} />
              </Link>
              <Link
                href="/ai-assistant"
                className="bg-blue-500/40 border border-white/30 text-white px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                Ask the AI Assistant
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
