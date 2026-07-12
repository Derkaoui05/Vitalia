"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[calc(100vh-5rem)] flex items-center bg-cream pt-8 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col justify-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 mb-6"
          >
            <span className="h-[1px] w-8 bg-primary/30"></span>
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Tanger, Maroc
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-hero text-primary font-light leading-[1.1] mb-6 tracking-tight"
          >
            L'excellence des soins <br className="hidden sm:inline" />
            <span className="italic font-normal">dans un havre de calme.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-charcoal-muted max-w-xl mb-10 leading-relaxed font-light"
          >
            Le Centre Dentaire VITALIA à Tanger allie la haute expertise médicale à une approche profondément humaine. Nous réinventons votre parcours de soins dans un espace serein et moderne, dédié à la santé et à l'esthétique de votre sourire.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6"
          >
            <Link
              href="#rendez-vous"
              className="group px-7 py-3.5 bg-primary text-cream text-sm font-medium tracking-wider rounded-sm hover:bg-primary-light transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
            >
              Prendre rendez-vous
              <ArrowRight className="w-4 h-4 stroke-[1.5] group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="tel:+212660703051"
              className="px-7 py-3.5 bg-transparent border border-primary/20 text-primary text-sm font-medium tracking-wider rounded-sm hover:bg-primary/5 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 stroke-[1.5]" />
              06 60 70 30 51
            </a>
          </motion.div>
        </div>

        {/* Visual Asset (Asymmetric Right Column) */}
        <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[450px] lg:h-[550px] z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full border border-primary/10 p-2 sm:p-3 rounded-sm bg-cream-dark/50"
          >
            <div className="relative w-full h-full overflow-hidden rounded-sm bg-cream-dark">
              {/* Overlay for subtle duotone styling matching the warm/sage aesthetic */}
              <div className="absolute inset-0 bg-primary/5 mix-blend-color z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-cream/10 z-10 pointer-events-none" />
              
              <Image
                src="/vitalia_interior.png"
                alt="Intérieur moderne du Centre Dentaire Vitalia Tanger"
                fill
                priority
                sizes="(max-w-7xl) 100vw, 50vw"
                className="object-cover filter grayscale contrast-[1.02] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-1000 ease-in-out"
              />
            </div>
            {/* Fine design lines representing asymmetry */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b border-l border-primary/10 pointer-events-none hidden sm:block" />
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t border-r border-primary/10 pointer-events-none hidden sm:block" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
