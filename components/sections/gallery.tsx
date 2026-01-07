"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Gallery() {
  return (
    <section id="galeria" className="bg-paper px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-wide text-sage md:text-4xl">
            {site.gallery.title}
          </h2>
          <p className="mt-3 text-base text-ink/70 md:text-lg">
            {site.gallery.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {site.gallery.images.map((img, idx) => (
            <motion.div
              key={img.src + idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: Math.min(idx, 5) * 0.05 }}
              className={
                idx === 0
                  ? "relative col-span-2 overflow-hidden rounded-2xl bg-white shadow-soft md:col-span-2 md:row-span-2"
                  : "relative overflow-hidden rounded-2xl bg-white shadow-soft"
              }
            >
              <div className={idx === 0 ? "aspect-[16/10] md:aspect-[16/9]" : "aspect-square"}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
