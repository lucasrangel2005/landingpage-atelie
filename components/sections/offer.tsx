"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Offer() {
  return (
    <section className="bg-paper px-6 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02, y: -8 }}
            className="rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur md:p-8 hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid gap-4">
              {site.offer.details.map((d, idx) => (
                <motion.div 
                  key={d.k} 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-baseline justify-between gap-4 border-b border-black/5 pb-3 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="text-sm font-semibold text-ink/80">{d.k}</div>
                  <div className="text-sm text-ink/65">{d.v}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
