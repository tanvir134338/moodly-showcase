"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AIOrb() {
  return (
    <div className="absolute left-1/2 top-[50%] aspect-square w-[75%] -translate-x-1/2 -translate-y-1/2">
      {/* Soft Ambient Glow */}
      <motion.div
        className="absolute inset-[-25%] rounded-full bg-violet-400/20 blur-2xl"
        animate={{
          scale: [0.8, 1.2, 0.8],
          opacity: [0.25, 0.65, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* First Circular Light Pulse */}
      <motion.div
        className="absolute inset-[-12%] rounded-full border border-violet-400/70"
        animate={{
          scale: [0.85, 1.65],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />

      {/* Second Circular Light Pulse */}
      <motion.div
        className="absolute inset-[-12%] rounded-full border border-purple-300/60"
        animate={{
          scale: [0.85, 1.65],
          opacity: [0.7, 0],
        }}
        transition={{
          duration: 2.4,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1.2,
        }}
      />

      {/* Animated Orb */}
      <motion.div
        className="relative z-10 h-full w-full"
        animate={{
          y: [0, -9, 0, 9, 0],
          scale: [1, 1.04, 1, 1.03, 1],
          rotate: [0, 3, 0, -3, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/moodly/ai-orb.png"
          alt="AI Orb"
          fill
          priority
          unoptimized
          draggable={false}
          className="object-contain drop-shadow-[0_0_18px_rgba(139,92,246,0.55)]"
        />
      </motion.div>
    </div>
  );
}
