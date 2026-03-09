"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import heroImage from "./onehpcorpodslidinghero5760x2520pxjpg_2520x5760.jpg";

export default function FashionHero() {
  const router = useRouter();

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src={heroImage}
        alt="SCENT Salon Hero"
        fill
        className="object-cover object-center"
        priority
        quality={90}
        sizes="100vw"
      />

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4">
        {/* Hero Text */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="heading text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
            SCENT – where haircut is just an excuse…
          </h1>
        </div>
        
        {/* Button */}
        <div className="flex justify-center w-full">
          <button
            onClick={() => router.push("/book-now")}
            className="bg-white px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm font-medium uppercase tracking-wider text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg rounded"
          >
            Book appointment
          </button>
        </div>
      </div>
    </section>
  );
}
