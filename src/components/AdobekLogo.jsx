import React from 'react';

export default function AdobekLogo({ className = 'text-adobek-teal', textClassName = 'text-adobek-charcoal', size = 70, light = false }) {
  return (
    <div className="flex items-center select-none group">
      {/* Official Adobek (ADObek Design Build) Architectural Mark */}
      <img
        src={light ? './assets/adobek_logo_white.png' : './assets/adobek_logo_transparent.png'}
        alt="Adobek — ADObek Design Build"
        decoding="async"
        style={{ height: size, width: 'auto' }}
        className="object-contain transition-transform duration-300 group-hover:scale-105"
        onError={(e) => {
          e.target.src = './assets/adobek_logo.png';
        }}
      />
    </div>
  );
}
