import React from 'react';

export default function StarIcon({ size = 140 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main silver gradient - left-lit */}
        <linearGradient id="faceLT" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="40%" stopColor="#e0e0e0" />
          <stop offset="100%" stopColor="#a8a8a8" />
        </linearGradient>
        <linearGradient id="faceRT" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d0d0d0" />
          <stop offset="100%" stopColor="#888888" />
        </linearGradient>
        <linearGradient id="faceLB" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#b0b0b0" />
          <stop offset="100%" stopColor="#d8d8d8" />
        </linearGradient>
        <linearGradient id="faceRB" x1="100%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#787878" />
          <stop offset="100%" stopColor="#c0c0c0" />
        </linearGradient>
        <linearGradient id="faceTop" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#f0f0f0" />
          <stop offset="100%" stopColor="#c8c8c8" />
        </linearGradient>
        <linearGradient id="innerGrad" x1="30%" y1="20%" x2="70%" y2="80%">
          <stop offset="0%" stopColor="#d0d0d0" />
          <stop offset="50%" stopColor="#909090" />
          <stop offset="100%" stopColor="#606060" />
        </linearGradient>
        <filter id="starDrop" x="-15%" y="-15%" width="130%" height="130%">
          <feDropShadow dx="3" dy="5" stdDeviation="6" floodColor="#00000040" />
        </filter>
      </defs>

      {/* Outer star shape - 5 points */}
      {/* Center: 100,100 | Outer radius: 88 | Inner radius: 38 */}
      {/* Points at 90°, 162°, 234°, 306°, 18° */}

      {/* Full star base with drop shadow */}
      <polygon
        points="100,12 122,72 186,72 135,110 155,170 100,133 45,170 65,110 14,72 78,72"
        fill="url(#innerGrad)"
        filter="url(#starDrop)"
      />

      {/* Top point face (bright) */}
      <polygon points="100,12 122,72 100,72" fill="url(#faceLT)" />
      <polygon points="100,12 78,72 100,72" fill="url(#faceTop)" />

      {/* Upper-right face */}
      <polygon points="122,72 186,72 135,110 100,72" fill="url(#faceRT)" />

      {/* Lower-right face */}
      <polygon points="135,110 155,170 100,133 100,100" fill="url(#faceRB)" />

      {/* Bottom face (dark) */}
      <polygon points="100,133 155,170 100,170 45,170" fill="#707070" />

      {/* Lower-left face */}
      <polygon points="45,170 65,110 100,100 100,133" fill="url(#faceLB)" />

      {/* Upper-left face */}
      <polygon points="14,72 78,72 100,72 65,110 100,100" fill="url(#faceLT)" />

      {/* Center highlight polygon */}
      <polygon
        points="100,72 122,72 135,110 100,133 65,110 78,72"
        fill="url(#innerGrad)"
        opacity="0.85"
      />

      {/* Bright highlight on top-left facet */}
      <polygon
        points="100,12 88,45 100,52 112,45"
        fill="#ffffff"
        opacity="0.7"
      />

      {/* Subtle edge lines for facets */}
      <polygon
        points="100,12 122,72 186,72 135,110 155,170 100,133 45,170 65,110 14,72 78,72"
        fill="none"
        stroke="#c0c0c0"
        strokeWidth="0.8"
        opacity="0.5"
      />
    </svg>
  );
}
