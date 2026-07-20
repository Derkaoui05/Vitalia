"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface Point {
  num: string;
  title: string;
  description: string;
}

const points: Point[] = [
  {
    num: "01",
    title: "Équipe de Spécialistes Qualifiés",
    description:
      "Nos praticiens formés aux meilleures techniques internationales couvrent toutes les spécialités de l'art dentaire sous une coordination rigoureuse.",
  },
  {
    num: "02",
    title: "Plateau Technique Moderne",
    description:
      "Diagnostics 3D, radiologie numérique et équipements de dernière génération pour des traitements précis, sûrs et moins invasifs.",
  },
  {
    num: "03",
    title: "Approche Personnalisée & Douce",
    description:
      "Nous prenons le temps de vous écouter et d'expliquer chaque soin. Notre protocole d'accueil est conçu pour apaiser toute anxiété.",
  },
  {
    num: "04",
    title: "Urgences & Disponibilité 24h/7",
    description:
      "Un service de garde permanent assure la continuité des soins et la gestion immédiate des urgences absolues, de jour comme de nuit.",
  },
];

const TOTAL = points.length;
const SEGMENT = 1 / TOTAL; // each card owns 25% of the scroll range
const SCALE_STEP = 0.05;   // each buried card shrinks by 5%
const OPACITY_STEP = 0.10; // each buried card dims by 10%

// ─── Progress indicator dot (one per card) ───────────────────────────────────
function ProgressDot({
  index,
  scrollYProgress,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const start = index * SEGMENT;
  const end = start + SEGMENT;

  // Build clean, monotonic ranges bounded within [0, 1] with no negative offsets.
  const inputs: number[] = [];
  const widths: string[] = [];
  const opacities: number[] = [];

  if (index === 0) {
    inputs.push(0, end - 0.01, end);
    widths.push("22px", "22px", "6px");
    opacities.push(1, 1, 0.25);
  } else if (index === TOTAL - 1) {
    inputs.push(start - 0.01, start, 1);
    widths.push("6px", "22px", "22px");
    opacities.push(0.25, 1, 1);
  } else {
    inputs.push(start - 0.01, start, end - 0.01, end);
    widths.push("6px", "22px", "22px", "6px");
    opacities.push(0.25, 1, 1, 0.25);
  }

  const width = useTransform(scrollYProgress, inputs, widths);
  const opacity = useTransform(scrollYProgress, inputs, opacities);

  return (
    <div className="flex items-center gap-3">
      <motion.div className="rounded-full bg-primary" style={{ width, height: "2px", opacity }} />
      <motion.span
        style={{ opacity }}
        className="text-[10px] tracking-widest text-charcoal-muted font-semibold uppercase tabular-nums"
      >
        {points[index].num}
      </motion.span>
    </div>
  );
}

// ─── Single card with scroll-driven transforms ────────────────────────────────
function CardItem({
  point,
  index,
  scrollYProgress,
}: {
  point: Point;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const cardStart = index * SEGMENT;
  const enterStart = index === 0 ? 0 : cardStart - SEGMENT * 0.6;
  const enterEnd = index === 0 ? 0.001 : cardStart;

  // Build a single, unified input/output range for y translation in pixels.
  // This avoids clashes between y and translateY, and prevents any WAAPI animation errors.
  const yInputRange: number[] = [];
  const yOutputRange: string[] = [];

  if (index === 0) {
    yInputRange.push(0);
    yOutputRange.push("0px");
  } else {
    yInputRange.push(0);
    yOutputRange.push("500px");

    yInputRange.push(enterStart);
    yOutputRange.push("500px");

    yInputRange.push(enterEnd);
    yOutputRange.push("0px");
  }

  const remaining = TOTAL - 1 - index;
  for (let k = 1; k <= remaining; k++) {
    const nextIndex = index + k;
    yInputRange.push(nextIndex * SEGMENT);
    yOutputRange.push(`${-k * 14}px`);
  }

  if (yInputRange[yInputRange.length - 1] < 1) {
    yInputRange.push(1);
    yOutputRange.push(yOutputRange[yOutputRange.length - 1]);
  }

  const y = useTransform(scrollYProgress, yInputRange, yOutputRange);

  // Build inputRange for scale & opacity
  const scaleInput: number[] = Array.from({ length: remaining + 1 }, (_, k) => (index + k) * SEGMENT);
  const scaleOutput: number[] = Array.from({ length: remaining + 1 }, (_, k) => 1 - k * SCALE_STEP);
  if (scaleInput.length < 2) {
    scaleInput.push(1);
    scaleOutput.push(scaleOutput[0]);
  }
  const scale = useTransform(scrollYProgress, scaleInput, scaleOutput);

  const opacityOutput: number[] = Array.from({ length: remaining + 1 }, (_, k) => 1 - k * OPACITY_STEP);
  if (opacityOutput.length < 2) {
    opacityOutput.push(opacityOutput[0]);
  }
  const opacity = useTransform(scrollYProgress, scaleInput, opacityOutput);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 1,
        transformOrigin: "center top",
      }}
      className="absolute inset-0 flex items-center justify-center px-2 sm:px-4"
    >
      <div
        className="w-full max-w-lg bg-cream border border-primary/10 rounded-sm p-8 sm:p-10 shadow-[0_8px_40px_rgba(45,60,51,0.07)]"
      >
        {/* Header row */}
        <div className="flex items-start justify-between mb-8">
          <span className="font-serif text-[3.5rem] text-accent/35 font-light leading-none select-none">
            {point.num}
          </span>
          <span className="text-[10px] tracking-[0.22em] font-semibold text-charcoal-muted/40 uppercase pt-2 tabular-nums">
            {String(index + 1).padStart(2, "0")} / {String(TOTAL).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <h3 className="font-serif text-card-title font-light text-primary mb-4 tracking-wide leading-snug">
          {point.title}
        </h3>
        <p className="text-body-sm text-charcoal-muted leading-relaxed font-light">
          {point.description}
        </p>

        {/* Bottom rule */}
        <div className="mt-8 flex items-center gap-3">
          <span className="h-px w-6 bg-accent/30 shrink-0" />
          <span className="text-[9px] tracking-[0.25em] font-bold text-accent/60 uppercase">
            Centre Vitalia
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────
export default function WhyVitalia() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="a-propos"
      style={{ height: `${TOTAL * 100}vh` }}
      className="relative bg-cream"
    >
      {/* Sticky viewport — fills exactly one screen height */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 h-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-16 sm:py-20">

          {/* ── Left: static editorial column ──────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3">
              Notre Philosophie
            </span>
            <h2 className="font-serif text-section-title text-primary font-light tracking-tight leading-[1.1] mb-6">
              Redéfinir le soin&nbsp;<br />
              <span className="italic font-normal">par l&apos;écoute et l&apos;innovation.</span>
            </h2>
            <p className="text-body text-charcoal-muted leading-relaxed font-light max-w-md mb-10">
              Au Centre Dentaire VITALIA, nous croyons qu&apos;un beau sourire naît d&apos;une
              relation de confiance mutuelle et de soins d&apos;une précision millimétrique.
              Notre espace tangérois a été pensé pour allier sérénité et exigence clinique.
            </p>

            {/* Scroll progress indicators */}
            <div className="hidden lg:flex flex-col gap-3 mb-12">
              {points.map((_, i) => (
                <ProgressDot key={i} index={i} scrollYProgress={scrollYProgress} />
              ))}
            </div>

            <div className="hidden lg:block pt-8 border-t border-primary/5">
              <span className="text-xs tracking-[0.15em] text-charcoal-muted uppercase">
                Tanger — Maroc
              </span>
            </div>
          </div>

          {/* ── Right: stacking cards ───────────────────────────────────── */}
          <div className="lg:col-span-7 relative h-[380px] sm:h-[440px] lg:h-[460px]">
            {points.map((point, index) => (
              <CardItem
                key={point.num}
                point={point}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
