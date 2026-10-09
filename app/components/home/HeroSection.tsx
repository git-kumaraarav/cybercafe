"use client";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { floatingIcons } from "./data";
import { Button, FloatingIcon } from "./ui";
import Image from "next/image";


export function HeroSection() {
  return (
    <section
      id="home"
      className="mesh-bg sticky top-0 z-10 flex h-svh w-full flex-col items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image src="/printing-background.jpg" alt="Background" width={0} height={0} sizes="100vw" className="h-screen w-full"/>
      </div>


      <div className="absolute inset-0 z-0 bg-black/10 mix-blend-overlay" />

      <div className="container relative z-10 mx-auto mt-16 flex justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-white/10 p-8 text-center shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-16"
        >
          <div className="absolute top-0 left-[-100%] h-full w-1/2 skew-x-[-45deg] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_8s_infinite]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mb-8 inline-flex items-center rounded-full border border-green-400/30 bg-green-500/20 px-4 py-1.5 text-sm font-semibold text-green-100 shadow-inner backdrop-blur-md"
          >
            <span className="relative mr-2.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Authorized CSC Center
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-white drop-shadow-xl md:text-7xl lg:text-8xl"
          >
            Digital India <br className="hidden md:block" /> Cyber Cafe
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="mx-auto mb-10 max-w-2xl text-lg font-medium text-blue-50 drop-shadow md:text-2xl"
          >
            Your reliable neighborhood hub for high-speed internet, govt. forms,
            fast printing, and everyday digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col items-center justify-center gap-5 sm:flex-row"
          >
            <Button size="lg" className="group w-full gap-2 sm:w-auto">
              Explore Services
              <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </Button>
            <Button variant="glass" size="lg" className="w-full gap-2 sm:w-auto">
              Find Us on Map <MapPin className="h-5 w-5" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
