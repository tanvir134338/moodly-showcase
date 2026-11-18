"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import IphoneFrame from "@/components/IphoneFrame";
import ShowcaseContent from "@/components/ShowcaseContent";

type Screen = "welcome" | "discover" | "ai";

const screenContent = {
  welcome: {
    eyebrow: "WELCOME TO MOODLY",
    title: "YOUR IDEAS. YOUR MOOD.",
    description:
      "A personal space for inspiration, creativity and everything you love.",
    activeIndex: 0,
  },

  discover: {
    eyebrow: "EXPLORE MOODLY",
    title: "DISCOVER YOUR WORLD.",
    description:
      "Explore beautiful mood boards, collect ideas and find inspiration for your next creation.",
    activeIndex: 1,
  },

  ai: {
    eyebrow: "CREATE WITH AI",
    title: "TURN YOUR MOOD INTO ART.",
    description:
      "Describe your vision and let AI transform your ideas into beautiful mood boards.",
    activeIndex: 2,
  },
};

export default function ShowcaseExperience() {
  const [screen, setScreen] = useState<Screen>("welcome");

  useEffect(() => {
    const duration = screen === "ai" ? 10000 : 7000;

    const timer = setTimeout(() => {
      setScreen((currentScreen) => {
        switch (currentScreen) {
          case "welcome":
            return "discover";

          case "discover":
            return "ai";

          case "ai":
            return "welcome";

          default:
            return "welcome";
        }
      });
    }, duration);

    return () => clearTimeout(timer);
  }, [screen]);

  const content = screenContent[screen];

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f5fc] px-5 py-12">
      {/* Permanent Background Glow */}
      <div className="pointer-events-none absolute left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-300/20 blur-[130px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-[1050px] flex-col items-center justify-center gap-14 md:flex-row md:gap-16 lg:gap-24">
        {/* Permanent iPhone Frame */}
        <div className="shrink-0">
          <IphoneFrame screen={screen} />
        </div>

        {/* Right Side Content */}
        <div className="w-full max-w-[540px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.55, ease: "easeInOut" }}
            >
              <ShowcaseContent
                eyebrow={content.eyebrow}
                title={content.title}
                description={content.description}
                activeIndex={content.activeIndex}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
