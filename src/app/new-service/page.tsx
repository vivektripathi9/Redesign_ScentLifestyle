import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Last/last";

const NewServicesShowcase = dynamic(() => import("@/components/new_service/new_s"), {
  loading: () => <div className="flex items-center justify-center min-h-[400px]"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div></div>,
  ssr: true,
});

export default function NewServicePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f7f7f7] text-[#1f1f2e]" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif' }}>
      <Navbar />
      <main className="flex w-full flex-1 flex-col">
        <NewServicesShowcase />
      </main>
      <Footer />
    </div>
  );
}
