"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "../lib/LanguageContext";
import { NAV_LABELS } from "../lib/translations";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },
  { label: "Programs", href: "/programs" },
  { label: "AI Assistant", href: "/ai-assistant" },
  { label: "Documents", href: "/documents" },
  { label: "Insights", href: "/insights" },
  { label: "How I Work", href: "/methodology" },
];

export default function Header({ active }: { active: string }) {
  const { lang, setLang } = useLanguage();
  const t = NAV_LABELS[lang];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-8 h-36 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-4 shrink-0">
          <Image
            src="/logo/logo1.png"
            alt="Sidibe Enterprises"
            width={362}
            height={271}
            className="h-28 w-auto object-contain"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={item.label === active ? "text-blue-600" : "text-slate-950"}
            >
              {t[item.label]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 bg-white border border-blue-100 rounded-xl p-1 shadow-sm">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                lang === "en" ? "bg-blue-600 text-white" : "text-slate-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                lang === "fr" ? "bg-blue-600 text-white" : "text-slate-600"
              }`}
            >
              FR
            </button>
          </div>

          <Link
            href="/sign-in"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-bold whitespace-nowrap"
          >
            {t["Sign In"]}
          </Link>
        </div>
      </div>
    </header>
  );
}
