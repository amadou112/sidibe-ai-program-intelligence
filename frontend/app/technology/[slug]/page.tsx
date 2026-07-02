import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import Header from "../../components/Header";
import { TECHNOLOGIES } from "../../lib/technology";
import { TechnologyIcon } from "../../lib/technologyIcons";

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
        <Link href="/#tech-stack" className="text-sm font-semibold text-blue-600">
          &larr; Our AI Technology Stack
        </Link>

        <div className="flex items-center gap-4 mt-6">
          <div className="text-blue-600 bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center shrink-0">
            <TechnologyIcon icon={tech.icon} size={28} />
          </div>
          <div>
            <p className="text-blue-600 font-bold">{tech.category.toUpperCase()}</p>
            <h1 className="text-4xl font-extrabold mt-1">{tech.name}</h1>
          </div>
        </div>

        <p className="mt-5 text-xl text-slate-700 max-w-3xl">{tech.summary}</p>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-xl font-bold mb-4">How Sidibe Enterprises Uses {tech.name}</h2>
            <p className="text-slate-700 leading-relaxed">{tech.howWeUseIt}</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
            <h2 className="text-xl font-bold mb-4">Capabilities It Powers</h2>
            <div className="space-y-3">
              {tech.capabilities.map((capability) => (
                <div key={capability} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-blue-600 mt-0.5 shrink-0" />
                  <span className="text-slate-700">{capability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100">
            <p className="text-blue-600 font-semibold text-sm">Category</p>
            <h3 className="text-2xl font-extrabold mt-1">{tech.category}</h3>
          </div>

          <div className="bg-blue-600 rounded-3xl p-6 shadow-xl text-white">
            <h3 className="font-bold text-lg">See it in the platform</h3>
            <p className="text-blue-100 text-sm mt-2">
              Explore the AI-powered pages built on this technology.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <Link
                href="/insights"
                className="bg-white text-blue-700 px-5 py-3 rounded-xl font-bold flex items-center justify-center gap-2"
              >
                View AI Insights <ArrowRight size={16} />
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
