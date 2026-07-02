"use client";

import { useState } from "react";
import { Play, Pause, Clock, CheckCircle } from "lucide-react";
import Header from "../components/Header";
import { DEMO_TOPICS } from "../lib/demos";

export default function Demo() {
  const [activeId, setActiveId] = useState<string>(DEMO_TOPICS[0].id);
  const active = DEMO_TOPICS.find((t) => t.id === activeId)!;

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <p className="text-blue-600 font-bold">WATCH DEMO</p>
        <h1 className="text-4xl font-extrabold mt-2">See the Platform in Action</h1>
        <p className="mt-3 text-slate-700 max-w-2xl">
          A guided walkthrough of the AI concepts powering Sidibe Enterprises —
          from the machine learning models under the hood to how they show up
          in the AI Assistant.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8 pb-20">
        <div className="bg-slate-950 rounded-3xl overflow-hidden shadow-2xl">
          <div className="aspect-video flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative">
            <button
              onClick={() => {}}
              className="w-20 h-20 rounded-full bg-white/10 hover:bg-white/20 border border-white/30 flex items-center justify-center text-white"
            >
              <Play size={32} className="ml-1" />
            </button>
            <span className="absolute top-6 left-6 text-xs font-bold text-blue-300 bg-white/10 px-3 py-1.5 rounded-full">
              {active.tag}
            </span>
            <span className="absolute bottom-6 right-6 text-xs font-semibold text-white/70 flex items-center gap-1.5">
              <Clock size={14} /> {active.duration}
            </span>
          </div>

          <div className="p-8 text-white">
            <h2 className="text-2xl font-bold">{active.title}</h2>
            <p className="text-slate-300 mt-3 max-w-3xl">{active.description}</p>

            <div className="mt-6 space-y-2">
              {active.keyPoints.map((point) => (
                <div key={point} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle size={16} className="text-blue-400 mt-0.5 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold mt-12 mb-6">More Topics</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {DEMO_TOPICS.map((topic) => (
            <button
              key={topic.id}
              onClick={() => setActiveId(topic.id)}
              className={`text-left bg-white rounded-3xl p-6 shadow-xl border transition-colors ${
                topic.id === activeId
                  ? "border-blue-500 ring-2 ring-blue-100"
                  : "border-blue-100 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {topic.tag}
                </span>
                <span className="text-xs font-semibold text-slate-500 flex items-center gap-1.5">
                  <Clock size={12} /> {topic.duration}
                </span>
              </div>

              <h4 className="font-bold mt-4">{topic.title}</h4>
              <p className="text-sm text-slate-600 mt-2 line-clamp-2">{topic.description}</p>

              <span className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 mt-4">
                {topic.id === activeId ? (
                  <>
                    <Pause size={14} /> Now Playing
                  </>
                ) : (
                  <>
                    <Play size={14} /> Watch
                  </>
                )}
              </span>
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
