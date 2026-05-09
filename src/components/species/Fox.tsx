import { tonesFromHex, SPECIES_FUR, SPECIES_BELLY } from '../../lib/palette';

export default function Fox() {
  const t = tonesFromHex(SPECIES_FUR.fox);
  const belly = SPECIES_BELLY.fox;
  return (
    <g>
      {/* tail (back) */}
      <path
        d="M -34 -70 Q -56 -78 -62 -100 Q -64 -120 -50 -126 Q -42 -118 -42 -104 Q -42 -90 -34 -82 Z"
        fill={t.shadow}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -50 -120 Q -54 -110 -46 -100 L -42 -104 Q -44 -114 -50 -120 Z" fill="#F2E2C7" />
      {/* legs */}
      <rect x="-20" y="-28" width="10" height="28" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <rect x="10" y="-28" width="10" height="28" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <rect x="-20" y="-6" width="10" height="6" fill="#1d1410" />
      <rect x="10" y="-6" width="10" height="6" fill="#1d1410" />
      {/* torso */}
      <path
        d="M -26 -82 L -28 -32 L 28 -32 L 26 -82 Q 18 -90 0 -90 Q -18 -90 -26 -82 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* belly */}
      <path d="M -16 -78 L -18 -34 L 18 -34 L 16 -78 Q 8 -82 0 -82 Q -8 -82 -16 -78 Z" fill={belly} />
      {/* torso highlight */}
      <path d="M -22 -82 L -22 -52 L -14 -52 L -14 -86 Q -18 -86 -22 -82 Z" fill={t.highlight} opacity="0.7" />
      {/* head */}
      <path
        d="M -22 -110 L -28 -98 L -22 -86 L 22 -86 L 28 -98 L 22 -110 Q 14 -118 0 -118 Q -14 -118 -22 -110 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* snout */}
      <path d="M -10 -94 L -12 -86 L 12 -86 L 10 -94 Q 6 -98 0 -98 Q -6 -98 -10 -94 Z" fill={belly} stroke={t.line} strokeWidth="1" />
      <circle cx="0" cy="-89" r="2.4" fill="#1d1410" />
      {/* eyes */}
      <rect x="-12" y="-104" width="4" height="4" fill="#1d1410" />
      <rect x="8" y="-104" width="4" height="4" fill="#1d1410" />
      <rect x="-11" y="-104" width="1.5" height="1.5" fill="#fff" />
      <rect x="9" y="-104" width="1.5" height="1.5" fill="#fff" />
      {/* ears */}
      <path d="M -22 -114 L -16 -128 L -10 -114 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <path d="M 22 -114 L 16 -128 L 10 -114 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <path d="M -18 -116 L -16 -124 L -13 -116 Z" fill="#1d1410" />
      <path d="M 18 -116 L 16 -124 L 13 -116 Z" fill="#1d1410" />
      {/* head highlight */}
      <path d="M -20 -110 L -20 -100 L -14 -100 L -14 -112 Q -17 -112 -20 -110 Z" fill={t.highlight} opacity="0.55" />
    </g>
  );
}
