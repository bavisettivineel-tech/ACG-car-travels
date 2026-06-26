import { ServicePageLayout } from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle, Plane } from "lucide-react";

const airports = [
  { name: "Rajahmundry Airport (Madhurapudi Airport)", code: "RJA", distance: "~65 km", time: "~1.5 hrs", detail: "Closest airport to Amalapuram. ACG Car Travels provides the fastest, most reliable airport transfer on this route." },
  { name: "Visakhapatnam Airport (Vizag Airport)", code: "VTZ", distance: "~220 km", time: "~4.5 hrs", detail: "For domestic and international flights from Vizag. We track your flight and adjust pickup accordingly." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "name": "ACG Car Travels — Airport Transfer Amalapuram",
  "description": "Airport cab and transfer service from Amalapuram to Rajahmundry Airport and Visakhapatnam Airport. 24/7, on-time guaranteed. Call +91 7382352666.",
  "url": "https://www.acgcartravels.com/airport-transfer-amalapuram",
  "telephone": "+917382352666",
  "address": { "@type": "PostalAddress", "streetAddress": "Door No: 5-2, 147, Sriramapuram", "addressLocality": "Amalapuram", "addressRegion": "Andhra Pradesh", "postalCode": "533201", "addressCountry": "IN" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "200", "bestRating": "5", "worstRating": "1" },
  "areaServed": ["Amalapuram", "Rajahmundry", "Visakhapatnam"],
  "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
};

export default function AirportTransferPage() {
  return (
    <ServicePageLayout
      title="Airport Transfer from Amalapuram"
      subtitle="Reliable airport cab service from Amalapuram to Rajahmundry Airport and Visakhapatnam Airport. Flight tracking, on-time guarantee, 24/7 available."
      schema={schema}
      canonical="https://www.acgcartravels.com/airport-transfer-amalapuram"
      metaTitle="Airport Transfer Amalapuram | Cab to Rajahmundry & Vizag Airport | ACG Car Travels"
      metaDescription="Airport cab service from Amalapuram to Rajahmundry Airport (RJA) and Visakhapatnam Airport (VTZ). On-time guaranteed, 24/7. ACG Car Travels — Call +91 7382352666."
    >
      <div className="space-y-10">
        <div className="grid md:grid-cols-2 gap-6">
          {airports.map((a) => (
            <motion.div
              key={a.code}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f0f0f] border border-gold/30 p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <Plane className="text-gold" size={28} aria-hidden="true" />
                <div>
                  <h2 className="font-display text-xl text-foreground">{a.name}</h2>
                  <span className="text-xs text-gold/70 uppercase tracking-widest">{a.code}</span>
                </div>
              </div>
              <div className="flex gap-6 text-sm text-foreground/60 mb-4">
                <span>📍 {a.distance} from Amalapuram</span>
                <span>⏱ {a.time}</span>
              </div>
              <p className="text-sm text-foreground/65 leading-relaxed">{a.detail}</p>
            </motion.div>
          ))}
        </div>

        <div>
          <h2 className="font-display text-3xl text-gold mb-6">Why Book Airport Transfer with ACG Car Travels?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Live flight tracking — we know your arrival/departure time",
              "Guaranteed on-time pickup — never miss a flight",
              "Meet & greet service at airport exit",
              "Available 24/7 including early morning and midnight flights",
              "All AC vehicles — Sedan, Innova Crysta, Ertiga",
              "Assistance with luggage loading and unloading",
              "Fixed transparent pricing — no surge charges",
              "Experienced drivers who know airport routes perfectly",
            ].map((f) => (
              <div key={f} className="flex items-start gap-3 bg-[#0f0f0f] border border-gold/15 p-4">
                <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm text-foreground/75">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-gold/30 p-8 text-center">
          <h3 className="font-display text-2xl text-foreground mb-3">Book Your Airport Cab Now</h3>
          <p className="text-foreground/60 text-sm mb-6">Call or WhatsApp with your flight details — we'll handle the rest.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+917382352666" className="shimmer clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest px-8 py-3 text-sm">
              Call +91 7382352666
            </a>
            <a href="https://wa.me/917382352666?text=Hi, I need airport transfer from Amalapuram" target="_blank" rel="noopener noreferrer"
              className="clip-parallelogram border-2 border-gold text-gold font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-gold hover:text-black transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
