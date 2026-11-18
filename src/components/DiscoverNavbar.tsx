"use client";

import Image from "next/image";

export default function DiscoverNavbar() {
  return (
    <div className="discover-navbar">
      <div className="discover-nav-light" />

      <div className="discover-ai-glow" />

      <Image
        src="/moodly/discover-navbar.png"
        alt="Moodly navigation bar"
        width={392}
        height={54}
        priority
        unoptimized
        className="discover-navbar-image"
      />
    </div>
  );
}
