import { tonesFromHex, SPECIES_FUR, SPECIES_BELLY } from '../../lib/palette';

export default function Otter() {
  const t = tonesFromHex(SPECIES_FUR.otter);
  const belly = SPECIES_BELLY.otter;
  return (
    <g>
      {/* paddle tail */}
      <path
        d="M -24 -56 L -52 -50 L -64 -38 L -58 -28 L -48 -34 L -28 -42 Z"
        fill={t.shadow}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -52 -42 L -42 -38 L -36 -32" stroke={t.line} strokeWidth="1" fill="none" />
      {/* legs (short) */}
      <rect x="-20" y="-22" width="11" height="22" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <rect x="9" y="-22" width="11" height="22" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <rect x="-20" y="-5" width="11" height="5" fill="#1d1410" />
      <rect x="9" y="-5" width="11" height="5" fill="#1d1410" />
      {/* torso (long, hunched) */}
      <path
        d="M -26 -78 L -28 -28 L 28 -28 L 26 -78 Q 18 -90 0 -90 Q -18 -90 -26 -78 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -16 -74 L -18 -32 L 18 -32 L 16 -74 Q 8 -82 0 -82 Q -8 -82 -16 -74 Z" fill={belly} />
      <path d="M -22 -76 L -22 -52 L -16 -52 L -16 -82 Q -19 -82 -22 -76 Z" fill={t.highlight} opacity="0.55" />
      {/* head (round) */}
      <path
        d="M -22 -106 L -28 -94 L -22 -82 L 22 -82 L 28 -94 L 22 -106 Q 14 -116 0 -116 Q -14 -116 -22 -106 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* muzzle */}
      <ellipse cx="0" cy="-90" rx="12" ry="6" fill={belly} stroke={t.line} strokeWidth="1" />
      <ellipse cx="0" cy="-88" rx="2.2" ry="1.6" fill="#1d1410" />
      {/* whiskers */}
      <path d="M -12 -88 L -22 -86 M -12 -90 L -22 -92 M 12 -88 L 22 -86 M 12 -90 L 22 -92" stroke={t.line} strokeWidth="0.8" />
      {/* eyes */}
      <rect x="-12" y="-102" width="3.5" height="3.5" fill="#1d1410" />
      <rect x="8" y="-102" width="3.5" height="3.5" fill="#1d1410" />
      {/* small ears */}
      <circle cx="-18" cy="-110" r="3.5" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <circle cx="18" cy="-110" r="3.5" fill={t.base} stroke={t.line} strokeWidth="1" />
    </g>
  );
}
