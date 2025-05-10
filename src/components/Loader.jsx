// HexagonLoader.jsx
import React from 'react';

export const Loader = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-900">
      <div className="relative h-32 w-32">
        {/* Animated Growing Hexagon */}
        <svg
          viewBox="0 0 120 120"
          className="absolute inset-0 h-full w-full"
        >
          <path
            d="M60 5L15 35V85L60 115L105 85V35L60 5Z"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="4"
            strokeDasharray="300"
            strokeDashoffset="300"
            className="animate-draw-hexagon fill-primary/12"
          />
        </svg>
        
        {/* Pulsing PT Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-5xl font-bold text-black animate-pulse-slow">
            PT
          </span>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 h-full w-full rounded-full bg-amber-200 animate-ping-slow" />
      </div>
    </div>
  );
};
