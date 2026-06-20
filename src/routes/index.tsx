import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Fleet } from "@/components/Fleet";
import { Packages } from "@/components/Packages";
import { Routes as RoutesSection } from "@/components/Routes";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";
import { LoadingScreen } from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div
      className="bg-[#050505] text-foreground"
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="ACG Car Travels Amalapuram | #1 Cab & Car Rental Service" />
      <meta itemProp="description" content="ACG Car Travels — Amalapuram's #1 rated car rental & cab service. Outstation, Airport, Wedding & Tours. Sedan, Innova Crysta, Tempo Traveller, Force Urbania. 24/7. +91 7382352666." />
      <meta itemProp="url" content="https://acgcartravels.vercel.app/" />
      <LoadingScreen />
      <Navbar />
      <main
        id="main-content"
        aria-label="ACG Car Travels — Car Rental & Cab Service in Amalapuram, Andhra Pradesh"
      >
        <Hero />
        <About />
        <Fleet />
        <Packages />
        <RoutesSection />
        <WhyUs />
        <Testimonials />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
