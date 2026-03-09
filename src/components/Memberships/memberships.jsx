"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MembershipsSection() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white py-12 sm:py-16 md:py-20">
      {/* Animated background layers */}
      <div className="pointer-events-none absolute inset-0">
        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float-${i % 4} rounded-full`}
            style={{
              width: `${20 + (i % 3) * 15}px`,
              height: `${20 + (i % 3) * 15}px`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(255, 182, 193, 0.3), rgba(255, 182, 193, 0.1))'
                : 'radial-gradient(circle, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.05))',
              left: `${(i * 8.33) % 100}%`,
              top: `${(i * 7.5) % 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
        
        {/* Animated gradient orbs */}
        <div className="animate-orb-1 absolute w-96 h-96 rounded-full blur-3xl opacity-30" style={{
          background: 'radial-gradient(circle, rgba(255, 182, 193, 0.4), transparent)',
          top: '-10%',
          left: '-10%',
        }} />
        <div className="animate-orb-2 absolute w-80 h-80 rounded-full blur-3xl opacity-25" style={{
          background: 'radial-gradient(circle, rgba(0, 0, 0, 0.15), transparent)',
          bottom: '-5%',
          right: '-5%',
        }} />
        <div className="animate-orb-3 absolute w-72 h-72 rounded-full blur-3xl opacity-20" style={{
          background: 'radial-gradient(circle, rgba(255, 182, 193, 0.3), transparent)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }} />
      </div>

      <div className="relative flex w-full flex-col items-center gap-6 sm:gap-8 px-4 sm:px-6 md:px-12 lg:px-20 text-center z-10">
        <h2
          className={`text-2xl sm:text-3xl md:text-[42px] font-light leading-tight text-[#1f1f2e] tracking-[0.1em] transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: "none" }}
        >
          <span className="inline-block animate-text-shimmer">Memberships</span>
        </h2>
        <div className={`decorative-flower-divider flex items-center justify-center gap-3 sm:gap-4 text-center text-gray-300 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}>
          <span className="h-px w-10 sm:w-12 bg-black animate-line-expand" />
          <span className="text-pink-400 text-lg sm:text-xl animate-pulse-slow">❀</span>
          <span className="h-px w-10 sm:w-12 bg-black animate-line-expand" style={{ animationDelay: '0.3s' }} />
        </div>
        <p className={`description-main max-w-3xl px-2 sm:px-4 mb-6 sm:mb-8 transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Discover our exclusive membership plans designed to give you the best value and premium benefits.
        </p>
        <button
          onClick={() => router.push("/salon-memberships")}
          className={`group relative bg-black px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base font-light tracking-[0.1em] text-white transition-all duration-500 hover:bg-gray-800 shadow-lg rounded overflow-hidden transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300, textTransform: "none" }}
        >
          <span className="relative z-10 inline-block animate-button-shimmer">Explore Memberships</span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        </button>
      </div>

      <style jsx>{`
        @keyframes float-0 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-25px, 25px) rotate(-120deg); }
          66% { transform: translate(25px, -25px) rotate(-240deg); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 30px) rotate(180deg); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, -20px) rotate(-180deg); }
        }

        .animate-float-0 { animation: float-0 8s ease-in-out infinite; }
        .animate-float-1 { animation: float-1 10s ease-in-out infinite; }
        .animate-float-2 { animation: float-2 12s ease-in-out infinite; }
        .animate-float-3 { animation: float-3 9s ease-in-out infinite; }

        @keyframes orb-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.2); }
        }
        @keyframes orb-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-40px, -40px) scale(1.15); }
        }
        @keyframes orb-3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.1) rotate(180deg); }
        }

        .animate-orb-1 { animation: orb-1 15s ease-in-out infinite; }
        .animate-orb-2 { animation: orb-2 18s ease-in-out infinite; }
        .animate-orb-3 { animation: orb-3 20s ease-in-out infinite; }

        @keyframes text-shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-text-shimmer {
          background: linear-gradient(90deg, #1f1f2e 0%, #1f1f2e 50%, rgba(31, 31, 46, 0.7) 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: text-shimmer 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        @keyframes line-expand {
          0% { width: 0; opacity: 0; }
          100% { width: 100%; opacity: 1; }
        }

        .animate-line-expand {
          animation: line-expand 1s ease-out forwards;
        }

        @keyframes button-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-button-shimmer {
          position: relative;
        }
        .animate-button-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: button-shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
