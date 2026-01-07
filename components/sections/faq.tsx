"use client";

import { useState } from "react";

import { site } from "@/lib/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl tracking-wide text-sage md:text-4xl">{site.faq.title}</h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          {site.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="border-b border-black/10">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <div className="text-base font-semibold text-ink">{f.q}</div>
                  <div className="text-2xl leading-none text-ink/50">{isOpen ? "–" : "+"}</div>
                </button>
                {isOpen ? (
                  <p className="pb-5 text-sm text-ink/70 md:text-base">{f.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
