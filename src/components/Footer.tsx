import { Logo } from "./Logo";
import { Phone, MessageCircle, Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#020202] border-t border-gold/15 pt-16 pb-6 grain relative">
      {/* SEO keyword block — screen-reader & crawler friendly */}
      <div className="sr-only" aria-hidden="true">
        ACG Car Travels — best car rental and cab service in Amalapuram, East Godavari, Andhra Pradesh.
        Car travels near Amalapuram. Nearby cab service Amalapuram. Travels in Amalapuram.
        Book outstation cab from Amalapuram to Hyderabad, Visakhapatnam (Vizag), Vijayawada, Tirupati, Rajahmundry.
        Toyota Innova Crysta hire Amalapuram. Tempo Traveller booking Amalapuram. Sedan taxi Amalapuram.
        Maruti Dzire taxi Amalapuram. Maruti Baleno cab Amalapuram. Toyota Glanza taxi Amalapuram.
        Maruti Ertiga cab Amalapuram. Force Urbania hire Amalapuram.
        Airport transfer Rajahmundry airport (Madhurapudi Airport). Airport cab Vizag airport. Wedding car rental Amalapuram.
        Corporate cab service Amalapuram. 24 hour taxi Amalapuram. Local cab Amalapuram. Tour packages from Amalapuram.
        Araku Valley tour from Amalapuram. Tirupati tour cab Amalapuram. East Godavari car travels.
        Best travels in Amalapuram. Best car travels Amalapuram. ACG car travels Amalapuram contact number.
        Call +91 73823 52666. WhatsApp +91 73823 52666. Website: acgcartravels.vercel.app.
        Address: Door No 5-2, 147, Sriramapuram, Amalapuram, Andhra Pradesh 533201.
      </div>
      <div className="max-w-7xl mx-auto px-5">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <Logo />
              <p className="mt-4 text-sm text-foreground/55 leading-relaxed">
                Premium car travels in Amalapuram, Andhra Pradesh — serving passengers across AP and Telangana with 5-star rated service. Call anytime: <a href="tel:+917382352666" className="text-gold hover:text-gold-light">+91 73823 52666</a>.
              </p>
              <div className="flex gap-3 mt-5">
                <a href="https://wa.me/917382352666" target="_blank" rel="noopener noreferrer" aria-label="Chat with ACG Car Travels on WhatsApp" title="WhatsApp ACG Car Travels" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                  <MessageCircle size={18} aria-hidden="true" />
                </a>
                <a href="tel:+917382352666" aria-label="Call ACG Car Travels at +91 7382352666" title="Call ACG Car Travels" className="w-10 h-10 rounded-full border border-gold/40 flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-colors">
                  <Phone size={18} aria-hidden="true" />
                </a>
              </div>
            </div>

          <div>
            <h4 className="font-display text-lg text-gold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              {["Local City Drops", "Outstation Trips", "Airport Transfers", "Tour Packages", "Wedding & Events", "Corporate Travel"].map((s) => (
                <li key={s} className="hover:text-gold cursor-pointer transition-colors">{s}</li>
              ))}
            </ul>
          </div>

            <div>
              <h4 className="font-display text-lg text-gold mb-4">Our Fleet</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                {[
                  ["Sedan — Etios / Dzire", "#fleet"],
                  ["Innova Crysta (7-Seater)", "#fleet"],
                  ["Tempo Traveller (12-17 Seater)", "#fleet"],
                  ["Maruti Ertiga", "#fleet"],
                  ["Maruti Baleno", "#fleet"],
                  ["Toyota Glanza", "#fleet"],
                  ["Force Urbania (Luxury Van)", "#fleet"],
                ].map(([s, h]) => (
                  <li key={s}><a href={h} className="hover:text-gold transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-lg text-gold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-foreground/60">
                {[["Fleet", "#fleet"], ["Packages", "#packages"], ["Routes", "#routes"], ["Why Us", "#why"], ["Book Now", "#booking"], ["Contact", "#contact"]].map(([l, h]) => (
                  <li key={l}><a href={h} className="hover:text-gold transition-colors" title={`ACG Car Travels — ${l}`}>{l}</a></li>
                ))}
              </ul>
            </div>
        </div>

        <div className="pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-foreground/40">
          <div>© 2026 ACG Car Travels, Amalapuram, Andhra Pradesh. All rights reserved. | Car Travels &amp; Cab Service Amalapuram</div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-gold" aria-label="5 star Google rating with 58 reviews">
              <Star size={12} fill="currentColor" aria-hidden="true" /> 5.0 · 58 Google Reviews
            </span>
            <a href="tel:+917382352666" className="text-gold hover:text-gold-light" aria-label="Call ACG Car Travels">+91 73823 52666</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
