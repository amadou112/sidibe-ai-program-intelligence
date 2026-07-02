import { Clock, User, Layers } from "lucide-react";
import Header from "../components/Header";
import { PROGRAMS, STATUS_STYLES } from "../lib/data";

export default function Programs() {
  const onTrack = PROGRAMS.filter((p) => p.status === "On Track").length;
  const atRisk = PROGRAMS.filter((p) => p.status === "At Risk").length;
  const delayed = PROGRAMS.filter((p) => p.status === "Delayed").length;

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="Programs" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <p className="text-blue-600 font-bold">PORTFOLIO</p>
        <h1 className="text-4xl font-extrabold mt-2">Programs</h1>
        <p className="mt-3 text-slate-700 max-w-2xl">
          Every active program across the portfolio, with live status,
          delivery progress, and ownership at a glance.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
            <p className="text-emerald-600 font-semibold text-sm">On Track</p>
            <h3 className="text-3xl font-extrabold mt-1">{onTrack}</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
            <p className="text-amber-600 font-semibold text-sm">At Risk</p>
            <h3 className="text-3xl font-extrabold mt-1">{atRisk}</h3>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
            <p className="text-rose-600 font-semibold text-sm">Delayed</p>
            <h3 className="text-3xl font-extrabold mt-1">{delayed}</h3>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">All Programs</h2>
          <span className="text-sm text-slate-500 font-semibold">
            {PROGRAMS.length} shown of 24
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROGRAMS.map((program) => (
            <div
              key={program.name}
              className="bg-white rounded-3xl p-6 shadow-xl border border-blue-100 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="flex items-center gap-1.5 text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  <Layers size={12} /> {program.industry}
                </span>
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${STATUS_STYLES[program.status]}`}
                >
                  {program.status}
                </span>
              </div>

              <h3 className="font-bold text-lg mt-4">{program.name}</h3>
              <p className="text-sm text-slate-600 mt-2 flex-1">
                {program.description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex-1 h-2 bg-blue-50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-blue-600 rounded-full"
                    style={{ width: `${program.progress}%` }}
                  />
                </div>
                <span className="text-sm font-bold text-slate-700 w-10 text-right">
                  {program.progress}%
                </span>
              </div>

              <div className="flex items-center gap-4 mt-4 text-sm text-slate-500 border-t border-blue-50 pt-4">
                <span className="flex items-center gap-1">
                  <User size={14} /> {program.owner}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} /> Due {program.due}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
