import type { ComponentType } from "react";
import {
  Landmark,
  HeartPulse,
  Building2,
  Home,
  HardHat,
  GraduationCap,
  Users,
  ShoppingCart,
  Building,
} from "lucide-react";

const ICONS: Record<string, ComponentType<{ size?: number }>> = {
  Landmark,
  HeartPulse,
  Building2,
  Home,
  HardHat,
  GraduationCap,
  Users,
  ShoppingCart,
};

export function IndustryIcon({ icon, size = 24 }: { icon: string; size?: number }) {
  const Icon = ICONS[icon] ?? Building;
  return <Icon size={size} />;
}
