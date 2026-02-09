'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYesClick = () => {
    router.push('/success');
  };

  const handleNoHover = () => {
    // Get random position within viewport bounds
    const maxX = window.innerWidth - 150; // button width
    const maxY = window.innerHeight - 60; // button height
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-pink-100 via-red-50 to-pink-100 p-4">
      <main className="flex flex-col items-center gap-12 text-center max-w-2xl w-full">
        {/* Animated heart */}
        <div className="text-9xl animate-pulse">💖</div>
        
        {/* Question */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
            Hey! Mary Joyce<br />
            Will you be my Valentine?
          </h1>
          <p className="text-xl text-gray-600">
            Choose wisely... 😊
          </p>
        </div>

        {/* Buttons */}
        <div className="relative w-full h-48 flex items-center justify-center">
          <div className="flex gap-6 items-center justify-center">
            {/* Yes Button - Static */}
            <button
              onClick={handleYesClick}
              className="ios-button bg-gradient-to-b from-pink-400 to-pink-600 text-white text-2xl font-semibold px-16 py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 z-10"
            >
              Yes! 💕
            </button>

            {/* No Button - Moving */}
            <button
              ref={noButtonRef}
              onMouseEnter={handleNoHover}
              onTouchStart={handleNoHover}
              style={
                noButtonPosition.x !== 0 || noButtonPosition.y !== 0
                  ? {
                      position: 'fixed',
                      left: `${noButtonPosition.x}px`,
                      top: `${noButtonPosition.y}px`,
                      transition: 'all 0.3s ease-out',
                    }
                  : {}
              }
              className="ios-button bg-gradient-to-b from-gray-200 to-gray-300 text-gray-700 text-2xl font-semibold px-16 py-5 rounded-2xl shadow-lg hover:shadow-xl z-20"
            >
              No 😢
            </button>
          </div>
        </div>

        {/* Hint text */}
        <p className="text-sm text-gray-500 mt-8">
          (Try clicking "No" if you dare... 👀)
        </p>
      </main>
    </div>
  );
}
