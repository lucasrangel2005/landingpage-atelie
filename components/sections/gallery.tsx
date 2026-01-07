"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

export function Gallery() {
  return (
    <section id="galeria" className="bg-paper px-6 py-16 overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-3xl tracking-wide text-sage md:text-4xl">
            {site.gallery.title}
          </h2>
          <p className="mt-3 text-base text-ink/70 md:text-lg">
            {site.gallery.subtitle}
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {site.gallery.images.map((img, idx) => (
            <motion.div
              key={img.src + idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 1 : -1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ 
                duration: 0.6, 
                delay: Math.min(idx, 5) * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className={
                idx === 0
                  ? "relative col-span-2 overflow-hidden rounded-2xl bg-white shadow-soft md:col-span-2 md:row-span-2 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  : "relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-2xl transition-all duration-500 cursor-pointer"
              }
            >
              <div className={idx === 0 ? "aspect-[16/10] md:aspect-[16/9] overflow-hidden" : "aspect-square overflow-hidden"}>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
