"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const WhyScent = dynamic(() => import("../why/why"), { ssr: true });
const VideoCarousel = dynamic(() => import("../VideoCarousel/VideoCarousel"), { ssr: true });
const FindNearest = dynamic(() => import("../Findyour/find"), { ssr: true });

// Placeholder videos - will be replaced with actual facial service videos
const facialVideos = [
  { id: "9eXt8kx4NXI", title: "Facial Video 1" },
  { id: "y3ZZRdMHEr8", title: "Facial Video 2" },
  { id: "dNnGRTo6P6E", title: "Facial Video 3" },
  { id: "SpS2Pkme0A8", title: "Facial Video 4" },
  { id: "FTCoQQGPcNo", title: "Facial Video 5" },
];

const serviceChapters = [
  {
    id: "facials",
    title: "Facials",
    tagline: "Comprehensive facial treatments for radiant skin.",
    description:
      "Experience our range of premium facial treatments designed to cleanse, rejuvenate, and restore your skin's natural glow. From deep cleansing to anti-aging therapies, we offer personalized facials tailored to your skin's unique needs.",
    image: "/facials.jpg",
    services: ["Deep cleansing", "Skin rejuvenation", "Customized treatments", "Premium products"],
  },
  {
    id: "waxing",
    title: "Waxing",
    tagline: "Smooth, hair-free skin with professional waxing services.",
    description:
      "Achieve silky smooth skin with our professional waxing services. Our expert technicians use premium wax formulas and techniques to ensure comfortable, long-lasting results for all body areas.",
    image: "/waxing.jpg",
    services: ["Full body waxing", "Premium wax formulas", "Expert techniques", "Long-lasting results"],
  },
  {
    id: "threading",
    title: "Threading",
    tagline: "Precise hair removal with traditional threading technique.",
    description:
      "Experience the art of threading, a traditional hair removal method that provides precise, clean results. Perfect for eyebrows, upper lip, and facial hair removal with minimal irritation and natural precision.",
    image: "/threading.jpg",
    services: ["Eyebrow shaping", "Facial threading", "Precise technique", "Minimal irritation"],
  },
];

export default function FacialExperience() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef(null);

  const priceMenusByServiceId = {
    waxing: {
      note: "**GST is applicable",
      sections: [
        {
          title: "Body hair trimming for men",
          rows: [
            { name: "Arm", price: "₹450" },
            { name: "Leg", price: "₹1020" },
            { name: "Front/back", price: "₹1020" },
            { name: "Full body", price: "₹3000" },
          ],
        },
        {
          title: "Roll on wax women",
          rows: [
            { name: "Arm", price: "₹950" },
            { name: "Leg", price: "₹1200" },
            { name: "¾ leg", price: "₹1020" },
            { name: "Underarm", price: "₹1200" },
            { name: "Front/back", price: "₹4500" },
          ],
        },
        {
          title: "Roll on wax men",
          rows: [
            { name: "Arm", price: "₹1020" },
            { name: "Leg", price: "₹1200" },
            { name: "¾ leg", price: "₹1100" },
            { name: "Front/back", price: "₹1250" },
            { name: "Full body", price: "₹4500" },
          ],
        },
        {
          title: "Waxing for women",
          rows: [
            { name: "Arm", price: "₹800" },
            { name: "Leg", price: "₹1010" },
            { name: "¾ leg", price: "₹850" },
            { name: "Underarm", price: "₹290" },
            { name: "Front/back", price: "₹1020" },
            { name: "Full body", price: "₹4000" },
            { name: "Brazilian", price: "₹2300" },
            { name: "Bikini line", price: "₹1150" },
          ],
        },
        {
          title: "Waxing for men",
          rows: [
            { name: "Arm", price: "₹900" },
            { name: "Leg", price: "₹1130" },
            { name: "¾ leg", price: "₹960" },
            { name: "Underarm", price: "₹400" },
            { name: "Front/back", price: "₹1130" },
            { name: "Full body", price: "₹4500" },
            { name: "Brazilian", price: "₹2300" },
            { name: "Bikini line", price: "₹1130" },
          ],
        },
      ],
    },
    threading: {
      note: "**GST is applicable",
      sections: [
        {
          title: "Threading",
          rows: [
            { name: "Eyebrows", price: "₹120" },
            { name: "Upperlip", price: "₹60" },
            { name: "Chin", price: "₹60" },
            { name: "Forehead", price: "₹120" },
            { name: "Sidelocks", price: "₹120" },
            { name: "Full face", price: "₹380" },
          ],
        },
      ],
    },
  };

  // Split services into sections
  const mainServices = serviceChapters; // All 3 services
  const secondaryServices = []; // Hide secondary services
  const remainingServices = []; // Hide remaining services

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log("Autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* 1. Hero Banner - Video */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            src="/facial_video.mp4"
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </section>

      {/* 2. Four Main Service Sections */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-16 text-center px-4 sm:px-6">
            <p className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-xs font-light tracking-[0.3em] text-pink-400" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
              <span className="text-pink-500 text-lg sm:text-xl">❀</span> Premium Services
            </p>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-light text-[#1f1f2e] leading-relaxed tracking-[0.05em]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: 'none' }}>
              Skin
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-[#6f6f7a] font-light px-2" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
              Professional skin care services including facials, waxing, and threading
            </p>
          </div>

          <div className="space-y-16 md:space-y-20">
            {mainServices.map((service, idx) => (
              <div
                key={service.id}
                className={`grid gap-8 md:gap-12 md:grid-cols-2 md:items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s both` }}
              >
                <div className={`relative h-72 sm:h-80 md:h-96 overflow-hidden rounded-3xl ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className={`space-y-6 ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
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
                    {service.services.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <span className="text-pink-400 text-xl">❀</span>
                        <span className="text-base text-[#444]">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                    <button
                      onClick={() => {
                        setSelectedService(service);
                        setIsModalOpen(true);
                      }}
                      className="flex-1 rounded-full border-2 border-gray-300 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-[#1f1f2e] transition-all duration-300 hover:border-pink-400 hover:text-pink-600"
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
                      className="flex-1 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
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

      {/* 3. Four Secondary Services in Grid - Hidden */}
      {secondaryServices.length > 0 && (
      <section className="relative overflow-hidden bg-gradient-to-b from-[#fafafa] via-white to-[#fafafa] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.05),transparent_50%)]" />
        
        <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-16 text-center">
            <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-pink-400">
              <span className="text-pink-500 text-xl">❀</span> Additional Services
            </p>
            <h2 className="mb-4 text-3xl font-semibold text-[#1f1f2e] md:text-4xl lg:text-5xl" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
              More Facial Treatments
            </h2>
            <p className="mx-auto max-w-2xl text-[#6f6f7a] text-base md:text-lg">
              Explore our additional facial treatments for comprehensive skin care
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {secondaryServices.map((item, idx) => (
              <article
                key={item.id}
                onClick={() => {
                  setSelectedService(item);
                  setIsModalOpen(true);
                }}
                className="group relative overflow-hidden rounded-[32px] border border-gray-100/80 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-[0_40px_100px_rgba(0,0,0,0.2)] hover:border-pink-200/50 cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                }}
              >
                {/* Premium Badge with Animation */}
                <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-4 py-1.5 text-xs font-bold text-white shadow-xl transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <span className="inline-block animate-pulse">✨</span> Premium
                </div>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-20" />
                
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Overlay Content with Animation */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                    <h3 className="text-xl font-bold mb-1 drop-shadow-lg">{item.title}</h3>
                    <p className="text-xs text-white/90 font-medium">{item.tagline}</p>
                  </div>
                  
                  {/* Click Indicator */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                    <div className="rounded-full bg-white/20 backdrop-blur-md px-6 py-3 border border-white/30">
                      <p className="text-sm font-semibold text-white">Click for Details</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-gradient-to-b from-white to-gray-50/50">
                  <p className="text-sm leading-relaxed text-[#555] mb-5 line-clamp-3 group-hover:text-[#444] transition-colors">
                    {item.description}
                  </p>
                  
                  <div className="mb-6 space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1f1f2e] mb-3">Key Features:</p>
                    <ul className="space-y-2">
                      {item.services.slice(0, 3).map((service, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-[#444] transform transition-all duration-300 group-hover:translate-x-1">
                          <span className="text-pink-400 text-lg leading-none mt-0.5 group-hover:text-pink-500 transition-colors">❀</span>
                          <span className="leading-relaxed">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      if (typeof window !== "undefined") {
                        const event = new CustomEvent("openBookAppointment", { detail: { service: selectedService?.title || "Facial Treatment" } });
                        window.dispatchEvent(event);
                      }
                    }}
                    className="w-full rounded-full bg-gradient-to-r from-black via-gray-800 to-black px-6 py-3 text-sm font-semibold text-white shadow-xl transition-all duration-300 hover:from-pink-600 hover:via-rose-500 hover:to-pink-600 hover:shadow-2xl hover:scale-105 transform"
                  >
                    Book Appointment
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Additional Services - Remaining 5 services */}
      {remainingServices.length > 0 && (
        <section className="relative overflow-hidden bg-gradient-to-b from-white via-[#fafafa] to-white py-20 md:py-28">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,182,193,0.03),transparent_50%)]" />
          
          <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12">
            <div className="mb-16 text-center">
              <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.5em] text-pink-400">
                <span className="text-pink-500 text-xl">❀</span> Complete Collection
              </p>
              <h2 className="mb-4 text-3xl font-semibold text-[#1f1f2e] md:text-4xl lg:text-5xl" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                All Facial Services
              </h2>
              <p className="mx-auto max-w-2xl text-[#6f6f7a] text-base md:text-lg">
                Explore our complete range of facial treatments
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {remainingServices.map((item, idx) => (
                <article
                  key={item.id}
                  onClick={() => {
                    setSelectedService(item);
                    setIsModalOpen(true);
                  }}
                  className="group relative overflow-hidden rounded-[28px] border border-gray-100/80 bg-white shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.2)] hover:border-pink-200/50 cursor-pointer"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Premium Badge */}
                  <div className="absolute top-4 right-4 z-10 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 px-3 py-1 text-xs font-bold text-white shadow-xl">
                    ✨
                  </div>
                  
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="text-lg font-bold mb-1 drop-shadow-lg">{item.title}</h3>
                      <p className="text-xs text-white/90 font-medium line-clamp-1">{item.tagline}</p>
                    </div>
                  </div>
                  
                  <div className="p-5 bg-gradient-to-b from-white to-gray-50/50">
                    <p className="text-xs leading-relaxed text-[#555] mb-4 line-clamp-2 group-hover:text-[#444] transition-colors">
                      {item.description}
                    </p>
                    
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedService(item);
                        setIsModalOpen(true);
                      }}
                      className="w-full rounded-full bg-gradient-to-r from-black via-gray-800 to-black px-4 py-2 text-xs font-semibold text-white shadow-xl transition-all duration-300 hover:from-pink-600 hover:via-rose-500 hover:to-pink-600 hover:shadow-2xl hover:scale-105 transform"
                    >
                      View Details
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <WhyScent />
      
      {/* Add CSS animations and masonry styles */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.4s ease-out;
        }
        
        /* Masonry Layout Enhancements */
        .break-inside-avoid {
          break-inside: avoid;
          page-break-inside: avoid;
        }
        
        /* Ensure proper spacing in masonry */
        [class*="columns"] > * {
          display: inline-block;
          width: 100%;
        }
        
        /* Smooth transitions for masonry items */
        [class*="columns"] article {
          will-change: transform;
        }
      `}</style>

      {/* Modal for Detailed Information */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-[40px] bg-white shadow-2xl transform transition-all duration-500 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-all duration-300 hover:rotate-90"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="relative">
              {/* Hero Image */}
              <div className="relative h-80 md:h-96 overflow-hidden">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h2 className="text-3xl md:text-4xl font-bold mb-2" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                    {selectedService.title}
                  </h2>
                  <p className="text-lg text-white/90">{selectedService.tagline}</p>
                </div>
              </div>

              {/* Details Section */}
              <div className="p-8 md:p-12">
                {priceMenusByServiceId[selectedService.id] ? (
                  <div className="mb-10">
                    <div className="flex items-baseline justify-between gap-6 flex-wrap">
                      <h3
                        className="text-2xl font-semibold text-[#1f1f2e] mb-2"
                        style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                      >
                        Price list
                      </h3>
                      <p className="text-sm text-[#777] font-light">
                        {priceMenusByServiceId[selectedService.id].note}
                      </p>
                    </div>

                    <div className="mt-6 grid gap-5 md:grid-cols-2">
                      {priceMenusByServiceId[selectedService.id].sections.map((sec) => (
                        <div
                          key={sec.title}
                          className="rounded-3xl border border-gray-200/70 bg-white p-5 shadow-[0px_18px_60px_rgba(0,0,0,0.06)]"
                        >
                          <p
                            className="text-xs sm:text-sm font-semibold tracking-[0.32em] text-[#1f1f2e] uppercase mb-3"
                            style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif' }}
                          >
                            {sec.title}
                          </p>
                          <div className="space-y-2">
                            {sec.rows.map((row) => (
                              <div
                                key={`${sec.title}-${row.name}`}
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
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-[#1f1f2e] mb-4" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                        About This Treatment
                      </h3>
                      <p className="text-base leading-relaxed text-[#555]">
                        {selectedService.description}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-2xl font-semibold text-[#1f1f2e] mb-6" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
                        What's Included
                      </h3>
                      <div className="grid gap-4 md:grid-cols-2">
                        {selectedService.services.map((service, i) => (
                          <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-[#fef9fb] to-white border border-pink-100">
                            <span className="text-pink-400 text-2xl leading-none mt-1">❀</span>
                            <span className="text-base text-[#444] font-medium">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      if (typeof window !== "undefined") {
                        const event = new CustomEvent("openBookAppointment", { detail: { service: selectedService?.title || "Skin Treatment" } });
                        window.dispatchEvent(event);
                        setIsModalOpen(false);
                      }
                    }}
                    className="flex-1 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    Book Appointment Now
                  </button>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-[#1f1f2e] transition-all duration-300 hover:border-pink-400 hover:text-pink-600"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Find Nearest Section */}
      <FindNearest />

      {/* Video Gallery Section */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <VideoCarousel videos={facialVideos} title="Skin Care Gallery" />
      </div>
    </div>
  );
}

