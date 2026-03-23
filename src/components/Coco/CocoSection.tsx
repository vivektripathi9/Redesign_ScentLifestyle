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
      <div className="absolute inset-0 z-10 flex items-center justify-center px-4" style={{ marginLeft: "-0.6cm" }}>
        <button
          onClick={() => router.push("/new-service")}
          className="rounded bg-white px-8 py-3 text-xs font-medium uppercase tracking-wider text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-gray-100 sm:px-10 sm:py-3.5 sm:text-sm"
        >
          Explore
        </button>
      </div>
    </section>
  );
}
