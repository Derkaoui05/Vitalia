"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { Phone, ArrowRight, Star, Clock } from "lucide-react";

const cubicEase = [0.16, 1, 0.3, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: cubicEase,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center overflow-hidden bg-cream"
    >
      {/* ── Ambient background orbs ──────────────────────────────── */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle, #1e3028 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #c8856c 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-[0.03]"
        style={{ background: "radial-gradient(circle, #c9a96e 0%, transparent 60%)" }}
      />

      {/* ── Decorative grid lines ───────────────────────────────── */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-1/4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(30,48,40,0.04) 40%, rgba(30,48,40,0.04) 60%, transparent)" }} />
        <div className="absolute inset-x-0 top-3/4 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(30,48,40,0.04) 40%, rgba(30,48,40,0.04) 60%, transparent)" }} />
        <div className="absolute inset-y-0 left-1/4 w-px" style={{ background: "linear-gradient(180deg, transparent, rgba(30,48,40,0.04) 30%, rgba(30,48,40,0.04) 70%, transparent)" }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* ── Left: Text content ───────────────────────────────── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="lg:col-span-7 flex flex-col justify-center z-10"
        >
          {/* Overline */}
          <motion.div variants={itemVariants} className="inline-flex items-center gap-3 mb-8">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-soft" />
              <span className="w-1 h-1 rounded-full bg-accent/50 animate-pulse-soft" style={{ animationDelay: "0.3s" }} />
            </span>
            <span className="overline text-accent tracking-[0.22em]">
              Tanger, Maroc · Est. 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-hero text-primary font-light leading-[1.08] mb-7 tracking-tight"
          >
            L&apos;excellence des soins
            <br className="hidden sm:inline" />
            <span className="italic font-normal" style={{ color: "#c8856c" }}>
              {" "}dans un havre de calme.
            </span>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={itemVariants}
            className="text-body-lg text-charcoal-muted max-w-lg mb-10 leading-relaxed font-light"
          >
            Le Centre Dentaire VITALIA à Tanger allie la haute expertise médicale
            à une approche profondément humaine. Nous réinventons votre parcours
            de soins dans un espace serein et moderne.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link
              href="#rendez-vous"
              className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-primary text-cream text-sm font-semibold tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:shadow-glow-primary"
            >
              <span className="relative z-10 flex items-center gap-2.5">
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 stroke-[1.75] group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              {/* Shine sweep */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
              />
            </Link>

            <a
              href="tel:+212660703051"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 border border-primary/20 text-primary text-sm font-medium tracking-wider rounded-lg hover:bg-primary/5 hover:border-primary/40 transition-all duration-300 bg-transparent"
            >
              <Phone className="w-4 h-4 stroke-[1.5]" />
              06 60 70 30 51
            </a>
          </motion.div>

          {/* ── Trust strip ───────────────────────────────────────── */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center gap-6 pt-8 border-t border-primary/6"
          >
            {[
              { icon: Star, label: "4.9 / 5", sub: "Note patients" },
              { icon: Clock, label: "24h / 7j", sub: "Urgences" },
              { label: "500+", sub: "Patients satisfaits" },
            ].map(({ icon: Icon, label, sub }, i) => (
              <div key={i} className="flex items-center gap-2.5">
                {Icon && (
                  <div className="flex items-center justify-center w-7 h-7 rounded-md bg-primary/6">
                    <Icon className="w-3.5 h-3.5 text-primary stroke-[1.5]" />
                  </div>
                )}
                <div>
                  <p className="text-sm font-bold text-primary leading-none">{label}</p>
                  <p className="text-[11px] text-charcoal-muted leading-none mt-0.5">{sub}</p>
                </div>
                {i < 2 && <span className="w-px h-6 bg-primary/8 ml-2" />}
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: Image composition ──────────────────────────── */}
        <div className="lg:col-span-5 relative w-full h-80 sm:h-[520px] lg:h-[600px] z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.3, ease: cubicEase }}
            className="relative w-full h-full"
          >
            {/* Main image frame */}
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-primary/10 shadow-card">
              {/* Color overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent z-10 pointer-events-none" />
              <div className="absolute inset-0 bg-primary/5 mix-blend-color z-20 pointer-events-none" />

              <Image
                src="/hero.webp"
                alt="Intérieur moderne du Centre Dentaire Vitalia Tanger"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover"
              />

              {/* Bottom overlay badge */}
              <div className="absolute bottom-5 left-5 right-5 z-30">
                <div className="glass rounded-xl px-5 py-4 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-cream fill-current" viewBox="0 0 24 24">
                      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-primary/60 uppercase tracking-widest leading-none mb-1">
                      Centre Dentaire
                    </p>
                    <p className="text-sm font-semibold text-primary leading-none">
                      VITALIA — Tanger
                    </p>
                  </div>
                  <div className="ml-auto flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-current text-gold" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge — top right */}
            <motion.div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 glass rounded-xl px-4 py-3 shadow-card animate-float"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: cubicEase }}
            >
              <p className="text-[10px] uppercase tracking-widest text-charcoal-muted font-semibold leading-none mb-1">Urgences</p>
              <p className="text-base font-bold text-primary leading-none">24h / 7j</p>
            </motion.div>

            {/* Floating badge — bottom left */}
            <motion.div
              className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 glass rounded-xl px-4 py-3 shadow-card animate-float-delayed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: cubicEase }}
            >
              <p className="text-[10px] uppercase tracking-widest text-charcoal-muted font-semibold leading-none mb-1">Patients</p>
              <p className="text-base font-bold text-primary leading-none">500+</p>
            </motion.div>

            {/* Decorative corner accents */}
            <div className="absolute -bottom-8 -right-8 w-16 h-16 border-b-2 border-r-2 border-accent/20 rounded-br-2xl pointer-events-none hidden sm:block" />
            <div className="absolute -top-8 -left-8 w-16 h-16 border-t-2 border-l-2 border-primary/12 rounded-tl-2xl pointer-events-none hidden sm:block" />
          </motion.div>
        </div>

      </div>
    </section>
  );
}


