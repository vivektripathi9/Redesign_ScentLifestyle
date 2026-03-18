"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

const galleryItems = [
  {
    title: "Manicure",
    image: "/w5.jpg",
    description: "a timeless manicure experience with nail shaping, cuticle care, hand massage, and polish application. Perfect for maintaining healthy, beautiful nails.",
    duration: "45 minutes",
    price: "₹600",
    tagline: "Clean shaping, cuticle care, and a polished finish.",
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
    title: "Pedicure",
    image: "/w7.jpg",
    description: "revitalize your feet with our pedicure ritual. Includes foot soak, exfoliation, nail care, and polish application for soft, beautiful feet.",
    duration: "60 minutes",
    price: "₹800",
    tagline: "Soak, exfoliation, and expert nail care for softer feet.",
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
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalView, setModalView] = useState("prices"); // "details" | "prices"
  const videoRef = useRef(null);

  const manicurePedicurePriceSections = [
    {
      title: "Manicure / pedicure",
      items: [
        { name: "Manicure / pedicure", price: "₹600 / ₹800" },
        { name: "Organic manicure / pedicure", price: "₹800 / ₹1000" },
        { name: "Kids manicure", price: "₹400" },
        { name: "Kids pedicure", price: "₹450" },
        { name: "Coffee manicure / pedicure", price: "₹900 / ₹1200" },
        { name: "Candle spa manicure / pedicure", price: "₹1700 / ₹1700" },
      ],
    },
    {
      title: "Foot facials",
      items: [
        { name: "Hydra foot facial", price: "₹2300" },
        { name: "Glyco foot facial", price: "₹2800" },
      ],
    },
    {
      title: "Add-ons",
      items: [
        { name: "Cut & file", price: "₹350" },
        { name: "Colour change", price: "₹350" },
        { name: "Geleration", price: "₹850" },
        { name: "French geleration", price: "₹1200" },
        { name: "Gel nail art (per finger)", price: "₹200*" },
        { name: "3d & 4d nail art (per finger)", price: "₹250*" },
      ],
    },
    {
      title: "Gel polish & extensions",
      items: [
        { name: "Chrome gel polish", price: "₹1400" },
        { name: "Ombre gel polish", price: "₹1700" },
        { name: "Nail extention", price: "₹2800" },
        { name: "Nail extention infill", price: "₹1800" },
        { name: "Over lay", price: "₹1800" },
      ],
    },
  ];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

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
      <div className="flex min-h-screen flex-col bg-white">
        {/* 1. Hero Banner - Video */}
        <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
          <div className="absolute inset-0">
        <video
              ref={videoRef}
          src="/nail_vi.mp4"
              className="h-full w-full object-cover"
          autoPlay
              loop
          muted
          playsInline
        />
      </div>
        </section>

        {/* 2. Main Service Sections (Facial-style layout) */}
        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="mb-16 text-center px-4 sm:px-6">
              <p
                className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-xs font-light tracking-[0.3em] text-pink-400"
                style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: "none" }}
              >
                <span className="text-pink-500 text-lg sm:text-xl">❀</span> Premium Services
              </p>
              <h2
                className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-light text-[#1f1f2e] leading-relaxed tracking-[0.05em]"
                style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: "none" }}
              >
                Nail
              </h2>
              <p
                className="mx-auto max-w-2xl text-sm sm:text-base text-[#6f6f7a] font-light px-2"
              style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
            >
                Manicure and pedicure rituals designed for clean elegance and long-lasting comfort
              </p>
        </div>

            <div className="space-y-16 md:space-y-20">
              {galleryItems.map((service, idx) => (
                <div
                  key={service.title}
                  className={`grid gap-8 md:gap-12 md:grid-cols-2 md:items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                  style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s both` }}
                >
                  <div className={`relative h-96 overflow-hidden rounded-3xl ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                        <Image
                      src={service.image}
                      alt={service.title}
                          fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                        />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>

                  <div className={`space-y-6 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                    <div>
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-600">
                        <span>✨</span> Premium Treatment
                      </div>
                      <h3 className="mb-3 text-3xl font-semibold text-[#1f1f2e] md:text-4xl" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                        {service.title}
                      </h3>
                      <p className="text-lg text-gray-500">{service.tagline}</p>
                    </div>

                    <p className="text-base leading-relaxed text-[#555] md:text-lg">{service.description}</p>

                    <div className="grid gap-3">
                      {service.includes.slice(0, 4).map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="text-pink-400 text-xl">❀</span>
                          <span className="text-base text-[#444]">{item}</span>
                  </div>
                ))}
              </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                        onClick={() => {
                          setModalView("prices");
                          setSelectedItem(service);
                        }}
                        className="flex-1 rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-[#1f1f2e] transition-all duration-300 hover:border-pink-400 hover:text-pink-600"
                      >
                        Learn more
                  </button>
                  <button
                        onClick={() => {
                          if (typeof window !== "undefined") {
                            const event = new CustomEvent("openBookAppointment", { detail: { service: service.title } });
                            window.dispatchEvent(event);
                          }
                        }}
                        className="flex-1 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                      >
                        Book my treatment
                  </button>
                    </div>
            </div>
          </div>
        ))}
            </div>
          </div>
        </section>

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
                  {selectedItem.price ? (
                    <p className="text-white/95 text-sm md:text-base font-medium mb-1">
                      {selectedItem.price}
                    </p>
                  ) : null}
                  <p className="text-white/90 text-sm md:text-base">{selectedItem.description}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 md:p-10 space-y-8">
                {modalView === "prices" ? (
                  <div className="space-y-5">
                    <div className="flex items-baseline justify-between gap-6 flex-wrap">
                      <h3
                        className="text-2xl font-semibold text-[#1f1f2e] mb-2"
                        style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                      >
                        Price list
                      </h3>
                      <p className="text-sm text-[#777] font-light">
                        *GST is applicable
                      </p>
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      {manicurePedicurePriceSections.map((section) => (
                        <div
                          key={section.title}
                          className="rounded-3xl border border-gray-200/70 bg-white p-5 shadow-[0px_18px_60px_rgba(0,0,0,0.06)]"
                        >
                          <p
                            className="text-xs sm:text-sm font-semibold tracking-[0.32em] text-[#1f1f2e] uppercase mb-3"
                            style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif' }}
                          >
                            {section.title}
                          </p>
                          <div className="space-y-2">
                            {section.items.map((row) => (
                              <div
                                key={`${section.title}-${row.name}`}
                                className="flex items-start justify-between gap-6 border-b border-gray-100/80 pb-2 last:border-b-0 last:pb-0"
                              >
                                <p className="text-sm sm:text-base text-[#2a2a35] font-light leading-relaxed">
                                  {row.name}
                                </p>
                                <p className="text-sm sm:text-base text-[#111] font-medium whitespace-nowrap">
                                  {row.price}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-[#666] font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                      * denotes price per finger where mentioned.
                    </p>
                  </div>
                ) : (
                  <>
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
                  </>
                )}
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
    </>
  );
}

