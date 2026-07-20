"use client";

import { useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyVitalia from "@/components/WhyVitalia";
import LocationHours from "@/components/LocationHours";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

// Dynamically import so preloader is never SSR'd
const Preloader = dynamic(() => import("@/components/Preloader"), { ssr: false });

export default function PageShell() {
  const [ready, setReady] = useState(false);

  // Lock scroll until preloader completes — tied to ready, not to Preloader's lifecycle
  useEffect(() => {
    document.body.classList.add("is-preloading");
  }, []);

  useEffect(() => {
    if (ready) {
      document.body.classList.remove("is-preloading");
    }
  }, [ready]);

  const handlePreloaderComplete = useCallback(() => {
    setReady(true);
  }, []);

  return (
    <>
      {/* Preloader overlays everything until complete */}
      <Preloader onComplete={handlePreloaderComplete} />

      {/* Page content fades in after preloader exits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col min-h-full"
      >
        <Header />
        <main className="grow">
          <Hero />
          <Services />
          <WhyVitalia />
          <LocationHours />
          <BookingForm />
        </main>
        <Footer />
        <WhatsAppButton />
      </motion.div>
    </>
  );
}
