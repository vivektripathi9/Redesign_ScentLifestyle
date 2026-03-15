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
        {/* Moving Hero Text */}
        <div className="w-full max-w-5xl mb-6 sm:mb-8 md:mb-10 overflow-hidden">
          <div className="relative">
            <div
              className="flex whitespace-nowrap animate-hero-marquee text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.12em]"
              style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: "none" }}
            >
              <span className="mx-6">SCENT – where haircut is just an excuse…</span>
              <span className="mx-6">SCENT – where haircut is just an excuse…</span>
              <span className="mx-6">SCENT – where haircut is just an excuse…</span>
            </div>
          </div>
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

      <style jsx>{`
        @keyframes hero-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-hero-marquee {
          animation: hero-marquee 18s linear infinite;
        }
      `}</style>
    </section>
  );
}
