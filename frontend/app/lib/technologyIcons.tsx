import type { ComponentType } from "react";
import { Code2, Cpu, Boxes, Bot, Workflow, Database, Container, Server, Cloud } from "lucide-react";

const ICONS: Record<string, ComponentType<{ size?: number }>> = {
  Code2,
  Cpu,
  Boxes,
  Bot,
  Workflow,
  Database,
  Container,
  Server,
  Cloud,
};

export function TechnologyIcon({ icon, size = 24 }: { icon: string; size?: number }) {
  const Icon = ICONS[icon] ?? Boxes;
  return <Icon size={size} />;
}
