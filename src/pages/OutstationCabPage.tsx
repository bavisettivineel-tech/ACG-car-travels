import { ServicePageLayout } from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const routes = [
  { to: "Hyderabad", distance: "~470 km", time: "~9 hrs" },
  { to: "Visakhapatnam (Vizag)", distance: "~220 km", time: "~4.5 hrs" },
  { to: "Vijayawada", distance: "~165 km", time: "~3.5 hrs" },
  { to: "Tirupati", distance: "~480 km", time: "~9 hrs" },
  { to: "Rajahmundry", distance: "~65 km", time: "~1.5 hrs" },
  { to: "Srisailam", distance: "~460 km", time: "~9 hrs" },
  { to: "Araku Valley", distance: "~320 km", time: "~7 hrs" },
  { to: "Bhadrachalam", distance: "~230 km", time: "~5 hrs" },
  { to: "Annavaram", distance: "~120 km", time: "~2.5 hrs" },
  { to: "Maredumilli", distance: "~140 km", time: "~3.5 hrs" },
  { to: "Bhimavaram", distance: "~90 km", time: "~2 hrs" },
  { to: "Eluru", distance: "~130 km", time: "~2.5 hrs" },
];

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "name": "ACG Car Travels — Outstation Cab Service Amalapuram",
  "description": "Outstation cab service from Amalapuram to Hyderabad, Vizag, Vijayawada, Tirupati and all AP & Telangana. 24/7 available. Call +91 7382352666.",
  "url": "https://www.acgcartravels.com/outstation-cab-amalapuram",
  "telephone": "+917382352666",
  "address": { "@type": "PostalAddress", "streetAddress": "Door No: 5-2, 147, Sriramapuram", "addressLocality": "Amalapuram", "addressRegion": "Andhra Pradesh", "postalCode": "533201", "addressCountry": "IN" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "58", "bestRating": "5", "worstRating": "1" },
  "areaServed": ["Amalapuram", "Hyderabad", "Visakhapatnam", "Vijayawada", "Tirupati", "Andhra Pradesh", "Telangana"],
};

export default function OutstationCabPage() {
  return (
    <ServicePageLayout
      title="Outstation Cab from Amalapuram"
      subtitle="Book outstation cab from Amalapuram to Hyderabad, Vizag, Vijayawada, Tirupati and all cities across Andhra Pradesh & Telangana. One-way and round trips available 24/7."
      schema={schema}
      canonical="https://www.acgcartravels.com/outstation-cab-amalapuram"
      metaTitle="Outstation Cab from Amalapuram | Hyderabad Vizag Vijayawada | ACG Car Travels"
      metaDescription="Outstation cab service from Amalapuram. Book one-way or round trip to Hyderabad, Vizag, Vijayawada, Tirupati & all AP cities. ACG Car Travels — Call +91 7382352666."
    >
      <div className="space-y-12">
        <div>
          <h2 className="font-display text-3xl text-gold mb-6">Outstation Routes from Amalapuram</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {routes.map((r, i) => {
              const waLink = `https://wa.me/917382352666?text=${encodeURIComponent(`Hi, I need outstation cab from Amalapuram to ${r.to} (${r.distance}) — ACG Car Travels`)}`;
              return (
                <motion.div
                  key={r.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group bg-[#0f0f0f] border border-gold/15 p-5 hover:border-gold/50 transition-all"
                >
                  <div className="text-[10px] uppercase tracking-widest text-foreground/40 mb-2">From Amalapuram</div>
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight size={18} className="text-gold" aria-hidden="true" />
                    <h3 className="font-display text-xl text-foreground">{r.to}</h3>
                  </div>
                  <div className="text-sm text-foreground/55 mb-4">{r.distance} · {r.time}</div>
                  <a href={waLink} target="_blank" rel="noopener noreferrer"
                    className="text-xs text-gold/70 hover:text-gold uppercase tracking-widest transition-colors">
                    Book on WhatsApp →
                  </a>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl text-gold mb-6">Why Choose ACG for Outstation?</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              "One-way and round-trip outstation cabs available",
              "Night driving — experienced highway drivers",
              "GPS tracked for complete safety on outstation routes",
              "Innova Crysta, Sedan, Ertiga, Tempo Traveller available",
              "Toll charges and driver allowances included transparently",
              "Pickup from your doorstep anywhere in Amalapuram",
              "No surge pricing — fixed rates quoted upfront",
              "24/7 customer support during your journey",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 bg-[#0f0f0f] border border-gold/15 p-4">
                <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-foreground/75">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
