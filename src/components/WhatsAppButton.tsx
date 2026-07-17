"use client";

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const whatsappUrl = "https://wa.me/212660703051?text=Bonjour,%20je%20souhaite%20prendre%20rendez-vous.";
  const phoneUrl = "tel:+212660703051";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:bottom-8 md:right-8">
      {/* Phone Button */}
      <motion.a
        href={phoneUrl}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-12 h-12 bg-cream text-primary border-fine rounded-full shadow-sm hover:bg-cream-dark transition-colors duration-200"
        aria-label="Appeler le Centre Vitalia"
      >
        <Phone className="w-5 h-5 stroke-[1.5]" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center justify-center w-12 h-12 bg-primary text-cream rounded-full shadow-sm hover:bg-primary-light transition-colors duration-200"
        aria-label="Contacter sur WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5.5 h-5.5 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.012 2c-5.506 0-9.987 4.479-9.987 9.988 0 1.758.459 3.473 1.332 4.982L2 22l5.166-1.355c1.47.8 3.119 1.22 4.832 1.22 5.506 0 9.987-4.479 9.987-9.987 0-5.507-4.48-9.99-9.987-9.99m0 1.75c4.549 0 8.238 3.689 8.238 8.238 0 4.549-3.69 8.238-8.238 8.238-1.545 0-3.045-.433-4.341-1.253l-.31-.186-3.078.808.822-3.003-.204-.325c-.9-1.433-1.378-3.084-1.378-4.78 0-4.548 3.69-8.237 8.238-8.237m-3.52 3.167c-.193-.004-.396.046-.575.148-.28.16-.578.435-.74.757-.184.364-.265.795-.262 1.238.006.906.332 1.77.777 2.479a8.914 8.914 0 0 0 2.913 2.915c.712.443 1.583.754 2.484.743.443.003.874-.08 1.236-.264.321-.163.593-.464.75-.747.1-.18.15-.383.146-.576v-.328c.002-.132-.07-.253-.186-.316l-1.579-.79c-.114-.057-.253-.042-.351.042l-.667.573a.35.35 0 0 1-.368.047 6.077 6.077 0 0 1-2.032-2.032.352.352 0 0 1 .046-.37l.574-.666c.084-.098.1-.237.042-.35l-.79-1.58c-.062-.116-.183-.187-.315-.185z" />
        </svg>
      </motion.a>
    </div>
  );
}
