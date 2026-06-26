import { Logo } from "./Logo";
import { Phone, MessageCircle, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-gold/15 pt-16 pb-6 grain relative">
      {/* SEO keyword block — visible to crawlers, screen-reader friendly */}
      <div className="sr-only">
        ACG Car Travels — best car travels and cab service in Amalapuram, East Godavari, Andhra Pradesh.
        Car travels near Amalapuram. Nearby car travels Amalapuram. Nearest car travels Amalapuram.
        Travels in Amalapuram. Car travels near me. ACG Car Travels Amalapuram.
        Book outstation cab from Amalapuram to Hyderabad, Visakhapatnam (Vizag), Vijayawada, Tirupati, Rajahmundry.
        Toyota Innova Crysta hire Amalapuram. Tempo Traveller booking Amalapuram. Sedan taxi Amalapuram.
        Maruti Dzire taxi Amalapuram. Maruti Baleno cab Amalapuram. Toyota Glanza taxi Amalapuram.
        Maruti Ertiga cab Amalapuram. Force Urbania hire Amalapuram.
        Airport transfer Rajahmundry airport (Madhurapudi Airport). Airport cab Vizag airport. Wedding car rental Amalapuram.
        Corporate cab service Amalapuram. 24 hour taxi Amalapuram. Local cab Amalapuram. Tour packages from Amalapuram.
        Araku Valley tour from Amalapuram. Tirupati tour cab Amalapuram. East Godavari car travels.
        Best travels in Amalapuram. Best car travels Amalapuram. ACG car travels Amalapuram contact number.
        Call +91 73823 52666. WhatsApp +91 73823 52666. Website: www.acgcartravels.com.
        Address: Door No 5-2, 147, Sriramapuram, Amalapuram, Andhra Pradesh 533201.
        ACG Car Travels is the nearest car travels service in Amalapuram open 24 hours 7 days a week.
      </div>

      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand column with LocalBusiness microdata */}
          <div itemScope itemType="https://schema.org/LocalBusiness">
            <meta itemProp="name" content="ACG Car Travels" />
            <meta itemProp="telephone" content="+917382352666" />
            <meta itemProp="url" content="https://www.acgcartravels.com/" />
            <Logo />
            <p className="mt-4 text-sm text-foreground/55 leading-relaxed">
              Amalapuram's nearest car travels and cab service, serving passengers across AP and Telangana with 5-star rated service. Call anytime:{" "}
              <a
                href="tel:+917382352666"
                aria-label="Call ACG Car Travels at +91 7382352666"
                className="text-gold hover:text-gold-light"
                itemProp="telephone"
              >
                +91 73823 52666
              </a>.
            </p>
            <address
              className="mt-3 text-xs text-foreground/40 not-italic leading-relaxed"
              itemProp="address"
              itemScope
              itemType="https://schema.org/PostalAddress"
            >
              <span itemProp="streetAddress">Door No: 5-2, 147, Sriramapuram</span>,&nbsp;
              <span itemProp="addressLocality">Amalapuram</span>,&nbsp;
              <span itemProp="addressRegion">Andhra Pradesh</span>&nbsp;
              <span itemProp="postalCode">533201</span>
            </address>
            <div className="flex gap-3 mt-5">
              <a
                href="https://wa.me/917382352666?text=Hi, I want to book a cab with ACG Car Travels Amalapuram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with ACG Car Travels on WhatsApp"
                title="WhatsApp ACG Car Travels — Amalapuram Car Travels"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors"
              >
                <MessageCircle size={18} aria-hidden="true" />
              </a>
              <a
                href="tel:+917382352666"
                aria-label="Call ACG Car Travels at +91 7382352666"
                title="Call ACG Car Travels — Best Car Travels Amalapuram"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors"
              >
                <Phone size={18} aria-hidden="true" />
              </a>
              <a
                href="https://maps.google.com/?q=ACG+Car+Travels+Amalapuram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find ACG Car Travels on Google Maps"
                title="ACG Car Travels Location — Amalapuram, East Godavari"
                className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors text-xs font-bold"
              >
                <span aria-hidden="true">MAP</span>
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h4 className="font-display text-lg text-gold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {[
                ["Taxi Service Amalapuram", "/taxi-service-amalapuram"],
                ["Outstation Cab Service", "/outstation-cab-amalapuram"],
                ["Airport Transfers", "/airport-transfer-amalapuram"],
                ["Tour Packages", "/tour-packages-amalapuram"],
                ["Innova Crysta Hire", "/innova-crysta-amalapuram"],
                ["Tempo Traveller Hire", "/tempo-traveller-amalapuram"],
              ].map(([s, h]) => (
                <li key={s}>
                  <a href={h} className="hover:text-gold transition-colors" title={`${s} — ACG Car Travels Amalapuram`}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet column */}
          <div>
            <h4 className="font-display text-lg text-gold mb-4">Our Fleet</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {[
                ["Sedan — Etios / Dzire", "/taxi-service-amalapuram"],
                ["Innova Crysta (7-Seater)", "/innova-crysta-amalapuram"],
                ["Tempo Traveller (12–17 Seater)", "/tempo-traveller-amalapuram"],
                ["Maruti Ertiga", "/taxi-service-amalapuram"],
                ["Maruti Baleno", "/taxi-service-amalapuram"],
                ["Toyota Glanza", "/taxi-service-amalapuram"],
                ["Force Urbania (Luxury Van)", "/taxi-service-amalapuram"],
              ].map(([s, h]) => (
                <li key={s}>
                  <a href={h} className="hover:text-gold transition-colors" title={`${s} — ACG Car Travels Amalapuram`}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links column */}
          <div>
            <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {[
                ["Home", "/"],
                ["Taxi Service", "/taxi-service-amalapuram"],
                ["Outstation Cab", "/outstation-cab-amalapuram"],
                ["Airport Transfer", "/airport-transfer-amalapuram"],
                ["Tour Packages", "/tour-packages-amalapuram"],
                ["Innova Crysta", "/innova-crysta-amalapuram"],
                ["Tempo Traveller", "/tempo-traveller-amalapuram"],
              ].map(([l, h]) => (
                <li key={l}>
                  <a href={h} className="hover:text-gold transition-colors" title={`ACG Car Travels — ${l}`}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>

            {/* Routes callout */}
            <div className="mt-6 pt-5 border-t border-gold/15">
              <h4 className="font-display text-sm text-gold/80 mb-2 uppercase tracking-widest">Popular Routes</h4>
              <ul className="space-y-1 text-xs text-foreground/50">
                {[
                  "Amalapuram → Hyderabad",
                  "Amalapuram → Vizag",
                  "Amalapuram → Vijayawada",
                  "Amalapuram → Tirupati",
                  "Amalapuram → Rajahmundry",
                ].map((r) => (
                  <li key={r}>
                    <a href="#routes" className="hover:text-gold transition-colors">
                      {r}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground/40">
          <div>
            © 2026{" "}
            <strong className="text-foreground/60">ACG Car Travels</strong>, Amalapuram, Andhra Pradesh. All rights reserved.{" "}
            |{" "}
            <span className="text-gold/60">Best Car Travels &amp; Cab Service Amalapuram</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gold" aria-label="5 star Google rating with 200\+ reviews">
              <Star size={12} fill="currentColor" aria-hidden="true" /> 5.0 · 200\+ Google Reviews
            </span>
            <a
              href="tel:+917382352666"
              className="text-gold hover:text-gold-light"
              aria-label="Call ACG Car Travels Amalapuram"
            >
              +91 73823 52666
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
