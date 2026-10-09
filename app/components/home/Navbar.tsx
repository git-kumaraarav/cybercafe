"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { desktopNavigation, mobileNavigation } from "./data";
import { Button } from "./ui";

const navigationHref = (item: string) => `#${item.toLowerCase().replace(" ", "-")}`;

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-gray-900" : "text-white";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        isScrolled
          ? "border-b border-gray-200/50 bg-white/80 py-3 shadow-sm backdrop-blur-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl shadow-lg transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 ${
              isScrolled
                ? "bg-blue-600 shadow-blue-500/30"
                : "border border-white/30 bg-white/20 backdrop-blur-md"
            }`}
          >
            <Zap className="h-5 w-5 text-white" />
          </span>
          <span className={`text-xl font-bold tracking-tight transition-colors duration-500 ${textColor} ${!isScrolled ? "drop-shadow-md" : ""}`}>
            Digital India CSC
          </span>
        </a>

        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-2.5 backdrop-blur-lg md:flex">
          {desktopNavigation.map((item) => (
            <a
              key={item}
              href={navigationHref(item)}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-gray-600 hover:text-blue-600" : "text-gray-200 hover:text-blue-400"
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant={isScrolled ? "default" : "glass"}>Contact Us</Button>
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className="p-2 md:hidden"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X className={textColor} /> : <Menu className={textColor} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full overflow-hidden border-b border-gray-200 bg-white shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {mobileNavigation.map((item, index) => (
                <motion.a
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={navigationHref(item)}
                  className="rounded-lg px-4 py-3 font-medium text-gray-800 transition-colors hover:bg-blue-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
