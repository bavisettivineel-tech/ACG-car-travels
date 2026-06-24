import { ServicePageLayout } from "@/components/ServicePageLayout";
import { motion } from "framer-motion";

const tours = [
  { dest: "Araku Valley & Borra Caves", duration: "1–2 Days", desc: "Scenic Araku Valley hill station + Borra Cave stalactites from Amalapuram via Visakhapatnam." },
  { dest: "Tirupati Darshan", duration: "1–2 Days", desc: "Pilgrimage to Lord Venkateswara temple at Tirupati (~480 km). Round trip available." },
  { dest: "Srisailam Temple Tour", duration: "1–2 Days", desc: "Jyotirlinga temple + Nagarjuna Sagar dam tour from Amalapuram (~460 km)." },
  { dest: "Lambasingi & Vanajangi", duration: "2 Days", desc: "Andhra's Kashmir — mist-covered peaks, cloud forests and stunning views (~290 km)." },
  { dest: "Pancharamalu (5 Temples)", duration: "1–2 Days", desc: "Sacred Shiva temples — Draksharamam, Bhimavaram, Amaravathi, Palakol and Samalkota." },
  { dest: "Bhadrachalam Temple", duration: "1 Day", desc: "Sri Rama temple on the Godavari banks at Bhadrachalam (~230 km from Amalapuram)." },
  { dest: "Maredumilli Forest", duration: "1 Day", desc: "Tribal eco-tourism, waterfalls and bamboo forests in the Eastern Ghats (~140 km)." },
  { dest: "Annavaram Temple", duration: "1 Day", desc: "Sri Veera Venkata Satyanarayana Swamy temple — a popular pilgrimage (~120 km)." },
];

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "TravelAgency"],
  "name": "ACG Car Travels — Tour Packages from Amalapuram",
  "description": "Custom tour packages from Amalapuram to Araku Valley, Tirupati, Srisailam, Lambasingi, Bhadrachalam and more. Book: +91 7382352666.",
  "url": "https://www.acgcartravels.com/tour-packages-amalapuram",
  "telephone": "+917382352666",
  "address": { "@type": "PostalAddress", "streetAddress": "Door No: 5-2, 147, Sriramapuram", "addressLocality": "Amalapuram", "addressRegion": "Andhra Pradesh", "postalCode": "533201", "addressCountry": "IN" },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "ratingCount": "58", "bestRating": "5", "worstRating": "1" },
  "areaServed": "Andhra Pradesh, Telangana",
};

export default function TourPackagesPage() {
  return (
    <ServicePageLayout
      title="Tour Packages from Amalapuram"
      subtitle="Explore Andhra Pradesh's best destinations with ACG Car Travels. Custom tour packages for Araku Valley, Tirupati, Srisailam, Lambasingi and more. AC cabs, experienced drivers."
      schema={schema}
      canonical="https://www.acgcartravels.com/tour-packages-amalapuram"
      metaTitle="Tour Packages from Amalapuram | Araku Tirupati Srisailam | ACG Car Travels"
      metaDescription="Tour packages from Amalapuram — Araku Valley, Tirupati, Srisailam, Lambasingi, Bhadrachalam & more. AC cabs with driver. ACG Car Travels. Call +91 7382352666."
    >
      <div className="space-y-10">
        <div>
          <h2 className="font-display text-3xl text-gold mb-6">Popular Tours from Amalapuram</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {tours.map((t, i) => (
              <motion.div
                key={t.dest}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-[#0f0f0f] border border-gold/20 p-6 hover:border-gold/50 transition-all"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-display text-xl text-foreground">{t.dest}</h3>
                  <span className="text-[10px] uppercase tracking-widest text-gold border border-gold/40 px-2 py-1 flex-shrink-0">{t.duration}</span>
                </div>
                <p className="text-sm text-foreground/60 mb-4">{t.desc}</p>
                <a
                  href={`https://wa.me/917382352666?text=${encodeURIComponent(`Hi, I want to book a tour package from Amalapuram to ${t.dest} — ACG Car Travels`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gold/70 hover:text-gold uppercase tracking-widest transition-colors"
                >
                  Enquire on WhatsApp →
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="bg-[#0f0f0f] border border-gold/30 p-8">
          <h2 className="font-display text-2xl text-foreground mb-4">Custom Tour Planning</h2>
          <p className="text-foreground/65 leading-relaxed mb-6">
            Don't see your destination? ACG Car Travels arranges <strong>custom tour packages</strong> to any location across Andhra Pradesh and Telangana. Just call or WhatsApp us with your group size, destination and dates — we'll plan the perfect trip.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+917382352666" className="shimmer clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest px-8 py-3 text-sm">
              Call +91 7382352666
            </a>
            <a href="https://wa.me/917382352666?text=Hi, I want a custom tour package from Amalapuram" target="_blank" rel="noopener noreferrer"
              className="clip-parallelogram border-2 border-gold text-gold font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-gold hover:text-black transition-colors">
              WhatsApp for Custom Tour
            </a>
          </div>
        </div>
      </div>
    </ServicePageLayout>
  );
}
