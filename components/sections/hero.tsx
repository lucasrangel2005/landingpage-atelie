"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { site } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

function VideoEmbed({ url }: { url: string }) {
  if (url.endsWith(".mp4")) {
    return (
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="h-full w-full rounded-xl bg-black object-cover"
      >
        <source src={url} type="video/mp4" />
      </video>
    );
  }

  // Para YouTube, extrair o ID do vídeo e usar com parâmetros de autoplay
  const getYouTubeEmbedUrl = (youtubeUrl: string) => {
    const videoId = youtubeUrl.split("youtu.be/")[1] || youtubeUrl.split("v=")[1]?.split("&")[0];
    if (!videoId) return youtubeUrl;
    // Parâmetros: autoplay=1 (autoplay), mute=1 (sem som), controls=0 (sem controles), loop=1 (repetir)
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}`;
  };

  return (
    <iframe
      className="h-full w-full rounded-xl"
      src={getYouTubeEmbedUrl(url)}
      title="Vídeo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);

  return (
    <section id="top" className="bg-transparent overflow-hidden" ref={ref}>
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ y, opacity }}
        className="relative h-[360px] w-full md:h-[520px]"
      >
        <Image
          src={site.media.heroImageSrc}
          alt={site.media.heroImageAlt}
          fill
          priority
          className="object-cover"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-paper/70 via-paper/10 to-black/10"
          aria-hidden="true"
        />
      </motion.div>

      <div className="px-6 py-14 bg-white">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display text-[42px] leading-[1.05] tracking-wide text-sage md:text-5xl"
          >
            {site.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-5 max-w-2xl text-base text-ink/75 md:text-lg"
          >
            {site.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mt-10 w-full max-w-[560px]"
          >
            <div className="aspect-video overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="h-full w-full p-2">
                <VideoEmbed url={site.media.videoUrl} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
            className="mt-10"
          >
            <WhatsAppLink className="inline-flex items-center justify-center rounded-md bg-sage px-8 py-3 text-sm font-bold tracking-wide text-paper shadow-soft hover:bg-accent hover:shadow-xl hover:scale-105 transition-all duration-300">
              {site.hero.ctaLabel}
            </WhatsAppLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
