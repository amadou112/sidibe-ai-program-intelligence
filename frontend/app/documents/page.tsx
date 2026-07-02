"use client";

import { useRef, useState } from "react";
import {
  UploadCloud,
  Search,
  FileText,
  HardDrive,
  Folders,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import Header from "../components/Header";
import Metric from "../components/Metric";
import Reveal, { RevealStagger, RevealItem } from "../components/Reveal";
import { CATEGORIES, DOCUMENTS } from "../lib/documents";
import type { DocumentItem } from "../lib/documents";
import { CategoryIcon, FileTypeIcon } from "../lib/fileIcons";
import { useLanguage } from "../lib/LanguageContext";
import { CATEGORY_LABELS } from "../lib/translations";
import { cardStatic, btnCompact } from "../lib/ui";

const ACCEPTED_TYPES =
  ".pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,.json,.xml,.png,.jpg,.jpeg,.ppt,.pptx,.zip";

const DOCUMENTS_TEXT = {
  en: {
    tag: "DOCUMENT INTELLIGENCE",
    title: "Documents",
    subtitle:
      "Upload structured data (CSV, XLSX, JSON) or unstructured documents (PDF, DOCX, images, presentations) and let the AI pipeline classify, summarize, and index them automatically.",
    totalDocuments: "Total Documents",
    aiProcessed: "AI-Processed",
    categories: "Categories",
    storageUsed: "Storage Used",
    dragDrop: "Drag & drop files here",
    supports: "Supports structured and unstructured data: PDF, DOCX, TXT, CSV, XLSX, JSON, XML, PNG, JPG, PPTX, ZIP",
    browseFiles: "Browse Files",
    all: "All",
    search: "Search documents...",
    document: "document",
    documents: "documents",
    processing: "Processing",
    processed: "Processed",
  },
  fr: {
    tag: "INTELLIGENCE DOCUMENTAIRE",
    title: "Documents",
    subtitle:
      "Téléversez des données structurées (CSV, XLSX, JSON) ou des documents non structurés (PDF, DOCX, images, présentations) et laissez le pipeline IA les classer, résumer et indexer automatiquement.",
    totalDocuments: "Documents Totaux",
    aiProcessed: "Traités par l'IA",
    categories: "Catégories",
    storageUsed: "Stockage Utilisé",
    dragDrop: "Glissez-déposez des fichiers ici",
    supports: "Prend en charge les données structurées et non structurées : PDF, DOCX, TXT, CSV, XLSX, JSON, XML, PNG, JPG, PPTX, ZIP",
    browseFiles: "Parcourir les fichiers",
    all: "Tous",
    search: "Rechercher des documents...",
    document: "document",
    documents: "documents",
    processing: "Traitement",
    processed: "Traité",
  },
};

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 KB";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export default function Documents() {
  const { lang } = useLanguage();
  const t = DOCUMENTS_TEXT[lang];
  const categoryLabels = CATEGORY_LABELS[lang];
  const [documents, setDocuments] = useState<DocumentItem[]>(DOCUMENTS);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadCategory, setUploadCategory] = useState<string>(CATEGORIES[0]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleFiles(fileList: FileList | null) {
    if (!fileList || fileList.length === 0) return;

    const newDocs: DocumentItem[] = Array.from(fileList).map((file, idx) => {
      const parts = file.name.split(".");
      const extension = parts.length > 1 ? (parts.pop() as string) : "file";
      return {
        id: `upload-${Date.now()}-${idx}`,
        name: file.name,
        category: uploadCategory,
        extension,
        size: formatBytes(file.size),
        uploadedBy: "You",
        date: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        }),
        status: "Processing",
        summary: "",
      };
    });

    setDocuments((prev) => [...newDocs, ...prev]);

    newDocs.forEach((doc) => {
      setTimeout(() => {
        setDocuments((prev) =>
          prev.map((d) =>
            d.id === doc.id
              ? {
                  ...d,
                  status: "Processed",
                  summary: "Document analyzed and indexed for search by the AI pipeline.",
                }
              : d
          )
        );
      }, 1500 + Math.random() * 900);
    });
  }

  const processedCount = documents.filter((d) => d.status === "Processed").length;
  const visibleCategories = activeCategory === "All" ? CATEGORIES : [activeCategory];

  return (
    <main className="min-h-screen bg-[#f4f9ff] text-slate-950">
      <Header active="Documents" />

      <section className="max-w-7xl mx-auto px-8 pt-14 pb-6">
        <Reveal>
          <p className="text-primary-600 font-bold">{t.tag}</p>
          <h1 className="text-4xl font-extrabold mt-2 font-display">{t.title}</h1>
          <p className="mt-3 text-slate-700 max-w-2xl">{t.subtitle}</p>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <RevealStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <RevealItem>
            <Metric icon={<FileText />} title={t.totalDocuments} value={String(documents.length)} />
          </RevealItem>
          <RevealItem>
            <Metric icon={<CheckCircle2 />} title={t.aiProcessed} value={String(processedCount)} />
          </RevealItem>
          <RevealItem>
            <Metric icon={<Folders />} title={t.categories} value={String(CATEGORIES.length)} />
          </RevealItem>
          <RevealItem>
            <Metric icon={<HardDrive />} title={t.storageUsed} value="4.2 GB" />
          </RevealItem>
        </RevealStagger>
      </section>

      <section className="max-w-7xl mx-auto px-8 pt-10">
        <Reveal
          className={`rounded-3xl border-2 border-dashed p-10 text-center transition-colors duration-200 ${
            isDragging ? "border-primary-500 bg-primary-50" : "border-primary-200 bg-white"
          }`}
        >
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              handleFiles(e.dataTransfer.files);
            }}
          >
            <div className="mx-auto w-14 h-14 rounded-2xl bg-primary-100 text-primary-600 flex items-center justify-center transition-transform duration-200">
              <UploadCloud size={26} />
            </div>
            <p className="mt-4 font-bold">{t.dragDrop}</p>
            <p className="text-sm text-slate-500 mt-1">{t.supports}</p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <select
                value={uploadCategory}
                onChange={(e) => setUploadCategory(e.target.value)}
                className="border border-primary-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-200"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {categoryLabels[cat]}
                  </option>
                ))}
              </select>

              <button onClick={() => fileInputRef.current?.click()} className={btnCompact}>
                {t.browseFiles}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept={ACCEPTED_TYPES}
                className="hidden"
                onChange={(e) => {
                  handleFiles(e.target.files);
                  e.target.value = "";
                }}
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("All")}
              className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                activeCategory === "All"
                  ? "bg-primary-600 text-white border-primary-600"
                  : "bg-white text-slate-700 border-primary-100 hover:border-primary-300"
              }`}
            >
              {t.all} ({documents.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-semibold px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-slate-700 border-primary-100 hover:border-primary-300"
                }`}
              >
                {categoryLabels[cat]} ({documents.filter((d) => d.category === cat).length})
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search}
              className="w-full border border-primary-100 rounded-xl pl-10 pr-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
          </div>
        </div>

        <div className="space-y-10">
          {visibleCategories.map((category) => {
            const docs = documents.filter(
              (d) =>
                d.category === category &&
                d.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            if (docs.length === 0) return null;

            return (
              <div key={category}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary-600 bg-primary-100 w-9 h-9 rounded-xl flex items-center justify-center">
                    <CategoryIcon category={category} size={18} />
                  </div>
                  <h2 className="font-bold text-lg">{categoryLabels[category]}</h2>
                  <span className="text-sm text-slate-500 font-semibold">
                    {docs.length} {docs.length === 1 ? t.document : t.documents}
                  </span>
                </div>

                <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {docs.map((doc) => (
                    <RevealItem
                      key={doc.id}
                      className={`${cardStatic} p-4 flex items-start gap-4`}
                    >
                      <div className="text-primary-600 bg-primary-100 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                        <FileTypeIcon extension={doc.extension} size={20} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-semibold text-sm truncate">{doc.name}</p>
                          {doc.status === "Processing" ? (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-warning-700 bg-warning-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                              <Loader2 size={12} className="animate-spin" /> {t.processing}
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-success-700 bg-success-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                              <CheckCircle2 size={12} /> {t.processed}
                            </span>
                          )}
                        </div>

                        <p className="text-xs text-slate-500 mt-1">
                          {doc.size} &middot; {doc.uploadedBy} &middot; {doc.date}
                        </p>

                        {doc.status === "Processed" && doc.summary && (
                          <p className="text-sm text-slate-600 mt-2">{doc.summary}</p>
                        )}
                      </div>
                    </RevealItem>
                  ))}
                </RevealStagger>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
