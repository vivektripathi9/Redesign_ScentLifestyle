"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import modelImage from "./modlech.jpg";
import hairImg from "../Discount/discount images/hairs.jpg";
import skinImg from "../Discount/discount images/skin.jpg";
import nailsImg from "../Discount/discount images/nails.jpg";
import lashesImg from "../Discount/discount images/lashes.jpg";
import bodyTherapyImg from "../Discount/discount images/bodytherepy.jpg";

const cocoSlides = [
  {
    id: "coco-model-slide",
    image: modelImage,
    alt: "Coco model",
    align: "left",
    scentLabel: "SCENT",
    title: "LUXURY BEAUTY EXPERIENCE",
    subtitle: "EXPLORE SIGNATURE BEAUTY & STYLE",
    offerType: "Featured",
    features: "Hair • Skin • Nails • Lashes",
    accent: "#D4AF37",
    buttonTextColor: "#161616",
  },
  {
    id: "offer-nails",
    image: nailsImg,
    alt: "Nails offer",
    align: "right",
    scentLabel: "SCENT",
    title: "NAIL EXTENSIONS & GEL NAILS",
    subtitle: "FOR ₹1,999/-",
    offerType: "Limited Time Offer",
    features: "Premium Finish • Long Lasting • Expert Application",
    accent: "#111111",
    buttonTextColor: "#ffffff",
  },
  {
    id: "offer-skin",
    image: skinImg,
    alt: "Facial offer",
    align: "left",
    scentLabel: "SCENT",
    title: "GET A FREE ORGANIC MANICURE",
    subtitle: "WITH EVERY CASMARA FACIAL",
    offerType: "Limited Period Offer",
    features: "Glow Boosting • Hydration • Luxury Skincare",
    accent: "#111111",
    buttonTextColor: "#ffffff",
  },
  {
    id: "offer-body-therapy",
    image: bodyTherapyImg,
    alt: "Waxing combo offer",
    align: "left",
    scentLabel: "SCENT",
    title: "WAXING COMBO",
    subtitle: "Under Arms + Full Arms + Full Legs",
    offerType: "Popular Offer",
    features: "Smooth Skin • Hygienic • Professional Care",
    accent: "#111111",
    buttonTextColor: "#ffffff",
  },
  {
    id: "offer-hair",
    image: hairImg,
    alt: "Hair highlights offer",
    align: "left",
    scentLabel: "SCENT",
    title: "FESTIVE OFFER",
    subtitle: "GLOBAL + HIGHLIGHTS FLAT ₹8,999/-",
    offerType: "Limited Offer",
    features: "Shine • Dimension • Premium Hair Color",
    accent: "#D4AF37",
    buttonTextColor: "#161616",
  },
  {
    id: "offer-lashes",
    image: lashesImg,
    alt: "Lashes offer",
    align: "left",
    scentLabel: "SCENT",
    title: "LASH LIFT & EXTENSIONS",
    subtitle: "FOR ₹2,999/-",
    offerType: "Trending Offer",
    features: "Natural Volume • Long Hold • Expert Styling",
    accent: "#111111",
    buttonTextColor: "#ffffff",
  },
];

export default function CocoSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % cocoSlides.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="bg-white">
      <div className="relative mx-auto w-full overflow-hidden bg-black aspect-[3/4] max-h-[calc(100vh-90px)] md:aspect-[16/8]">
        {cocoSlides.map((slide, index) => {
          const isActive = index === activeSlide;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "z-20 opacity-100" : "pointer-events-none z-10 opacity-0"
              }`}
            >
              <Image src={slide.image} alt={slide.alt} fill className="object-cover" priority={index === 0} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div
                  className={`flex w-full ${
                    slide.align === "right" ? "justify-end pr-6 text-right sm:pr-8" : "justify-start pl-6 text-left sm:pl-8"
                  }`}
                  style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif' }}
                >
                  <div className="w-full max-w-[480px]">
                    <p className="inline-flex rounded-full bg-white/88 px-4 py-1 text-[12px] uppercase tracking-[0.26em] text-black">
                      {slide.scentLabel}
                    </p>
                    <h3
                      className="mt-2 text-[28px] uppercase tracking-[0.22em] drop-shadow-[0_14px_28px_rgba(0,0,0,0.5)] sm:text-[36px] md:text-[42px]"
                      style={{ color: slide.accent }}
                    >
                      {slide.title}
                    </h3>
                    <p className="mt-3 text-[16px] leading-snug text-white sm:text-[20px]">{slide.subtitle}</p>
                    <p className="mt-3 text-[12px] uppercase tracking-[0.18em]" style={{ color: slide.accent }}>
                      {slide.offerType}
                    </p>
                    <p className="mt-4 text-[12px] leading-snug text-white/95 sm:text-[14px]">
                      {slide.features.split("•").map((f, i) => (
                        <span key={`${slide.id}-f-${i}`} className="block">
                          {f.trim()}
                        </span>
                      ))}
                    </p>
                    <a
                      href="/#exclusive-offers"
                      className="mt-6 inline-flex items-center justify-center rounded-md px-8 py-2 text-[14px] font-semibold shadow-[0_22px_50px_rgba(0,0,0,0.25)] transition hover:scale-[1.03] sm:text-[16px]"
                      style={{
                        backgroundColor: slide.accent,
                        color: slide.buttonTextColor,
                      }}
                    >
                      Explore
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
