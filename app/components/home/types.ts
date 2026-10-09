import type { LucideIcon } from "lucide-react";

export type ButtonVariant = "default" | "outline" | "glass";
export type ButtonSize = "default" | "lg" | "icon";

export type FloatingIconConfig = {
  Icon: LucideIcon;
  top: string;
  left: string;
  delay: number;
  duration: number;
  size: string;
  opacity: string;
};

export type Service = {
  title: string;
  description: string;
  image: string;
  Icon: LucideIcon;
  iconClassName: string;
};

export type Feature = {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: "blue" | "teal" | "purple";
};

export type Review = {
  name: string;
  guideLabel: string;
  rating: number;
  date: string;
  text: string;
  avatar: string;
};

export type ContactDetail = {
  title: string;
  detail: string;
  Icon: LucideIcon;
  colorClassName: string;
  hoverClassName: string;
};
