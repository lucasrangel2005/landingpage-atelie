"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function Contact() {
  return (
    <section id="contato" className="bg-sage px-6 py-16 text-paper overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="font-display text-2xl">{site.brand.name}</div>
            <div className="mt-2 text-sm text-paper/80">{site.footer.brandLine}</div>
            <div className="mt-6">
              <WhatsAppLink className="inline-flex items-center justify-center rounded-md bg-paper px-6 py-3 text-sm font-bold tracking-wide text-sage shadow-soft hover:bg-accent hover:text-paper hover:shadow-xl hover:scale-105 transition-all duration-300">
                {site.offer.ctaLabel}
              </WhatsAppLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div className="text-sm font-semibold tracking-wide text-paper/90">Localização</div>
            <p className="mt-3 text-sm text-paper/80">{site.footer.location}</p>
            <p className="mt-4 text-xs text-paper/60">(Substitua pelo endereço/bairro se quiser.)</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div className="text-sm font-semibold tracking-wide text-paper/90">Contato</div>
            <div className="mt-3 grid gap-3 text-sm">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="text-paper/80 hover:text-paper hover:translate-x-1 transition-all duration-300"
              >
                Instagram
              </a>
              <a
                href={site.social.youtube}
                target="_blank"
                rel="noreferrer noopener"
                className="text-paper/80 hover:text-paper hover:translate-x-1 transition-all duration-300"
              >
                YouTube
              </a>
              <a
                href="#top"
                className="text-paper/80 hover:text-paper hover:translate-x-1 transition-all duration-300"
              >
                Voltar ao topo
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 border-t border-paper/20 pt-8 text-center text-xs text-paper/70"
        >
          © {new Date().getFullYear()} • {site.footer.credits}
        </motion.div>
      </div>
    </section>
  );
}
