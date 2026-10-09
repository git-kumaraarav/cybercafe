"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { reviews } from "./data";
import { StarRating } from "./ui";

export function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="sticky top-0 z-40 flex h-svh w-full flex-col justify-center overflow-hidden rounded-t-[2.5rem] bg-[#f8f9fa] shadow-[0_-20px_40px_rgba(0,0,0,0.12)]"
    >
      <div className="container mx-auto max-h-svh overflow-y-auto px-4 py-12 no-scrollbar md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 mb-12 flex flex-col items-center text-center md:mt-4"
        >
          <div className="mb-2 flex items-center gap-3 rounded-full border border-gray-100 bg-white px-4 py-2 shadow-sm">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 font-serif text-xs font-bold text-blue-600">
              G
            </div>
            <span className="text-sm font-medium text-gray-700">Google Reviews</span>
          </div>
          <h2 className="mt-4 mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-5xl">
            What Our Customers Say
          </h2>
          <div className="mb-2 flex items-center gap-4">
            <span className="text-5xl font-bold tracking-tighter text-gray-900">4.8</span>
            <div className="flex flex-col items-start">
              <StarRating rating={5} size="h-6 w-6" />
              <p className="mt-1 text-sm font-medium text-gray-500">Based on 342 reviews</p>
            </div>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 pb-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="flex flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-xl"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="h-12 w-12 rounded-full border border-gray-100 object-cover"
                    />
                    {review.guideLabel.includes("Local") && (
                      <div className="absolute -right-1 -bottom-1 rounded-full bg-white p-0.5">
                        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500">
                          <Star className="h-2.5 w-2.5 fill-current text-white" />
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold leading-tight text-gray-900">{review.name}</h4>
                    <p className="mt-1 text-xs text-gray-500">{review.guideLabel}</p>
                  </div>
                </div>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50">
                  <span className="font-serif text-sm font-bold text-blue-600">G</span>
                </div>
              </div>

              <div className="mb-4 flex items-center gap-2">
                <StarRating rating={review.rating} />
                <span className="ml-1 text-xs font-medium text-gray-400">{review.date}</span>
              </div>
              <p className="flex-1 text-sm leading-relaxed text-gray-700">&quot;{review.text}&quot;</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
