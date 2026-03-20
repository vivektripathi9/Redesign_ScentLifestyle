"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Last/last";
import Navbar from "@/components/Navbar";

const heroSlides = [
  {
    id: "hero-video",
    type: "video",
    src: "/offers/offer-video.mp4",
    clipStart: 23,
    clipEnd: 32,
    title: "Get a FREE Organic Manicure",
    subtitle: "With Every Casmara Facial",
    highlight: "Limited Time Offer",
    ctaLabel: "Book Now",
    titleFont: '"ABChanelCorpo", "Times New Roman", serif',
    bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  {
    id: "hero-video-2",
    type: "video",
    src: "/offers/offer-video-2.mp4",
    clipStart: 37,
    clipEnd: 51,
    title: "Complete Waxing Combo",
    subtitle: "Underarms + Full Arms + Full Legs",
    description: "Enjoy Silky Smooth Skin at One Price",
    ctaLabel: "Book Now",
    titleFont: '"Playfair Display", Georgia, "Times New Roman", serif',
    bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  {
    id: "hero-image-1",
    type: "image",
    src: "/offers/offer-image-1.jpg",
    title: "Luxury Nail Extensions & Gel Nails",
    subtitle: "Starting at Rs1,999",
    description: "Get Salon-Perfect Nails Today",
    ctaLabel: "Book Now",
    titleFont: '"Didot", "Bodoni MT", "Times New Roman", serif',
    bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
  {
    id: "hero-image-2",
    type: "image",
    src: "/offers/offer-image-2.avif",
    title: "Global + Highlights",
    subtitle: "Flat Rs8999/-",
    highlight: "Festive Offer | Limited Time",
    ctaLabel: "Book Now",
    titleFont: '"Garamond", "Times New Roman", serif',
    bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
  },
];

export default function OfferPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = heroSlides[activeIndex];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />
      <main className="bg-black">
      <section className="relative h-screen w-full overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            {slide.type === "video" ? (
              <video
                src={slide.src}
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop={!slide.clipEnd}
                playsInline
                preload="metadata"
                onLoadedMetadata={(e) => {
                  if (typeof slide.clipStart === "number") {
                    e.currentTarget.currentTime = slide.clipStart;
                  }
                }}
                onTimeUpdate={(e) => {
                  if (typeof slide.clipEnd === "number" && e.currentTarget.currentTime >= slide.clipEnd) {
                    e.currentTarget.currentTime = slide.clipStart || 0;
                    void e.currentTarget.play();
                  }
                }}
              />
            ) : (
              <img src={slide.src} alt="Scent offer banner" className="h-full w-full object-cover" loading="lazy" />
            )}
          </div>
        ))}

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center justify-center p-5 sm:p-8 md:p-12">
          <div
            key={activeSlide.id}
            className="max-w-4xl text-center text-white transition-all duration-700 ease-out animate-[fadeUp_700ms_ease-out]"
          >
            <p className="text-sm md:text-base tracking-[0.2em] text-[#D4AF37] uppercase" style={{ fontFamily: activeSlide.bodyFont }}>
              Exclusive Offers
            </p>
            {(activeSlide.highlight || activeSlide.tagline) && (
              <p
                className="mt-3 inline-flex rounded-full border border-[#E0C15A] bg-[#1a1404]/75 px-3 py-1 text-xs sm:text-sm tracking-[0.14em] uppercase text-[#F2D878] shadow-[0_0_18px_rgba(212,175,55,0.3)]"
                style={{ fontFamily: activeSlide.bodyFont }}
              >
                {activeSlide.highlight || activeSlide.tagline}
              </p>
            )}
            <h1
              className="mt-3 text-[36px] md:text-[48px] leading-tight font-light drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]"
              style={{ fontFamily: activeSlide.titleFont, fontWeight: 300 }}
            >
              {activeSlide.title}
            </h1>
            {activeSlide.subtitle && (
              <p
                className="mt-3 text-base md:text-lg text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
                style={{ fontFamily: activeSlide.bodyFont }}
              >
                {activeSlide.subtitle}
              </p>
            )}
            {activeSlide.description && (
              <p
                className="mt-2 text-base md:text-lg text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
                style={{ fontFamily: activeSlide.bodyFont }}
              >
                {activeSlide.description}
              </p>
            )}
            <a
              href="/book-now"
              className="mt-5 inline-flex items-center justify-center rounded-full border border-[#F0D57B] bg-[#E0C15A] px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-[0_10px_28px_rgba(224,193,90,0.35)] transition hover:bg-transparent hover:text-[#F0D57B]"
              style={{ fontFamily: activeSlide.bodyFont }}
            >
              {activeSlide.ctaLabel || "Book Now"}
            </a>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 flex items-center gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={`${slide.id}-dot`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to offer slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-[#D4AF37]" : "w-2.5 bg-white/70 hover:bg-white"}`}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      </main>
      <Footer />
    </>
  );
}
