import {
  FileText,
  FileSpreadsheet,
  FileImage,
  FileCode,
  FileArchive,
  File as FileIcon,
  Presentation,
  Layers,
  FileSignature,
  FileWarning,
  FileCheck,
  FileClock,
  Database,
  Folder,
} from "lucide-react";

export function FileTypeIcon({ extension, size = 18 }: { extension: string; size?: number }) {
  const ext = extension.toLowerCase();
  if (["pdf", "doc", "docx", "txt"].includes(ext)) return <FileText size={size} />;
  if (["xlsx", "xls", "csv"].includes(ext)) return <FileSpreadsheet size={size} />;
  if (["png", "jpg", "jpeg", "gif"].includes(ext)) return <FileImage size={size} />;
  if (["json", "xml"].includes(ext)) return <FileCode size={size} />;
  if (["ppt", "pptx"].includes(ext)) return <Presentation size={size} />;
  if (["zip", "rar"].includes(ext)) return <FileArchive size={size} />;
  return <FileIcon size={size} />;
}

export function CategoryIcon({ category, size = 18 }: { category: string; size?: number }) {
  switch (category) {
    case "Weekly Status Reports":
      return <FileClock size={size} />;
    case "Architecture & Design":
      return <Layers size={size} />;
    case "Meeting Notes":
      return <FileText size={size} />;
    case "Requirements & Specifications":
      return <FileCode size={size} />;
    case "Contracts & Legal":
      return <FileSignature size={size} />;
    case "RAID Logs & Risk Registers":
      return <FileWarning size={size} />;
    case "Financial Reports":
      return <FileSpreadsheet size={size} />;
    case "Compliance & Audit":
      return <FileCheck size={size} />;
    case "Presentations":
      return <Presentation size={size} />;
    case "Structured Datasets":
      return <Database size={size} />;
    default:
      return <Folder size={size} />;
  }
}
