import { ReactNode } from "react";

export default function Metric({
  icon,
  title,
  value,
}: {
  icon: ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100">
      <div className="text-blue-600 bg-blue-100 w-12 h-12 rounded-2xl flex items-center justify-center">
        {icon}
      </div>
      <p className="text-blue-600 font-semibold text-sm mt-4">{title}</p>
      <h3 className="text-3xl font-extrabold mt-1">{value}</h3>
    </div>
  );
}
