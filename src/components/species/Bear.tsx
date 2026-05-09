import { tonesFromHex, SPECIES_FUR, SPECIES_BELLY } from '../../lib/palette';

export default function Bear() {
  const t = tonesFromHex(SPECIES_FUR.bear);
  const belly = SPECIES_BELLY.bear;
  return (
    <g>
      {/* legs */}
      <rect x="-26" y="-30" width="14" height="30" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <rect x="12" y="-30" width="14" height="30" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <rect x="-26" y="-6" width="14" height="6" fill="#1d1410" />
      <rect x="12" y="-6" width="14" height="6" fill="#1d1410" />
      {/* torso (broad) */}
      <path
        d="M -36 -84 L -38 -30 L 38 -30 L 36 -84 Q 22 -94 0 -94 Q -22 -94 -36 -84 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -22 -78 L -24 -32 L 24 -32 L 22 -78 Q 12 -82 0 -82 Q -12 -82 -22 -78 Z" fill={belly} />
      <path d="M -32 -82 L -32 -50 L -24 -50 L -24 -86 Q -28 -86 -32 -82 Z" fill={t.highlight} opacity="0.55" />
      {/* head (large rounded) */}
      <path
        d="M -28 -116 L -32 -100 L -24 -86 L 24 -86 L 32 -100 L 28 -116 Q 18 -124 0 -124 Q -18 -124 -28 -116 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* snout */}
      <ellipse cx="0" cy="-94" rx="14" ry="8" fill={belly} stroke={t.line} strokeWidth="1" />
      <ellipse cx="0" cy="-92" rx="3" ry="2" fill="#1d1410" />
      {/* eyes */}
      <rect x="-12" y="-108" width="3.5" height="3.5" fill="#1d1410" />
      <rect x="8" y="-108" width="3.5" height="3.5" fill="#1d1410" />
      {/* ears (small, round) */}
      <circle cx="-22" cy="-118" r="6" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <circle cx="22" cy="-118" r="6" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <circle cx="-22" cy="-118" r="3" fill={belly} />
      <circle cx="22" cy="-118" r="3" fill={belly} />
      {/* head highlight */}
      <path d="M -24 -110 L -22 -94 L -16 -94 L -18 -114 Z" fill={t.highlight} opacity="0.5" />
    </g>
  );
}
