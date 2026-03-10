"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import RedefineHeading from "@/components/Redefine/redefine";

const openBookAppointment = (serviceName) => {
  if (typeof window !== "undefined") {
    const event = new CustomEvent("openBookAppointment", { detail: { service: serviceName || "" } });
    window.dispatchEvent(event);
  }
};

const services = [
  {
    title: "HAIR",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l3.png",
    icon: "/m3.png",
    href: "/services", // Hair services page
  },
  {
    title: "SKIN",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l1.png",
    icon: "/m1.png",
    href: "/facial", // Skin / facials page
  },
  {
    title: "NAIL",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l4.png",
    icon: "/m4.png",
    href: "/nails", // Nails page
  },
  {
    title: "Body therapy",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l2.png",
    icon: "/m2.png",
    href: "/spa", // Body therapy / spa page
  },
  {
    title: "LASHES",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l1.png",
    icon: "/m1.png",
    href: "/lashes", // Lashes page
  },
  {
    title: "MAKEUP",
    description:
      "I was impressed by the molding services, not lorem ipsum is simply free text.",
    image: "/l2.png",
    icon: "/m2.png",
    href: "/bridal", // Makeup / bridal page
  },
];

export default function LooksSection() {
  const ITEMS_PER_VIEW = 4;
  const [startIndex, setStartIndex] = useState(0);

  const visibleServices = Array.from({ length: ITEMS_PER_VIEW }, (_, i) => {
    const index = (startIndex + i) % services.length;
    return services[index];
  });

  const handlePrev = () => {
    setStartIndex((prev) => (prev - ITEMS_PER_VIEW + services.length) % services.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + ITEMS_PER_VIEW) % services.length);
  };

  return (
    <section className="bg-white py-8 sm:py-12">
      <div className="flex w-full flex-col items-center gap-8 sm:gap-12 px-4 sm:px-6 md:px-12 lg:px-20 text-center">
        <RedefineHeading />

        <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4 w-full">
          {visibleServices.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="relative flex flex-col items-center gap-4 sm:gap-5 rounded-2xl sm:rounded-[28px] border border-gray-100 bg-white px-4 sm:px-6 py-6 sm:py-10 shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)] cursor-pointer"
            >
              <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center">
                <div className="h-24 w-24 sm:h-32 sm:w-32 overflow-hidden rounded-full bg-gray-100">
                  {/* Image placeholder - upload images later */}
                </div>
                <div
                  className={`absolute -bottom-4 sm:-bottom-5 left-1/2 h-12 w-12 sm:h-16 sm:w-16 -translate-x-1/2 overflow-hidden rounded-full shadow-lg ${
                    service.icon === "/m1.png" || service.icon === "/m2.png"
                      ? "bg-white"
                      : "bg-black"
                  }`}
                >
                  <Image
                    src={service.icon}
                    alt={`${service.title} icon`}
                    fill
                    sizes="(max-width: 640px) 48px, 64px"
                    className="object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-light text-[#22223b] tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>{service.title}</h3>
              <p className="description-main px-2">{service.description}</p>
              <span className="h-px w-full bg-gray-100" />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openBookAppointment(service.title);
                }}
                className="w-full text-sm sm:text-sm font-light tracking-[0.1em] text-gray-800 transition hover:text-red-600 text-center"
                style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}
              >
                Book now →
              </button>
            </Link>
          ))}
        </div>

        <div className="mt-2 sm:mt-3 flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-gray-300 bg-white text-gray-700 text-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Previous services"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-gray-300 bg-white text-gray-700 text-sm flex items-center justify-center hover:bg-gray-100 transition-colors"
            aria-label="Next services"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
