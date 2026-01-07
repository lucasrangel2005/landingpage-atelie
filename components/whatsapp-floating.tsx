"use client";

import { motion } from "framer-motion";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function WhatsAppFloating() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 1.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="fixed bottom-5 right-5 z-50"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <WhatsAppLink className="group flex items-center gap-3 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-black shadow-soft hover:shadow-2xl transition-all duration-300">
          <motion.span 
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="grid h-9 w-9 place-items-center rounded-full bg-black/10"
          >
            {/* WhatsApp icon (inline) */}
            <svg viewBox="0 0 32 32" width="18" height="18" aria-hidden="true">
              <path d="M19.1 17.8c-.3-.2-1.6-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 .9-.2.1-.4.1-.7-.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.5.2-.7.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1-1.1 2.5 1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.3 0-.2-.3-.3-.6-.5z" fill="currentColor"/>
              <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.2.6 4.3 1.6 6.2L3 29l7.3-1.9c1.8 1 3.9 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7C29 8.7 23 3 16 3zm0 23.1c-2 0-3.8-.5-5.5-1.5l-.4-.2-4.3 1.1 1.1-4.2-.2-.4c-1-1.7-1.6-3.6-1.6-5.6C5.1 9.9 10 5 16 5c6 0 10.9 4.9 10.9 10.9S22 26.1 16 26.1z" fill="currentColor"/>
            </svg>
          </motion.span>
          <span className="hidden sm:block">WhatsApp</span>
          <motion.span 
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="rounded-full bg-black/10 px-2 py-1 text-xs font-bold"
          >
            online
          </motion.span>
          <span className="ml-1 text-black/70 transition group-hover:translate-x-1">→</span>
        </WhatsAppLink>
      </motion.div>
    </motion.div>
  );
}
