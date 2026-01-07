"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function About() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-2xl bg-white shadow-soft"
          >
            <div className="aspect-[4/3]">
              <Image
                src="/about.jpg"
                alt="Foto da artesã (substitua)"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.45, delay: 0.05 }}
          >
            <h2 className="font-display text-3xl tracking-wide text-sage md:text-4xl">
              {site.about.title}
            </h2>
            <p className="mt-4 text-base text-ink/70 md:text-lg">{site.about.text}</p>

            <div className="mt-6 text-lg font-semibold text-ink">{site.about.name}</div>
            <div className="mt-1 text-sm text-ink/60">{site.brand.name}</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
