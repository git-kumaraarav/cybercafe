"use client";

import { motion } from "framer-motion";
import { services } from "./data";
import { Card } from "./ui";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="sticky top-0 z-20 flex h-svh w-full flex-col justify-center overflow-hidden rounded-t-[2.5rem] bg-gray-50 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]"
    >
      <div className="container mx-auto max-h-svh overflow-y-auto px-4 py-12 no-scrollbar md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-12 mb-10 text-center md:mt-4 md:mb-16"
        >
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-blue-600">
            What We Offer
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Our Premium Services
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600 md:text-lg">
            Equipped with modern technology to provide fast, reliable, and
            high-quality solutions for all your digital needs.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-6 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="h-full"
            >
              <Card className="group flex h-full cursor-pointer flex-col bg-white hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-black/10 transition-colors group-hover:bg-transparent" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/90 shadow-lg backdrop-blur transition-transform group-hover:rotate-6 group-hover:scale-110">
                    <service.Icon className={`h-6 w-6 ${service.iconClassName}`} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                    {service.title}
                  </h3>
                  <p className="flex-1 leading-relaxed text-gray-600">{service.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
