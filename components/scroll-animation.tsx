"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode } from "react";

interface ScrollAnimationProps {
  children: ReactNode;
  className?: string;
  variant?: "fadeUp" | "scaleIn" | "slideLeft" | "slideRight";
}

export function ScrollAnimation({ 
  children, 
  className = "", 
  variant = "fadeUp" 
}: ScrollAnimationProps) {
  const { scrollYProgress } = useScroll({
    layoutEffect: false,
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, 0]);

  const variants = {
    fadeUp: { opacity, y },
    scaleIn: { opacity, scale },
    slideLeft: { opacity, x: useTransform(scrollYProgress, [0, 0.5, 1], [50, 0, 0]) },
    slideRight: { opacity, x: useTransform(scrollYProgress, [0, 0.5, 1], [-50, 0, 0]) },
  };

  return (
    <motion.div
      className={className}
      style={variants[variant]}
    >
      {children}
    </motion.div>
  );
}
