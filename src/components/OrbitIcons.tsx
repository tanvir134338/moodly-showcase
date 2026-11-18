"use client";

import Image from "next/image";

const outerIcons = [
  { src: "avatar-1.png", size: 22 },
  { src: "location.png", size: 23 },
  { src: "globe.png", size: 23 },
  { src: "avatar-2.png", size: 21 },
  { src: "graduation.png", size: 27 },
];

const innerIcons = [
  { src: "avatar-3.png", size: 21 },
  { src: "calendar.png", size: 21 },
  { src: "verified.png", size: 23 },
  { src: "sparkle.png", size: 19 },
];

type OrbitRingProps = {
  icons: { src: string; size: number }[];
  radius: number;
  ringClass: string;
  counterClass: string;
};

function OrbitRing({ icons, radius, ringClass, counterClass }: OrbitRingProps) {
  return (
    <div className={`absolute inset-0 ${ringClass}`}>
      {icons.map((icon, index) => {
        const angle = -90 + (index * 360) / icons.length;
        const radians = (angle * Math.PI) / 180;

        const left = 50 + Math.cos(radians) * radius;
        const top = 50 + Math.sin(radians) * radius;

        return (
          <div
            key={icon.src}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: icon.size,
              height: icon.size,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div className={`relative h-full w-full ${counterClass}`}>
              <Image
                src={`/moodly/welcome/icons/${icon.src}`}
                alt=""
                fill
                sizes="27px"
                className="object-contain drop-shadow-[0_3px_7px_rgba(124,58,237,0.3)]"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function OrbitIcons() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-[44.2%] z-[5] aspect-square w-[88%] -translate-x-1/2 -translate-y-1/2">
      {/* Outer Purple Moving Light */}
      <div className="orbit-light orbit-light-outer" />

      {/* Inner Purple Moving Light */}
      <div className="orbit-light orbit-light-inner" />

      {/* Outer Orbit - 5 Icons */}
      <OrbitRing
        icons={outerIcons}
        radius={49}
        ringClass="orbit-outer"
        counterClass="counter-outer"
      />

      {/* Inner Orbit - 4 Icons */}
      <OrbitRing
        icons={innerIcons}
        radius={38.2}
        ringClass="orbit-inner"
        counterClass="counter-inner"
      />
    </div>
  );
}
