import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Lantern({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* hook */}
      <path d="M 0 -40 Q 4 -44 8 -40" stroke="#5a3e1a" strokeWidth="1.6" fill="none" />
      {/* chain */}
      <line x1="0" y1="-38" x2="0" y2="-30" stroke="#5a3e1a" strokeWidth="1.4" />
      {/* top cap */}
      <path d="M -10 -30 L -8 -24 L 8 -24 L 10 -30 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* glass */}
      <rect x="-9" y="-24" width="18" height="20" fill="#F2E2C7" stroke={t.line} strokeWidth="1.2" />
      {/* light */}
      <ellipse cx="0" cy="-14" rx="6" ry="8" fill="#FFE89A" opacity="0.9" />
      <ellipse cx="0" cy="-14" rx="2.4" ry="4" fill="#FFFFFF" opacity="0.9" />
      {/* frame bars */}
      <line x1="-9" y1="-14" x2="9" y2="-14" stroke={t.shadow} strokeWidth="1" />
      <line x1="0" y1="-24" x2="0" y2="-4" stroke={t.shadow} strokeWidth="1" />
      {/* bottom */}
      <path d="M -10 -4 L -8 2 L 8 2 L 10 -4 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <rect x="-3" y="2" width="6" height="3" fill={t.shadow} stroke={t.line} strokeWidth="0.8" />
      {/* highlight */}
      <path d="M -8 -22 L -8 -8 L -5 -8 L -5 -22 Z" fill="#FFFFFF" opacity="0.4" />
    </g>
  );
}
