import { tonesFromHex, SPECIES_FUR, SPECIES_BELLY } from '../../lib/palette';

export default function Stag() {
  const t = tonesFromHex(SPECIES_FUR.stag);
  const belly = SPECIES_BELLY.stag;
  const antler = '#D9C39A';
  return (
    <g>
      {/* legs (longer) */}
      <rect x="-22" y="-36" width="9" height="36" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <rect x="13" y="-36" width="9" height="36" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <rect x="-22" y="-6" width="9" height="6" fill="#1d1410" />
      <rect x="13" y="-6" width="9" height="6" fill="#1d1410" />
      {/* tail */}
      <path d="M -24 -90 L -28 -78 L -22 -76 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* torso (narrow) */}
      <path
        d="M -22 -96 L -24 -38 L 24 -38 L 22 -96 Q 14 -104 0 -104 Q -14 -104 -22 -96 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -12 -90 L -14 -40 L 14 -40 L 12 -90 Q 6 -94 0 -94 Q -6 -94 -12 -90 Z" fill={belly} />
      <path d="M -18 -96 L -18 -64 L -12 -64 L -12 -98 Q -15 -98 -18 -96 Z" fill={t.highlight} opacity="0.6" />
      {/* neck */}
      <path d="M -10 -114 L -12 -98 L 12 -98 L 10 -114 Q 4 -118 0 -118 Q -4 -118 -10 -114 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      {/* head */}
      <path
        d="M -16 -126 L -22 -114 L -14 -100 L 14 -100 L 22 -114 L 16 -126 Q 10 -132 0 -132 Q -10 -132 -16 -126 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -10 -110 L -12 -100 L 12 -100 L 10 -110 Q 6 -114 0 -114 Q -6 -114 -10 -110 Z" fill={belly} />
      <circle cx="0" cy="-104" r="2.2" fill="#1d1410" />
      {/* eyes */}
      <rect x="-12" y="-120" width="3" height="3" fill="#1d1410" />
      <rect x="9" y="-120" width="3" height="3" fill="#1d1410" />
      {/* ears */}
      <path d="M -22 -130 L -16 -138 L -12 -128 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <path d="M 22 -130 L 16 -138 L 12 -128 Z" fill={t.base} stroke={t.line} strokeWidth="1" />
      {/* antlers (signature) */}
      <g stroke="#5a3e1a" strokeWidth="1" strokeLinecap="square">
        <path d="M -10 -132 L -16 -148 L -12 -150 L -8 -136" fill={antler} />
        <path d="M -18 -148 L -26 -154 L -22 -158 L -14 -150" fill={antler} />
        <path d="M -16 -150 L -22 -160 L -18 -164 L -12 -154" fill={antler} />
        <path d="M 10 -132 L 16 -148 L 12 -150 L 8 -136" fill={antler} />
        <path d="M 18 -148 L 26 -154 L 22 -158 L 14 -150" fill={antler} />
        <path d="M 16 -150 L 22 -160 L 18 -164 L 12 -154" fill={antler} />
      </g>
    </g>
  );
}
