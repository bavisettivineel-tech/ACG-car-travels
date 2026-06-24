import { ServicePageLayout } from "@/components/ServicePageLayout";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "24/7 availability — call anytime, cab arrives in 20–30 minutes",
  "AC cabs: Sedan, Innova Crysta, Ertiga, Dzire, Baleno, Glanza",
  "Experienced, licensed, police-verified drivers",
  "GPS tracked vehicles for your safety",
  "Zero hidden charges — fare quoted upfront",
  "Local city drops within Amalapuram and nearby areas",
  "Outstation trips to all cities across Andhra Pradesh & Telangana",
  "Airport transfers to Rajahmundry & Visakhapatnam airports",
];

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "name": "ACG Car Travels — Taxi Service Amalapuram",
  "description": "Best taxi and cab service in Amalapuram. 24/7 available, AC cabs, professional drivers. Book now: +91 7382352666.",
  "url": "https://www.acgcartravels.com/taxi-service-amalapuram",
  "telephone": "+917382352666",
  "address": { "@type": "PostalAddress", "streetAddress": "Door No: 5-2, 147, Sriramapuram", "addressLocality": "Amalapuram", "addressRegion": "Andhra Pradesh", "postalCode": "533201", "addressCountry": "IN" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "58", "bestRating": "5", "worstRating": "1" },
  "areaServed": "Amalapuram, East Godavari, Andhra Pradesh",
  "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "00:00", "closes": "23:59" },
};

export default function TaxiServicePage() {
  return (
    <ServicePageLayout
      title="Taxi Service in Amalapuram"
      subtitle="ACG Car Travels — Amalapuram's most trusted cab and taxi service. Available 24/7 for local drops, outstation, airport and tours. ⭐ 5.0 Google Rating."
      schema={schema}
      canonical="https://www.acgcartravels.com/taxi-service-amalapuram"
      metaTitle="Taxi Service in Amalapuram | ACG Car Travels | 24/7 Cab Booking +91 7382352666"
      metaDescription="Best taxi service in Amalapuram — ACG Car Travels. 24/7 cab booking, AC vehicles, professional drivers. Local, outstation, airport & tours. Call +91 7382352666."
    >
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-display text-3xl text-gold mb-6">Best Taxi Service in Amalapuram</h2>
          <p className="text-foreground/70 leading-relaxed mb-4">
            ACG Car Travels is Amalapuram's #1 taxi and cab service provider, offering reliable, safe and comfortable rides across East Godavari, Andhra Pradesh and Telangana. Whether you need a quick local drop within Amalapuram or a long outstation trip to Hyderabad, Vizag or Vijayawada — we're available round the clock.
          </p>
          <p className="text-foreground/70 leading-relaxed mb-8">
            With a fleet of 8 well-maintained AC vehicles and experienced professional drivers, ACG Car Travels guarantees on-time service, transparent pricing and the highest safety standards for every passenger.
          </p>
          <ul className="space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-foreground/75">
                <CheckCircle size={18} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                {f}
              </li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-4"
        >
          {[
            ["Local Taxi Amalapuram", "Point-to-point drops anywhere in Amalapuram city — market, hospital, railway station, bus stand."],
            ["Outstation Taxi", "Hyderabad, Vizag, Vijayawada, Tirupati, Rajahmundry and all AP & Telangana destinations."],
            ["Airport Taxi", "Rajahmundry (Madhurapudi) Airport and Visakhapatnam Airport transfers with flight tracking."],
            ["24/7 Taxi Service", "Call us anytime — day or night, weekday or holiday. Always available in Amalapuram."],
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#0f0f0f] border border-gold/20 p-5">
              <h3 className="font-display text-xl text-foreground mb-2">{title}</h3>
              <p className="text-sm text-foreground/60">{desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </ServicePageLayout>
  );
}
