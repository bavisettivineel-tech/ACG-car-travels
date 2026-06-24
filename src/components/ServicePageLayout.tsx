import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingButtons } from "./FloatingButtons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  schema: object;
  canonical: string;
  metaTitle: string;
  metaDescription: string;
}

export function ServicePageLayout({ title, subtitle, children, schema, canonical, metaTitle, metaDescription }: Props) {
  // Update document head dynamically
  if (typeof document !== "undefined") {
    document.title = metaTitle;
    let desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", metaDescription);
    let can = document.querySelector('link[rel="canonical"]');
    if (can) can.setAttribute("href", canonical);
  }

  return (
    <div className="bg-[#050505] text-foreground">
      {/* Inject JSON-LD for this page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Navbar />
      <main>
        {/* Hero banner */}
        <section
          className="relative pt-36 pb-20 px-5 bg-[#050505] border-b border-gold/10 overflow-hidden"
          aria-label={title}
        >
          <div className="absolute inset-0 bg-radial-gold pointer-events-none opacity-40" />
          <div className="max-w-5xl mx-auto relative z-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold/70 hover:text-gold mb-8 transition-colors"
            >
              <ArrowLeft size={14} aria-hidden="true" /> Back to Home
            </Link>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-display font-black text-4xl md:text-6xl gold-text-gradient leading-tight"
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-foreground/65 text-lg max-w-2xl leading-relaxed"
            >
              {subtitle}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="tel:+917382352666"
                className="shimmer clip-parallelogram gold-gradient text-black font-bold uppercase tracking-widest px-8 py-3 text-sm inline-flex items-center gap-2"
                aria-label="Call ACG Car Travels Amalapuram"
              >
                <Phone size={16} aria-hidden="true" /> Call Now
              </a>
              <a
                href="https://wa.me/917382352666"
                target="_blank"
                rel="noopener noreferrer"
                className="clip-parallelogram border-2 border-gold text-gold font-bold uppercase tracking-widest px-8 py-3 text-sm hover:bg-gold hover:text-black transition-colors"
              >
                WhatsApp Us
              </a>
            </motion.div>
          </div>
        </section>

        {/* Page content */}
        <div className="max-w-5xl mx-auto px-5 py-16">
          {children}
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
