"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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

        <div className="mt-10 space-y-8 md:space-y-12">
          {site.gallery.images.map((img, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={img.src + idx}
                initial={{ opacity: 0, x: isEven ? -60 : 60, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.1,
                  ease: [0.25, 0.1, 0.25, 1]
                }}
                className={`flex flex-col md:flex-row items-center gap-6 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                style={{
                  marginLeft: isEven ? '0' : 'auto',
                  marginRight: isEven ? 'auto' : '0',
                  maxWidth: '90%',
                }}
              >
                <motion.div
                  onHoverStart={() => setHoveredIndex(idx)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  whileHover={{ scale: 1.05, y: -10, rotate: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative w-full md:w-2/3 overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                  style={{ transformOrigin: "center center" }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-full h-full relative"
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {hoveredIndex === idx && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-xl"
                      >
                        <p className="text-sm text-ink/80 font-medium">
                          {img.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                  className={`w-full md:w-1/3 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-soft ${
                    isEven ? "md:ml-6" : "md:mr-6"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sage mb-2">Etapa {idx + 1}</h3>
                      <p className="text-sm text-ink/70 leading-relaxed">
                        {img.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
