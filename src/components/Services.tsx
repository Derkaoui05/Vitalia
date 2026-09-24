"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Anchor,
  Compass,
  Sparkles,
  Layers,
  Clock,
  ArrowRight,
  Smile,
  Activity,
  CheckCircle2,
  LucideIcon
} from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  category: "all" | "esthetique" | "chirurgie" | "soins" | "urgence";
  title: string;
  tagline: string;
  description: string;
  benefits: string[];
  icon: LucideIcon;
  badge?: string;
  featured?: boolean;
}

const services: Service[] = [
  {
    id: "implants",
    category: "chirurgie",
    title: "Implants & Chirurgie Guidée",
    tagline: "Restauration fixe et définitive",
    description:
      "Remplacement pérenne des dents absentes par des racines artificielles en titane biomédical de grade supérieur, posées sous guidage numérique 3D.",
    benefits: ["Ostéo-intégration garantie", "Guidage 3D haute précision", "Rendu 100% naturel"],
    icon: Anchor,
    badge: "Excellence Clinique",
    featured: true,
  },
  {
    id: "esthetique",
    category: "esthetique",
    title: "Facettes Dentaires Haute Couture",
    tagline: "Design personnalisé du sourire",
    description:
      "Pellicules de céramique feldspathique et E-max ultra-fines pour sublimer l'alignement, la morphologie et la luminosité de vos dents sans altération tissulaire.",
    benefits: ["Céramique E-max haute translucidité", "Préservation de l'émail", "Éclat sur-mesure"],
    icon: Smile,
    badge: "Sourire Signature",
  },
  {
    id: "orthodontie",
    category: "esthetique",
    title: "Orthodontie Invisible & Aligneurs",
    tagline: "Harmonisation discrète de l'arcade",
    description:
      "Correction d'alignement pour adolescents et adultes à l'aide de gouttières thermoformées transparentes et amovibles, planifiées par simulation numérique.",
    benefits: ["100% invisible au quotidien", "Amovible pour les repas", "Suivi digital 3D"],
    icon: Compass,
  },
  {
    id: "blanchiment",
    category: "esthetique",
    title: "Éclaircissement Dentaire Laser",
    tagline: "Luminosité médicale certifiée",
    description:
      "Protocole au fauteuil combiné à des gouttières de stabilisation sur-mesure pour un gain de plusieurs teintes en toute innocuité pour la pulpe.",
    benefits: ["Résultat visible dès 45 min", "Protection pulpaire & gingivale", "Teinte durable"],
    icon: Sparkles,
  },
  {
    id: "detartrage",
    category: "soins",
    title: "Parodontie & Hygiène Prophylactique",
    tagline: "Santé gingivale et assainissement",
    description:
      "Détartrage piézoélectrique indolore, aéro-polissage aux poudres micronisées et désinfection parodontale en profondeur pour pérenniser vos tissus de soutien.",
    benefits: ["Ultrasons atraumatiques", "Élimination bactérienne ciblée", "Prévention des déchaussements"],
    icon: ShieldCheck,
  },
  {
    id: "protheses",
    category: "chirurgie",
    title: "Couronnes & Bridges Zircone",
    tagline: "Biocompatibilité et longévité",
    description:
      "Reconstitutions prothétiques sans métal confectionnées par CFAO robotisée, garantissant une intégration marginale parfaite et une solidité exemplaire.",
    benefits: ["Zircone multicouche sans métal", "Usinage robotisé micrométrique", "Confort masticatoire immédiat"],
    icon: Layers,
  },
  {
    id: "urgences",
    category: "urgence",
    title: "Pôle Urgences 24h/24 & 7j/7",
    tagline: "Prise en charge immédiate",
    description:
      "Soulagement rapide des rages de dents, pulpeites, abcès dentaires, fractures consécutives à un traumatisme et décollements prothétiques critiques.",
    benefits: ["Accueil jour & nuit sans interruption", "Gestion radicale de la douleur", "Plateau interventionnel complet"],
    icon: Clock,
    badge: "Permanence 24/7",
    featured: true,
  },
];

const categories = [
  { id: "all", label: "Tous nos soins" },
  { id: "chirurgie", label: "Implants & Chirurgie" },
  { id: "esthetique", label: "Esthétique & Aligneurs" },
  { id: "soins", label: "Prévention & Santé" },
  { id: "urgence", label: "Urgences 24/7" },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredServices = activeTab === "all"
    ? services
    : services.filter((s) => s.category === activeTab);

  return (
    <section id="soins" className="py-28 bg-cream relative overflow-hidden border-b border-primary/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-primary/4 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-40 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary mb-4">
              <Activity className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] font-semibold tracking-widest uppercase">Expertise & Soins de Pointe</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-medium tracking-tight leading-[1.15]">
              L&apos;excellence médicale <br className="hidden sm:inline" />
              <span className="italic font-normal text-primary-mid">au service de votre sourire.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-charcoal-muted leading-relaxed font-light max-w-md">
            Des protocoles cliniques rigoureux, des équipements de dernière génération et une approche prévenante conçue pour un confort absolu.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12 border-b border-primary/8 pb-4">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-cream shadow-md"
                    : "text-charcoal-muted hover:text-primary hover:bg-cream-dark/60"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Animated Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => {
              const Icon = service.icon;
              const isHeroCard = service.featured && (activeTab === "all" || activeTab === service.category);

              return (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                  className={`group relative rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                    isHeroCard
                      ? "md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary via-primary to-primary-mid text-cream shadow-xl border border-primary-light/20"
                      : "bg-cream-dark/30 hover:bg-white text-charcoal border border-primary/8 hover:border-primary/20 hover:shadow-card"
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Badge + Arrow */}
                    <div className="flex items-center justify-between mb-6">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105 ${
                          isHeroCard
                            ? "bg-cream/10 text-accent border border-cream/10"
                            : "bg-primary/5 text-primary border border-primary/10 group-hover:bg-primary group-hover:text-cream"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.75]" />
                      </div>

                      <div className="flex items-center gap-3">
                        {service.badge && (
                          <span
                            className={`text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full ${
                              isHeroCard
                                ? "bg-accent/20 text-accent-light border border-accent/30"
                                : "bg-primary/5 text-primary border border-primary/10"
                            }`}
                          >
                            {service.badge}
                          </span>
                        )}
                        <Link
                          href="#rendez-vous"
                          aria-label={`Prendre rendez-vous pour ${service.title}`}
                          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                            isHeroCard
                              ? "bg-cream/10 text-cream hover:bg-cream hover:text-primary"
                              : "bg-cream text-charcoal-muted border border-primary/8 group-hover:border-primary group-hover:text-primary"
                          }`}
                        >
                          <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                        </Link>
                      </div>
                    </div>

                    {/* Titles */}
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider block mb-1.5 ${
                        isHeroCard ? "text-accent-light" : "text-accent"
                      }`}
                    >
                      {service.tagline}
                    </span>
                    <h3
                      className={`font-serif text-xl sm:text-2xl font-medium tracking-tight mb-3 ${
                        isHeroCard ? "text-cream" : "text-primary"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`text-sm leading-relaxed mb-6 font-light ${
                        isHeroCard ? "text-cream/80" : "text-charcoal-muted"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Benefit bullets */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.map((b, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-xs sm:text-[13px]">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 stroke-[2] ${
                              isHeroCard ? "text-accent" : "text-primary-light"
                            }`}
                          />
                          <span className={isHeroCard ? "text-cream/90" : "text-charcoal-mid"}>
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom Action Footer */}
                  <div
                    className={`pt-5 mt-auto border-t flex items-center justify-between ${
                      isHeroCard ? "border-cream/10" : "border-primary/5"
                    }`}
                  >
                    <span
                      className={`text-xs font-medium ${
                        isHeroCard ? "text-cream/60" : "text-charcoal-muted"
                      }`}
                    >
                      Prise en charge personnalisée
                    </span>
                    <Link
                      href="#rendez-vous"
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold tracking-wide transition-colors ${
                        isHeroCard
                          ? "text-cream hover:text-accent-light"
                          : "text-primary hover:text-accent"
                      }`}
                    >
                      <span>Prendre rendez-vous</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Emergency Callout Strip */}
        <div className="mt-14 rounded-2xl bg-gradient-to-r from-cream-dark via-sand-light/50 to-cream-dark border border-primary/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-accent/15 text-accent-dark flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <h4 className="font-serif text-lg text-primary font-medium">
                  Service d&apos;Urgence Dentaire Permanent
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-0.5 font-light">
                Douleurs aiguës, pulpeites ou traumatismes : notre praticien de garde vous prend en charge 24h/24 à Tanger.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
            <a
              href="tel:+212660703051"
              className="w-full md:w-auto px-6 py-3 bg-primary hover:bg-primary-mid text-cream text-xs sm:text-sm font-semibold rounded-lg tracking-wider transition-all duration-200 text-center shadow-md"
            >
              Appel d&apos;Urgence : 06 60 70 30 51
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

