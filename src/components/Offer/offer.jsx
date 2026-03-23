"use client";

import Image from "next/image";
import offerImgA from "./1123483.jpg";
import offerImgB from "./2148108762.jpg";
import offerImgC from "./61660.jpg";
import offerImgD from "./1672.jpg";

/** @type {{id: string, image: string, month: string, scriptTitle: string, title: string, details: string[], price: string}[]} */
const offers = [
  {
    id: "offer-hair",
    image: "/offers/offers_images/hair.jpg",
    month: "March",
    scriptTitle: "Hair",
    title: "FESTIVE OFFER",
    subtitle: "GLOBAL + HIGHLIGHTS",
    price: "₹8,999/-",
    highlight: "Limited Offer",
    details: ["Shine", "Dimension", "Premium Hair Color"],
  },
  {
    id: "offer-skin",
    image: "/offers/offers_images/skin.jpg",
    month: "March",
    scriptTitle: "Skin",
    title: "FREE ORGANIC MANICURE",
    subtitle: "WITH EVERY CASMARA FACIAL",
    price: "₹2,999/-",
    highlight: "Limited Period Offer",
    details: ["Glow Boosting", "Hydration", "Luxury Skincare"],
  },
  {
    id: "offer-nails",
    image: "/offers/offers_images/nails.jpg",
    month: "March",
    scriptTitle: "Nails",
    title: "NAIL EXTENSIONS & GEL NAILS",
    subtitle: "FOR ₹1,999/-",
    price: "₹1,999/-",
    highlight: "Limited Time Offer",
    details: ["Premium Finish", "Long Lasting", "Expert Application"],
  },
  {
    id: "offer-lashes",
    image: "/offers/offers_images/lashes.jpg",
    month: "March",
    scriptTitle: "Lashes",
    title: "LASH LIFT & EXTENSIONS",
    subtitle: "FOR ₹2,999/-",
    price: "₹2,999/-",
    highlight: "Trending Offer",
    details: ["Natural Volume", "Long Hold", "Expert Styling"],
  },
  {
    id: "offer-body-therapy",
    image: "/offers/offers_images/body_therapy.jpg",
    month: "March",
    scriptTitle: "Body Therapy",
    title: "WAXING COMBO",
    subtitle: "Under Arms + Full Arms + Full Legs",
    price: "₹2,499/-",
    highlight: "Smooth Skin",
    details: ["Hygienic", "Professional Care", "Salon Comfort"],
  },
  {
    id: "offer-bridal-glow",
    image: offerImgA,
    month: "April",
    scriptTitle: "Bridal Glow",
    title: "RADIANCE PREP PACKAGE",
    subtitle: "Skin polish + glow facial + finish touch",
    price: "₹5,499/-",
    highlight: "Wedding Special",
    details: ["Brightening", "Hydration", "Camera-Ready Skin"],
  },
  {
    id: "offer-hair-spa",
    image: offerImgB,
    month: "April",
    scriptTitle: "Hair Spa",
    title: "INTENSE REPAIR THERAPY",
    subtitle: "Protein spa + scalp detox",
    price: "₹2,499/-",
    highlight: "Top Pick",
    details: ["Smooth Finish", "Damage Control", "Silky Texture"],
  },
  {
    id: "offer-premium-makeup",
    image: offerImgC,
    month: "April",
    scriptTitle: "Makeup",
    title: "HD PARTY MAKEOVER",
    subtitle: "Soft glam or bold glam looks",
    price: "₹3,999/-",
    highlight: "Limited Slots",
    details: ["HD Base", "Long Stay", "Professional Finish"],
  },
  {
    id: "offer-complete-care",
    image: offerImgD,
    month: "April",
    scriptTitle: "Complete Care",
    title: "HEAD TO TOE LUXE",
    subtitle: "Hair + Skin + Nails combo",
    price: "₹6,999/-",
    highlight: "Value Combo",
    details: ["All-in-One", "Premium Products", "Expert Team"],
  },
];

export default function OfferSection() {
  const loopingOffers = [...offers, ...offers];

  return (
    <section id="exclusive-offers" className="bg-white pt-14 pb-10 sm:pt-16 sm:pb-12">
      <div className="w-full px-4 sm:px-6">
        <div className="mb-5 text-center sm:mb-7">
          <h2 className="text-3xl font-light tracking-[0.18em] text-[#161616] sm:text-4xl">EXCLUSIVE OFFERS</h2>
          <div className="mx-auto mt-3 h-[2px] w-24 bg-[#D4AF37]" />
        </div>

        <div className="offers-marquee-wrap overflow-hidden pb-2">
          <div className="offers-marquee-track flex w-max gap-2">
            {loopingOffers.map((offer, index) => (
              <a
                key={`${offer.id}-${index}`}
                href="https://scent.zenoti.com/webstoreNew/services"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block w-[260px] shrink-0 overflow-hidden bg-black sm:w-[240px] lg:w-[280px]"
              >
                <Image
                  src={offer.image}
                  alt={`${offer.scriptTitle} ${offer.title}`}
                  width={420}
                  height={630}
                  className="aspect-[2/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 260px, (max-width: 1024px) 240px, 280px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

                <div className="absolute right-4 top-3 text-right text-white">
                  <p className="text-sm italic">{offer.month}</p>
                  <p className="text-xs uppercase tracking-[0.18em] opacity-85">Offers</p>
                </div>

                <div className="absolute inset-x-5 bottom-5 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/90">SCENT</p>
                  <p className="mt-1 text-3xl italic leading-none sm:text-4xl">{offer.scriptTitle}</p>
                  <p className="mt-1 text-xl font-medium leading-tight tracking-wide sm:text-2xl">{offer.title}</p>
                  {offer.subtitle ? <p className="mt-1 text-sm leading-snug text-white/95">{offer.subtitle}</p> : null}

                  {offer.price ? <p className="mt-1 text-base font-semibold">{offer.price}</p> : null}
                  {offer.highlight ? <p className="mt-1 text-sm text-white/95">{offer.highlight}</p> : null}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .offers-marquee-track {
          animation: offers-marquee-scroll 42s linear infinite;
        }

        .offers-marquee-wrap:hover .offers-marquee-track {
          animation-play-state: paused;
        }

        @keyframes offers-marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
