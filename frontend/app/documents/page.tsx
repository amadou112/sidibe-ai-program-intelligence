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
import { CATEGORIES, DOCUMENTS } from "../lib/documents";
import type { DocumentItem } from "../lib/documents";
import { CategoryIcon, FileTypeIcon } from "../lib/fileIcons";

const ACCEPTED_TYPES =
  ".pdf,.doc,.docx,.txt,.csv,.xlsx,.xls,.json,.xml,.png,.jpg,.jpeg,.ppt,.pptx,.zip";

function formatBytes(bytes: number) {
  if (bytes === 0) return "0 KB";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / Math.pow(1024, i)).toFixed(i === 0 ? 0 : 1)} ${units[i]}`;
}

export default function Documents() {
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
        <p className="text-blue-600 font-bold">DOCUMENT INTELLIGENCE</p>
        <h1 className="text-4xl font-extrabold mt-2">Documents</h1>
        <p className="mt-3 text-slate-700 max-w-2xl">
          Upload structured data (CSV, XLSX, JSON) or unstructured documents
          (PDF, DOCX, images, presentations) and let the AI pipeline
          classify, summarize, and index them automatically.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Metric icon={<FileText />} title="Total Documents" value={String(documents.length)} />
          <Metric icon={<CheckCircle2 />} title="AI-Processed" value={String(processedCount)} />
          <Metric icon={<Folders />} title="Categories" value={String(CATEGORIES.length)} />
          <Metric icon={<HardDrive />} title="Storage Used" value="4.2 GB" />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 pt-10">
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
          className={`rounded-3xl border-2 border-dashed p-10 text-center transition-colors ${
            isDragging ? "border-blue-500 bg-blue-50" : "border-blue-200 bg-white"
          }`}
        >
          <div className="mx-auto w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
            <UploadCloud size={26} />
          </div>
          <p className="mt-4 font-bold">Drag & drop files here</p>
          <p className="text-sm text-slate-500 mt-1">
            Supports structured and unstructured data: PDF, DOCX, TXT, CSV, XLSX, JSON, XML, PNG, JPG, PPTX, ZIP
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <select
              value={uploadCategory}
              onChange={(e) => setUploadCategory(e.target.value)}
              className="border border-blue-200 rounded-xl px-4 py-3 text-sm font-semibold text-slate-700"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold"
            >
              Browse Files
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
      </section>

      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory("All")}
              className={`text-sm font-semibold px-4 py-2 rounded-full border ${
                activeCategory === "All"
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-slate-700 border-blue-100"
              }`}
            >
              All ({documents.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm font-semibold px-4 py-2 rounded-full border ${
                  activeCategory === cat
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-slate-700 border-blue-100"
                }`}
              >
                {cat} ({documents.filter((d) => d.category === cat).length})
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents..."
              className="w-full border border-blue-100 rounded-xl pl-10 pr-4 py-3 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-200"
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
                  <div className="text-blue-600 bg-blue-100 w-9 h-9 rounded-xl flex items-center justify-center">
                    <CategoryIcon category={category} size={18} />
                  </div>
                  <h2 className="font-bold text-lg">{category}</h2>
                  <span className="text-sm text-slate-500 font-semibold">
                    {docs.length} document{docs.length === 1 ? "" : "s"}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {docs.map((doc) => (
                    <div
                      key={doc.id}
                      className="bg-white border border-blue-100 rounded-2xl p-4 flex items-start gap-4 shadow-xl"
                    >
                      <div className="text-blue-600 bg-blue-100 w-11 h-11 rounded-xl flex items-center justify-center shrink-0">
                        <FileTypeIcon extension={doc.extension} size={20} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <p className="font-semibold text-sm truncate">{doc.name}</p>
                          {doc.status === "Processing" ? (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-amber-700 bg-amber-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                              <Loader2 size={12} className="animate-spin" /> Processing
                            </span>
                          ) : (
                            <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                              <CheckCircle2 size={12} /> Processed
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
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
