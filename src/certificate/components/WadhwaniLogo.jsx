import React from 'react';

export default function WadhwaniLogo({ width = 170 }) {
  return (
    <svg
      width={width}
      viewBox="0 0 170 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* ── Left wing (dark crimson) ── */}
      <path
        d="M52 6 C45 10 32 18 20 32 C26 27 36 25 43 30 C37 36 28 43 24 52 C33 43 44 39 53 42 C47 50 43 57 42 65 C50 52 60 44 68 44 L64 24 Z"
        fill="#9B1C1C"
      />
      {/* Left wing highlight */}
      <path
        d="M54 12 C50 17 44 22 38 27 C43 23 50 22 55 25 Z"
        fill="#C0392B"
        opacity="0.7"
      />
      {/* ── Right wing (orange) ── */}
      <path
        d="M78 6 C85 10 98 18 110 32 C104 27 94 25 87 30 C93 36 102 43 106 52 C97 43 86 39 77 42 C83 50 87 57 88 65 C80 52 70 44 62 44 L66 24 Z"
        fill="#E07820"
      />
      {/* Right wing highlight */}
      <path
        d="M76 12 C80 17 86 22 92 27 C87 23 80 22 75 25 Z"
        fill="#F0A040"
        opacity="0.7"
      />
      {/* ── Center body / spine ── */}
      <path
        d="M65 2 L68 14 L66 28 L65 42 L64 28 L62 14 Z"
        fill="#7A1515"
      />
      {/* ── WADHWANI text ── */}
      <text
        x="5"
        y="60"
        fontFamily="'Arial Black', 'Impact', sans-serif"
        fontWeight="900"
        fontSize="15.5"
        fill="#111111"
        letterSpacing="1.8"
      >
        WADHWANI
      </text>
      {/* ── FOUNDATION text ── */}
      <text
        x="22"
        y="72"
        fontFamily="Arial, sans-serif"
        fontWeight="400"
        fontSize="8"
        fill="#555555"
        letterSpacing="3.8"
      >
        FOUNDATION
      </text>
    </svg>
  );
}
