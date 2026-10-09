"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { contactDetails } from "./data";
import { Button } from "./ui";

export function ContactFooterSection() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    const yearUpdate = window.setTimeout(() => setCurrentYear(new Date().getFullYear()), 0);
    return () => window.clearTimeout(yearUpdate);
  }, []);

  return (
    <section
      id="contact"
      className="sticky top-0 z-50 flex h-svh w-full flex-col justify-between overflow-hidden rounded-t-[2.5rem] bg-gray-950 text-white shadow-[0_-20px_50px_rgba(0,0,0,0.5)]"
    >
      <div className="container mx-auto flex max-h-full flex-1 flex-col justify-center overflow-y-auto px-4 py-12 no-scrollbar md:py-16">
        <div className="mx-auto mt-8 grid w-full max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 inline-flex items-center rounded-full border border-green-500/20 bg-green-500/10 px-4 py-1.5 text-sm font-medium text-green-400">
                <CheckCircle2 className="mr-2 h-4 w-4" /> We are Open Today
              </div>
              <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-6xl">Visit Us Today</h2>
              <p className="max-w-md text-lg text-gray-400">
                Your trusted partner for all digital services. Drop by for fast, reliable assistance.
              </p>
            </motion.div>

            <div className="space-y-8">
              {contactDetails.map((detail, index) => (
                <motion.div
                  key={detail.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.15 }}
                  className="group flex cursor-pointer items-start gap-5"
                >
                  <div
                    className={`mt-1 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 group-hover:scale-110 ${detail.colorClassName} ${detail.hoverClassName}`}
                  >
                    <detail.Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-semibold text-gray-100">{detail.title}</h4>
                    <p className="whitespace-pre-line leading-relaxed text-gray-400">{detail.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-full w-full"
          >
            <div className="group relative h-[350px] w-full cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-gray-900 shadow-2xl md:h-[500px]">
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/50 text-gray-100 backdrop-blur-[2px] transition-all duration-500 group-hover:bg-black/30 group-hover:backdrop-blur-0">
                <MapPin className="mb-4 h-12 w-12 text-red-500 drop-shadow-lg transition-transform duration-500 group-hover:-translate-y-3 group-hover:scale-125" />
                <Button variant="default" className="bg-white text-gray-900 opacity-90 shadow-2xl transition-opacity group-hover:opacity-100 hover:bg-gray-100">
                  Get Directions on Map
                </Button>
              </div>
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000&auto=format&fit=crop"
                alt="Map Area"
                className="h-full w-full object-cover opacity-60 mix-blend-luminosity transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-auto border-t border-white/10 bg-black/60 py-6 backdrop-blur-xl">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 text-sm text-gray-500 md:flex-row">
          <p>
            &copy; {currentYear ?? ""} Digital India Cyber Cafe &amp; CSC Center. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    </section>
  );
}
