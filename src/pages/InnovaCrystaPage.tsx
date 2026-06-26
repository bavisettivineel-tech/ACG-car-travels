import { ServicePageLayout } from "@/components/ServicePageLayout";
import { CheckCircle } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "name": "ACG Car Travels — Innova Crysta Hire Amalapuram",
  "description": "Toyota Innova Crysta hire in Amalapuram for outstation, airport and local trips. 7-seater AC. Book: +91 7382352666.",
  "url": "https://www.acgcartravels.com/innova-crysta-amalapuram",
  "telephone": "+917382352666",
  "address": { "@type": "PostalAddress", "streetAddress": "Door No: 5-2, 147, Sriramapuram", "addressLocality": "Amalapuram", "addressRegion": "Andhra Pradesh", "postalCode": "533201", "addressCountry": "IN" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "200", "bestRating": "5", "worstRating": "1" },
  "areaServed": "Amalapuram, East Godavari, Andhra Pradesh",
};

export default function InnovaCrystaPage() {
  return (
    <ServicePageLayout
      title="Innova Crysta Hire in Amalapuram"
      subtitle="Book Toyota Innova Crysta (7-seater AC) in Amalapuram for outstation trips, airport transfers, family travel and tours. Premium comfort, professional driver. ACG Car Travels."
      schema={schema}
      canonical="https://www.acgcartravels.com/innova-crysta-amalapuram"
      metaTitle="Innova Crysta Hire Amalapuram | 7 Seater AC | ACG Car Travels +91 7382352666"
      metaDescription="Toyota Innova Crysta hire in Amalapuram — 7 seater AC SUV for outstation, airport, family & tours. ACG Car Travels. Call +91 7382352666."
    >
      <div className="space-y-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl text-gold mb-5">Toyota Innova Crysta — Amalapuram</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              The <strong>Toyota Innova Crysta</strong> is ACG Car Travels' most popular vehicle for outstation trips, family travel and airport transfers in Amalapuram. Seating 7 passengers in supreme comfort with captain seats, powerful AC and ample boot space — it's the ideal vehicle for long-distance journeys.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Our Innova Crysta is regularly serviced, fully insured and driven by experienced outstation drivers who have completed thousands of trips across Andhra Pradesh and Telangana.
            </p>
            <ul className="space-y-3">
              {[
                "Toyota Innova Crysta — 7 seater premium AC",
                "Captain seats with full recline for long journeys",
                "Powerful air conditioning — even in peak summer",
                "Large boot space for luggage",
                "GPS tracked vehicle",
                "Ideal for Hyderabad, Vizag, Vijayawada, Tirupati trips",
                "Available for one-way, round-trip and multi-day",
                "Professional outstation driver included",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-foreground/75">
                  <CheckCircle size={16} className="text-gold flex-shrink-0 mt-0.5" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            {[
              ["Outstation", "Hyderabad · Vizag · Vijayawada · Tirupati · Rajahmundry"],
              ["Airport Transfer", "Rajahmundry Airport & Visakhapatnam Airport"],
              ["Family Travel", "Comfortable for 6 adults + driver, with full luggage"],
              ["Pilgrimage", "Tirupati, Srisailam, Annavaram, Bhadrachalam"],
              ["Tours", "Araku Valley, Borra Caves, Lambasingi, Maredumilli"],
              ["Corporate", "Executive travel for professionals and business teams"],
            ].map(([title, desc]) => (
              <div key={title} className="bg-[#0f0f0f] border border-gold/20 p-5">
                <h3 className="font-display text-lg text-foreground mb-1">{title}</h3>
                <p className="text-sm text-foreground/55">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
