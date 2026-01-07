"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function WhatsAppFloating() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0, x: 100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 1.5,
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      className="fixed bottom-4 right-4 z-50 md:bottom-5 md:right-5"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <WhatsAppLink className="group flex items-center gap-2 rounded-full bg-accent px-3 py-2.5 text-sm font-semibold text-paper shadow-lg hover:shadow-2xl hover:bg-sage transition-all duration-300 md:px-4 md:py-3">
          <motion.span 
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-full bg-black/10 flex-shrink-0"
          >
            <svg viewBox="0 0 32 32" width="16" height="16" className="md:w-[18px] md:h-[18px]" aria-hidden="true">
              <path d="M19.1 17.8c-.3-.2-1.6-.8-1.9-.9-.3-.1-.5-.2-.7.2-.2.3-.8.9-1 .9-.2.1-.4.1-.7-.1-.3-.2-1.3-.5-2.5-1.6-.9-.8-1.5-1.9-1.7-2.2-.2-.3 0-.5.2-.7.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6 0-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1.1 1-1.1 2.5 1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.7.7.2 1.4.2 1.9.1.6-.1 1.6-.7 1.8-1.3.2-.6.2-1.1.2-1.3 0-.2-.3-.3-.6-.5z" fill="currentColor"/>
              <path d="M16 3C9 3 3.3 8.7 3.3 15.7c0 2.2.6 4.3 1.6 6.2L3 29l7.3-1.9c1.8 1 3.9 1.6 6.1 1.6 7 0 12.7-5.7 12.7-12.7C29 8.7 23 3 16 3zm0 23.1c-2 0-3.8-.5-5.5-1.5l-.4-.2-4.3 1.1 1.1-4.2-.2-.4c-1-1.7-1.6-3.6-1.6-5.6C5.1 9.9 10 5 16 5c6 0 10.9 4.9 10.9 10.9S22 26.1 16 26.1z" fill="currentColor"/>
            </svg>
          </motion.span>
          
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "auto", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="hidden md:flex items-center gap-2 overflow-hidden whitespace-nowrap"
              >
                <span>WhatsApp</span>
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
                <span className="text-black/70 transition group-hover:translate-x-1">→</span>
              </motion.div>
            )}
          </AnimatePresence>
        </WhatsAppLink>
      </motion.div>
    </motion.div>
  );
}
