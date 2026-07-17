"use client";

import { motion } from "framer-motion";

interface Point {
  num: string;
  title: string;
  description: string;
}

export default function WhyVitalia() {
  const points: Point[] = [
    {
      num: "01",
      title: "Équipe de Spécialistes Qualifiés",
      description: "Nos praticiens formés aux meilleures techniques internationales couvrent toutes les spécialités de l'art dentaire sous une coordination rigoureuse.",
    },
    {
      num: "02",
      title: "Plateau Technique Moderne",
      description: "Diagnostics 3D, radiologie numérique et équipements de dernière génération pour des traitements précis, sûrs et moins invasifs.",
    },
    {
      num: "03",
      title: "Approche Personnalisée & Douce",
      description: "Nous prenons le temps de vous écouter et d'expliquer chaque soin. Notre protocole d'accueil est conçu pour apaiser toute anxiété.",
    },
    {
      num: "04",
      title: "Urgences & Disponibilité 24h/7",
      description: "Un service de garde permanent assure la continuité des soins et la gestion immédiate des urgences absolues, de jour comme de nuit.",
    },
  ];

  return (
    <section id="a-propos" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

          {/* Left Column: Philosophical Intro */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3">
                Notre Philosophie
              </span>
              <h2 className="font-serif text-section-title text-primary font-light tracking-tight leading-[1.1] mb-6">
                Redéfinir le soin <br />
                <span className="italic font-normal">par l&apos;écoute et l&apos;innovation.</span>
              </h2>
              <p className="text-body text-charcoal-muted leading-relaxed font-light max-w-md">
                Au Centre Dentaire VITALIA, nous croyons qu&apos;un beau sourire naît d&apos;une relation de confiance mutuelle et de soins d&apos;une précision millimétrique. Notre espace tangérois a été pensé pour allier sérénité et exigence clinique.
              </p>
            </div>

            <div className="hidden lg:block pt-12 border-t border-primary/5 mt-12">
              <div className="text-xs tracking-[0.15em] text-charcoal-muted uppercase">
                Tanger — Maroc
              </div>
            </div>
          </div>

          {/* Right Column: Reassurance Points */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={point.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="p-8 bg-cream border-fine rounded-xs hover:border-primary/20 transition-all duration-300 flex flex-col justify-between min-h-[220px]"
              >
                <div>
                  <span className="font-serif text-3xl text-accent/60 font-light block mb-4">
                    {point.num}
                  </span>
                  <h3 className="font-serif text-card-title font-light text-primary mb-3 tracking-wide">
                    {point.title}
                  </h3>
                </div>
                <p className="text-body-sm text-charcoal-muted leading-relaxed font-light">
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
