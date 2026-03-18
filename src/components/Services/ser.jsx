"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const headingPhrases = [
  "Hair salon services in Bangalore",
  "Premium haircuts & colour in Bangalore",
  "Expert stylists crafting iconic looks",
  "Hair salon services in Bangalore",
];

const youtubeVideos = [
  { id: "IpmH_xEAzbc", title: "Hair Transformation 1" },
  { id: "rx1zTWfx38k", title: "Hair Transformation 2" },
  { id: "3SKaO4InN4Y", title: "Hair Transformation 3" },
  { id: "Gza-OvsVPdw", title: "Hair Transformation 4" },
  { id: "edMxxFfvyos", title: "Hair Transformation 5" },
  { id: "syAtP3gzcek", title: "Hair Transformation 6" },
  { id: "dvARFmxQrDM", title: "Hair Transformation 7" },
  { id: "7-0jEpjZdlQ", title: "Hair Transformation 8" },
  { id: "gGmGnqE8bvM", title: "Hair Transformation 9" },
  { id: "NeJANcK7fyg", title: "Hair Transformation 10" },
  { id: "p3HOHXWOqBQ", title: "Hair Transformation 11" },
];

function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const videosPerPage = 4;
  
  // Create an infinite loop by repeating the videos array
  const infiniteVideos = [...youtubeVideos, ...youtubeVideos, ...youtubeVideos];

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      // Loop back to the end if we go below 0
      if (newIndex < 0) {
        return infiniteVideos.length - videosPerPage;
      }
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      // Loop back to the start if we reach the end
      if (newIndex + videosPerPage > infiniteVideos.length) {
        return 0;
      }
      return newIndex;
    });
  };

  const currentVideos = infiniteVideos.slice(
    currentIndex,
    currentIndex + videosPerPage
  );

  const handleVideoClick = (videoId) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 -ml-4"
          aria-label="Previous videos"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 -mr-4"
          aria-label="Next videos"
        >
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Video Grid */}
        <div className="grid w-full gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8">
          {currentVideos.map((video, index) => (
            <div
              key={video.id}
              className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)] cursor-pointer"
              onClick={() => handleVideoClick(video.id)}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                  <div className="bg-white/90 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function formatINR(value) {
  if (value === undefined || value === null) return "";
  if (value === "-") return "-";
  const trimmed = String(value).trim();
  if (!trimmed) return "";
  if (trimmed.includes("₹")) return trimmed;
  const star = trimmed.endsWith("*") ? "*" : "";
  const numberPart = star ? trimmed.slice(0, -1) : trimmed;
  const n = Number(numberPart.replace(/,/g, ""));
  if (Number.isFinite(n)) return `₹${n.toLocaleString("en-IN")}${star}`;
  return `₹${trimmed}`;
}

function PriceTable({ table }) {
  const colCount = table.columns?.length || 0;
  const hasLengthColumns = colCount === 5; // "", Short, Shoulder length, Medium, Long
  const minWidthClass = hasLengthColumns ? "min-w-[860px]" : "min-w-[520px]";

  return (
    <div className="rounded-3xl border border-gray-200/70 bg-white p-5 shadow-[0px_18px_60px_rgba(0,0,0,0.06)]">
      <div className="flex flex-col gap-1 mb-4">
        <p
          className="text-xs sm:text-sm font-semibold tracking-[0.32em] text-[#1f1f2e] uppercase"
        >
          {table.title}
        </p>
        {table.subtitle ? (
          <p className="text-sm text-[#777] font-light">{table.subtitle}</p>
        ) : null}
      </div>

      <div className="-mx-2 overflow-x-auto px-2">
        <table className={`${minWidthClass} w-full border-collapse table-fixed`}>
          <colgroup>
            {/* First column is wider for service names; remaining columns are fixed and equal */}
            {hasLengthColumns ? (
              <>
                <col style={{ width: "44%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "14%" }} />
              </>
            ) : (
              <>
                <col style={{ width: colCount > 0 ? "52%" : "52%" }} />
                {Array.from({ length: Math.max(colCount - 1, 0) }).map((_, i) => (
                  <col key={i} style={{ width: colCount > 1 ? `${48 / (colCount - 1)}%` : "48%" }} />
                ))}
              </>
            )}
          </colgroup>
          <thead>
            <tr className="border-b border-gray-200">
              {table.columns.map((col, idx) => (
                <th
                  key={`${table.title}-col-${idx}`}
                  className={`py-2 text-xs font-light tracking-[0.12em] text-[#1f1f2e] whitespace-nowrap ${
                    idx === 0
                      ? "text-left pr-6"
                      : "text-right px-6"
                  }`}
                  style={{ fontWeight: 300, textTransform: "lowercase" }}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row) => (
              <tr key={`${table.title}-${row.label}`} className="border-b border-gray-100 last:border-b-0">
                <td className="py-3 pr-6 text-sm sm:text-base text-[#2a2a35] font-light">
                  {row.label}
                </td>
                {row.values.map((v, idx) => (
                  <td
                    key={`${table.title}-${row.label}-${idx}`}
                    className="py-3 px-6 text-sm sm:text-base text-[#111] font-medium whitespace-nowrap text-right"
                  >
                    {formatINR(v)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const serviceCategories = [
  {
    id: "haircut-styling",
    title: "Haircut",
    description:
      "Signature dry and wet cutting, precision texturising, and couture blowouts designed to frame your features while keeping movement natural. Every session begins with a detailed face-shape consultation so your cut stays effortless for weeks.",
    detailedDescription:
      "Our Haircut service is a comprehensive hair transformation experience. We specialize in both dry and wet cutting techniques, allowing us to work with your hair's natural texture. Our expert stylists use precision texturising methods to add movement and dimension. Each session includes a personalized face-shape consultation to ensure your cut complements your features perfectly. We offer couture blowouts that give you that salon-fresh look, and our cuts are designed to grow out beautifully, staying effortless for weeks. Whether you want a classic cut, a modern layered style, or a precision bob, our Sassoon-trained stylists will create a look that's uniquely yours.",
    image: "/hairdresser-taking-care-her-client.jpg",
    pricingNote: "**GST is applicable",
    pricingTables: [
      {
        title: "Haircut",
        columns: ["", "Stylist", "Top stylist", "Director"],
        rows: [
          { label: "Women", values: ["1500", "1700", "2300"] },
          { label: "Men", values: ["450", "700", "1400"] },
          { label: "Child girl", values: ["700", "700", "1400"] },
          { label: "Child boy", values: ["250", "250", "950"] },
        ],
      },
    ],
  },
  {
    id: "highlights-streaks",
    title: "Colour",
    description:
      "Lived-in balayage, foil brilliance, and bold streaks created with bond-protect colour systems that keep hair glossy. We map complexion, undertone, and lifestyle before placing a single foil so the light always hits right.",
    detailedDescription:
      "Our Colour service transforms your hair with professional color techniques. We specialize in lived-in balayage that creates natural-looking dimension, foil highlights for precise color placement, and bold streaks for those who want to make a statement. All our coloring services use bond-protect color systems that not only add beautiful color but also strengthen and protect your hair, keeping it glossy and healthy. Before we place a single foil, we conduct a thorough consultation analyzing your skin complexion, undertones, and lifestyle to ensure the color placement is perfect. Our techniques ensure the light always hits right, creating depth and dimension that looks natural and grows out beautifully.",
    image: "/elegant-makeup-portrait.jpg",
    pricingNote: "**GST is applicable\n*price vary depending on the thickness of hair",
    pricingTables: [
      {
        title: "Hair color",
        subtitle: "Women",
        columns: ["", "Short", "Shoulder length", "Medium", "Long"],
        rows: [
          { label: "Global", values: ["5600*", "6200*", "6700*", "7900*"] },
          { label: "Global NH3 free", values: ["6700*", "7300*", "7900*", "8400*"] },
          { label: "Highlights", values: ["6700*", "7300*", "7900*", "8400*"] },
          { label: "Root touch up", values: ["2000*", "-", "-", "-"] },
          { label: "Root touch up NH3 free", values: ["2200*", "-", "-", "-"] },
    ],
  },
  {
        title: "Hair color men",
        columns: ["", "Price"],
        rows: [
          { label: "Global", values: ["1700*"] },
          { label: "Global NH3 free", values: ["2200*"] },
          { label: "Highlights", values: ["2800*"] },
          { label: "Root touch-up", values: ["1100*"] },
          { label: "Root touch-up NH3 free", values: ["1400*"] },
        ],
      },
    ],
  },
  {
    id: "hair-treatments",
    title: "Treatments",
    description:
      "Clinical-strength keratin, botox, and bond-building therapies that tame frizz, seal the cuticle, and repair damage from within. Ideal before milestone events or as seasonal hair rehab for stressed strands.",
    detailedDescription:
      "Our Treatments are intensive, clinical-strength therapies designed to transform damaged, frizzy, or stressed hair. We offer keratin treatments that smooth and straighten hair while adding strength and shine. Our hair botox therapy provides deep conditioning and repair, filling in gaps in damaged hair cuticles. Bond-building treatments like Olaplex work at the molecular level to repair broken disulfide bonds, restoring hair's structural integrity. These treatments effectively tame frizz, seal the cuticle for smoothness, and repair damage from within. Perfect for preparing for milestone events like weddings or special occasions, or as seasonal hair rehabilitation for hair that's been stressed by styling, coloring, or environmental factors. Each treatment is customized to your hair's specific needs and condition.",
    image: "/beautiful-woman-with-towel-holding-lily.jpg",
    pricingNote: "**GST is applicable",
    pricingTables: [
      {
        title: "Hair treatments",
        columns: ["", "Short", "Shoulder length", "Medium", "Long"],
        rows: [
          { label: "Olaplex stand alone", values: ["2800", "3200", "3700", "4000"] },
          { label: "Olaplex curl rebuilding", values: ["6200", "6700", "7300", "7900"] },
          { label: "Perming", values: ["7300", "8500", "9600", "10800"] },
          { label: "Straightening", values: ["6700", "8000", "9000", "10000"] },
          { label: "Botox", values: ["10000", "11300", "12400", "13500"] },
          { label: "Botoliss", values: ["11900", "13000", "14000", "15200"] },
        ],
      },
    ],
  },
  {
    id: "scalp-treatments",
    title: "Scalp treatments",
    description:
      "Targeted scalp rituals to reset balance and comfort — anti-dandruff, sensitivity care, root activation, and oil control. Recommended as a monthly maintenance ritual for healthier hair growth.",
    detailedDescription:
      "Scalp health is hair health. These focused treatments use clinical actives and massage techniques to reduce flakes, calm irritation, stimulate follicles, and balance oil production. Choose based on your scalp’s current mood — or let our therapists assess you in minutes.",
    image: "/young-woman-relaxing-spa-salon.jpg",
    pricingNote: "**GST is applicable",
    pricingTables: [
      {
        title: "Scalp treatments",
        columns: ["", "Men", "Women"],
        rows: [
          { label: "Anti dandruff treatment", values: ["1800", "2300"] },
          { label: "Root activating treatment", values: ["2000", "2500"] },
          { label: "Sensitive scalp treatment", values: ["1900", "2400"] },
          { label: "Oily scalp treatment", values: ["1800", "2300"] },
        ],
      },
    ],
  },
  {
    id: "hair-spa",
    title: "Hairspa",
    description:
      "Steam-powered rituals that combine scalp brushing, booster ampoules, and pressure-point massage to restore shine, strength, and calm. Choose hydration, detox, or shine protocols crafted specifically for your scalp condition.",
    detailedDescription:
      "Our Hairspa are luxurious, steam-powered treatments designed to restore your hair's natural health and vitality. Each ritual combines therapeutic scalp brushing to stimulate circulation, specialized booster ampoules packed with nourishing ingredients, and relaxing pressure-point massage techniques. We offer three distinct protocols: Hydration for dry, damaged hair that needs moisture; Detox for removing product buildup and impurities; and Shine for restoring natural luster and gloss. Our expert therapists assess your scalp condition and customize the treatment to address your specific needs. The steam therapy opens hair cuticles, allowing deep penetration of nutrients, while the massage promotes relaxation and reduces stress. This comprehensive approach not only improves hair health but also provides a calming, rejuvenating experience.",
    image: "/young-woman-relaxing-spa-salon.jpg",
    pricingNote:
      "**GST is applicable\n*for all hair spa there will be a complimentary head & shoulder massage",
    pricingTables: [
      {
        title: "Hair spa",
        columns: ["", "Short", "Shoulder length", "Medium", "Long"],
        rows: [
          { label: "Spa essence anti hairfall hair spa", values: ["1400", "2050", "2250", "2900"] },
          { label: "Spa essence anti dandruff", values: ["1400", "2050", "2250", "2900"] },
          { label: "Shea butter hair spa", values: ["2900", "3000", "3500", "3700"] },
          { label: "Fiber clinix hair spa", values: ["3000", "3400", "3600", "4100"] },
          { label: "3 tenx hydra revive hairspa", values: ["3100", "3400", "3800", "4300"] },
          { label: "3 tenx revitalise hair spa", values: ["3200", "3600", "4000", "4500"] },
          { label: "Brazil cacao hair spa", values: ["3200", "3600", "4100", "4500"] },
          { label: "Moroccan hair spa", values: ["3300", "3700", "4300", "4700"] },
          { label: "Olaplex (stand alone with hair spa)", values: ["3400", "3800", "4300", "4700"] },
          { label: "Botox hair spa", values: ["4000", "4200", "4500", "4800"] },
        ],
      },
    ],
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);
  const [cartMessage, setCartMessage] = useState("");
  const cartTimeoutRef = useRef(null);

  const openBookAppointment = (serviceName) => {
    if (typeof window !== "undefined") {
      const event = new CustomEvent("openBookAppointment", { detail: { service: serviceName || "" } });
      window.dispatchEvent(event);
    }
  };

  const handleBookAppointment = (event, label = "Service") => {
    event?.stopPropagation();
    openBookAppointment(label);
  };

  const getHighlights = (category) => {
    const firstTable = category?.pricingTables?.[0];
    const labels = firstTable?.rows?.map((r) => r.label).filter(Boolean) || [];
    return labels.slice(0, 4);
  };

  const truncate = (text, max = 220) => {
    const t = (text || "").trim();
    if (!t) return "";
    if (t.length <= max) return t;
    return `${t.slice(0, max).trimEnd()}…`;
  };

  useEffect(() => {
    return () => {
      if (cartTimeoutRef.current) clearTimeout(cartTimeoutRef.current);
    };
  }, []);

  return (
    <div
      className="flex min-h-screen flex-col bg-white"
      style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif', fontWeight: 300 }}
    >
      {/* 1. Hero Banner - Video */}
      <section className="relative h-[70vh] md:h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
        <video
          src="/service_video.mp4"
            className="h-full w-full object-cover"
          autoPlay
            loop
          muted
          playsInline
            preload="metadata"
          />
        </div>
      </section>

      {/* 2. Main Service Sections (Facial-style layout) */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-7xl px-6 md:px-12">
          <div className="mb-16 text-center px-4 sm:px-6">
            <p className="mb-4 sm:mb-6 inline-flex items-center gap-2 text-xs font-light tracking-[0.3em] text-pink-400" style={{ fontWeight: 300, textTransform: "none" }}>
              <span className="text-pink-500 text-lg sm:text-xl">❀</span> Premium Services
            </p>
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl font-light text-[#1f1f2e] leading-relaxed tracking-[0.05em]" style={{ fontWeight: 300, textTransform: "none" }}>
              Hair
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-[#6f6f7a] font-light px-2" style={{ fontWeight: 300 }}>
              Haircut, colour, treatments, scalp rituals, and hair spa — clearly priced for every length and level.
          </p>
        </div>

          {/* Service Sections (Facial-style layout) */}
          <div className="space-y-16 md:space-y-20">
          {serviceCategories.map((category, idx) => (
              <div
                key={category.id}
                id={category.id}
              className={`grid gap-8 md:gap-12 md:grid-cols-2 md:items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              style={{ animation: `fadeInUp 0.8s ease-out ${idx * 0.2}s both` }}
            >
              <div className={`relative h-96 overflow-hidden rounded-3xl ${idx % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                    quality={90}
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>

              <div className={`space-y-6 ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-pink-100 px-4 py-1.5 text-xs font-semibold text-pink-600">
                    <span>✨</span> Premium Treatment
                  </div>
                  <h3 className="mb-3 text-3xl font-semibold text-[#1f1f2e] md:text-4xl" style={{ fontWeight: 300 }}>
                    {category.title}
                  </h3>
                  <p className="text-lg text-gray-500">{category.description}</p>
                </div>

                {/* Intentionally hide long detailed description on the main page (keep it in modal) */}

                <div className="grid gap-3">
                  {getHighlights(category).map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="text-pink-400 text-xl">❀</span>
                      <span className="text-base text-[#444]">{item}</span>
                    </div>
                  ))}
                  </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <button
                    onClick={() => setActiveService(category.id)}
                    className="flex-1 rounded-full border-2 border-gray-300 px-8 py-4 text-base font-semibold text-[#1f1f2e] transition-all duration-300 hover:border-pink-400 hover:text-pink-600"
                  >
                    Learn more
                  </button>
                    <button
                    onClick={() => openBookAppointment(category.title)}
                    className="flex-1 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-pink-600 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    Book my treatment
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {activeService && (
          <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-4 sm:py-8 overflow-y-auto">
            <div className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-[40px] bg-white shadow-[0px_40px_120px_rgba(0,0,0,0.35)] md:flex-row my-auto max-h-[95vh]">
              {(() => {
                const activeCategory = serviceCategories.find((item) => item.id === activeService);
                if (!activeCategory) return null;
                return (
                  <>
                    <button
                      aria-label="Close modal"
                      className="absolute right-5 top-5 z-10 rounded-full border border-gray-200 bg-white/60 p-2 text-gray-600 transition hover:bg-black hover:text-white"
                      onClick={() => setActiveService(null)}
                    >
                      ✕
                    </button>
                    <div className="relative h-64 w-full md:h-auto md:flex-[0_0_520px] lg:flex-[0_0_560px]">
                      <Image
                        src={activeCategory.image}
                        alt={activeCategory.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 50vw"
                        quality={90}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <p className="text-sm tracking-[0.4em]" style={{ fontWeight: 300, textTransform: 'none' }}>
                          {activeCategory.title}
                        </p>
                        <p className="text-xs text-white/80">Tailored rituals for every mood</p>
                      </div>
                    </div>
                    <div className="flex w-full flex-1 flex-col gap-4 sm:gap-5 px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 max-h-[85vh] overflow-y-auto">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-2xl sm:text-3xl font-light text-[#1f1f2e]" style={{ fontWeight: 300 }}>
                          {activeCategory.title}
                        </h3>
                        <p className="text-sm sm:text-base leading-relaxed text-gray-700 font-light" style={{ fontWeight: 300 }}>{activeCategory.description}</p>
                        {activeCategory.detailedDescription && (
                          <div className="pt-3 border-t border-gray-200">
                            <p className="text-xs sm:text-sm leading-relaxed text-gray-600 mt-2 font-light" style={{ fontWeight: 300 }}>
                              {activeCategory.detailedDescription}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="space-y-3">
                        <p className="text-xs tracking-[0.3em] text-gray-400 font-light" style={{ fontWeight: 300, textTransform: 'none' }}>
                          Service menu
                        </p>
                        {activeCategory.pricingNote ? (
                          <p className="text-sm text-[#777] font-light whitespace-pre-line">
                            {activeCategory.pricingNote}
                          </p>
                        ) : null}
                        {activeCategory.pricingTables?.length ? (
                          <div className="grid gap-5">
                            {activeCategory.pricingTables.map((t) => (
                              <PriceTable key={`${activeCategory.id}-${t.title}-${t.subtitle || ""}`} table={t} />
                            ))}
                          </div>
                        ) : activeCategory.services?.length ? (
                        <div className="grid grid-cols-1 gap-2">
                          {activeCategory.services.map(({ name, price }) => (
                            <div
                              key={name}
                              className="flex flex-col rounded-2xl border border-gray-100 px-4 py-3 text-left sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div className="flex items-center gap-2 text-sm text-gray-700 font-light" style={{ fontWeight: 300 }}>
                                <span className="text-pink-400">❀</span>
                                {name}
                              </div>
                                <span className="mt-2 text-sm font-light text-[#1f1f2e] sm:mt-0" style={{ fontWeight: 300 }}>
                                {price}
                              </span>
                            </div>
                          ))}
                        </div>
                        ) : null}
                      </div>
                      <div className="mt-auto flex flex-wrap gap-3">
                        <button
                          className="rounded-full bg-black px-8 py-3 text-xs font-light tracking-[0.3em] text-white transition hover:bg-black/80"
                          style={{ fontWeight: 300, textTransform: 'none' }}
                          onClick={(e) => handleBookAppointment(e, activeCategory.title)}
                        >
                          Book appointment
                        </button>
                        <button
                          className="rounded-full border border-black px-8 py-3 text-xs font-light tracking-[0.3em] text-[#1f1f2e] transition hover:bg-black hover:text-white"
                          style={{ fontWeight: 300, textTransform: 'none' }}
                          onClick={() => setActiveService(null)}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}

        {/* YouTube Video Gallery Section */}
        <div className="mt-16 w-full">
          <div className="flex flex-col items-center gap-6 text-center mb-12">
            <div className="decorative-flower-divider flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-black" />
              <span className="text-pink-400 text-xl">❀</span>
              <span className="h-px w-16 bg-black" />
            </div>
            <h3 
              className="text-3xl font-light text-[#1f1f2e] sm:text-4xl"
              style={{ fontWeight: 300 }}
            >
              Hair Transformation Gallery
            </h3>
            <p className="max-w-3xl text-base text-gray-600 font-light" style={{ fontWeight: 300 }}>
              Watch our expert stylists create stunning transformations. From precision cuts to vibrant colors, see the artistry behind every service.
            </p>
          </div>

          {/* Video Carousel */}
          <VideoCarousel />

          {/* View Full Playlist Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="https://www.youtube.com/playlist?list=PLoqCDhq9itH__wBhQpWLFEdG-KaX8qaBA"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black px-8 py-3 text-xs font-light tracking-[0.3em] text-[#1f1f2e] transition-all hover:bg-black hover:text-white"
              style={{ fontWeight: 300, textTransform: 'none' }}
            >
              View Full Playlist
            </a>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center">
          <div className="decorative-flower-divider flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-black" />
            <span className="text-pink-400 text-xl">❀</span>
            <span className="h-px w-12 bg-black" />
          </div>
          <h3 
            className="text-2xl font-light text-[#1f1f2e] sm:text-3xl"
            style={{ fontWeight: 300 }}
          >
            Ready to Transform Your Look?
          </h3>
          <p className="max-w-2xl text-base text-gray-600 font-light" style={{ fontWeight: 300 }}>
            Reserve your ritual now and arrive to a stylist who already knows what you need.
          </p>
          <button
            className="rounded-md bg-red-600 px-8 py-3 text-sm font-light tracking-wide text-white transition-colors hover:bg-red-700"
            style={{ fontWeight: 300, textTransform: 'none' }}
            onClick={(e) => {
              e.preventDefault();
              openBookAppointment("Signature Service Bundle");
            }}
          >
            Book appointment
          </button>
        </div>
      </div>
      {cartMessage && (
        <div className="pointer-events-none fixed bottom-6 right-6 z-[1100] rounded-full bg-black px-6 py-3 text-sm text-white shadow-2xl">
          {cartMessage}
        </div>
      )}
    </section>
    </div>
  );
}

