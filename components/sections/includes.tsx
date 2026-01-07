"use client";

import { motion } from "framer-motion";
import { site } from "@/lib/site";

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9.0 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"
      />
    </svg>
  );
}

export function Includes() {
  return (
    <section id="inclui" className="px-6 py-16 overflow-hidden bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl tracking-wide text-sage md:text-4xl">
            {site.includes.title}
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur md:p-8 hover:shadow-2xl transition-all duration-500"
          >
            <ul className="grid gap-3 text-sm text-ink/80 md:text-base">
              {site.includes.items.map((it, idx) => (
                <motion.li 
                  key={it} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 text-sage">
                    <CheckIcon />
                  </span>
                  <span>{it}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="rounded-2xl bg-white/80 p-6 shadow-soft backdrop-blur md:p-8 hover:shadow-2xl transition-all duration-500"
          >
            <div className="text-center">
              <h3 className="font-display text-2xl tracking-wide text-sage">
                {site.includes.bonusTitle}
              </h3>
              <p className="mt-2 text-sm text-ink/70 md:text-base">
                {site.includes.bonusSubtitle}
              </p>
            </div>

            <ul className="mt-6 grid gap-3 text-sm text-ink/80 md:text-base">
              {site.includes.bonus.map((it, idx) => (
                <motion.li 
                  key={it} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 text-sage">
                    <CheckIcon />
                  </span>
                  <span>{it}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
