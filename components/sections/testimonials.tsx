"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-paper px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-wide text-sage md:text-4xl">
            {site.testimonials.title}
          </h2>
          <p className="mt-3 text-base text-ink/70 md:text-lg">{site.testimonials.subtitle}</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {site.testimonials.items.map((t, idx) => (
            <motion.div
              key={t.name + idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: Math.min(idx, 5) * 0.05 }}
              className="rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur"
            >
              <div className="text-sm text-ink/70">“{t.text}”</div>
              <div className="mt-5 text-sm font-semibold text-ink">{t.name}</div>
              <div className="mt-2 text-xs text-ink/50">★★★★★</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
