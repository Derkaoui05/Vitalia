"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Anchor, Compass, Gem, Sparkles, Layers, Clock, ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: any;
  featured?: boolean;
}

export default function Services() {
  const services: Service[] = [
    {
      id: "detartrage",
      title: "Détartrage & Propreté",
      description: "Soin préventif essentiel pour éliminer le tartre et la plaque bactérienne, préservant la santé de vos gencives.",
      icon: ShieldCheck,
    },
    {
      id: "implants",
      title: "Implants Dentaires",
      description: "Remplacement durable de racines manquantes avec des implants en titane haut de gamme pour retrouver confort et esthétique.",
      icon: Anchor,
      featured: true,
    },
    {
      id: "orthodontie",
      title: "Orthodontie Moderne",
      description: "Alignement des dents pour adultes et enfants à l'aide de gouttières transparentes invisibles ou d'appareils discrets.",
      icon: Compass,
    },
    {
      id: "esthetique",
      title: "Soins Esthétiques",
      description: "Facettes en céramique ultra-fines pour corriger la teinte, la forme ou l'alignement et sublimer votre sourire.",
      icon: Gem,
    },
    {
      id: "blanchiment",
      title: "Blanchiment Dentaire",
      description: "Éclaircissement professionnel personnalisé pour redonner éclat et jeunesse à vos dents en toute sécurité.",
      icon: Sparkles,
    },
    {
      id: "protheses",
      title: "Prothèses & Couronnes",
      description: "Restauration des dents abîmées par des couronnes ou bridges en zircone hautement esthétiques et biocompatibles.",
      icon: Layers,
    },
    {
      id: "urgences",
      title: "Urgences 24h/24 & 7j/7",
      description: "Prise en charge immédiate de la douleur, des infections ou des traumatismes dentaires à tout moment.",
      icon: Clock,
      featured: true,
    },
  ];

  return (
    <section id="soins" className="py-24 bg-cream-dark/30 border-fine-t border-fine-b">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
          <div className="md:col-span-8">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3">
              Notre Expertise
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-light tracking-tight">
              Des soins sur mesure, <br />
              <span className="italic">portés par une exigence d'excellence.</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <p className="text-sm text-charcoal-muted leading-relaxed font-light max-w-sm ml-auto">
              Chaque traitement est planifié individuellement, en combinant technologies avancées et confort absolu pour des résultats durables.
            </p>
          </div>
        </div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            const isFeatured = service.featured;
            const gridClass = isFeatured 
              ? "md:col-span-2 lg:col-span-2 bg-primary text-cream" 
              : "bg-cream text-charcoal border-fine";
            
            const titleColor = isFeatured ? "text-cream" : "text-primary";
            const descColor = isFeatured ? "text-cream/80" : "text-charcoal-muted";
            const iconColor = isFeatured ? "text-accent" : "text-primary-light";
            const borderHover = isFeatured ? "hover:border-accent" : "hover:border-primary/30";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={`relative p-8 rounded-xs flex flex-col justify-between min-h-[260px] group transition-all duration-300 ${gridClass} ${borderHover}`}
              >
                <div>
                  {/* Icon & Accent line */}
                  <div className="flex items-center justify-between mb-8">
                    <div className={`p-2.5 border rounded-xs ${isFeatured ? "border-cream/10 bg-cream/5" : "border-primary/5 bg-cream-dark/30"}`}>
                      <Icon className={`w-5 h-5 stroke-[1.2] ${iconColor}`} />
                    </div>
                    <Link href="#rendez-vous" aria-label={`En savoir plus sur ${service.title}`}>
                      <ArrowUpRight className={`w-4 h-4 stroke-[1.2] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 ${isFeatured ? "text-cream" : "text-charcoal-muted"}`} />
                    </Link>
                  </div>

                  {/* Content */}
                  <h3 className={`font-serif text-xl font-light mb-3 tracking-wide ${titleColor}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed font-light ${descColor}`}>
                    {service.description}
                  </p>
                </div>

                {isFeatured && (
                  <div className="mt-8 flex items-center gap-2">
                    <span className="text-[10px] tracking-[0.2em] font-semibold text-accent uppercase">
                      Spécialité du centre
                    </span>
                    <span className="h-[1px] flex-1 bg-cream/10"></span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
