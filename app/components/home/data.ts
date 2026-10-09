import {
  Camera,
  Clock,
  Cpu,
  FileText,
  Globe,
  HardDrive,
  MapPin,
  Monitor,
  Mouse,
  PenTool,
  Phone,
  Printer,
  Smartphone,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import type {
  ContactDetail,
  Feature,
  FloatingIconConfig,
  Review,
  Service,
} from "./types";

export const desktopNavigation = ["Home", "Services", "Why Us", "Reviews"];
export const mobileNavigation = [...desktopNavigation, "Contact"];

export const floatingIcons: FloatingIconConfig[] = [
  { Icon: Monitor, top: "15%", left: "10%", delay: 0, duration: 25, size: "h-12 w-12", opacity: "opacity-30" },
  { Icon: Printer, top: "25%", left: "85%", delay: 2, duration: 30, size: "h-16 w-16", opacity: "opacity-20" },
  { Icon: FileText, top: "65%", left: "8%", delay: 5, duration: 22, size: "h-10 w-10", opacity: "opacity-25" },
  { Icon: Globe, top: "75%", left: "82%", delay: 1, duration: 28, size: "h-20 w-20", opacity: "opacity-15" },
  { Icon: Cpu, top: "40%", left: "20%", delay: 3, duration: 20, size: "h-8 w-8", opacity: "opacity-40" },
  { Icon: Mouse, top: "50%", left: "75%", delay: 4, duration: 26, size: "h-10 w-10", opacity: "opacity-30" },
  { Icon: Smartphone, top: "85%", left: "40%", delay: 2, duration: 24, size: "h-14 w-14", opacity: "opacity-20" },
  { Icon: HardDrive, top: "10%", left: "60%", delay: 6, duration: 32, size: "h-12 w-12", opacity: "opacity-25" },
  { Icon: Wifi, top: "80%", left: "60%", delay: 0, duration: 21, size: "h-16 w-16", opacity: "opacity-15" },
];

export const services: Service[] = [
  {
    title: "Online Form Filling",
    description: "Scholarships, PAN, Aadhaar updates, and exam forms filled perfectly.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop",
    Icon: FileText,
    iconClassName: "text-blue-600",
  },
  {
    title: "Bulk & Color Printing",
    description: "High-quality laser printing for projects, reports, and official documents.",
    image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=600&auto=format&fit=crop",
    Icon: Printer,
    iconClassName: "text-indigo-600",
  },
  {
    title: "Passport Photos",
    description: "Instant passport size and custom dimension photos printed in under 5 minutes.",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=600&auto=format&fit=crop",
    Icon: Camera,
    iconClassName: "text-teal-600",
  },
  {
    title: "Premium Stationery",
    description: "Files, folders, pens, and a complete range of office & school supplies.",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=600&auto=format&fit=crop",
    Icon: PenTool,
    iconClassName: "text-purple-600",
  },
];

export const features: Feature[] = [
  {
    Icon: Zap,
    color: "blue",
    title: "Lightning Fast",
    description: "Time is money. Our high-performance systems and streamlined processes ensure you never have to wait in long queues.",
  },
  {
    Icon: Wifi,
    color: "teal",
    title: "Reliable Connection",
    description: "Experience uninterrupted surfing and downloading with our premium gigabit fiber-optic broadband network.",
  },
  {
    Icon: Users,
    color: "purple",
    title: "Expert Assistance",
    description: "Stuck on a complex government form? Our experienced and courteous staff is always ready to guide you step-by-step.",
  },
];

export const reviews: Review[] = [
  {
    name: "Rahul Sharma",
    guideLabel: "Local Guide · 43 reviews",
    rating: 5,
    date: "2 weeks ago",
    text: "Best cyber cafe in the area! Very fast internet and the staff helped me fill out my passport application without any errors. Highly recommend for any CSC related work.",
    avatar: "https://i.pravatar.cc/150?u=rahul",
  },
  {
    name: "Priya Patel",
    guideLabel: "12 reviews",
    rating: 5,
    date: "1 month ago",
    text: "Got bulk color printing done for my final year college project. Excellent print quality and very reasonable prices. They also have a good collection of stationery.",
    avatar: "https://i.pravatar.cc/150?u=priya",
  },
  {
    name: "Amit Kumar",
    guideLabel: "Local Guide · 128 reviews",
    rating: 4,
    date: "3 months ago",
    text: "Good place for online work. CSC center services are prompt and the owner is very knowledgeable about government schemes. Only minor issue is parking can be tight during peak hours.",
    avatar: "https://i.pravatar.cc/150?u=amit",
  },
];

export const contactDetails: ContactDetail[] = [
  {
    Icon: MapPin,
    colorClassName: "text-blue-400",
    hoverClassName: "group-hover:bg-blue-500/20 group-hover:border-blue-500/50",
    title: "Our Location",
    detail: "124 Main Market Road, Sector 15\nNear City Square, New Delhi 110001",
  },
  {
    Icon: Phone,
    colorClassName: "text-green-400",
    hoverClassName: "group-hover:bg-green-500/20 group-hover:border-green-500/50",
    title: "Call / WhatsApp",
    detail: "+91 98765 43210",
  },
  {
    Icon: Clock,
    colorClassName: "text-purple-400",
    hoverClassName: "group-hover:bg-purple-500/20 group-hover:border-purple-500/50",
    title: "Working Hours",
    detail: "Mon - Sat: 9:00 AM - 9:00 PM\nSunday: 10:00 AM - 2:00 PM",
  },
];
