"use client";

import { motion } from "framer-motion";

const FloatingThread = ({ delay, side }: { delay: number; side: "left" | "right" }) => (
  <motion.div
    animate={{
      y: [-30, 30],
      opacity: [0.2, 0.6, 0.2],
      rotate: [0, 360],
    }}
    transition={{
      duration: 5 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute text-2xl ${side === "left" ? "left-4 md:left-8" : "right-4 md:right-8"}`}
  >
    🧵
  </motion.div>
);

const FloatingNeedle = ({ delay, side }: { delay: number; side: "left" | "right" }) => (
  <motion.div
    animate={{
      y: [-20, 20],
      x: side === "left" ? [0, 10, 0] : [0, -10, 0],
      rotate: [0, -15, 15, 0],
    }}
    transition={{
      duration: 4 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute text-2xl ${side === "left" ? "left-6 md:left-12" : "right-6 md:right-12"} opacity-20 hover:opacity-40 transition-opacity`}
  >
    🪡
  </motion.div>
);

const FloatingClothes = ({ delay, side }: { delay: number; side: "left" | "right" }) => (
  <motion.div
    animate={{
      y: [-40, 40],
      opacity: [0.15, 0.5, 0.15],
      scale: [1, 1.1, 1],
    }}
    transition={{
      duration: 6 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute text-3xl ${side === "left" ? "left-2 md:left-6" : "right-2 md:right-6"}`}
  >
    👶🏻
  </motion.div>
);

const FloatingRibbon = ({ delay, side }: { delay: number; side: "left" | "right" }) => (
  <motion.div
    animate={{
      y: [-25, 25],
      rotate: [0, 20, -20, 0],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute text-3xl ${side === "left" ? "left-8 md:left-14" : "right-8 md:right-14"} opacity-15 hover:opacity-30 transition-opacity`}
  >
    🎀
  </motion.div>
);

const FloatingThimble = ({ delay, side }: { delay: number; side: "left" | "right" }) => (
  <motion.div
    animate={{
      y: [-15, 15],
      opacity: [0.2, 0.7, 0.2],
    }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute text-xl ${side === "left" ? "left-5 md:left-10" : "right-5 md:right-10"}`}
  >
    ⭐
  </motion.div>
);

const FloatingBaby = ({ delay, side }: { delay: number; side: "left" | "right" }) => (
  <motion.div
    animate={{
      y: [-35, 35],
      opacity: [0.1, 0.4, 0.1],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    className={`absolute text-4xl ${side === "left" ? "left-3 md:left-5" : "right-3 md:right-5"} hover:opacity-50 transition-opacity`}
  >
    🍼
  </motion.div>
);

export function AnimatedDecorations() {
  return (
    <>
      {/* Left side decorations */}
      <div className="fixed left-0 top-20 w-32 h-[calc(100vh-80px)] pointer-events-none hidden lg:block">
        <FloatingThread delay={0} side="left" />
        <div className="absolute top-40">
          <FloatingNeedle delay={0.5} side="left" />
        </div>
        <div className="absolute top-60">
          <FloatingRibbon delay={1} side="left" />
        </div>
        <div className="absolute top-96">
          <FloatingThimble delay={1.5} side="left" />
        </div>
        <div className="absolute top-[600px]">
          <FloatingClothes delay={2} side="left" />
        </div>
        <div className="absolute top-[800px]">
          <FloatingBaby delay={2.5} side="left" />
        </div>
        <div className="absolute top-[1000px]">
          <FloatingThread delay={3} side="left" />
        </div>
      </div>

      {/* Right side decorations */}
      <div className="fixed right-0 top-20 w-32 h-[calc(100vh-80px)] pointer-events-none hidden lg:block">
        <FloatingRibbon delay={0.3} side="right" />
        <div className="absolute top-32">
          <FloatingBaby delay={0} side="right" />
        </div>
        <div className="absolute top-64">
          <FloatingNeedle delay={1.2} side="right" />
        </div>
        <div className="absolute top-96">
          <FloatingThimble delay={1.8} side="right" />
        </div>
        <div className="absolute top-[500px]">
          <FloatingClothes delay={2.3} side="right" />
        </div>
        <div className="absolute top-[750px]">
          <FloatingThread delay={3.2} side="right" />
        </div>
        <div className="absolute top-[950px]">
          <FloatingRibbon delay={3.8} side="right" />
        </div>
      </div>
    </>
  );
}
