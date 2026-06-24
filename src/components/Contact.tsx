import { Section } from "./Section";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const cards = [
  { icon: Phone, label: "Phone / Call", value: "+91 73823 52666", link: "tel:+917382352666" },
  { icon: MessageCircle, label: "WhatsApp", value: "+91 73823 52666", link: "https://wa.me/917382352666?text=Hi, I want to book a cab with ACG Car Travels Amalapuram" },
  { icon: MapPin, label: "Address", value: "Door No: 5-2, 147, Sriramapuram, Amalapuram, Andhra Pradesh 533201", link: "https://maps.google.com/?q=16.5787,82.0061" },
  { icon: Clock, label: "Working Hours", value: "Open 24 Hours · 7 Days a Week", highlight: true },
];

export function Contact() {
  return (
    <Section id="contact" label="Get In Touch" title="Contact ACG Car Travels Amalapuram">
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="ACG Car Travels" />
          <meta itemProp="telephone" content="+917382352666" />
          <meta itemProp="url" content="https://www.acgcartravels.com/" />
          {cards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.link || undefined}
              target={c.link?.startsWith("http") ? "_blank" : undefined}
              rel={c.link?.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={`${c.label}: ${c.value} — ACG Car Travels Amalapuram`}
              title={`${c.label} — ACG Car Travels`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`block bg-[#0f0f0f] border border-gold/20 p-5 hover:border-gold/60 hover:-translate-y-0.5 transition-all duration-300 ${
                c.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full border border-gold/40 bg-black/40 flex items-center justify-center flex-shrink-0">
                  <c.icon className="text-gold" size={22} aria-hidden="true" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">{c.label}</div>
                  <div className={`mt-1 font-display text-xl ${c.highlight ? "text-gold" : "text-foreground"}`}>
                    {c.value}
                  </div>
                </div>
              </div>
            </motion.a>
          ))}

          {/* Hidden microdata address block */}
          <div
            className="hidden"
            itemScope
            itemType="https://schema.org/PostalAddress"
            itemProp="address"
          >
            <span itemProp="streetAddress">Door No: 5-2, 147, Sriramapuram</span>,
            <span itemProp="addressLocality">Amalapuram</span>,
            <span itemProp="addressRegion">Andhra Pradesh</span>
            <span itemProp="postalCode">533201</span>,
            <span itemProp="addressCountry">IN</span>
          </div>
        </div>

        {/* ✅ FIX: Use Maps Embed API (proper method, not deprecated ?output=embed) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="border border-gold/20 overflow-hidden h-full min-h-[400px]"
        >
          <iframe
            title="ACG Car Travels — Location Map: Door No 5-2, 147, Sriramapuram, Amalapuram, Andhra Pradesh"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7647.900447979705!2d81.99718668991932!3d16.57901300865143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37efec795c9b65%3A0xa048beef324ef7d3!2sACG%20TAXI%20SERVICE%20AMALAPURAM!5e0!3m2!1sen!2sin!4v1782315729830!5m2!1sen!2sin"
            className="w-full h-full min-h-[400px]"
            style={{ filter: "grayscale(0.6) invert(0.92) hue-rotate(180deg)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Map showing ACG Car Travels location in Amalapuram, Andhra Pradesh — Door No 5-2, 147, Sriramapuram"
          />
        </motion.div>
      </div>
    </Section>
  );
}
