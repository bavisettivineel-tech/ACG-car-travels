import { Section } from "./Section";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excellent service! The driver was very professional and reached on time. The car was clean and comfortable. Highly recommend ACG Car Travels for any trip.",
    name: "Ravi Kumar",
    location: "Amalapuram",
    source: "Google Review",
    initial: "R",
    date: "2025-12-15",
  },
  {
    text: "Booked for my wedding and they exceeded all expectations. Beautiful decorated cars, punctual service, and the driver was very cooperative throughout the event.",
    name: "Priya Reddy",
    location: "Amalapuram",
    source: "Google Review",
    initial: "P",
    date: "2026-01-08",
  },
  {
    text: "Used their service for Hyderabad outstation. Comfortable Innova, experienced driver who knew all the routes well. Reached safely and on time. Will definitely book again.",
    name: "Suresh Babu",
    location: "Amalapuram",
    source: "Google Review",
    initial: "S",
    date: "2026-02-20",
  },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      label="Customer Reviews"
      title="What Passengers Say — ACG Car Travels"
      subtitle="Real reviews from real passengers. Amalapuram's most trusted car travels service rated 5.0 ★ on Google with 58 verified reviews."
      bgClass="bg-[#050505]"
    >
      <div className="grid md:grid-cols-3 gap-6" itemScope itemType="https://schema.org/ItemList">
        <meta itemProp="name" content="ACG Car Travels Amalapuram Customer Reviews" />
        {testimonials.map((t, i) => (
          <motion.article
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.12 }}
            className="relative bg-[#0f0f0f] border border-gold/20 p-7 overflow-hidden"
            itemScope
            itemType="https://schema.org/Review"
            itemProp="itemListElement"
          >
            <meta itemProp="itemReviewed" content="ACG Car Travels Amalapuram" />
            <meta itemProp="datePublished" content={t.date} />
            <Quote className="absolute -top-2 -left-2 text-gold/10" size={120} strokeWidth={1} aria-hidden="true" />
            <div className="relative">
              <div
                className="flex gap-1 text-gold mb-4"
                aria-label="5 out of 5 stars"
                itemProp="reviewRating"
                itemScope
                itemType="https://schema.org/Rating"
              >
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
                <meta itemProp="worstRating" content="1" />
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} fill="currentColor" aria-hidden="true" />
                ))}
              </div>
              <blockquote
                className="font-accent italic text-lg text-foreground/85 leading-relaxed mb-6"
                itemProp="reviewBody"
              >
                {t.text}
              </blockquote>
              <div className="flex items-center gap-3 pt-4 border-t border-gold/15">
                <div className="w-11 h-11 rounded-full gold-gradient flex items-center justify-center font-display text-xl text-black" aria-hidden="true">
                  {t.initial}
                </div>
                <div itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="font-display text-foreground" itemProp="name">{t.name}</div>
                  <div className="text-xs text-foreground/50 uppercase tracking-widest">
                    {t.location} · {t.source}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Aggregate rating CTA */}
      <div className="mt-12 text-center" itemScope itemType="https://schema.org/AggregateRating" itemProp="aggregateRating">
        <meta itemProp="itemReviewed" content="ACG Car Travels Amalapuram" />
        <meta itemProp="ratingValue" content="5.0" />
        <meta itemProp="bestRating" content="5" />
        <meta itemProp="ratingCount" content="58" />
        <p className="text-foreground/50 text-sm">
          <span className="text-gold font-bold text-lg">★ 5.0</span>&nbsp;based on&nbsp;
          <span className="text-gold font-bold">58 Google Reviews</span>&nbsp;— Amalapuram's highest-rated car travels service
        </p>
        <a
          href="https://wa.me/917382352666?text=Hi, I want to book a cab with ACG Car Travels Amalapuram"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Book ACG Car Travels Amalapuram via WhatsApp"
          title="Book ACG Car Travels — #1 Car Travels in Amalapuram"
          className="shimmer inline-block mt-6 clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest px-8 py-3 text-sm gold-glow"
        >
          Book Your Ride Now
        </a>
      </div>
    </Section>
  );
}
