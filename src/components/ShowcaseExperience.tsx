"use client";

import { useEffect, useState } from "react";

import IphoneFrame from "@/components/IphoneFrame";

type Screen = "welcome" | "discover" | "ai";

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

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f5fc] px-5 py-12">
      {/* Permanent Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-300/20 blur-[130px]" />

      {/* Centered iPhone Frame */}
      <div className="relative z-10 flex w-full items-center justify-center">
        <div className="shrink-0">
          <IphoneFrame screen={screen} />
        </div>
      </div>
    </main>
  );
}
