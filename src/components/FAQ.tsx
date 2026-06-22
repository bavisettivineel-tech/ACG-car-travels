import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Section } from "./Section";

const faqs = [
  {
    q: "Which is the best car travels near Amalapuram?",
    a: "ACG Car Travels is the best and nearest car travels in Amalapuram with a perfect 5.0 Google rating from 58 verified reviews. We are available 24/7 for local drops, outstation trips, airport transfers, wedding cars and tour packages. Call +91 7382352666.",
  },
  {
    q: "What is the cab fare from Amalapuram to Hyderabad?",
    a: "ACG Car Travels offers outstation cab service from Amalapuram to Hyderabad (~470 km, ~9 hrs). Sedan from ₹12/km, Innova Crysta at ₹16/km and Tempo Traveller at ₹22/km. Contact +91 7382352666 for exact fare and best rates.",
  },
  {
    q: "Does ACG Car Travels provide 24/7 cab service near Amalapuram?",
    a: "Yes, ACG Car Travels provides 24/7 round-the-clock car travels and cab service in Amalapuram and all surrounding areas including Kakinada, Rajahmundry, Vizag and all of Andhra Pradesh & Telangana. Call +91 7382352666 anytime.",
  },
  {
    q: "What cars are available for rent in Amalapuram?",
    a: "ACG Car Travels offers 8 vehicle types: Sedan (Toyota Etios/Dzire), Toyota Innova Crysta (7-seater), Tempo Traveller (12–17 seater), Maruti Ertiga, Maruti Dzire, Maruti Baleno, Toyota Glanza, and Force Urbania luxury van for local, outstation, airport and tour trips in Amalapuram.",
  },
  {
    q: "How do I book a cab in Amalapuram?",
    a: "Book a cab in Amalapuram instantly by calling +91 7382352666 or sending a WhatsApp message to the same number. You can also use our online booking form at acgcartravels.com. ACG Car Travels confirms your booking immediately.",
  },
  {
    q: "Does ACG Car Travels offer airport transfer from Amalapuram?",
    a: "Yes, ACG Car Travels provides airport cab service from Amalapuram to Rajahmundry Airport (Madhurapudi Airport) and Visakhapatnam Airport with flight tracking, on-time guarantee, meet & greet service and 24/7 availability.",
  },
  {
    q: "Does ACG Car Travels provide wedding car service in Amalapuram?",
    a: "Yes, ACG Car Travels offers premium wedding car rental in Amalapuram with decorated luxury cars, fleet bookings for baraat and procession, and guest shuttle services for all wedding and event needs.",
  },
  {
    q: "What tour packages does ACG Car Travels offer from Amalapuram?",
    a: "ACG Car Travels offers custom tour packages from Amalapuram to Araku Valley, Borra Caves, Tirupati, Srisailam, Lambasingi, Vanajangi, Pancharamalu temples, Bhadrachalam, Maredumilli and more across Andhra Pradesh & Telangana.",
  },
  {
    q: "What is the contact number of ACG Car Travels Amalapuram?",
    a: "You can reach ACG Car Travels Amalapuram at +91 7382352666 (call or WhatsApp). We are available 24 hours a day, 7 days a week for all car travels and cab booking needs.",
  },
  {
    q: "What is ACG Car Travels and where are they located?",
    a: "ACG Car Travels is Amalapuram's #1 rated car travels and cab service, located at Door No: 5-2, 147, Sriramapuram, Amalapuram, Andhra Pradesh 533201. We are the nearest car travels in Amalapuram available 24/7. Call +91 7382352666 to book.",
  },
];

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-gold/20 bg-[#0f0f0f] overflow-hidden"
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gold/5 transition-colors group"
      >
        <h3
          className="font-display text-base md:text-lg text-foreground group-hover:text-gold transition-colors"
          itemProp="name"
        >
          {faq.q}
        </h3>
        <ChevronDown
          size={20}
          className={`text-gold flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
            itemScope
            itemProp="acceptedAnswer"
            itemType="https://schema.org/Answer"
          >
            <p
              className="px-6 pb-6 text-foreground/65 text-sm leading-relaxed border-t border-gold/10 pt-4"
              itemProp="text"
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQ() {
  return (
    <Section
      id="faq"
      label="FAQ"
      title="Frequently Asked Questions — Car Travels Amalapuram"
      subtitle="Everything you need to know about ACG Car Travels — Amalapuram's nearest and most trusted cab service."
      bgClass="bg-[#050505]"
    >
      {/* itemScope on the FAQPage container — matches JSON-LD schema */}
      <div
        className="max-w-3xl mx-auto space-y-3"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        {faqs.map((faq, i) => (
          <FAQItem key={faq.q} faq={faq} index={i} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <p className="text-foreground/50 text-sm mb-4">
          Have more questions? Call us anytime — we're available 24/7.
        </p>
        <a
          href="tel:+917382352666"
          aria-label="Call ACG Car Travels Amalapuram"
          title="Call ACG Car Travels — Best Car Travels in Amalapuram"
          className="shimmer inline-block clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest px-8 py-3 text-sm gold-glow"
        >
          Call +91 7382352666
        </a>
      </div>
    </Section>
  );
}
