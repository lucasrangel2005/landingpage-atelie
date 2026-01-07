"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-paper px-6 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl tracking-wide text-sage md:text-4xl">
            {site.testimonials.title}
          </h2>
          <p className="mt-3 text-base text-ink/70 md:text-lg">{site.testimonials.subtitle}</p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {site.testimonials.items.map((t, idx) => (
            <motion.div
              key={t.name + idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: Math.min(idx, 5) * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              whileHover={{ scale: 1.05, y: -10, rotate: 0 }}
              className="rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="text-sm text-ink/70">“{t.text}”</div>
              <div className="mt-5 text-sm font-semibold text-ink">{t.name}</div>
              <div className="mt-2 text-xs text-accent">★★★★★</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
