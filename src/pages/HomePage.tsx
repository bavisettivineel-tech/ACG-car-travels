import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Fleet } from "@/components/Fleet";
import { Packages } from "@/components/Packages";
import { Routes as RoutesSection } from "@/components/Routes";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Booking } from "@/components/Booking";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingButtons } from "@/components/FloatingButtons";

export default function HomePage() {
  return (
    <div className="bg-[#050505] text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Fleet />
        <Packages />
        <RoutesSection />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Booking />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
