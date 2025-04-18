import React from "react";

export default function HeroSection() {
  return (
    <div className="relative w-full h-auto min-h-screen bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        src="/videos/optimized_video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center px-4">
        <p className="text-xs md:text-sm tracking-widest">SHOPSABRE</p>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-2 leading-snug sm:leading-tight">
          THE WAY CNC MACHINES <br className="hidden sm:block" /> ARE MEANT TO BE
        </h1>

        {/* Button */}
        <a
          href="#quote"
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 sm:px-6 sm:py-3 rounded-lg transition-all text-sm sm:text-base"
        >
          Get a Quote →
        </a>
      </div>
    </div>
  );
}
