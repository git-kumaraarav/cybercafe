"use client";

import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { ButtonSize, ButtonVariant, FloatingIconConfig } from "./types";

const buttonVariants: Record<ButtonVariant, string> = {
  default: "bg-blue-600 text-white shadow-lg shadow-blue-500/30 hover:bg-blue-700 hover:shadow-blue-600/40",
  outline: "border-2 border-gray-200 bg-white shadow-sm hover:bg-gray-50 text-gray-900",
  glass: "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
};

const buttonSizes: Record<ButtonSize, string> = {
  default: "h-10 px-5 py-2",
  lg: "h-14 px-8 text-base font-semibold",
  icon: "h-10 w-10",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 active:scale-95";

  return (
    <button
      className={`${baseStyles} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export function Card({ className = "", children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white text-gray-950 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function FloatingIcon({
  Icon,
  top,
  left,
  delay,
  duration,
  size,
  opacity,
}: FloatingIconConfig) {
  return (
    <motion.div
      className={`absolute text-white ${opacity} pointer-events-none`}
      style={{ top, left }}
      animate={{ y: [0, -30, 0], rotate: [0, 360], x: [0, 20, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
    >
      <Icon className={size} />
    </motion.div>
  );
}

export function StarRating({ rating, size = "h-4 w-4" }: { rating: number; size?: string }) {
  return (
    <div className="flex text-yellow-500" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={`${size} ${index < rating ? "fill-current" : "text-gray-300"}`}
        />
      ))}
    </div>
  );
}
