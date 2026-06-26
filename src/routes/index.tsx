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
      <meta itemProp="name" content="ACG Car Travels Amalapuram | #1 Car Travels & Cab Service" />
      <meta itemProp="description" content="ACG Car Travels — Amalapuram's #1 rated car travels & cab service. Outstation, Airport, Wedding & Tours. Sedan, Innova Crysta, Tempo Traveller, Force Urbania. 24/7. +91 7382352666." />
      <meta itemProp="url" content="https://www.acgcartravels.com/" />
      <meta itemProp="inLanguage" content="en-IN" />
      <LoadingScreen />
      <Navbar />
      <main
        id="main-content"
        aria-label="ACG Car Travels — Car Travels & Cab Service in Amalapuram, Andhra Pradesh"
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

        {/* ══ FAQ Section for Google Rich Results ══ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="relative py-20 md:py-28 grain bg-[#060606]"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div className="max-w-4xl mx-auto px-5">
            <div className="text-center mb-12">
              <div className="font-accent italic text-gold/80 text-lg mb-3" aria-hidden="true">— FAQ —</div>
              <h2 id="faq-heading" className="font-display text-4xl md:text-5xl gold-text-gradient leading-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
                Common questions about ACG Car Travels — Amalapuram's nearest car travels and cab service.
              </p>
              <div className="mx-auto mt-6 w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "Which is the best car travels near Amalapuram?",
                  a: "ACG Car Travels is the best and nearest car travels in Amalapuram with a perfect 5.0 Google rating from 200\+ verified reviews. We are available 24/7 for local drops, outstation trips, airport transfers, wedding cars and tour packages. Call +91 7382352666.",
                },
                {
                  q: "What is ACG Car Travels — Amalapuram's #1 car travels?",
                  a: "ACG Car Travels is Amalapuram's #1 rated car travels and cab service, located at Door No: 5-2, 147, Sriramapuram, Amalapuram, Andhra Pradesh 533201. We provide 24/7 car travels across Amalapuram, Kakinada, Rajahmundry, Visakhapatnam, Vijayawada, Hyderabad and all of Andhra Pradesh.",
                },
                {
                  q: "How do I book a cab with ACG Car Travels in Amalapuram?",
                  a: "Call or WhatsApp +91 7382352666 or use our online booking form. ACG Car Travels — the nearest car travels in Amalapuram — confirms your booking within minutes, available 24/7.",
                },
                {
                  q: "What is the fare for travels in Amalapuram to Hyderabad?",
                  a: "ACG Car Travels offers Amalapuram to Hyderabad (~470 km) from ₹12/km for Sedan, ₹16/km for Innova Crysta, and ₹22/km for Tempo Traveller. Call +91 7382352666 for exact quotes.",
                },
                {
                  q: "Does ACG Car Travels offer 24/7 nearby car travels service?",
                  a: "Yes! ACG Car Travels provides 24/7 car travels and cab service in Amalapuram and all nearby areas including Kakinada, Rajahmundry, Vizag and across Andhra Pradesh & Telangana. Call +91 7382352666 anytime.",
                },
                {
                  q: "What vehicles are available for car travels in Amalapuram?",
                  a: "ACG Car Travels offers: Sedan (Toyota Etios/Dzire ₹12/km), Innova Crysta 7-seater (₹16/km), Tempo Traveller 12-17 seater (₹22/km), Maruti Ertiga, Maruti Dzire, Maruti Baleno, Toyota Glanza and Force Urbania luxury van (₹26/km).",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-[#0f0f0f] border border-gold/20 p-6 hover:border-gold/50 transition-colors"
                  itemScope
                  itemType="https://schema.org/Question"
                  itemProp="mainEntity"
                >
                  <h3 className="font-display text-lg text-gold mb-3 flex items-start gap-3" itemProp="name">
                    <span className="text-gold/50 text-sm mt-1 flex-shrink-0">Q{i + 1}.</span>
                    {item.q}
                  </h3>
                  <div
                    itemScope
                    itemType="https://schema.org/Answer"
                    itemProp="acceptedAnswer"
                  >
                    <p className="text-foreground/65 leading-relaxed text-sm pl-7" itemProp="text">
                      {item.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href="tel:+917382352666"
                aria-label="Call ACG Car Travels for more information"
                title="Call ACG Car Travels — Best Car Travels in Amalapuram"
                className="shimmer inline-block clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest px-10 py-4 text-sm gold-glow"
              >
                📞 Call Now: +91 7382352666
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
