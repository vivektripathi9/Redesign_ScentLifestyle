import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const BeautyEssentialsExperience = dynamic(() => import("@/components/beauty-essentials/beauty-essentials"), {
  loading: () => <div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div></div>,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Last/last"), {
  loading: () => null,
  ssr: true,
});

export default function BeautyEssentialsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1f1f2e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <BeautyEssentialsExperience />
      </main>
      <Footer />
    </div>
  );
}

