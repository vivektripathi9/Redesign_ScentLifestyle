"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import heroImage from "./onehpcorpodslidinghero5760x2520pxjpg_2520x5760.jpg";
import heroBg1 from "./131324.jpg";
import heroBg2 from "./2149921691.jpg";
import heroBg3 from "./72387.jpg";
import heroBg4 from "./HP_SG_WOMEN_DENIM_MARCH26_DI3.avif";

type HeroSlide = {
  id: string;
  type: "image" | "text";
  backgroundImage?: StaticImageData;
  marqueeText?: string;
  eyebrow?: string;
  heading: string;
  subheading: string;
  ctaLabel: string;
  ctaLink: string;
};

const heroSlides: HeroSlide[] = [
  {
    id: "hero-main-image",
    type: "image",
    marqueeText: "SCENT - where haircut is just an excuse...",
    heading: "Luxury Beauty. Signature Experience.",
    subheading: "Hair, Skin, Nails and body rituals curated for modern elegance.",
    ctaLabel: "Book appointment",
    ctaLink: "/book-now",
  },
  {
    id: "hero-white-1",
    type: "text",
    backgroundImage: heroBg1,
    eyebrow: "SCENT EXPERIENCE",
    heading: "GLOW. CONFIDENCE. SCENT.",
    subheading: "",
    ctaLabel: "Explore Services",
    ctaLink: "/services",
  },
  {
    id: "hero-white-2",
    type: "text",
    backgroundImage: heroBg2,
    eyebrow: "PREMIUM CARE",
    heading: "YOUR LOOK, ELEVATED.",
    subheading: "",
    ctaLabel: "View Offers",
    ctaLink: "/offer",
  },
  {
    id: "hero-white-3",
    type: "text",
    backgroundImage: heroBg3,
    eyebrow: "YOUR BEAUTY DESTINATION",
    heading: "LUXURY IN EVERY DETAIL.",
    subheading: "",
    ctaLabel: "Find Your Salon",
    ctaLink: "/contact",
  },
  {
    id: "hero-white-4",
    type: "text",
    backgroundImage: heroBg4,
    eyebrow: "SCENT LUXURY",
    heading: "BEAUTY, REDEFINED DAILY.",
    subheading: "",
    ctaLabel: "Explore Services",
    ctaLink: "/services",
  },
];

export default function FashionHero() {
  const router = useRouter();
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[50vh] w-full overflow-hidden sm:h-[60vh] md:h-[70vh] lg:h-screen">
      {heroSlides.map((slide, index) => {
        const isActive = index === activeSlide;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              isActive ? "z-20 opacity-100" : "pointer-events-none z-10 opacity-0"
            }`}
          >
            {slide.type === "image" || slide.backgroundImage ? (
              <>
                <Image
                  src={slide.backgroundImage || heroImage}
                  alt="SCENT Salon Hero"
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/35" />
              </>
            ) : (
              <div className="absolute inset-0 bg-white" />
            )}

            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 text-center ${
                slide.type === "image" || slide.backgroundImage ? "text-white" : "text-[#161616]"
              }`}
            >
              {slide.type === "image" && slide.marqueeText ? (
                <div className="mb-6 w-full overflow-hidden sm:mb-8 md:mb-10">
                  <div
                    className="hero-marquee-track flex whitespace-nowrap text-lg font-light tracking-[0.08em] sm:text-2xl sm:tracking-[0.12em] md:text-3xl lg:text-4xl"
                    style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: "none" }}
                  >
                    <div className="flex items-center">
                      <span className="mx-6 sm:mx-8 md:mx-10">{slide.marqueeText}</span>
                      <span className="mx-6 sm:mx-8 md:mx-10">{slide.marqueeText}</span>
                      <span className="mx-6 sm:mx-8 md:mx-10">{slide.marqueeText}</span>
                      <span className="mx-6 sm:mx-8 md:mx-10">{slide.marqueeText}</span>
                    </div>
                    <div className="flex items-center" aria-hidden="true">
                      <span className="mx-6 sm:mx-8 md:mx-10">{slide.marqueeText}</span>
                      <span className="mx-6 sm:mx-8 md:mx-10">{slide.marqueeText}</span>
                      <span className="mx-6 sm:mx-8 md:mx-10">{slide.marqueeText}</span>
                      <span className="mx-6 sm:mx-8 md:mx-10">{slide.marqueeText}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mb-6 sm:mb-8 md:mb-10">
                  <p className="hero-line-animation text-xs uppercase tracking-[0.24em] text-white/90 sm:text-sm">{slide.eyebrow}</p>
                  <h1
                    className="hero-line-animation mt-4 text-4xl font-semibold uppercase tracking-[0.08em] text-white sm:text-5xl md:text-6xl"
                    style={{ animationDelay: "120ms" }}
                  >
                    {slide.heading}
                  </h1>
                </div>
              )}

              <div className="flex w-full justify-center">
                <button
                  onClick={() => router.push(slide.ctaLink)}
                  className={`rounded px-6 py-2.5 text-xs font-medium uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 sm:px-8 sm:py-3 sm:text-sm ${
                    slide.type === "image" || slide.backgroundImage ? "bg-white text-black hover:bg-gray-100" : "bg-[#161616] text-white hover:bg-[#303030]"
                  }`}
                >
                  {slide.ctaLabel}
                </button>
              </div>
            </div>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes hero-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes hero-line-reveal {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero-marquee-track {
          width: max-content;
          animation: hero-marquee 45s linear infinite;
          will-change: transform;
        }

        .hero-line-animation {
          opacity: 0;
          animation: hero-line-reveal 700ms ease-out forwards;
        }

      `}</style>
    </section>
  );
}
