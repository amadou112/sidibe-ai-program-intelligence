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
import { PROGRAMS, RISKS, STATUS_STYLES, SEVERITY_STYLES } from "../lib/data";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="Dashboard" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <p className="text-blue-600 font-bold">EXECUTIVE OVERVIEW</p>
        <h1 className="text-4xl font-extrabold mt-2">Program Dashboard</h1>
        <p className="mt-3 text-slate-700 max-w-2xl">
          Real-time visibility into program health, delivery progress, and
          active risks across the portfolio.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          <Metric icon={<FolderKanban />} title="Programs" value="24" />
          <Metric icon={<FileText />} title="Documents" value="1,248" />
          <Metric icon={<AlertTriangle />} title="Risks" value="18" />
          <Metric icon={<CheckCircle />} title="Tasks" value="324" />
          <Metric icon={<Brain />} title="AI Insights" value="95%" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 xl:grid-cols-3 gap-8">
        <div className="xl:col-span-2 bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Active Programs</h2>
            <span className="text-sm text-slate-500 font-semibold">
              5 shown of 24
            </span>
          </div>

          <div className="space-y-5">
            {PROGRAMS.slice(0, 5).map((program) => (
              <div
                key={program.name}
                className="border border-blue-100 rounded-2xl p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-bold">{program.name}</h3>
                    <div className="flex items-center gap-4 mt-1 text-sm text-slate-500">
                      <span className="flex items-center gap-1">
                        <User size={14} /> {program.owner}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} /> Due {program.due}
                      </span>
                    </div>
                  </div>
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ${STATUS_STYLES[program.status]}`}
                  >
                    {program.status}
                  </span>
                </div>

                <div className="mt-4 flex items-center gap-3">
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
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-xl border border-blue-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Risks</h2>
            <span className="text-sm text-slate-500 font-semibold">RAID log</span>
          </div>

          <div className="space-y-4">
            {RISKS.map((risk) => (
              <div
                key={risk.title}
                className="border border-blue-100 rounded-2xl p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-sm leading-snug">
                    {risk.title}
                  </p>
                  <span
                    className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap ${SEVERITY_STYLES[risk.severity]}`}
                  >
                    {risk.severity}
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-2">
                  {risk.program} &middot; {risk.owner}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
