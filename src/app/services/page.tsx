import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";

const ServicesSection = dynamic(() => import("@/components/Services/ser"), {
  loading: () => <div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div></div>,
  ssr: true,
});

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7] text-[#1e1e1e]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif' }}>
      <Navbar />
      <main className="flex w-full flex-1 flex-col gap-0 py-0">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
}
