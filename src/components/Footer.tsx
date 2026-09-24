"use client";

import Link from "next/link";
import { Phone, MapPin, Clock, ArrowUp, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-cream pt-20 pb-12 relative overflow-hidden border-t border-primary-light/20">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-cream/10">
          
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="#accueil" className="inline-flex flex-col group">
              <span className="font-serif text-3xl tracking-[0.14em] text-cream font-medium leading-none group-hover:text-accent-light transition-colors">
                VITALIA
              </span>
              <span className="text-[9px] font-bold tracking-[0.3em] text-accent uppercase leading-none mt-1">
                Centre Dentaire & Urgences Tanger
              </span>
            </Link>
            
            <p className="text-sm text-cream/70 font-light leading-relaxed max-w-sm">
              Clinique dentaire pluridisciplinaire d&apos;excellence à Tanger. Équipements de dernière génération, radiologie 3D et prise en charge globale de votre santé bucco-dentaire.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cream/5 border border-cream/10 text-xs text-cream/80">
              <ShieldCheck className="w-3.5 h-3.5 text-accent" />
              <span>Conformité & Protocoles Sanitaires Stricts</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-light">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-cream/75">
              <li>
                <Link href="#accueil" className="hover:text-cream transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#soins" className="hover:text-cream transition-colors">
                  Soins & Spécialités
                </Link>
              </li>
              <li>
                <Link href="#a-propos" className="hover:text-cream transition-colors">
                  Le Centre & Philosophie
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-cream transition-colors">
                  Localisation & Accès
                </Link>
              </li>
              <li>
                <Link href="#rendez-vous" className="hover:text-cream transition-colors">
                  Prendre Rendez-vous
                </Link>
              </li>
            </ul>
          </div>

          {/* Services list */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-light">
              Spécialités
            </h4>
            <ul className="space-y-2.5 text-sm font-light text-cream/75">
              <li>Implants & Chirurgie Guidée</li>
              <li>Facettes E-Max & Esthétique</li>
              <li>Orthodontie & Aligneurs Invisibles</li>
              <li>Éclaircissement Dentaire Laser</li>
              <li>Parodontologie & Prophylaxie</li>
              <li>Urgences & Garde Dentaire 24/7</li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-accent-light">
              Permanence & Contact
            </h4>
            
            <div className="space-y-3 text-sm text-cream/80 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Immeuble n°8, 2 Route Rgaye, Tanger 90000</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  <strong className="text-cream font-medium">Urgences : 24h/24 & 7j/7</strong><br />
                  Consultations : Lun - Sam 9h - 20h
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:+212660703051"
                  className="text-base font-semibold text-cream hover:text-accent-light transition-colors"
                >
                  06 60 70 30 51
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="tel:+212660703051"
                className="inline-block w-full py-2.5 px-4 bg-accent/20 hover:bg-accent/30 border border-accent/40 rounded-xl text-xs font-semibold text-center tracking-wider uppercase text-accent-light transition-colors"
              >
                Appeler la garde d&apos;urgence
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-cream/50 font-light">
          <p>
            &copy; {currentYear} Centre Dentaire VITALIA Tanger. Tous droits réservés.
          </p>

          <div className="flex items-center gap-6">
            <Link href="#mentions" className="hover:text-cream transition-colors">
              Mentions Légales
            </Link>
            <Link href="#confidentialite" className="hover:text-cream transition-colors">
              Protection des Données
            </Link>
            <button
              onClick={scrollToTop}
              aria-label="Remonter en haut de page"
              className="w-8 h-8 rounded-full bg-cream/10 hover:bg-cream/20 text-cream flex items-center justify-center transition-colors ml-2"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}

