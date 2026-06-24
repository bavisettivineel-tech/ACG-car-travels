import { ServicePageLayout } from "@/components/ServicePageLayout";
import { CheckCircle } from "lucide-react";

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TaxiService"],
  "name": "ACG Car Travels — Tempo Traveller Hire Amalapuram",
  "description": "Tempo Traveller hire in Amalapuram for group tours, pilgrimages and outstation trips. 12–17 seater AC. Book: +91 7382352666.",
  "url": "https://www.acgcartravels.com/tempo-traveller-amalapuram",
  "telephone": "+917382352666",
  "address": { "@type": "PostalAddress", "streetAddress": "Door No: 5-2, 147, Sriramapuram", "addressLocality": "Amalapuram", "addressRegion": "Andhra Pradesh", "postalCode": "533201", "addressCountry": "IN" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "58", "bestRating": "5", "worstRating": "1" },
  "areaServed": "Amalapuram, East Godavari, Andhra Pradesh",
};

export default function TempoTravellerPage() {
  return (
    <ServicePageLayout
      title="Tempo Traveller Hire in Amalapuram"
      subtitle="Book AC Tempo Traveller (12–17 seater) in Amalapuram for group tours, pilgrimages, family trips and outstation. Force Traveller with push-back seats. ACG Car Travels."
      schema={schema}
      canonical="https://www.acgcartravels.com/tempo-traveller-amalapuram"
      metaTitle="Tempo Traveller Hire Amalapuram | 12-17 Seater AC | ACG Car Travels +91 7382352666"
      metaDescription="Tempo Traveller hire in Amalapuram — 12 to 17 seater AC Force Traveller for group tours, pilgrimage & outstation. ACG Car Travels. Call +91 7382352666."
    >
      <div className="space-y-10">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-display text-3xl text-gold mb-5">AC Tempo Traveller — Amalapuram</h2>
            <p className="text-foreground/70 leading-relaxed mb-4">
              ACG Car Travels offers well-maintained <strong>AC Tempo Traveller (12–17 seater)</strong> hire in Amalapuram for group tours, pilgrimages, family outings, school trips, corporate outings and outstation travel. Our Force Traveller is equipped with push-back seats, music system and ample luggage space.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-6">
              Popular Tempo Traveller routes from Amalapuram include <strong>Araku Valley</strong>, <strong>Borra Caves</strong>, <strong>Tirupati</strong>, <strong>Srisailam</strong>, <strong>Lambasingi</strong>, <strong>Maredumilli</strong> and <strong>Pancharamalu temples</strong>.
            </p>
            <ul className="space-y-3">
              {[
                "Force Traveller — 12 to 17 seater AC",
                "Push-back, reclining seats for long journeys",
                "Music system with Bluetooth",
                "Large luggage compartment",
                "Experienced long-distance driver",
                "Available for full-day, multi-day and outstation bookings",
                "Competitive group fare — ideal for 10–17 passengers",
                "Book with just a phone call — +91 7382352666",
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
              ["Group Tours", "Araku Valley, Borra Caves, Lambasingi, Maredumilli, Vanajangi"],
              ["Pilgrimage Trips", "Tirupati, Srisailam, Annavaram, Pancharamalu, Bhadrachalam"],
              ["Wedding & Events", "Guest shuttle, baraat convoy and family fleet bookings"],
              ["School & College Trips", "Safe, insured, teacher-approved group transport"],
              ["Corporate Outings", "Team outings, factory visits, conference travel"],
              ["Outstation", "Any destination across AP and Telangana"],
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
