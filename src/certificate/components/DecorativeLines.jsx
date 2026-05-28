import React from 'react';

// Two overlapping angular chevron/parallelogram outlines — matches reference bottom-left decor
export default function DecorativeLines({ width = 150, height = 170 }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 150 170"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Back shape — wider parallelogram */}
      <path
        d="M60 8 L110 8 L90 162 L40 162 Z"
        stroke="#E8751A"
        strokeWidth="1.8"
        fill="none"
        opacity="0.3"
      />
      {/* Front shape — slightly offset to the left */}
      <path
        d="M28 8 L78 8 L58 162 L8 162 Z"
        stroke="#E8751A"
        strokeWidth="1.8"
        fill="none"
        opacity="0.3"
      />
    </svg>
  );
}
