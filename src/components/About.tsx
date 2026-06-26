import { Section } from "./Section";
import { motion } from "framer-motion";
import { Star, Clock, Car, UserCheck, MapPin, ShieldCheck } from "lucide-react";

const cards = [
  { icon: Star, title: "5★ Google Rating", desc: "Perfect 5.0 rating on Google with 200\+ verified reviews — Amalapuram's most trusted car travels" },
  { icon: Clock, title: "24/7 Availability", desc: "Round the clock availability for all travel needs — early morning or late night, we are always ready" },
  { icon: Car, title: "AC Vehicles", desc: "All 8 vehicles fully air-conditioned and regularly serviced — sedan, SUV, tempo, luxury van" },
  { icon: UserCheck, title: "Pro Drivers", desc: "Licensed, experienced and courteous chauffeurs who know every route across Andhra Pradesh" },
  { icon: MapPin, title: "GPS Tracked", desc: "Real-time vehicle tracking for your safety — your family always knows your location" },
  { icon: ShieldCheck, title: "Transparent Rates", desc: "Clear upfront pricing with zero hidden charges — what we quote is exactly what you pay" },
];

export function About() {
  return (
    <Section id="about" label="About Us" title="Amalapuram's #1 Car Travels — Trusted Since Day One">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-foreground/70 text-lg leading-relaxed mb-6" itemProp="description">
            <strong>ACG Car Travels</strong> is Amalapuram's most trusted car travels &amp; cab service, proudly serving
            passengers across Andhra Pradesh and Telangana. From local city drops and outstation trips
            to airport transfers, wedding cars, and tour packages — we deliver every journey with
            professionalism, comfort, and care. Whether you need a <strong>Sedan</strong>, <strong>Innova Crysta</strong>,{" "}
            <strong>Tempo Traveller</strong>, <strong>Maruti Ertiga</strong>, <strong>Maruti Dzire</strong>,{" "}
            <strong>Maruti Baleno</strong>, <strong>Toyota Glanza</strong>, or <strong>Force Urbania</strong>, our
            well-maintained AC fleet is available 24/7.
          </p>
          <p className="text-foreground/70 text-base leading-relaxed mb-6">
            Covering <strong>Amalapuram</strong> to <strong>Hyderabad</strong>,{" "}
            <strong>Visakhapatnam (Vizag)</strong>, <strong>Vijayawada</strong>, <strong>Tirupati</strong>,{" "}
            <strong>Rajahmundry</strong> and beyond. With a perfect{" "}
            <strong>5.0 Google Rating</strong> and 200\+ verified reviews, we are the{" "}
            <strong>#1 car travels in Amalapuram</strong>, East Godavari district.
          </p>
          <p className="text-foreground/65 text-base leading-relaxed mb-8">
            Looking for <strong>nearby car travels in Amalapuram</strong>? ACG Car Travels is the{" "}
            <strong>nearest car travels</strong> to you — available anytime, any day. Just call{" "}
            <a href="tel:+917382352666" className="text-gold hover:text-gold-light underline underline-offset-2 font-semibold">
              +91 7382352666
            </a>{" "}
            for instant cab booking.
          </p>

          {/*
            ✅ FIX: AggregateRating wrapped inside LocalBusiness.
            An orphaned AggregateRating (without a parent Thing/LocalBusiness)
            causes the "ACG Car Travels Amalapuram — 1 critical issue" error in Search Console.
          */}
          <div
            itemScope
            itemType="https://schema.org/LocalBusiness"
            className="border border-gold/40 bg-black/40 p-6 rounded-lg flex items-center gap-6"
          >
            <meta itemProp="name" content="ACG Car Travels" />
            <link itemProp="url" href="https://www.acgcartravels.com/" />

            <div
              itemProp="aggregateRating"
              itemScope
              itemType="https://schema.org/AggregateRating"
              className="flex items-center gap-6 w-full"
            >
              <div>
                <div className="font-display text-6xl text-gold leading-none" itemProp="ratingValue">5.0</div>
                <div className="flex gap-1 mt-2 text-gold" aria-label="5 out of 5 stars Google rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <div className="border-l border-gold/30 pl-6">
                <div className="font-display text-2xl text-foreground" itemProp="reviewCount">200+</div>
                <div className="text-sm text-foreground/60 uppercase tracking-widest mt-1">
                  Verified Google Reviews
                </div>
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                <meta itemProp="ratingCount" content="200" />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-[#111] border-l-[3px] border-gold/70 p-5 hover:-translate-y-1.5 transition-all duration-300 hover:gold-glow"
            >
              <c.icon className="text-gold mb-3" size={26} aria-hidden="true" />
              <div className="font-display text-xl text-foreground mb-1">{c.title}</div>
              <div className="text-sm text-foreground/60 leading-relaxed">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
