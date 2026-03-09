"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const WhyScent = dynamic(() => import("../why/why"), { ssr: true });
const VideoCarousel = dynamic(() => import("../VideoCarousel/VideoCarousel"), { ssr: true });
const FindNearest = dynamic(() => import("../Findyour/find"), { ssr: true });

const nailVideos = [
  { id: "y3ZZRdMHEr8", title: "Nail Video 1" },
  { id: "dNnGRTo6P6E", title: "Nail Video 2" },
  { id: "SpS2Pkme0A8", title: "Nail Video 3" },
  { id: "9eXt8kx4NXI", title: "Nail Video 4" },
  { id: "FTCoQQGPcNo", title: "Nail Video 5" },
];

const serviceChapters = [
  {
    id: "manicure-pedicure",
    title: "Manicure & Pedicure",
    tagline: "Classic & organic manicures and pedicures finished with candle spa therapy.",
    description:
      "hydrating scrubs, mask wraps, hot towel compressions, and vitamin-rich oils ensure your hands and feet stay plush. Upgrade to our candle spa manicure and pedicure for molten-wax massages.",
    image: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1200&q=80",
    services: ["Classic manicure", "Organic manicure", "Candle spa manicure", "Classic pedicure", "Organic pedicure", "Candle spa pedicure"],
  },
];

const galleryItems = [
  {
    title: "Classic Manicure",
    image: "/w5.jpg",
    description: "a timeless manicure experience with nail shaping, cuticle care, hand massage, and polish application. Perfect for maintaining healthy, beautiful nails.",
    duration: "45 minutes",
    benefits: [
      "Nail health maintenance",
      "Hand relaxation",
      "Professional shaping",
      "Cuticle care",
      "Classic finish",
    ],
    includes: ["Nail shaping", "Cuticle care", "Hand massage", "Polish application", "Moisturizing"],
  },
  {
    title: "Classic Pedicure",
    image: "/w7.jpg",
    description: "revitalize your feet with our classic pedicure. Includes foot soak, exfoliation, nail care, and polish application for soft, beautiful feet.",
    duration: "60 minutes",
    benefits: [
      "Foot relaxation",
      "Smooth skin",
      "Nail care",
      "Improved circulation",
      "Fresh appearance",
    ],
    includes: ["Foot soak", "Exfoliation", "Nail shaping", "Cuticle care", "Polish application"],
  },
];

export default function NailCouture() {
  const containerRefs = useRef([]);
  const cardRefs = useRef([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleScroll = (groupIdx, direction) => {
    const container = containerRefs.current[groupIdx];
    const card = cardRefs.current[groupIdx];
    if (!container || !card) return;

    const gapWidth = 24; // gap-6 = 1.5rem = 24px
    const cardWidth = card.offsetWidth + gapWidth;
    const target =
      container.scrollLeft + (direction === "right" ? cardWidth : -cardWidth);

    container.scrollTo({
      left: target,
      behavior: "smooth",
    });
  };

  const groups = [
    {
      title: "Manicure & Pedicure",
      description: "Classic and organic manicure and pedicure services for beautiful hands and feet.",
      items: galleryItems,
    },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
      <section id="nail-couture" className="bg-gradient-to-b from-[#fff7fb] via-white to-white">
      {/* Full-width hero */}
      <div className="relative w-full overflow-hidden">
        <video
          src="/nail_vi.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="h-[60vh] min-h-[420px] w-full object-cover"
        />
      </div>

      <div className="mx-auto flex w-full flex-col gap-12 px-6 py-16 md:px-12 lg:px-20">
        {/* Highlight */}
        <div className="w-full rounded-[24px] border border-gray-100 bg-white px-6 sm:px-8 py-6 sm:py-7 text-center shadow-[0px_20px_60px_rgba(0,0,0,0.04)]">
          <div className="mx-auto flex max-w-4xl flex-col gap-4 sm:gap-5">
            <p className="text-xs sm:text-sm font-light tracking-[0.3em] text-[#C06C84]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
              Bangalore Nail Flagship Menu
            </p>
            <h3
              className="text-xl sm:text-2xl md:text-[26px] font-light text-[#1f1f2e] leading-relaxed tracking-[0.05em]"
              style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
            >
              Manicure & Pedicure services for beautiful hands and feet.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-[#555] font-light max-w-2xl mx-auto" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
              Choose between classic and organic manicure and pedicure services. Each experience is powered by med-grade hygiene and artists trained to sculpt perfection.
            </p>
          </div>
        </div>

        {/* Gallery groups */}
        {groups.map((group, groupIdx) => (
          <div key={group.title} className="space-y-6 rounded-[36px] border border-white/70 bg-white/70 p-6 shadow-[0px_30px_120px_rgba(0,0,0,0.08)]">
            <div className="text-center lg:text-left">
              <p className="text-base font-semibold uppercase tracking-[0.5em] text-black">
                {group.title}
              </p>
              <p className="text-lg font-medium text-[#444]">{group.description}</p>
            </div>
            <div className="mt-6">
              <div className="grid gap-6 sm:gap-8 md:grid-cols-2 justify-items-center">
                {group.items.map((item, idx) => (
                  <div
                    key={item.title}
                    className="w-full max-w-[360px]"
                    style={{
                      animationDelay: `${(groupIdx * 7 + idx) * 60}ms`,
                      animation: "fadeInUp 0.6s ease forwards",
                    }}
                  >
                    <div
                      ref={(el) => {
                        if (idx === 0) {
                          cardRefs.current[groupIdx] = el;
                        }
                      }}
                      className="group relative rounded-2xl border border-gray-200/50 bg-white shadow-md transition-all duration-300 ease-out hover:z-20 hover:shadow-[0_30px_80px_rgba(0,0,0,0.2)] hover:scale-105 cursor-pointer"
                      style={{ willChange: "transform" }}
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative h-64 w-full overflow-hidden rounded-t-2xl">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          style={{ willChange: "transform" }}
                        />
                      </div>
                      <div className="flex items-center justify-between px-5 py-4">
                        <p className="text-sm font-semibold text-[#1f1f2e]">{item.title}</p>
                        <span className="text-xl text-black transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Service Detail Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setSelectedItem(null)}
            style={{ animation: "fadeIn 0.3s ease" }}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white shadow-2xl transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()}
              style={{ animation: "slideUp 0.3s ease" }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 h-10 w-10 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-black hover:bg-[#C06C84] hover:text-white transition-all duration-300 shadow-lg"
              >
                <span className="text-2xl font-bold">×</span>
              </button>

              {/* Image Section */}
              <div className="relative h-64 md:h-80 w-full overflow-hidden">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                    {selectedItem.title}
                  </h2>
                  <p className="text-white/90 text-sm md:text-base">{selectedItem.description}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-10 space-y-8">
                {/* Duration */}
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#C06C84]/10 px-4 py-2">
                    <span className="text-sm font-semibold text-[#C06C84]">Duration: {selectedItem.duration}</span>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                    Key Benefits
                  </h3>
                  <div className="grid gap-3 md:grid-cols-2">
                    {selectedItem.benefits.map((benefit, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 rounded-xl border border-gray-100 bg-pink-50/50 px-4 py-3"
                      >
                        <span className="text-[#C06C84] text-xl leading-none mt-0.5">❀</span>
                        <p className="text-sm text-[#444] leading-relaxed">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Includes */}
                <div>
                  <h3 className="text-xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                    What's Included
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedItem.includes.map((item, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-[#C06C84]/30 bg-white px-5 py-2 text-sm font-medium text-[#C06C84]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        const event = new CustomEvent("openBookAppointment", { detail: { service: "Nail Service" } });
                        window.dispatchEvent(event);
                      }
                    }}
                    className="flex-1 md:flex-none rounded-full bg-[#C06C84] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#C06C84]/90 hover:scale-105"
                  >
                    Book Now
                  </button>
                  <button className="flex-1 md:flex-none rounded-full border-2 border-[#C06C84] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#C06C84] transition hover:bg-[#C06C84] hover:text-white hover:scale-105">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Find Nearest Section */}
        <FindNearest />

        {/* Video Gallery Section */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12">
          <VideoCarousel videos={nailVideos} title="Nail Art Transformation Gallery" />
        </div>

        <WhyScent />
      </div>
    </section>
    </>
  );
}

