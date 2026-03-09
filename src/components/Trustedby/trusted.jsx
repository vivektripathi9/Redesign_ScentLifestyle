"use client";

import Image from "next/image";
import { useState } from "react";

const brands = [
  { name: "Beauty Garage", logo: "/Beauty garage.svg" },
  { name: "Cadiveu", logo: "/Cadiveu.png" },
  { name: "Casmara", logo: "/Casmara.png" },
  { name: "Janssen", logo: "/Jansen.png" },
  { name: "Olaplex", logo: "/Ola plex.png" },
  { name: "Pedi Calm", logo: "/Pedi calm.png" },
  { name: "Schwarzkopf", logo: "/Schwarzkopf-logo.png" },
];

export default function TrustedBy() {
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate brands for seamless infinite scroll (3 sets for smooth looping)
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <div className="flex w-full flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-[42px] font-light leading-tight text-[#1f1f2e] tracking-[0.1em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>Trusted by the best</h2>
        <div className="decorative-flower-divider flex items-center justify-center gap-3 sm:gap-4 text-center text-gray-300">
          <span className="h-px w-10 sm:w-12 bg-black" />
          <span className="text-pink-400 text-lg sm:text-xl">❀</span>
          <span className="h-px w-10 sm:w-12 bg-black" />
        </div>
        <div 
          className="relative mt-6 sm:mt-8 md:mt-10 w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 animate-scroll" style={{ animationPlayState: isPaused ? 'paused' : 'running' }}>
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="flex items-center justify-center flex-shrink-0 w-32 h-20 sm:w-36 sm:h-24 md:w-40 md:h-28 bg-white border border-gray-200 rounded-lg p-2 sm:p-3 md:p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 160px"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
          .animate-scroll {
            animation: scroll 12s linear infinite;
            width: fit-content;
            display: flex;
          }
        `}</style>
      </div>
    </section>
  );
}
