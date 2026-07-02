import { ReactNode } from "react";
import AnimatedCounter from "./AnimatedCounter";
import TiltCard from "./TiltCard";
import { cardBase } from "../lib/ui";

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
    <TiltCard className={`${cardBase} p-6`}>
      <div className="text-primary-600 bg-primary-100 w-12 h-12 rounded-2xl flex items-center justify-center">
        {icon}
      </div>
      <p className="text-primary-600 font-semibold text-sm mt-4">{title}</p>
      <h3 className="text-3xl font-extrabold mt-1 tabular-nums">
        <AnimatedCounter value={value} />
      </h3>
    </TiltCard>
  );
}
