import { Section } from "./Section";
import { motion } from "framer-motion";
import { Star, Clock, Car, UserCheck, MapPin, ShieldCheck } from "lucide-react";

const cards = [
  { icon: Star, title: "5★ Rated", desc: "Perfect 5.0 rating on Google with 58 verified reviews" },
  { icon: Clock, title: "24/7 Service", desc: "Round the clock availability for all travel needs" },
  { icon: Car, title: "AC Vehicles", desc: "All cars fully air-conditioned and well maintained" },
  { icon: UserCheck, title: "Pro Drivers", desc: "Licensed, experienced and courteous chauffeurs" },
  { icon: MapPin, title: "GPS Tracked", desc: "Real-time vehicle tracking for your safety" },
  { icon: ShieldCheck, title: "Best Rates", desc: "Transparent pricing with zero hidden charges" },
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
            <strong>ACG Car Travels</strong> is Amalapuram's most trusted car rental &amp; cab service, proudly serving
            passengers across Andhra Pradesh and Telangana since years. From local city drops and outstation trips
            to airport transfers, wedding cars, and tour packages — we deliver every journey with
            professionalism, comfort, and care. Whether you need a <strong>Sedan</strong>, <strong>Innova Crysta</strong>, <strong>Tempo Traveller</strong>,
            <strong>Maruti Ertiga</strong>, <strong>Maruti Dzire</strong>, <strong>Maruti Baleno</strong>, <strong>Toyota Glanza</strong>, or <strong>Force Urbania</strong>, our well-maintained AC fleet is available 24/7.
          </p>
          <p className="text-foreground/70 text-base leading-relaxed mb-8">
            Covering <strong>Amalapuram</strong> to <strong>Hyderabad</strong>, <strong>Visakhapatnam (Vizag)</strong>, <strong>Vijayawada</strong>, <strong>Tirupati</strong>, <strong>Rajahmundry</strong> and beyond.
            With a perfect <strong>5.0 Google Rating</strong> and 58 verified reviews, we are the #1 car travels in Amalapuram, East Godavari district.
          </p>
            <div className="border border-gold/40 bg-black/40 p-6 rounded-lg flex items-center gap-6" itemScope itemType="https://schema.org/AggregateRating" itemProp="aggregateRating">
              <div>
                <div className="font-display text-6xl text-gold leading-none" itemProp="ratingValue">5.0</div>
                <div className="flex gap-1 mt-2 text-gold" aria-label="5 out of 5 stars rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <div className="border-l border-gold/30 pl-6">
                <div className="font-display text-2xl text-foreground" itemProp="reviewCount">58 Reviews</div>
                <div className="text-sm text-foreground/60 uppercase tracking-widest mt-1">
                  Verified Google Reviews
                </div>
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
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
              <c.icon className="text-gold mb-3" size={26} />
              <div className="font-display text-xl text-foreground mb-1">{c.title}</div>
              <div className="text-sm text-foreground/60 leading-relaxed">{c.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
