"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const asset = "/moodly/discover/";

function ArtImage({ src }: { src: string }) {
  return (
    <Image
      src={`${asset}${src}`}
      alt=""
      fill
      unoptimized
      draggable={false}
      className="object-contain"
    />
  );
}

export default function DiscoverBanner() {
  return (
    <div className="discover-banner-art">
      {/* Combined Card + Rings + Heart */}
      <div className="banner-main-art">
        <ArtImage src="main-art.png" />
      </div>

      {/* Dashed Flight Trail */}
      <motion.div
        className="banner-trail"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArtImage src="dashed-trail.png" />
      </motion.div>

      {/* Paper Plane */}
      <motion.div
        className="banner-paper-plane"
        animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArtImage src="paper-plane.png" />
      </motion.div>

      {/* Left Sparkle */}
      <motion.div
        className="banner-left-sparkle"
        animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArtImage src="sparkle-2.png" />
      </motion.div>

      {/* Top Sparkle */}
      <motion.div
        className="banner-top-sparkle"
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArtImage src="sparkle-1.png" />
      </motion.div>

      {/* People Tile */}
      <motion.div
        className="banner-tile-people"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArtImage src="tile-people.png" />
      </motion.div>

      {/* Palette Tile */}
      <motion.div
        className="banner-tile-palette"
        animate={{ y: [0, -3, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArtImage src="tile-palette.png" />
      </motion.div>

      {/* Sparkle Tile */}
      <motion.div
        className="banner-tile-sparkle"
        animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.08, 0.9] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArtImage src="tile-sparkle.png" />
      </motion.div>

      {/* Bottom Sparkle */}
      <motion.div
        className="banner-bottom-sparkle"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArtImage src="sparkle-1.png" />
      </motion.div>
    </div>
  );
}
