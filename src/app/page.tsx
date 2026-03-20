import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import FashionHero from "@/components/Hero/FashionHero";

// Above-the-fold components - load immediately
const CocoSection = dynamic(() => import("@/components/Coco/CocoSection"), {
  ssr: true,
});

// Below-the-fold components - lazy load for better performance
const StatementSection = dynamic(() => import("@/components/Statment/statment"), {
  loading: () => null,
  ssr: true,
});

const BlackStats = dynamic(() => import("@/components/Black/black"), {
  loading: () => null,
  ssr: true,
});

const OfferSection = dynamic(() => import("@/components/Offer/offer"), {
  loading: () => null,
  ssr: true,
});

const LooksSection = dynamic(() => import("@/components/Looks/looks"), {
  loading: () => null,
  ssr: true,
});

const BeautyVideoHero = dynamic(() => import("@/components/Video/video"), {
  loading: () => null,
  ssr: true,
});

const MembershipsSection = dynamic(() => import("@/components/Memberships/memberships"), {
  loading: () => null,
  ssr: true,
});

const TrustedBy = dynamic(() => import("@/components/Trustedby/trusted"), {
  loading: () => null,
  ssr: true,
});

const FindNearest = dynamic(() => import("@/components/Findyour/find"), {
  loading: () => null,
  ssr: true,
});

const WhyScent = dynamic(() => import("@/components/why/why"), {
  loading: () => null,
  ssr: true,
});

const InspirationSection = dynamic(() => import("@/components/Inspiration/inspiration"), {
  loading: () => null,
  ssr: true,
});

const TransformationStories = dynamic(() => import("@/components/Transforming/tran"), {
  loading: () => null,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Last/last"), {
  loading: () => null,
  ssr: true,
});

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7] text-[#1e1e1e]">
      <Navbar />
      <FashionHero />
      <CocoSection />
      {/* <BeautyHero /> */}
      <main className="flex w-full flex-1 flex-col gap-0 py-0">
        <StatementSection />
        <LooksSection />
        <MembershipsSection />
        <BlackStats />
        <OfferSection />
        <BeautyVideoHero />
        <TrustedBy />
        <FindNearest />
        <WhyScent />
        {/* <PowerTeam /> */}
        <InspirationSection />
        <TransformationStories />
      </main>
      <Footer />
    </div>
  );
}
