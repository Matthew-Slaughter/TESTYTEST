import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Sword({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* grip */}
      <rect x="-3" y="-4" width="6" height="14" fill="#5a3e1a" stroke="#1d1410" strokeWidth="1" />
      <line x1="-3" y1="-1" x2="3" y2="-1" stroke="#3b2a13" strokeWidth="0.8" />
      <line x1="-3" y1="3" x2="3" y2="3" stroke="#3b2a13" strokeWidth="0.8" />
      {/* pommel */}
      <circle cx="0" cy="10" r="3" fill="#D4A03A" stroke="#1d1410" strokeWidth="1" />
      {/* crossguard */}
      <rect x="-10" y="-8" width="20" height="4" fill={t.base} stroke={t.line} strokeWidth="1" />
      <rect x="-10" y="-8" width="20" height="1.4" fill={t.highlight} />
      {/* blade */}
      <path d="M -3 -10 L -3 -54 L 0 -60 L 3 -54 L 3 -10 Z" fill="#D9DEE8" stroke="#1d1410" strokeWidth="1.2" />
      {/* fuller / shine */}
      <path d="M 0 -54 L 0 -12 L 1.4 -12 L 1.4 -54 Z" fill="#fff" opacity="0.6" />
      <path d="M -3 -10 L -1.6 -12 L -1.6 -54 L -3 -52 Z" fill="#8a92ad" />
    </g>
  );
}
