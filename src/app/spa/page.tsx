import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";

const SpaSection = dynamic(() => import("@/components/spa/spa"), {
  loading: () => <div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div></div>,
  ssr: true,
});

export default function SpaPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-[#1e1e1e]">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <SpaSection />
      </main>
      <Footer />
    </div>
  );
}


