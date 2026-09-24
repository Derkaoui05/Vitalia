"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarCheck, Check, User, MessageSquare, Clock, ShieldCheck, Send, Sparkles } from "lucide-react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    treatment: "consultation",
    timePreference: "matin",
    urgency: "normal",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const treatments = [
    { label: "Première Consultation & Bilan", value: "consultation" },
    { label: "Implants & Chirurgie Guidée", value: "implants" },
    { label: "Facettes Dentaires / Esthétique", value: "esthetique" },
    { label: "Orthodontie / Aligneurs Invisibles", value: "orthodontie" },
    { label: "Éclaircissement Dentaire Laser", value: "blanchiment" },
    { label: "Détartrage & Prophylaxie", value: "detartrage" },
    { label: "Couronnes / Bridges Zircone", value: "protheses" },
    { label: "Urgence Dentaire Immédiate", value: "urgence" },
  ];

  const timeSlots = [
    { id: "matin", label: "Matinée (09h - 13h)" },
    { id: "apres-midi", label: "Après-midi (14h - 18h)" },
    { id: "soiree", label: "Fin de journée (18h - 20h)" },
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

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Bonjour Centre Dentaire VITALIA, je souhaite confirmer un rendez-vous :\n- Nom : ${formData.name || "Patient"}\n- Soin : ${treatments.find((t) => t.value === formData.treatment)?.label}\n- Disponibilité : ${formData.timePreference}\n- Tél : ${formData.phone}`
  );

  return (
    <section id="rendez-vous" className="py-28 bg-cream relative overflow-hidden scroll-mt-10">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Guarantees */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-primary mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span className="text-[11px] font-semibold tracking-widest uppercase">Prise en Charge Personnalisée</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-medium tracking-tight leading-[1.15] mb-6">
              Planifier votre visite <br />
              <span className="italic font-normal text-primary-mid">en toute sérénité.</span>
            </h2>

            <p className="text-body text-charcoal-muted leading-relaxed font-light mb-8 max-w-md">
              Notre équipe médicale et administrative vous recontacte rapidement pour vous réserver un créneau adapté à votre emploi du temps.
            </p>

            {/* Direct Phone Assistance */}
            <div className="p-5 rounded-2xl bg-white border border-primary/10 shadow-card mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary text-cream flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-charcoal-muted uppercase tracking-widest font-semibold">
                    Assistance Téléphonique Directe
                  </p>
                  <a
                    href="tel:+212660703051"
                    className="text-base font-bold text-primary hover:text-accent transition-colors"
                  >
                    06 60 70 30 51
                  </a>
                </div>
              </div>
              <p className="text-xs text-charcoal-muted font-light leading-relaxed pl-13">
                Pour une prise en charge le jour-même ou une urgence, notre secrétariat vous répond immédiatement 24/7.
              </p>
            </div>

            {/* Trust Points */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-charcoal-mid">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Confidentialité médicale et déontologique garantie</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-charcoal-mid">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>Rappel de confirmation sous 2 heures ouvrées</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Form */}
          <div className="lg:col-span-7 bg-white border border-primary/10 p-8 sm:p-10 rounded-2xl shadow-card relative">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-16 h-16 bg-primary text-cream rounded-2xl flex items-center justify-center mb-6 shadow-glow-primary">
                    <Check className="w-8 h-8 stroke-2 text-accent" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2">Demande Validée</span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-primary font-medium mb-3">
                    Merci pour votre confiance
                  </h3>
                  <p className="text-sm text-charcoal-muted font-light max-w-md leading-relaxed mb-8">
                    Votre demande a été transmise à notre secrétariat médical. Nous vous appellerons au <strong className="font-semibold text-charcoal">{formData.phone || "numéro indiqué"}</strong> pour fixer l&apos;heure idéale.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-md">
                    <a
                      href={`https://wa.me/212660703051?text=${whatsappMessage}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Accélérer via WhatsApp</span>
                    </a>

                    <button
                      onClick={() => {
                        setStatus("idle");
                        setFormData({ name: "", phone: "", treatment: "consultation", timePreference: "matin", urgency: "normal", message: "" });
                      }}
                      className="w-full sm:w-auto py-3.5 px-5 text-xs text-charcoal-muted hover:text-primary transition-colors font-medium border border-primary/10 rounded-xl"
                    >
                      Nouvelle demande
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div>
                    <h3 className="font-serif text-2xl text-primary font-medium mb-1">
                      Demande de Rendez-vous
                    </h3>
                    <p className="text-xs text-charcoal-muted font-light">
                      Sélectionnez vos critères et renseignez vos coordonnées
                    </p>
                  </div>

                  {/* Treatment Choice */}
                  <div>
                    <label htmlFor="treatment" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Motif de Consultation <span className="text-accent">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="treatment"
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 bg-cream/50 border border-primary/12 rounded-xl text-sm text-charcoal focus:border-primary focus:bg-white transition-all outline-none appearance-none cursor-pointer pr-10"
                      >
                        {treatments.map((t) => (
                          <option key={t.value} value={t.value}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-charcoal-muted">
                        <svg className="w-4 h-4 fill-none stroke-current stroke-[2]" viewBox="0 0 24 24">
                          <path d="M6 9l6 6 6-6" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Time slot preference pills */}
                  <div>
                    <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Créneau Préféré
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {timeSlots.map((slot) => {
                        const isSelected = formData.timePreference === slot.id;
                        return (
                          <button
                            type="button"
                            key={slot.id}
                            onClick={() => setFormData((prev) => ({ ...prev, timePreference: slot.id }))}
                            className={`py-2.5 px-3 text-xs rounded-xl border text-center transition-all duration-200 ${
                              isSelected
                                ? "bg-primary text-cream border-primary font-medium shadow-sm"
                                : "bg-cream/40 text-charcoal-muted border-primary/10 hover:border-primary/30"
                            }`}
                          >
                            {slot.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Patient Name & Phone in 2 cols */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                        Nom complet <span className="text-accent">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Ex: Mohamed Alami"
                          className="w-full pl-10 pr-4 py-3 bg-cream/50 border border-primary/12 rounded-xl text-sm text-charcoal focus:border-primary focus:bg-white transition-all outline-none placeholder:text-charcoal-muted/40"
                        />
                        <User className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                        Téléphone <span className="text-accent">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="Ex: 06 60 70 30 51"
                          className="w-full pl-10 pr-4 py-3 bg-cream/50 border border-primary/12 rounded-xl text-sm text-charcoal focus:border-primary focus:bg-white transition-all outline-none placeholder:text-charcoal-muted/40"
                        />
                        <Phone className="w-4 h-4 text-charcoal-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      Précisions éventuelles <span className="text-charcoal-muted/60 font-normal lowercase">(optionnel)</span>
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Ex: Antécédents, douleurs particulières, préférence de date..."
                        className="w-full p-4 bg-cream/50 border border-primary/12 rounded-xl text-sm text-charcoal focus:border-primary focus:bg-white transition-all outline-none resize-none placeholder:text-charcoal-muted/40"
                      />
                      <MessageSquare className="w-4 h-4 text-charcoal-muted absolute right-3.5 bottom-3.5 pointer-events-none opacity-40" />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full py-4 bg-primary hover:bg-primary-mid text-cream text-sm font-semibold tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:shadow-glow-primary disabled:opacity-50"
                  >
                    <CalendarCheck className="w-4 h-4" />
                    <span>{status === "submitting" ? "Envoi de votre demande..." : "Envoyer ma demande de consultation"}</span>
                  </button>

                  <p className="text-[11px] text-charcoal-muted text-center font-light">
                    En validant, vous acceptez d&apos;être recontacté(e) par l&apos;équipe du Centre Dentaire VITALIA.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

