"use client";

import { motion } from "framer-motion";
import { features } from "./data";

const featureStyles = {
  blue: "bg-blue-50 text-blue-600 group-hover:bg-blue-600",
  teal: "bg-teal-50 text-teal-600 group-hover:bg-teal-600",
  purple: "bg-purple-50 text-purple-600 group-hover:bg-purple-600",
};

export function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="sticky top-0 z-30 flex h-svh w-full flex-col justify-center overflow-hidden rounded-t-[2.5rem] bg-white shadow-[0_-20px_40px_rgba(0,0,0,0.1)]"
    >
      <div className="container mx-auto max-h-svh overflow-y-auto px-4 py-12 no-scrollbar md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mb-16 text-center md:mt-4"
        >
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Why Choose Us?
          </h2>
          <div className="mx-auto h-1.5 w-24 rounded-full bg-gradient-to-r from-blue-600 to-teal-400" />
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-8 pb-12 text-center md:grid-cols-3 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group flex flex-col items-center rounded-3xl p-6 transition-colors hover:bg-gray-50"
            >
              <div
                className={`mb-8 rounded-3xl p-6 transition-all duration-500 group-hover:-translate-y-4 group-hover:text-white group-hover:shadow-xl ${featureStyles[feature.color]}`}
              >
                <feature.Icon className="h-12 w-12 md:h-16 md:w-16" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">{feature.title}</h3>
              <p className="max-w-sm text-base leading-relaxed text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
