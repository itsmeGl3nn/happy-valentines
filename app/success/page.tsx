"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Success() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTransition, setShowTransition] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showGallery, setShowGallery] = useState(false);

  // Array of image numbers
  const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const handleMusicBoxClick = () => {
    setIsOpen(true);
    setIsPlaying(true);
    setShowTransition(true);

    // After transition, show gallery
    setTimeout(() => {
      setShowTransition(false);
      setShowGallery(true);
    }, 2000);
  };

  // Auto-play slideshow
  useEffect(() => {
    if (showGallery) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [showGallery, images.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Valentine's Transition Overlay */}
      {showTransition && (
        <div className="fixed inset-0 z-50 valentine-transition">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-red-400 to-pink-500" />

          {/* Floating hearts */}
          <div className="floating-hearts">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="heart-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  fontSize: `${20 + Math.random() * 30}px`,
                }}>
                ❤️
              </div>
            ))}
          </div>

          {/* Center text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center space-y-6 animate-scale-in">
              <div className="text-9xl animate-bounce">💕</div>
              <h2 className="text-6xl font-bold text-white drop-shadow-lg">
                Loading Our Memories...
              </h2>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 p-4">
        {!showGallery ? (
          <div className="text-center space-y-8 animate-scale-in max-w-2xl">
            <div className="text-8xl animate-bounce">🎉</div>
            <h1 className="text-5xl font-bold text-pink-600">Yay! 💕</h1>
            <p className="text-2xl text-gray-700">I knew you'd say yes!</p>

            {/* Music Box */}
            <div className="mt-12 space-y-6">
              <p className="text-lg text-gray-600">
                {!isOpen
                  ? "Click the gift box to reveal a special message! 🎁"
                  : ""}
              </p>

              <div
                onClick={handleMusicBoxClick}
                className={`cursor-pointer transition-all duration-700 ${
                  isOpen ? "scale-110" : "hover:scale-105"
                }`}>
                {/* Music Box Container */}
                <div className="relative inline-block">
                  {/* Box */}
                  <div
                    className={`
                    relative w-48 h-48 mx-auto
                    bg-gradient-to-br from-red-400 to-pink-500
                    rounded-3xl shadow-2xl
                    transform transition-all duration-700
                    ${isOpen ? "rotate-12" : "rotate-0"}
                  `}>
                    {/* Ribbon */}
                    <div
                      className={`
                      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-full h-8 bg-yellow-300
                      transition-all duration-700
                      ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
                    `}
                    />
                    <div
                      className={`
                      absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                      w-8 h-full bg-yellow-300
                      transition-all duration-700
                      ${isOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"}
                    `}
                    />

                    {/* Bow */}
                    <div
                      className={`
                      absolute -top-6 left-1/2 -translate-x-1/2
                      text-5xl transition-all duration-700
                      ${isOpen ? "opacity-0 -translate-y-4 scale-0" : "opacity-100 translate-y-0 scale-100"}
                    `}>
                      🎀
                    </div>

                    {/* Music notes when open */}
                    {isOpen && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-6xl animate-bounce">🎵</div>
                      </div>
                    )}
                  </div>

                  {/* Floating music notes */}
                  {isPlaying && (
                    <>
                      <div className="absolute -top-8 left-0 text-3xl animate-float-up-1">
                        🎶
                      </div>
                      <div className="absolute -top-4 right-0 text-2xl animate-float-up-2">
                        🎵
                      </div>
                      <div className="absolute top-0 left-1/2 text-3xl animate-float-up-3">
                        🎶
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Message reveals when opened */}
              {isOpen && (
                <div className="mt-8 space-y-4 animate-fade-in">
                  <div className="text-6xl animate-pulse">❤️</div>

                  {/* Typing animation message */}
                  <div className="mb-6 flex justify-center">
                    <h3 className="text-3xl font-bold text-pink-600 typing-animation">
                      I always got you ❤️
                    </h3>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-lg mx-auto">
                    <p className="text-2xl font-semibold text-pink-600 mb-4">
                      A Message For You 💌
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      You make every day feel like Valentine's Day! Thank you
                      for being mine. Here's to many more beautiful moments
                      together! 🌹
                    </p>
                    <div className="mt-6 flex gap-2 justify-center text-3xl">
                      <span
                        className="animate-bounce"
                        style={{ animationDelay: "0s" }}>
                        💕
                      </span>
                      <span
                        className="animate-bounce"
                        style={{ animationDelay: "0.1s" }}>
                        💖
                      </span>
                      <span
                        className="animate-bounce"
                        style={{ animationDelay: "0.2s" }}>
                        💝
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Photo Card Slideshow */
          <div className="w-full max-w-4xl animate-scale-in">
            <div className="text-center mb-8 space-y-6">
              {/* Typing animation message */}

              <h2 className="text-5xl font-bold text-pink-600 mb-4">
                Our Beautiful Memories 💕
              </h2>
              <p className="text-xl text-gray-700">
                Swipe through our special moments
              </p>
            </div>

            {/* Card Slider */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative aspect-[4/3] max-w-2xl mx-auto">
                {images.map((num, index) => (
                  <div
                    key={num}
                    className={`absolute inset-0 transition-all duration-700 ${
                      index === currentImageIndex
                        ? "opacity-100 scale-100 z-20 rotate-0"
                        : index ===
                            (currentImageIndex - 1 + images.length) %
                              images.length
                          ? "opacity-30 scale-90 -translate-x-20 -rotate-6 z-10"
                          : index === (currentImageIndex + 1) % images.length
                            ? "opacity-30 scale-90 translate-x-20 rotate-6 z-10"
                            : "opacity-0 scale-75 z-0"
                    }`}>
                    <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl bg-white p-4">
                      <div className="relative w-full h-full rounded-2xl overflow-hidden">
                        <Image
                          src={`/bibis images/${num}.jpg`}
                          alt={`Memory ${num}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          priority={index === currentImageIndex}
                        />
                      </div>

                      {/* Polaroid effect bottom */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                        <p className="text-gray-600 font-handwriting text-lg">
                          Memory #{num} 💕
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Floating hearts around card */}
                <div
                  className="absolute -top-10 left-10 text-4xl animate-bounce"
                  style={{ animationDelay: "0s" }}>
                  💖
                </div>
                <div
                  className="absolute -top-10 right-10 text-3xl animate-bounce"
                  style={{ animationDelay: "0.2s" }}>
                  💕
                </div>
                <div
                  className="absolute bottom-10 -left-10 text-3xl animate-bounce"
                  style={{ animationDelay: "0.4s" }}>
                  💝
                </div>
                <div
                  className="absolute bottom-10 -right-10 text-4xl animate-bounce"
                  style={{ animationDelay: "0.6s" }}>
                  ❤️
                </div>
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-pink-100 transition-all duration-200 active:scale-95 flex items-center justify-center text-2xl">
                ←
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-pink-100 transition-all duration-200 active:scale-95 flex items-center justify-center text-2xl">
                →
              </button>

              {/* Progress Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentImageIndex
                        ? "w-8 h-3 bg-pink-500"
                        : "w-3 h-3 bg-pink-200 hover:bg-pink-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Counter */}
            <div className="text-center mt-6">
              <p className="text-lg text-gray-600">
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>

            {/* Typing animation message at bottom */}
            <div className="w-full flex justify-center items-center mt-8 px-4">
              <div className="max-w-3xl w-full">
                <p className="text-2xl md:text-3xl font-bold text-pink-600 text-center leading-relaxed typing-text">
                  I always got you ❤️, through every memory and every moment. I always support you and will always be by your side, no matter what. I love you so much! 💕
                  i know we fight sometimes but i promise to always work through it with you and never give up on us. You are my everything and I am so grateful to have you in my life. Here's to many more beautiful memories together! 🌹
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
