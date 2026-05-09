import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Hammer({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* haft */}
      <rect x="-2" y="-30" width="4" height="48" fill="#5a3e1a" stroke="#1d1410" strokeWidth="1" />
      <rect x="-2" y="-30" width="1.4" height="48" fill="#a07d4a" />
      {/* binding */}
      <rect x="-3" y="-22" width="6" height="3" fill="#3b2a13" />
      <rect x="-3" y="-12" width="6" height="3" fill="#3b2a13" />
      {/* head */}
      <path d="M -16 -42 L 16 -42 L 18 -28 L -18 -28 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <path d="M -16 -42 L -18 -28 L -14 -28 L -12 -42 Z" fill={t.shadow} />
      <path d="M 16 -42 L 18 -28 L 14 -28 L 12 -42 Z" fill={t.shadow} />
      {/* face */}
      <rect x="-12" y="-40" width="24" height="3" fill={t.highlight} opacity="0.7" />
      {/* runes */}
      <circle cx="0" cy="-35" r="2" fill={t.shadow} />
      <circle cx="-7" cy="-35" r="1.4" fill={t.shadow} />
      <circle cx="7" cy="-35" r="1.4" fill={t.shadow} />
    </g>
  );
}
