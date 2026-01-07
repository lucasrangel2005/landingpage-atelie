"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function About() {
  return (
    <section className="px-6 py-16 overflow-hidden bg-paper">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ scale: 1.03, rotate: 1 }}
            className="relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-2xl transition-all duration-500 cursor-pointer"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full h-full"
              >
                <Image
                  src="/about.jpg"
                  alt="Foto da artesã (substitua)"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-heading text-3xl tracking-wide text-sage md:text-4xl"
            >
              {site.about.title}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-4 text-base text-ink/70 md:text-lg"
            >
              {site.about.text}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 text-lg font-semibold text-ink"
            >
              {site.about.name}
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-1 text-sm text-ink/60"
            >
              {site.brand.name}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
