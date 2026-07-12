"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, CalendarCheck, Check } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const treatments = [
    { label: "Détartrage & Hygiène", value: "detartrage" },
    { label: "Implants Dentaires", value: "implants" },
    { label: "Orthodontie", value: "orthodontie" },
    { label: "Soins Esthétiques / Facettes", value: "esthetique" },
    { label: "Blanchiment Dentaire", value: "blanchiment" },
    { label: "Prothèses / Couronnes", value: "protheses" },
    { label: "Urgence Dentaire", value: "urgence" },
    { label: "Autre consultation", value: "autre" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", phone: "", treatment: "", message: "" });
    }, 1500);
  };

  return (
    <section id="rendez-vous" className="py-24 bg-cream scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Call & Intro */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent uppercase block mb-3">
              Consultation
            </span>
            <h2 className="font-serif text-section-title text-primary font-light tracking-tight leading-[1.1] mb-6">
              Planifier votre <br />
              <span className="italic font-normal">prochaine visite.</span>
            </h2>
            <p className="text-body text-charcoal-muted leading-relaxed font-light mb-8 max-w-md">
              Remplissez ce formulaire et notre équipe administrative vous recontactera sous quelques heures pour convenir d'une date et confirmer votre rendez-vous.
            </p>

            <div className="space-y-4">
              <p className="text-xs text-charcoal-muted uppercase tracking-[0.1em] font-semibold">
                Besoin d'une réponse immédiate ?
              </p>
              <a
                href="tel:+212660703051"
                className="inline-flex items-center gap-3 p-4 bg-cream border-fine rounded-xs group hover:border-primary/20 transition-all duration-300 w-full max-w-sm"
              >
                <div className="p-2.5 bg-primary text-cream rounded-xs">
                  <Phone className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div>
                  <div className="text-[10px] text-charcoal-muted uppercase tracking-[0.05em]">
                    Appelez-nous directement
                  </div>
                  <div className="text-sm font-semibold text-primary">
                    06 60 70 30 51
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 bg-cream-dark/30 border-fine p-8 sm:p-10 rounded-xs relative overflow-hidden">
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-14 h-14 bg-primary text-cream rounded-full flex items-center justify-center mb-6">
                  <Check className="w-6 h-6 stroke-[2]" />
                </div>
                <h3 className="font-serif text-2xl text-primary mb-2">
                  Demande reçue
                </h3>
                <p className="text-sm text-charcoal-muted font-light max-w-sm">
                  Merci pour votre confiance. Un conseiller du Centre Dentaire VITALIA vous appellera très rapidement pour convenir de l'heure exacte.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-8 text-xs font-semibold text-primary underline underline-offset-4 hover:text-primary-light"
                >
                  Faire une autre demande
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-primary uppercase tracking-[0.05em] mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ex: Yassine Benjelloun"
                    className="w-full px-4 py-3 bg-cream border border-primary/10 rounded-xs text-sm text-charcoal focus:border-primary/40 focus:bg-white transition-all outline-none placeholder:text-charcoal-muted/30"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-primary uppercase tracking-[0.05em] mb-2">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Ex: 06 60 70 30 51"
                    className="w-full px-4 py-3 bg-cream border border-primary/10 rounded-xs text-sm text-charcoal focus:border-primary/40 focus:bg-white transition-all outline-none placeholder:text-charcoal-muted/30"
                  />
                </div>

                {/* Desired Care */}
                <div>
                  <label htmlFor="treatment" className="block text-xs font-semibold text-primary uppercase tracking-[0.05em] mb-2">
                    Soin souhaité
                  </label>
                  <div className="relative">
                    <select
                      id="treatment"
                      name="treatment"
                      value={formData.treatment}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream border border-primary/10 rounded-xs text-sm text-charcoal focus:border-primary/40 focus:bg-white transition-all outline-none appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Sélectionnez un soin...</option>
                      {treatments.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-charcoal-muted/70">
                      <svg className="w-4 h-4 fill-none stroke-current stroke-[1.5]" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-primary uppercase tracking-[0.05em] mb-2">
                    Informations complémentaires (Optionnel)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Indiquez vos disponibilités ou toute question particulière..."
                    className="w-full px-4 py-3 bg-cream border border-primary/10 rounded-xs text-sm text-charcoal focus:border-primary/40 focus:bg-white transition-all outline-none resize-none placeholder:text-charcoal-muted/30"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full py-4 bg-primary text-cream text-sm font-semibold tracking-wider rounded-sm hover:bg-primary-light transition-colors duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm disabled:opacity-50"
                >
                  <CalendarCheck className="w-4 h-4 stroke-[1.5]" />
                  {status === "submitting" ? "Envoi en cours..." : "Confirmer ma demande"}
                </button>

              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
