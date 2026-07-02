"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../lib/LanguageContext";
import { NAV_LABELS } from "../lib/translations";
import { btnCompact } from "../lib/ui";
import MobileNav from "./MobileNav";

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
  const [hovered, setHovered] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur-xl border-b border-primary-100">
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

        <nav
          className="hidden lg:flex items-center gap-7 text-sm font-semibold"
          onMouseLeave={() => setHovered(null)}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === active;
            const isHighlighted = hovered ? hovered === item.label : isActive;
            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHovered(item.label)}
                className={`relative py-2 transition-colors ${
                  isActive ? "text-primary-600" : "text-slate-900 hover:text-primary-600"
                }`}
              >
                {t[item.label]}
                {isHighlighted && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute left-0 right-0 -bottom-1 h-0.5 rounded-full bg-primary-600"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <div className="flex items-center gap-1 bg-white border border-primary-100 rounded-xl p-1 shadow-soft">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                lang === "en" ? "bg-primary-600 text-white" : "text-slate-600"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("fr")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                lang === "fr" ? "bg-primary-600 text-white" : "text-slate-600"
              }`}
            >
              FR
            </button>
          </div>

          <Link href="/sign-in" className={`${btnCompact} whitespace-nowrap`}>
            {t["Sign In"]}
          </Link>
        </div>

        {!mobileOpen && (
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
            className="lg:hidden p-2 -mr-2 rounded-xl text-slate-900 hover:bg-primary-50 transition-colors"
          >
            <Menu size={26} />
          </button>
        )}
      </div>

      <MobileNav
        items={NAV_ITEMS}
        labels={t}
        active={active}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        lang={lang}
        setLang={setLang}
        signInLabel={t["Sign In"]}
      />
      {mobileOpen && (
        <button
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
          className="fixed top-6 right-6 z-50 lg:hidden p-2 rounded-xl bg-white shadow-lift text-slate-900"
        >
          <X size={22} />
        </button>
      )}
    </header>
  );
}
