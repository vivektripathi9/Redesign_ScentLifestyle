"use client";

import { useEffect, useState } from "react";

export default function OfferSection() {
  const offerBanners = [
    {
      id: "festive-video-offer",
      type: "video",
      src: "/offers/offer-video.mp4",
      clipStart: 23,
      clipEnd: 32,
      title: "Get a FREE Organic Manicure",
      subtitle: "With Every Casmara Facial",
      highlight: "Limited Time Offer",
      ctaLabel: "Book Now",
      ctaLink: "/offer",
      titleFont: '"ABChanelCorpo", "Times New Roman", serif',
      bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    {
      id: "festive-video-offer-2",
      type: "video",
      src: "/offers/offer-video-2.mp4",
      clipStart: 37,
      clipEnd: 51,
      title: "Complete Waxing Combo",
      subtitle: "Underarms + Full Arms + Full Legs",
      description: "Enjoy Silky Smooth Skin at One Price",
      ctaLabel: "Book Now",
      ctaLink: "/offer",
      titleFont: '"Playfair Display", Georgia, "Times New Roman", serif',
      bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    {
      id: "festive-image-offer-1",
      type: "image",
      src: "/offers/offer-image-1.jpg",
      title: "Luxury Nail Extensions & Gel Nails",
      subtitle: "Starting at Rs1,999",
      description: "Get Salon-Perfect Nails Today",
      ctaLabel: "Book Now",
      ctaLink: "/offer",
      titleFont: '"Didot", "Bodoni MT", "Times New Roman", serif',
      bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
    {
      id: "festive-image-offer-2",
      type: "image",
      src: "/offers/offer-image-2.avif",
      title: "Global + Highlights",
      subtitle: "Flat Rs8999/-",
      highlight: "Festive Offer | Limited Time",
      ctaLabel: "Book Now",
      ctaLink: "/offer",
      titleFont: '"Garamond", "Times New Roman", serif',
      bodyFont: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % offerBanners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [offerBanners.length]);
  const activeOffer = offerBanners[activeIndex];

  return (
    <section className="bg-black px-4 py-10 sm:px-6 sm:py-12 md:px-10 md:py-16">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-8 text-center sm:mb-10 md:mb-12">
          <p className="text-xs sm:text-sm tracking-[0.24em] text-[#D4AF37] uppercase">Discounts & Offers</p>
          <h2
            className="mt-3 text-2xl sm:text-3xl md:text-4xl text-white font-light tracking-[0.03em]"
            style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
          >
            Celebrate More, Spend Less
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm sm:text-base text-white/75">
            A dedicated offers zone for campaign banners. Share your final images and videos, and this section will instantly showcase them with
            clickable offer buttons.
          </p>
        </div>

        <article className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/5">
          <div className="relative h-[260px] sm:h-[320px] md:h-[420px] w-full">
            {offerBanners.map((offer, index) => (
              <div
                key={offer.id}
                className={`absolute inset-0 transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              >
                {offer.type === "video" ? (
                  <video
                    src={offer.src}
                    className="h-full w-full object-cover"
                    autoPlay
                    muted
                    loop={!offer.clipEnd}
                    playsInline
                    preload="metadata"
                    onLoadedMetadata={(e) => {
                      if (typeof offer.clipStart === "number") {
                        e.currentTarget.currentTime = offer.clipStart;
                      }
                    }}
                    onTimeUpdate={(e) => {
                      if (typeof offer.clipEnd === "number" && e.currentTarget.currentTime >= offer.clipEnd) {
                        e.currentTarget.currentTime = offer.clipStart || 0;
                        void e.currentTarget.play();
                      }
                    }}
                  />
                ) : (
                  <img src={offer.src} alt={offer.title} className="h-full w-full object-cover" loading="lazy" />
                )}
              </div>
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/45" />
          </div>

          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div
              key={activeOffer.id}
              className="max-w-3xl text-center transition-all duration-700 ease-out animate-[fadeUp_700ms_ease-out]"
            >
              {activeOffer.highlight && (
                <p
                  className="mb-3 inline-flex rounded-full border border-[#E0C15A] bg-[#1a1404]/75 px-3 py-1 text-xs sm:text-sm tracking-[0.14em] uppercase text-[#F2D878] shadow-[0_0_18px_rgba(212,175,55,0.3)]"
                  style={{ fontFamily: activeOffer.bodyFont }}
                >
                  {activeOffer.highlight}
                </p>
              )}
              <h3
                className="text-2xl sm:text-3xl md:text-4xl text-white font-light leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.75)]"
                style={{ fontFamily: activeOffer.titleFont, fontWeight: 300 }}
              >
                {activeOffer.title}
              </h3>
              {activeOffer.subtitle && (
                <p
                  className="mt-2 text-base sm:text-lg text-white/95 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
                  style={{ fontFamily: activeOffer.bodyFont }}
                >
                  {activeOffer.subtitle}
                </p>
              )}
              {activeOffer.description && (
                <p
                  className="mt-2 text-sm sm:text-base text-white/90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.65)]"
                  style={{ fontFamily: activeOffer.bodyFont }}
                >
                  {activeOffer.description}
                </p>
              )}
              <a
                href={activeOffer.ctaLink}
                className="mt-5 inline-flex items-center justify-center rounded-full border border-[#F0D57B] bg-[#E0C15A] px-6 py-3 text-sm sm:text-base font-semibold text-black shadow-[0_10px_28px_rgba(224,193,90,0.35)] transition hover:bg-transparent hover:text-[#F0D57B]"
                style={{ fontFamily: activeOffer.bodyFont }}
              >
                {activeOffer.ctaLabel}
              </a>
            </div>
          </div>

          <div className="absolute bottom-4 right-4 flex items-center gap-2">
            {offerBanners.map((offer, index) => (
              <button
                key={`${offer.id}-dot`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to offer slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all ${index === activeIndex ? "w-7 bg-[#D4AF37]" : "w-2.5 bg-white/60 hover:bg-white/90"}`}
              />
            ))}
          </div>
        </article>
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
      </div>
    </section>
  );
}
