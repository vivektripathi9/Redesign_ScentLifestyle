"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import modelImage from "./modlech.jpg";

export default function CocoSection() {
  const router = useRouter();

  return (
    <section
      className="relative w-full overflow-hidden bg-white lg:aspect-[2048/662]"
      style={{ width: "100%", maxWidth: "none", minHeight: "250px" }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={modelImage}
          alt="Coco Crush "
          fill
          className="object-cover object-center"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/10" />
      </div>

      {/* Explore Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4" style={{ marginLeft: '-0.6cm' }}>
        <button
          onClick={() => router.push("/new-service")}
          className="bg-white px-8 sm:px-10 py-3 sm:py-3.5 text-xs sm:text-sm font-medium uppercase tracking-wider text-black transition-all duration-300 hover:bg-gray-100 hover:scale-105 shadow-lg rounded"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
