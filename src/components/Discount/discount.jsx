"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";
import TrustedBy from "@/components/Trustedby/trusted";
import FindNearest from "@/components/Findyour/find";
import { shopCategories } from "@/components/Shop/shop";

import hairImg from "./discount images/hairs.jpg";
import skinImg from "./discount images/skin.jpg";
import nailsImg from "./discount images/nails.jpg";
import lashesImg from "./discount images/lashes.jpg";
import bodyTherapyImg from "./discount images/bodytherepy.jpg";

const heroSlides = [
  // Offer 1 — Nails
  {
    id: "offer-nails",
    image: nailsImg,
    alt: "Nails offer",
    align: "right",
    scentLabel: "SCENT",
    title: "NAIL EXTENSIONS & GEL NAILS",
    price: "FOR ₹1,999/-",
    offerType: "Limited Time Offer",
    features: "Premium Finish • Long Lasting • Expert Application",
    subtitle: "",
    accent: "#111111",
    anim: "slideRight",
    cta: { label: "Book Now", href: "/nails" },
    buttonTextColor: "#ffffff",
  },

  // Offer 2 — Facial + free manicure
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
    price: "",
    accent: "#111111",
    anim: "fadeUp",
    cta: { label: "Explore Services", href: "/facial" },
    buttonTextColor: "#ffffff",
  },

  // Offer 3 — Waxing combo
  {
    id: "offer-body-therapy",
    image: bodyTherapyImg,
    alt: "Waxing combo offer",
    align: "left",
    scentLabel: "SCENT",
    title: "WAXING COMBO",
    subtitle: "Under Arms + Full Arms + Full Legs",
    offerType: "",
    features: "Smooth Skin • Hygienic • Professional Care",
    price: "",
    accent: "#111111",
    anim: "slideLeft",
    cta: { label: "Book Now", href: "/spa" },
    buttonTextColor: "#ffffff",
  },

  // Offer 4 — Hair highlights
  {
    id: "offer-hair",
    image: hairImg,
    alt: "Hair highlights offer",
    align: "left",
    scentLabel: "SCENT",
    title: "FESTIVE OFFER",
    subtitle: "GLOBAL + HIGHLIGHTS",
    price: "FLAT ₹8,999/-",
    offerType: "Limited Offer",
    features: "Shine • Dimension • Premium Hair Color",
    accent: "#D4AF37",
    anim: "zoomIn",
    cta: { label: "View Offers", href: "/services" },
    buttonTextColor: "#161616",
  },

  // Extra slide (not provided yet by the user) — keeps the 5th image functional.
  {
    id: "offer-lashes",
    image: lashesImg,
    alt: "Lashes offer",
    align: "left",
    scentLabel: "SCENT",
    title: "LASH LIFT & EXTENSIONS",
    subtitle: "",
    offerType: "Trending Offer",
    features: "Natural Volume • Long Hold • Expert Styling",
    price: "FOR ₹2,999/-",
    accent: "#D4AF37",
    anim: "popIn",
    cta: { label: "Book Now", href: "/lashes" },
    buttonTextColor: "#161616",
  },
];

function CocoMelon({
  initialOfferId,
  extraSlides = [],
  forceCtaHref,
  forceCtaLabel,
  ctaRectangular = false,
  centerButtonLabel,
  centerButtonHref,
  sizeVariant = "default",
}) {
  const slidesToRender = useMemo(() => [...heroSlides, ...extraSlides], [extraSlides]);
  const initialIndex = useMemo(() => {
    const idx = slidesToRender.findIndex((s) => s.id === initialOfferId);
    return idx >= 0 ? idx : 0;
  }, [initialOfferId, slidesToRender]);
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slidesToRender.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [slidesToRender.length]);

  return (
    <section id="discount" className="bg-white">
      <div
        className={`relative mx-auto w-full overflow-hidden bg-black ${
          sizeVariant === "large"
            ? "aspect-[3/4] max-h-[calc(100vh-90px)] md:aspect-[16/8]"
            : "aspect-[5/8] max-h-[calc(100vh-160px)] md:aspect-[16/9]"
        }`}
      >
        {slidesToRender.map((slide, index) => {
          const isActive = index === activeIndex;
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
                  className={`w-full flex ${
                    slide.align === "right"
                      ? slide.id === "offer-nails"
                        ? "justify-end pr-8 text-right"
                        : "justify-end pr-4 text-right"
                      : "justify-start pl-8 text-left"
                  }`}
                  style={{
                    ["--accent"]: slide.accent,
                    transform:
                      slide.id === "offer-nails"
                        ? "translateX(-10px)"
                        : slide.align === "left"
                          ? "translateX(22px)"
                          : "translateX(0px)",
                    fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif',
                  }}
                >
                  <div className="w-full max-w-[480px]">
                    <p className="inline-flex rounded-full bg-white/88 px-4 py-1 text-[12px] uppercase tracking-[0.26em] text-black">
                      {slide.scentLabel}
                    </p>

                    <h3
                      className="hero-title mt-2 text-[28px] uppercase tracking-[0.22em] drop-shadow-[0_14px_28px_rgba(0,0,0,0.5)] sm:text-[36px] md:text-[42px]"
                      style={{ color: "var(--accent)" }}
                    >
                      {slide.title}
                    </h3>

                    {slide.subtitle ? (
                      <p
                        className="mt-3 text-[16px] leading-snug sm:text-[20px]"
                        style={{ color: slide.subtitleColor || "#ffffff" }}
                      >
                        {slide.subtitle}
                      </p>
                    ) : null}

                    {slide.price ? (
                      <p
                        className="mt-4 inline-flex items-center rounded-full border bg-black/45 px-6 py-2 text-[14px] font-semibold backdrop-blur sm:text-[16px]"
                        style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
                      >
                        {slide.price}
                      </p>
                    ) : null}

                    {slide.offerType ? (
                      <p
                        className="mt-3 text-[12px] uppercase tracking-[0.18em]"
                        style={{ color: slide.offerTypeColor || "var(--accent)" }}
                      >
                        {slide.offerType}
                      </p>
                    ) : null}

                    {slide.features ? (
                      <p
                        className="mt-4 text-[12px] leading-snug sm:text-[14px]"
                        style={{ color: slide.featuresColor || "rgba(255,255,255,0.95)" }}
                      >
                        {slide.features.split("•").map((f, i) => (
                          <span key={`${slide.id}-f-${i}`} className="block">
                            {f.trim()}
                          </span>
                        ))}
                      </p>
                    ) : null}

                    {slide.cta?.href || forceCtaHref ? (
                      <a
                        href={forceCtaHref || slide.cta.href}
                        className={`mt-6 inline-flex items-center justify-center px-8 py-2 text-[14px] font-semibold shadow-[0_22px_50px_rgba(0,0,0,0.25)] transition hover:scale-[1.03] sm:text-[16px] ${
                          ctaRectangular ? "rounded-md" : "rounded-full"
                        }`}
                        style={{
                          backgroundColor: slide.accent,
                          color: slide.buttonTextColor,
                        }}
                      >
                        {forceCtaLabel || slide.cta?.label || "Explore More"}
                      </a>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {centerButtonHref ? (
          <div className="pointer-events-none absolute inset-0 z-30 flex items-center justify-center">
            <a
              href={centerButtonHref}
              className="pointer-events-auto inline-flex rounded-full bg-white px-8 py-3 text-[14px] font-semibold uppercase tracking-[0.12em] text-black shadow-[0_18px_40px_rgba(0,0,0,0.25)] transition hover:scale-[1.03] sm:text-[16px]"
              style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif' }}
            >
              {centerButtonLabel || "Explore More"}
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export { CocoMelon as coco_melon };

export default function DiscountSection({ initialOfferId }) {
  const [cartMessage, setCartMessage] = useState("");
  const [promoSecondsLeft, setPromoSecondsLeft] = useState(5148);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setPromoSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const handleBuy = (productName) => {
    setCartMessage(`${productName} added to cart`);
    window.setTimeout(() => setCartMessage(""), 3000);
  };
  const bestSellers = useMemo(
    () =>
      shopCategories.flatMap((category) =>
        category.products.map((product, index) => ({
          id: `${category.name}-${index}`,
          image: product.image,
          name: product.name,
          price: product.price,
        }))
      ),
    []
  );
  const productRowRef = useRef(null);

  const scrollProducts = (direction) => {
    const row = productRowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction === "left" ? -320 : 320, behavior: "smooth" });
  };

  const formatPromoTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}h ${String(mins).padStart(2, "0")}m ${String(secs).padStart(2, "0")}s`;
  };

  return (
    <>
      <Navbar />
      <CocoMelon initialOfferId={initialOfferId} />

      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto w-full max-w-[1320px] px-4">
          <div className="relative flex items-center justify-center gap-3">
            <h2
              className="text-center text-[30px] uppercase tracking-[0.22em] text-[#111111] sm:text-[36px]"
              style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif' }}
            >
              BESTSELLERS
            </h2>
            <div className="absolute right-0 flex items-center gap-2">
              <button
                onClick={() => scrollProducts("left")}
                aria-label="Scroll products left"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#cfcfcf] bg-white text-[#111111] transition hover:bg-[#f8f8f8]"
              >
                ←
              </button>
              <button
                onClick={() => scrollProducts("right")}
                aria-label="Scroll products right"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#cfcfcf] bg-white text-[#111111] transition hover:bg-[#f8f8f8]"
              >
                →
              </button>
            </div>
          </div>

          <div ref={productRowRef} className="no-scrollbar mt-8 flex flex-nowrap items-start justify-start gap-6 overflow-x-auto pb-2">
            {bestSellers.map((item) => (
              <article
                key={item.id}
                className="group relative w-[260px] shrink-0 rounded-2xl border border-gray-100 bg-white p-5 shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)]"
              >
                <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg bg-gray-100 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={item.image || "/hairdresser-taking-care-her-client.jpg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="260px"
                    loading="lazy"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>

                <div className="space-y-2 text-left">
                  <p
                    className="line-clamp-2 text-[15px] font-semibold leading-tight text-[#22223b]"
                    style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
                  >
                    {item.name}
                  </p>
                  <p className="text-[24px] font-bold text-red-600">
                    {item.price}
                  </p>
                </div>

                <button
                  onClick={() => handleBuy(item.name)}
                  className="mt-4 w-full rounded-md bg-black px-4 py-2.5 text-sm font-semibold tracking-wide text-white transition-all hover:bg-red-600 hover:scale-[1.01]"
                >
                  Buy
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Third section: themed promo banner */}
      <section className="bg-white pb-10 sm:pb-12">
        <div className="mx-auto w-full max-w-[1320px] px-4">
          <div className="overflow-hidden rounded-2xl border border-[#3a3120] bg-gradient-to-r from-[#0f0f0f] via-[#1a1711] to-[#0f0f0f] shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
            <div className="flex items-center justify-between gap-4 px-5 py-6 sm:px-8 sm:py-8">
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="inline-flex rounded-md border border-[#D4AF37]/45 bg-black/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#f6e5af] sm:text-sm">
                  Ends In: {formatPromoTime(promoSecondsLeft)}
                </span>
              </div>
              <div className="text-right text-white">
                <p className="text-xl font-light tracking-[0.06em] sm:text-2xl" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif' }}>
                  SCENT
                </p>
                <p className="text-[40px] font-extrabold leading-none text-[#f6e5af] sm:text-[56px]">
                  UP TO 50% OFF
                </p>
                <p className="text-lg uppercase tracking-[0.08em] sm:text-2xl">
                  on bestsellers!
                </p>
              </div>
            </div>

            <div className="overflow-hidden bg-black py-1.5">
              <div className="promo-ticker text-[11px] uppercase tracking-[0.16em] text-[#D4AF37]">
                FLASH SALE &nbsp; FLASH SALE &nbsp; FLASH SALE &nbsp; FLASH SALE &nbsp; FLASH SALE &nbsp; FLASH SALE &nbsp;
                FLASH SALE &nbsp; FLASH SALE &nbsp; FLASH SALE &nbsp; FLASH SALE &nbsp; FLASH SALE &nbsp; FLASH SALE &nbsp;
              </div>
            </div>
          </div>
        </div>
      </section>

      {cartMessage && (
        <div className="fixed bottom-6 right-6 z-50 rounded-full bg-black px-6 py-3 text-sm text-white shadow-2xl">
          {cartMessage}
        </div>
      )}

      <FindNearest />
      <TrustedBy />
      <Footer />
      <style jsx>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .promo-ticker {
          white-space: nowrap;
          width: max-content;
          animation: promo-ticker-scroll 18s linear infinite;
        }

        @keyframes promo-ticker-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}

