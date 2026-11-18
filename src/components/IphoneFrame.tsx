"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import OrbitIcons from "@/components/OrbitIcons";
import DiscoverNavbar from "@/components/DiscoverNavbar";
import DiscoverBanner from "@/components/DiscoverBanner";
import AIOrb from "@/components/AIOrb";

type IphoneFrameProps = {
  screen?: "welcome" | "discover" | "ai";
};

export default function IphoneFrame({ screen = "welcome" }: IphoneFrameProps) {
  const screenImage =
    screen === "discover"
      ? "/moodly/discover-bg.png"
      : screen === "ai"
        ? "/moodly/ai-bg.png"
        : "/moodly/welcome-bg.png";

  return (
    <div className="relative mx-auto w-[280px] sm:w-[310px]">
      {/* Permanent iPhone Body */}
      <div className="relative aspect-[452/948] rounded-[52px] border-[5px] border-[#35343b] bg-[#17171b] p-[9px] shadow-[0_30px_80px_rgba(80,50,150,0.25)]">
        {/* Permanent Screen Frame */}
        <div className="relative h-full w-full overflow-hidden rounded-[40px] bg-white">
          {/* Screen Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={screen}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Screen Background */}
              <Image
                src={screenImage}
                alt="Moodly App Screen"
                fill
                priority
                unoptimized
                sizes="310px"
                className="object-fill"
              />

              {/* Welcome Screen */}
              {screen === "welcome" && <OrbitIcons />}

              {/* Discover Screen */}
              {screen === "discover" && (
                <>
                  <DiscoverBanner />
                  <DiscoverNavbar />
                </>
              )}

              {/* AI Generator Screen */}
              {screen === "ai" && <AIOrb />}
            </motion.div>
          </AnimatePresence>

          {/* Permanent Dynamic Island */}
          <div className="absolute left-1/2 top-[10px] z-20 h-[24px] w-[85px] -translate-x-1/2 rounded-full bg-black" />
        </div>
      </div>

      {/* Permanent Side Buttons */}
      <div className="absolute -left-[7px] top-[145px] h-[55px] w-[5px] rounded-l-md bg-[#77747d]" />

      <div className="absolute -left-[7px] top-[215px] h-[38px] w-[5px] rounded-l-md bg-[#77747d]" />

      <div className="absolute -right-[7px] top-[175px] h-[75px] w-[5px] rounded-r-md bg-[#77747d]" />
    </div>
  );
}
