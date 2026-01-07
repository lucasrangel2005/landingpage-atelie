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
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-6 py-4">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-brand-cream/20 border border-brand-cream/15 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
            <span className="font-display text-xl leading-none text-brand-cream">
              {site.brand.logoText}
            </span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg group-hover:text-accent transition-colors duration-300">{site.brand.name}</div>
            <div className="text-xs text-brand-cream/80">{site.footer.brandLine}</div>
          </div>
        </a>

        <nav className="ml-auto hidden items-center gap-6 text-sm font-semibold tracking-wide md:flex">
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

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <WhatsAppLink className="rounded-md bg-brand-cream px-4 py-2 text-sm font-bold text-brand-wine shadow-soft hover:bg-accent hover:text-paper hover:scale-105 transition-all duration-300">
            WHATSAPP
          </WhatsAppLink>

          <div className="hidden items-center gap-2 sm:flex">
            <SocialIcon href={site.social.instagram} label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm9 2h-9A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4Zm-4.5 4a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.75 6.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"
                />
              </svg>
            </SocialIcon>

            <SocialIcon href={site.social.youtube} label="YouTube">
              <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
                <path
                  fill="currentColor"
                  d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.4 31.4 0 0 0 2 12a31.4 31.4 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.4 31.4 0 0 0 22 12a31.4 31.4 0 0 0-.4-4.8ZM10 15.5v-7l6 3.5-6 3.5Z"
                />
              </svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
