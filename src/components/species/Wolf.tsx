import { tonesFromHex, SPECIES_FUR, SPECIES_BELLY } from '../../lib/palette';

export default function Wolf() {
  const t = tonesFromHex(SPECIES_FUR.wolf);
  const belly = SPECIES_BELLY.wolf;
  return (
    <g>
      {/* tail (straight, back-right) */}
      <path
        d="M -28 -78 L -42 -88 L -52 -100 L -46 -106 L -36 -94 L -22 -82 Z"
        fill={t.shadow}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* legs */}
      <rect x="-22" y="-30" width="11" height="30" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <rect x="11" y="-30" width="11" height="30" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <rect x="-22" y="-6" width="11" height="6" fill="#1d1410" />
      <rect x="11" y="-6" width="11" height="6" fill="#1d1410" />
      {/* torso (lean) */}
      <path
        d="M -28 -86 L -30 -32 L 30 -32 L 28 -86 Q 18 -94 0 -94 Q -18 -94 -28 -86 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -16 -82 L -18 -34 L 18 -34 L 16 -82 Q 8 -86 0 -86 Q -8 -86 -16 -82 Z" fill={belly} />
      <path d="M -24 -84 L -24 -56 L -16 -56 L -16 -88 Q -20 -88 -24 -84 Z" fill={t.highlight} opacity="0.55" />
      {/* head with longer snout */}
      <path
        d="M -22 -114 L -28 -100 L -22 -88 L 30 -88 L 36 -98 L 28 -110 Q 20 -120 4 -120 Q -12 -120 -22 -114 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* snout */}
      <path d="M 12 -94 L 14 -88 L 32 -88 L 30 -98 Q 24 -100 18 -100 Q 14 -100 12 -94 Z" fill={belly} stroke={t.line} strokeWidth="1" />
      <circle cx="32" cy="-94" r="2.2" fill="#1d1410" />
      {/* eyes */}
      <rect x="-2" y="-108" width="3.5" height="3.5" fill="#1d1410" />
      <rect x="14" y="-108" width="3.5" height="3.5" fill="#1d1410" />
      {/* ears (upright, pointed) */}
      <path d="M -20 -116 L -14 -132 L -6 -116 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <path d="M 8 -116 L 14 -132 L 22 -116 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <path d="M -16 -118 L -14 -126 L -10 -118 Z" fill="#1d1410" />
      <path d="M 12 -118 L 14 -126 L 18 -118 Z" fill="#1d1410" />
    </g>
  );
}
