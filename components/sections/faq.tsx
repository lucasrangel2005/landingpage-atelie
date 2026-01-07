"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-16 overflow-hidden bg-sand/20">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-heading text-3xl tracking-wide text-sage md:text-4xl">{site.faq.title}</h2>
        </motion.div>

        <div className="mx-auto mt-10 max-w-3xl">
          {site.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div 
                key={f.q} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="border-b border-black/10"
              >
                <motion.button
                  onClick={() => setOpen(isOpen ? null : i)}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left group"
                >
                  <div className="text-base font-semibold text-ink group-hover:text-sage transition-colors duration-300">{f.q}</div>
                  <motion.div 
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="text-2xl leading-none text-ink/50 group-hover:text-accent transition-colors duration-300"
                  >
                    +
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    >
                      <p className="pb-5 text-sm text-ink/70 md:text-base">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
