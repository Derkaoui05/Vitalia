"use client";

import { MapPin, Phone, Clock } from "lucide-react";

export default function LocationHours() {
  return (
    <section id="contact" className="py-24 bg-cream-dark/20 border-fine-t border-fine-b">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Details & Practical Info */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3">
                Accès & Horaires
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary font-light tracking-tight leading-[1.1] mb-6">
                Nous situer <br />
                <span className="italic font-normal">et nous contacter.</span>
              </h2>
              <p className="text-sm text-charcoal-muted leading-relaxed font-light mb-8">
                Idéalement situé à Tanger, notre centre vous accueille sur rendez-vous ou en urgence médicale à toute heure.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-primary/5 bg-cream rounded-xs text-primary-light shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-1">
                      Adresse
                    </h4>
                    <p className="text-sm text-charcoal-muted font-light leading-relaxed">
                      Immeuble n°8, 2 Route Rgaye <br />
                      Tanger 90000, Maroc
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-primary/5 bg-cream rounded-xs text-primary-light shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-1">
                      Horaires d'ouverture
                    </h4>
                    <p className="text-sm text-charcoal-muted font-light leading-relaxed">
                      Ouvert 24h/24 & 7j/7 <br />
                      Service de garde permanent
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-primary/5 bg-cream rounded-xs text-primary-light shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-[0.1em] text-primary mb-1">
                      Téléphone Direct
                    </h4>
                    <a
                      href="tel:+212660703051"
                      className="text-sm text-charcoal hover:text-primary transition-colors font-medium"
                    >
                      06 60 70 30 51
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Emergency Alert Box */}
            <div className="p-6 bg-cream border border-accent/20 rounded-xs">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-accent mt-1.5 animate-pulse"></span>
                <div>
                  <h5 className="text-xs font-bold text-primary uppercase tracking-[0.05em] mb-1">
                    Urgences Dentaires
                  </h5>
                  <p className="text-xs text-charcoal-muted leading-relaxed font-light">
                    En cas de traumatisme ou de douleur aiguë, contactez directement notre service d'urgence au <a href="tel:+212660703051" className="font-semibold text-charcoal underline">06 60 70 30 51</a> pour une prise en charge immédiate.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Google Maps Embed */}
          <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-full w-full rounded-xs overflow-hidden border-fine p-2 bg-cream">
            <div className="w-full h-full relative overflow-hidden rounded-xs min-h-[350px] lg:min-h-[450px]">
              {/* Overlay for premium look */}
              <div className="absolute inset-0 bg-primary/2 mix-blend-color pointer-events-none z-10" />
              
              <iframe
                title="Google Maps - Centre Dentaire Vitalia Tanger"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.6433284904037!2d-5.8058!3d35.7794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0b802e3b2e75e1%3A0xc3f7a1f5!2sTanger!5e0!3m2!1sfr!2sma!4v1700000000000!5m2!1sfr!2sma"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px", height: "100%", width: "100%" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-85 contrast-[1.02] hover:grayscale-0 hover:opacity-100 transition-all duration-700"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
