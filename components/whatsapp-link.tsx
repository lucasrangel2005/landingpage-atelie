"use client";

import { site } from "@/lib/site";
import React from "react";

type Props = React.PropsWithChildren<{
  className?: string;
}>;

/**
 * Link para WhatsApp no formato:
 * https://api.whatsapp.com/send?phone=...&text=...
 */
export function WhatsAppLink({ children, className }: Props) {
  const msg = encodeURIComponent(site.whatsapp.defaultMessage);
  const href = `https://api.whatsapp.com/send?phone=${site.whatsapp.phone}&text=${msg}`;

  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label="WhatsApp"
    >
      {children}
    </a>
  );
}
