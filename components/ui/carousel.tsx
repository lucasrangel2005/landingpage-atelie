"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type Item = { src: string; alt: string };

export function Carousel({ items }: { items: Item[] }) {
  const safe = useMemo(() => items.filter(Boolean), [items]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (safe.length <= 1) return;
    const t = setInterval(() => setIdx((v) => (v + 1) % safe.length), 4500);
    return () => clearInterval(t);
  }, [safe.length]);

  const current = safe[idx];

  function prev() {
    setIdx((v) => (v - 1 + safe.length) % safe.length);
  }
  function next() {
    setIdx((v) => (v + 1) % safe.length);
  }

  if (!current) return null;

  return (
    <div className="grid gap-4 md:grid-cols-[1fr_220px]">
      <div className="relative overflow-hidden rounded-[28px] bg-white shadow-soft">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/60 via-transparent to-emerald-100/60" aria-hidden="true" />
        <div className="relative p-5">
          <div className="flex items-center justify-between">
            <div className="text-sm font-semibold text-ink/80">Portfólio</div>
            <div className="text-xs text-ink/60">{idx + 1} / {safe.length}</div>
          </div>

          <div className="mt-4 rounded-[22px] bg-paper p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.src}
                initial={{ opacity: 0, y: 8, scale: 0.995 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.995 }}
                transition={{ duration: 0.35 }}
                className="relative grid place-items-center overflow-hidden rounded-[18px] bg-white"
              >
                {/* Use <img> para evitar setup extra; troque por next/image se quiser */}
                <img
                  src={current.src}
                  alt={current.alt}
                  className="h-[360px] w-full object-cover md:h-[440px]"
                  loading="lazy"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={prev}
              className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-soft hover:bg-white/70"
            >
              ←
            </button>
            <button
              onClick={next}
              className="rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-soft hover:bg-white/70"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-[28px] bg-white/70 p-4 shadow-soft">
        <div className="text-sm font-semibold">Miniaturas</div>
        <div className="mt-3 grid grid-cols-3 gap-3 md:grid-cols-2">
          {safe.map((it, i) => (
            <button
              key={it.src}
              onClick={() => setIdx(i)}
              className={`overflow-hidden rounded-2xl border bg-white shadow-soft transition hover:-translate-y-0.5 ${
                i === idx ? "border-ink/20 ring-2 ring-ink/10" : "border-black/10"
              }`}
              aria-label={`Abrir ${it.alt}`}
            >
              <img src={it.src} alt="" className="h-20 w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
