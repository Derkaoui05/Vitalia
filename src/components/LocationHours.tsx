"use client";

import { MapPin, Phone, Clock, Navigation, Check, ShieldAlert, Car, Accessibility } from "lucide-react";

export default function LocationHours() {
  return (
    <section id="contact" className="py-28 bg-cream-dark/30 border-b border-primary/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-dark mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold tracking-widest uppercase">Accès & Disponibilité</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-medium tracking-tight leading-[1.15]">
            Nous trouver au cœur de Tanger, <br className="hidden sm:inline" />
            <span className="italic font-normal text-primary-mid">à tout moment.</span>
          </h2>
          <p className="text-charcoal-muted text-sm sm:text-base mt-4 font-light leading-relaxed">
            Notre clinique dentaire moderne est implantée dans un quartier calme et facilement accessible, dotée de toutes les commodités d&apos;accueil.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">

          {/* Left Column: Clinic Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            
            {/* Main Contact Card */}
            <div className="bg-white rounded-2xl p-7 border border-primary/8 shadow-card space-y-6">
              
              {/* Live status badge */}
              <div className="flex items-center justify-between pb-4 border-b border-primary/5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-semibold text-emerald-800 tracking-wide uppercase">
                    Service Ouvert 24h/24 & 7j/7
                  </span>
                </div>
                <span className="text-[10px] text-charcoal-muted uppercase tracking-wider font-medium">
                  Tanger
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Adresse Clinique
                  </h4>
                  <p className="text-sm text-charcoal leading-relaxed font-light">
                    Immeuble n°8, 2 Route Rgaye <br />
                    Tanger 90000, Maroc
                  </p>
                  <a
                    href="https://maps.google.com/?q=Immeuble+n8+2+Route+Rgaye+Tanger"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-accent-dark mt-2 transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Ouvrir l&apos;itinéraire GPS</span>
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Permanence Médicale
                  </h4>
                  <p className="text-sm text-charcoal leading-relaxed font-light">
                    Consultations programmées : 09h00 - 20h00 <br />
                    <strong className="font-semibold text-primary">Urgences dentaires : 24h/24 & 7j/7</strong>
                  </p>
                </div>
              </div>

              {/* Phone Direct */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 stroke-[1.75]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Ligne Téléphonique Directe
                  </h4>
                  <a
                    href="tel:+212660703051"
                    className="text-base font-semibold text-primary hover:text-accent transition-colors tracking-wide"
                  >
                    06 60 70 30 51
                  </a>
                  <p className="text-xs text-charcoal-muted font-light mt-0.5">
                    Accueil téléphonique continu en français, arabe et anglais
                  </p>
                </div>
              </div>

            </div>

            {/* Emergency & Amenities Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-primary to-primary-mid text-cream shadow-md space-y-4">
              <div className="flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-accent" />
                <h5 className="text-xs font-bold uppercase tracking-wider text-cream">
                  Protocole d&apos;Urgence
                </h5>
              </div>
              <p className="text-xs text-cream/80 leading-relaxed font-light">
                Vous souffrez d&apos;une rage de dent ou d&apos;un traumatisme ? Pas besoin de rendez-vous préalable. Appelez-nous au <span className="font-semibold text-white">06 60 70 30 51</span> pour alerter l&apos;équipe de garde avant votre arrivée.
              </p>

              <div className="pt-3 border-t border-cream/10 grid grid-cols-2 gap-3 text-[11px] text-cream/70 font-light">
                <div className="flex items-center gap-1.5">
                  <Car className="w-3.5 h-3.5 text-accent" />
                  <span>Stationnement aisé</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Accessibility className="w-3.5 h-3.5 text-accent" />
                  <span>Accès PMR facilité</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps in Luxury Container */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="w-full h-full min-h-[420px] rounded-2xl overflow-hidden border border-primary/10 bg-white p-2.5 shadow-card relative flex flex-col">
              
              <div className="relative w-full flex-1 rounded-xl overflow-hidden min-h-[380px]">
                {/* Subtle map header overlay */}
                <div className="absolute top-4 left-4 z-10 glass px-4 py-2.5 rounded-xl shadow-md border border-white/40 pointer-events-none">
                  <p className="text-[11px] font-bold text-primary uppercase tracking-wider leading-none">
                    Centre Dentaire Vitalia
                  </p>
                  <p className="text-[10px] text-charcoal-muted mt-1 leading-none">
                    Tanger, Maroc
                  </p>
                </div>

                <iframe
                  title="Localisation Google Maps - Centre Dentaire Vitalia Tanger"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6433284904037!2d-5.8058!3d35.7794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b802e3b2e75e1%3A0xc3f7a1f5!2sTanger!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[380px] border-0"
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Bottom Quick Action Bar under map */}
              <div className="mt-2.5 px-3 py-2 flex flex-wrap items-center justify-between gap-3 text-xs text-charcoal-muted">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-accent" />
                  <span>Immeuble n°8, 2 Route Rgaye, Tanger</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Immeuble+n8+2+Route+Rgaye+Tanger"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-primary hover:text-accent transition-colors"
                >
                  <span>Obtenir l&apos;itinéraire</span>
                  <Navigation className="w-3 h-3" />
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

