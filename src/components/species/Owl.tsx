import { tonesFromHex, SPECIES_FUR, SPECIES_BELLY } from '../../lib/palette';

export default function Owl() {
  const t = tonesFromHex(SPECIES_FUR.owl);
  const belly = SPECIES_BELLY.owl;
  return (
    <g>
      {/* feet/talons */}
      <rect x="-14" y="-10" width="10" height="10" fill="#C99A5A" stroke="#5a3e1a" strokeWidth="1" />
      <rect x="4" y="-10" width="10" height="10" fill="#C99A5A" stroke="#5a3e1a" strokeWidth="1" />
      <rect x="-14" y="-3" width="10" height="3" fill="#5a3e1a" />
      <rect x="4" y="-3" width="10" height="3" fill="#5a3e1a" />
      {/* body (egg) */}
      <path
        d="M -34 -90 Q -38 -56 -28 -28 L 28 -28 Q 38 -56 34 -90 Q 24 -110 0 -110 Q -24 -110 -34 -90 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* belly speckles */}
      <path d="M -22 -84 Q -24 -52 -16 -32 L 16 -32 Q 24 -52 22 -84 Q 12 -94 0 -94 Q -12 -94 -22 -84 Z" fill={belly} />
      <circle cx="-8" cy="-66" r="2" fill={t.shadow} />
      <circle cx="6" cy="-72" r="2" fill={t.shadow} />
      <circle cx="0" cy="-50" r="2" fill={t.shadow} />
      <circle cx="-12" cy="-46" r="2" fill={t.shadow} />
      <circle cx="10" cy="-54" r="2" fill={t.shadow} />
      {/* wings folded */}
      <path d="M -34 -90 L -36 -50 L -22 -34 L -28 -88 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <path d="M 34 -90 L 36 -50 L 22 -34 L 28 -88 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* face disc */}
      <path
        d="M -28 -110 L -30 -94 L -20 -82 L 20 -82 L 30 -94 L 28 -110 Q 14 -118 0 -118 Q -14 -118 -28 -110 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <ellipse cx="0" cy="-100" rx="22" ry="14" fill={belly} opacity="0.75" />
      {/* eyes (big) */}
      <circle cx="-9" cy="-102" r="6" fill="#fff" stroke={t.line} strokeWidth="1.2" />
      <circle cx="9" cy="-102" r="6" fill="#fff" stroke={t.line} strokeWidth="1.2" />
      <circle cx="-9" cy="-102" r="3" fill="#1d1410" />
      <circle cx="9" cy="-102" r="3" fill="#1d1410" />
      <circle cx="-8" cy="-103" r="1" fill="#fff" />
      <circle cx="10" cy="-103" r="1" fill="#fff" />
      {/* beak */}
      <path d="M -3 -94 L 3 -94 L 0 -86 Z" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      {/* ear tufts */}
      <path d="M -28 -112 L -24 -122 L -18 -112 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <path d="M 28 -112 L 24 -122 L 18 -112 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* highlight */}
      <path d="M -28 -100 L -24 -86 L -18 -86 L -22 -106 Z" fill={t.highlight} opacity="0.5" />
    </g>
  );
}
