import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Link, useLocation } from "react-router-dom";

const serviceLinks = [
  { label: "Taxi Service", href: "/taxi-service-amalapuram" },
  { label: "Outstation", href: "/outstation-cab-amalapuram" },
  { label: "Airport", href: "/airport-transfer-amalapuram" },
  { label: "Tours", href: "/tour-packages-amalapuram" },
];

const homeLinks = [
  { label: "Fleet", href: "#fleet" },
  { label: "Why Us", href: "#why" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Helper: anchor links scroll on homepage, navigate home+anchor from other pages
  function AnchorLink({ href, label, className, onClick }: { href: string; label: string; className?: string; onClick?: () => void }) {
    if (isHome) {
      return (
        <a href={href} className={className} onClick={onClick}
          title={`ACG Car Travels — ${label}`}
          aria-label={`Navigate to ${label} — ACG Car Travels`}>
          {label}
        </a>
      );
    }
    return (
      <Link to={`/${href}`} className={className} onClick={onClick}
        title={`ACG Car Travels — ${label}`}
        aria-label={`Navigate to ${label} — ACG Car Travels`}>
        {label}
      </Link>
    );
  }

  return (
    <>
      <header
        role="banner"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-black/70 border-b border-gold/20 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          <Link to="/" aria-label="ACG Car Travels — Home" title="ACG Car Travels Amalapuram — #1 Car Travels & Cab Service">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-6" aria-label="ACG Car Travels main navigation">
            {/* Real page links */}
            {serviceLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                title={`ACG Car Travels — ${l.label}`}
                aria-label={`${l.label} — ACG Car Travels Amalapuram`}
                className="text-sm font-body uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {/* Divider */}
            <span className="w-px h-5 bg-gold/20" aria-hidden="true" />

            {/* Anchor section links (homepage only) */}
            {homeLinks.map((l) => (
              <AnchorLink
                key={l.href}
                href={l.href}
                label={l.label}
                className="text-sm font-body uppercase tracking-widest text-foreground/80 hover:text-gold transition-colors relative group"
              />
            ))}

            <Link
              to={isHome ? "#booking" : "/#booking"}
              title="Book a Cab — ACG Car Travels Amalapuram"
              aria-label="Book a cab with ACG Car Travels in Amalapuram"
              className="px-5 py-2 border border-gold text-gold uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-black transition-all clip-parallelogram"
            >
              Book Now
            </Link>
          </nav>

          <button
            className="lg:hidden text-gold p-2"
            onClick={() => setOpen(true)}
            aria-label="Open navigation menu — ACG Car Travels"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col" role="dialog" aria-label="Mobile navigation menu">
          <div className="flex items-center justify-between p-5 border-b border-gold/20">
            <Logo />
            <button onClick={() => setOpen(false)} className="text-gold" aria-label="Close menu">
              <X size={32} />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-6" aria-label="Mobile navigation">
            <div className="text-[10px] uppercase tracking-widest text-gold/50 mb-2">Services</div>
            {serviceLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-gold hover:text-gold-light"
              >
                {l.label}
              </Link>
            ))}
            <div className="w-16 h-px bg-gold/20 my-2" />
            <div className="text-[10px] uppercase tracking-widest text-gold/50 mb-2">Sections</div>
            {homeLinks.map((l) => (
              <AnchorLink
                key={l.href}
                href={l.href}
                label={l.label}
                className="font-display text-2xl text-foreground/80 hover:text-gold"
                onClick={() => setOpen(false)}
              />
            ))}
            <Link
              to={isHome ? "#booking" : "/#booking"}
              onClick={() => setOpen(false)}
              className="mt-4 px-8 py-3 gold-gradient text-black font-bold uppercase tracking-widest clip-parallelogram"
              title="Book Now — ACG Car Travels Amalapuram"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
