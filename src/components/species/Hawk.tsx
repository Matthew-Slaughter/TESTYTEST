import { tonesFromHex, SPECIES_FUR, SPECIES_BELLY } from '../../lib/palette';

export default function Hawk() {
  const t = tonesFromHex(SPECIES_FUR.hawk);
  const belly = SPECIES_BELLY.hawk;
  return (
    <g>
      {/* talons */}
      <path d="M -16 -8 L -8 -8 L -10 0 L -16 0 Z" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      <path d="M 8 -8 L 16 -8 L 16 0 L 10 0 Z" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      {/* legs (thin) */}
      <rect x="-12" y="-22" width="5" height="14" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      <rect x="7" y="-22" width="5" height="14" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      {/* body (compact) */}
      <path
        d="M -30 -86 Q -34 -54 -22 -28 L 22 -28 Q 34 -54 30 -86 Q 22 -100 0 -100 Q -22 -100 -30 -86 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -18 -78 Q -20 -50 -12 -34 L 12 -34 Q 20 -50 18 -78 Q 10 -88 0 -88 Q -10 -88 -18 -78 Z" fill={belly} />
      {/* feather chevrons */}
      <path d="M -10 -64 L 0 -56 L 10 -64" stroke={t.shadow} strokeWidth="1.4" fill="none" />
      <path d="M -10 -52 L 0 -44 L 10 -52" stroke={t.shadow} strokeWidth="1.4" fill="none" />
      {/* wings folded */}
      <path d="M -30 -86 L -34 -50 L -20 -32 L -22 -88 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <path d="M 30 -86 L 34 -50 L 20 -32 L 22 -88 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* head */}
      <path
        d="M -22 -110 L -26 -98 L -20 -88 L 20 -88 L 26 -98 L 22 -110 Q 14 -116 0 -116 Q -14 -116 -22 -110 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* swept-back crest */}
      <path d="M -24 -108 L -34 -106 L -22 -100 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <path d="M 24 -108 L 34 -106 L 22 -100 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <path d="M -10 -112 L -22 -116 L -14 -106 Z" fill={t.shadow} />
      {/* eyes (sharp) */}
      <rect x="-12" y="-104" width="4" height="3" fill="#D4A03A" />
      <rect x="8" y="-104" width="4" height="3" fill="#D4A03A" />
      <rect x="-11" y="-104" width="2" height="3" fill="#1d1410" />
      <rect x="9" y="-104" width="2" height="3" fill="#1d1410" />
      {/* beak (sharp, hooked) */}
      <path d="M -4 -94 L 4 -94 L 6 -86 L 0 -82 L -2 -86 Z" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      <path d="M 0 -82 L 2 -86 L 6 -86 Z" fill="#5a3e1a" />
    </g>
  );
}
