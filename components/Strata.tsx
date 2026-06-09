import React from "react";

/**
 * Brand artwork for Solid Ground.
 *
 * Logo: "The Level Line" — a rooftop sitting dead-level on a solid baseline,
 * with a builder's level bubble at center (precision + stability). Drawn with
 * currentColor so it reads correctly on both light and dark backgrounds.
 *
 * Hero: a home on a solid foundation above Charlotte's layered clay soil — the
 * root cause the company solves — rendered in the "Solid Trust" palette.
 */

/** Hero illustration: a home on solid ground above the soil layers. */
export function StrataScene({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 440"
      className={className}
      role="img"
      aria-label="A house resting on a solid foundation above layered Charlotte clay soil"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Ground layers — graduated earth tones (deepest at bottom). */}
      <g>
        <path d="M0 232 Q120 220 240 230 T480 226 L480 270 L0 270 Z" fill="#DED0B5" />
        <path d="M0 270 Q140 262 260 272 T480 266 L480 312 L0 312 Z" fill="#CBA46B" />
        <path d="M0 312 Q120 304 250 314 T480 308 L480 360 L0 360 Z" fill="#D98A2B" />
        <path d="M0 360 Q150 352 270 362 T480 356 L480 440 L0 440 Z" fill="#8A5A2E" />
      </g>

      {/* Faint vertical fault line in the soil — the problem, drawn quietly. */}
      <path
        d="M360 232 l-10 26 l12 22 l-8 30 l10 28"
        fill="none"
        stroke="#8A5A2E"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        strokeDasharray="1 7"
      />

      {/* Foundation slab — solid, sitting on the ground line. */}
      <rect x="96" y="206" width="288" height="30" rx="3" fill="#1A2229" />
      <rect x="96" y="206" width="288" height="8" rx="3" fill="#2C3E4A" />

      {/* House body. */}
      <g>
        <rect x="120" y="118" width="240" height="90" fill="#F7F2E9" stroke="#1A2229" strokeWidth="3" />
        {/* Roof */}
        <path d="M104 122 L240 44 L376 122 Z" fill="#1F3A4D" stroke="#1A2229" strokeWidth="3" strokeLinejoin="round" />
        {/* Door */}
        <rect x="222" y="158" width="36" height="50" fill="#1F3A4D" />
        {/* Windows */}
        <rect x="150" y="150" width="40" height="34" fill="#DEE7EC" stroke="#1A2229" strokeWidth="2.5" />
        <rect x="290" y="150" width="40" height="34" fill="#DEE7EC" stroke="#1A2229" strokeWidth="2.5" />
        {/* Chimney */}
        <rect x="312" y="74" width="22" height="34" fill="#D98A2B" />
      </g>

      {/* Horizon line under the slab. */}
      <line x1="0" y1="232" x2="480" y2="232" stroke="#1A2229" strokeWidth="1.5" opacity="0.35" />
    </svg>
  );
}

/** Thin layered divider between sections. */
export function StrataRule({ className = "" }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <svg viewBox="0 0 1200 16" preserveAspectRatio="none" className="h-3 w-full">
        <rect y="0" width="1200" height="4" fill="#DED0B5" />
        <rect y="4" width="1200" height="4" fill="#CBA46B" />
        <rect y="8" width="1200" height="4" fill="#D98A2B" />
        <rect y="12" width="1200" height="4" fill="#8A5A2E" />
      </svg>
    </div>
  );
}

/** Compact logo glyph — "The Level Line". Inherits color via currentColor. */
export function StrataMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Roofline, dead level */}
      <path
        d="M6 18 L20 6 L34 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Solid baseline, split to seat the level bubble */}
      <rect x="6" y="25" width="11" height="5" rx="2.5" fill="currentColor" />
      <rect x="23" y="25" width="11" height="5" rx="2.5" fill="currentColor" />
      {/* Level bubble vial */}
      <circle cx="20" cy="27.5" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="27.5" r="1.4" fill="currentColor" />
    </svg>
  );
}
