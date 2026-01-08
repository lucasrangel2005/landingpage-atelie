"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="grid h-9 w-9 place-items-center rounded-full bg-brand-cream/15 text-brand-cream/90 hover:bg-brand-cream/25 hover:text-accent hover:scale-110 hover:rotate-12 transition-all duration-300"
    >
      {children}
    </a>
  );
}

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150 && !mobileMenuOpen) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    
    setAtTop(latest < 50);
  });

  return (
    <motion.header 
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`sticky top-0 z-50 text-brand-cream transition-all duration-300 ${
        atTop 
          ? "bg-brand-wine/80 shadow-none" 
          : "bg-brand-wine/95 shadow-lg backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group flex-shrink-0">
          <div className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-brand-cream/20 border border-brand-cream/15 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <span className="font-heading text-lg sm:text-xl leading-none text-brand-cream">
              {site.brand.logoText}
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-heading text-sm sm:text-base lg:text-lg group-hover:text-accent transition-colors duration-300">{site.brand.name}</div>
            <div className="text-[10px] sm:text-xs text-brand-cream/80">{site.footer.brandLine}</div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold tracking-wide">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-brand-cream/90 hover:text-brand-cream hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a href="#contato" className="text-brand-cream/90 hover:text-brand-cream hover:scale-110 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
            CONTATO
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            if (hidden) setHidden(false); // Mostra header se estiver hidden
          }}
          className="lg:hidden p-2 text-brand-cream hover:text-accent transition-colors"
          aria-label="Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-brand-cream/10 bg-brand-wine/98 backdrop-blur-md"
          >
            <nav className="flex flex-col px-4 py-4 space-y-3">
              {site.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileMenuOpen(false);
                    setTimeout(() => {
                      const element = document.querySelector(item.href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }}
                  className="text-brand-cream/90 hover:text-brand-cream hover:bg-brand-cream/10 px-4 py-3 rounded-lg transition-all duration-300 text-sm font-semibold tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={(e) => {
                  e.preventDefault();
                  setMobileMenuOpen(false);
                  setTimeout(() => {
                    const element = document.querySelector("#contato");
                    element?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="text-brand-cream/90 hover:text-brand-cream hover:bg-brand-cream/10 px-4 py-3 rounded-lg transition-all duration-300 text-sm font-semibold tracking-wide"
              >
                CONTATO
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
