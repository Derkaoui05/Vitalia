"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cream-dark/50 border-fine-t pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <Link href="#accueil" className="flex flex-col">
              <span className="font-serif text-2xl tracking-wider text-primary font-medium">
                VITALIA
              </span>
              <span className="text-[9px] tracking-[0.25em] text-charcoal-muted uppercase -mt-1">
                Centre Dentaire
              </span>
            </Link>
            <p className="text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed max-w-sm">
              Espace moderne dédié à la santé et à l&apos;esthétique du sourire à Tanger. Une équipe de praticiens qualifiés au service de votre bien-être bucco-dentaire.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-widest">
              Navigation
            </h4>
            <ul className="space-y-2">
              {["Accueil", "Soins", "À propos", "Contact"].map((name) => (
                <li key={name}>
                  <Link
                    href={`#${name.toLowerCase().replace(" ", "-").normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                    className="text-xs sm:text-sm text-charcoal-muted hover:text-primary transition-colors font-light"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practical Info Summary */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-primary uppercase tracking-widest">
              Centre Vitalia Tanger
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-charcoal-muted font-light leading-relaxed">
              <p>Immeuble n°8, 2 Rte Rgaye, Tanger 90000</p>
              <p>Tél : <a href="tel:+212660703051" className="hover:text-primary transition-colors font-medium">06 60 70 30 51</a></p>
              <p className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                Horaires : Ouvert 24h/24 & 7j/7
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-primary/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-charcoal-muted font-light">
            &copy; {currentYear} Centre Dentaire VITALIA. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-[11px] text-charcoal-muted font-light">
            <Link href="#mentions" className="hover:text-primary transition-colors">
              Mentions Légales
            </Link>
            <Link href="#confidentialite" className="hover:text-primary transition-colors">
              Politique de Confidentialité
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
