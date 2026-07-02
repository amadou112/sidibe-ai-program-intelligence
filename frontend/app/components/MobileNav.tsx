"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

type NavItem = { label: string; href: string };
type Lang = "en" | "fr";

export default function MobileNav({
  items,
  labels,
  active,
  open,
  onClose,
  lang,
  setLang,
  signInLabel,
}: {
  items: NavItem[];
  labels: Record<string, string>;
  active: string;
  open: boolean;
  onClose: () => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
  signInLabel: string;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
          />
          <motion.div
            className="fixed inset-x-0 top-0 z-50 lg:hidden glass-surface rounded-b-3xl"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <nav className="pt-28 pb-8 px-8 flex flex-col gap-1">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className={`py-3 text-lg font-semibold rounded-xl px-3 transition-colors ${
                    item.label === active
                      ? "text-primary-600 bg-primary-50"
                      : "text-slate-900 hover:bg-primary-50"
                  }`}
                >
                  {labels[item.label]}
                </Link>
              ))}

              <div className="mt-6 flex items-center gap-3">
                <div className="flex items-center gap-1 bg-white border border-primary-100 rounded-xl p-1 shadow-soft">
                  <button
                    onClick={() => setLang("en")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                      lang === "en" ? "bg-primary-600 text-white" : "text-slate-600"
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLang("fr")}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold ${
                      lang === "fr" ? "bg-primary-600 text-white" : "text-slate-600"
                    }`}
                  >
                    FR
                  </button>
                </div>

                <Link
                  href="/sign-in"
                  onClick={onClose}
                  className="flex-1 text-center bg-primary-600 hover:bg-primary-700 text-white px-5 py-3 rounded-xl font-bold"
                >
                  {signInLabel}
                </Link>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
