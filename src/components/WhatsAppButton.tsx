"use client";

import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/212660703051?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous.";
  const phoneUrl = "tel:+212660703051";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Quick Phone Call Pill */}
      <motion.a
        href={phoneUrl}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="hidden sm:inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full glass border border-primary/10 shadow-card text-primary text-xs font-semibold hover:border-primary/25 transition-all group"
        aria-label="Appeler directement le centre dentaire"
      >
        <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-cream transition-colors">
          <Phone className="w-3.5 h-3.5" />
        </span>
        <span className="tracking-wide">06 60 70 30 51</span>
      </motion.a>

      {/* WhatsApp Concierge Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative flex items-center gap-3 pl-4 pr-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white shadow-[0_8px_25px_rgba(16,185,129,0.35)] hover:shadow-[0_10px_30px_rgba(16,185,129,0.5)] transition-all duration-300"
        aria-label="Contacter le secrétariat sur WhatsApp"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
        </span>

        <MessageCircle className="w-5 h-5 fill-current" />

        <div className="flex flex-col text-left leading-none">
          <span className="text-[10px] text-emerald-100 font-medium tracking-wide">Secrétariat 24/7</span>
          <span className="text-xs font-bold tracking-wider mt-0.5">WhatsApp Direct</span>
        </div>
      </motion.a>
    </div>
  );
}

