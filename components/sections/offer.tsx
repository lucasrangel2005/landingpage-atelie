"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Offer() {
  return (
    <section className="bg-paper px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur md:p-8"
          >
            <div className="grid gap-4">
              {site.offer.details.map((d) => (
                <div key={d.k} className="flex items-baseline justify-between gap-4 border-b border-black/5 pb-3">
                  <div className="text-sm font-semibold text-ink/80">{d.k}</div>
                  <div className="text-sm text-ink/65">{d.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
