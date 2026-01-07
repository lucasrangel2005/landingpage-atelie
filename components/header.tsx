"use client";
import React, { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
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
  const { scrollY } = useScroll();
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    if (latest > previous && latest > 150) {
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
      <div className="mx-auto flex items-center justify-between px-20 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-cream/20 border border-brand-cream/15 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <span className="font-heading text-xl leading-none text-brand-cream">
              {site.brand.logoText}
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-heading text-lg group-hover:text-accent transition-colors duration-300">{site.brand.name}</div>
            <div className="text-xs text-brand-cream/80">{site.footer.brandLine}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-semibold tracking-wide md:flex">
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

        <div className="w-[244px]"></div>
      </div>
    </motion.header>
  );
}
