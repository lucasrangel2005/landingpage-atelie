"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { site } from "@/lib/site";
import { WhatsAppLink } from "@/components/whatsapp-link";

function VideoEmbed({ url }: { url: string }) {
  // Aceita:
  // - YouTube embed (https://www.youtube.com/embed/...) / Vimeo / qualquer URL de iframe
  // - arquivo .mp4 em /public
  if (url.endsWith(".mp4")) {
    return (
      <video
        controls
        preload="none"
        className="h-full w-full rounded-xl bg-black"
      >
        <source src={url} type="video/mp4" />
      </video>
    );
  }

  return (
    <iframe
      className="h-full w-full rounded-xl"
      src={url}
      title="Vídeo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}

export function Hero() {
  return (
    <section id="top" className="bg-paper">
      {/* Banner (imagem grande) – igual ao primeiro bloco do site de referência */}
      <div className="relative h-[360px] w-full md:h-[520px]">
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
      </div>

      {/* Conteúdo central (título + texto + vídeo + CTA) */}
      <div className="px-6 py-14">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="font-display text-[42px] leading-[1.05] tracking-wide text-sage md:text-5xl"
          >
            {site.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mx-auto mt-5 max-w-2xl text-base text-ink/75 md:text-lg"
          >
            {site.hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="mx-auto mt-10 w-full max-w-[560px]"
          >
            <div className="aspect-video overflow-hidden rounded-2xl bg-white shadow-soft">
              <div className="h-full w-full p-2">
                <VideoEmbed url={site.media.videoUrl} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-10"
          >
            <WhatsAppLink className="inline-flex items-center justify-center rounded-md bg-sage px-8 py-3 text-sm font-bold tracking-wide text-paper shadow-soft hover:opacity-90">
              {site.hero.ctaLabel}
            </WhatsAppLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
