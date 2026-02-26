"use client";

import Image from "next/image";
import { useState } from "react";

export default function VideoCarousel({ videos = [], title = "Transformation Gallery" }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // If no videos provided, return null
  if (!videos || videos.length === 0) {
    return null;
  }

  const videosPerPage = 4;
  
  // Create an infinite loop by repeating the videos array
  const infiniteVideos = [...videos, ...videos, ...videos];

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
    <div className="mt-16 w-full">
      <div className="flex flex-col items-center gap-6 text-center mb-12">
        <div className="decorative-flower-divider flex items-center justify-center gap-4">
          <span className="h-px w-16 bg-black" />
          <span className="text-pink-400 text-xl">❀</span>
          <span className="h-px w-16 bg-black" />
        </div>
        <h3 
          className="text-3xl font-light text-[#1f1f2e] sm:text-4xl"
          style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}
        >
          {title}
        </h3>
        <p className="max-w-3xl text-base text-gray-600 font-light" style={{ fontFamily: '"ABChanelCorpo", Helvetica, Arial, sans-serif', fontWeight: 300 }}>
          Watch our expert stylists create stunning transformations. See the artistry behind every service.
        </p>
      </div>

      <div className="relative w-full">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 transition-all duration-300 hover:scale-110 -ml-4"
          aria-label="Previous videos"
        >
          <svg className="w-6 h-6 text-black drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 transition-all duration-300 hover:scale-110 -mr-4"
          aria-label="Next videos"
        >
          <svg className="w-6 h-6 text-black drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Video Grid */}
        <div className="grid w-full gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8">
          {currentVideos.map((video, index) => (
            <div
              key={`${video.id}-${index}`}
              className="group relative overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-[0px_25px_70px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_35px_90px_rgba(0,0,0,0.12)] cursor-pointer"
              onClick={() => handleVideoClick(video.id)}
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <Image
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title || "Video thumbnail"}
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
    </div>
  );
}
