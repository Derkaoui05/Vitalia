import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyVitalia from "@/components/WhyVitalia";
import LocationHours from "@/components/LocationHours";
import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
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
    </>
  );
}
