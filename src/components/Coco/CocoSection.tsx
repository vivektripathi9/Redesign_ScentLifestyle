"use client";

import { coco_melon as CocoMelon } from "@/components/Discount/discount";
import modelImage from "./modlech.jpg";

export default function CocoSection() {
  return (
    <CocoMelon
      sizeVariant="large"
      forceCtaHref="/#exclusive-offers"
      forceCtaLabel="Explore"
      ctaRectangular
      extraSlides={[
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
          cta: { label: "Explore", href: "/#exclusive-offers" },
        },
      ]}
    />
  );
}
