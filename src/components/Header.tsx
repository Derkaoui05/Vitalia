"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function RollLink({ name, href }: { name: string; href: string }) {
  const letters = name.split("");

  return (
    <Link href={href} passHref legacyBehavior>
      <motion.a
        initial="initial"
        whileHover="hover"
        className="relative text-sm font-medium tracking-wide text-charcoal py-0 cursor-pointer block overflow-hidden"
      >
        {/* Top layer (slides up and out) */}
        <span className="block whitespace-nowrap">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hover: { y: "-100%" },
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.02 }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>

        {/* Bottom layer (rolls up and in) */}
        <span className="absolute inset-0 block whitespace-nowrap">
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "100%" },
                hover: { y: 0 },
              }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1], delay: i * 0.02 }}
              className="inline-block text-accent"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
      </motion.a>
    </Link>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Soins", href: "#soins" },
    { name: "À propos", href: "#a-propos" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-cream/90 backdrop-blur-md border-fine-b">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="#accueil" className="flex flex-col">
          <span className="font-serif text-2xl tracking-wider text-primary font-medium">
            VITALIA
          </span>
          <span className="text-[9px] tracking-[0.25em] text-charcoal-muted uppercase -mt-1">
            Centre Dentaire
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <RollLink
              key={link.name}
              name={link.name}
              href={link.href}
            />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="#rendez-vous"
            className="px-5 py-2.5 bg-primary text-cream text-sm font-medium tracking-wider rounded-sm hover:bg-primary-light transition-colors duration-200"
          >
            Prendre rendez-vous
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal hover:text-primary transition-colors focus:outline-none"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {isOpen ? <X className="w-5 h-5 stroke-[1.5]" /> : <Menu className="w-5 h-5 stroke-[1.5]" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-0 w-full bg-cream border-fine-b md:hidden shadow-sm"
          >
            <nav className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium tracking-wide text-charcoal hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-primary/5">
                <Link
                  href="#rendez-vous"
                  onClick={() => setIsOpen(false)}
                  className="block w-full py-3 text-center bg-primary text-cream text-sm font-medium tracking-wider rounded-sm hover:bg-primary-light transition-colors duration-200"
                >
                  Prendre rendez-vous
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
