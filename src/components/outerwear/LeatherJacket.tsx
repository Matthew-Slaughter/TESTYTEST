import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function LeatherJacket({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      <path
        d="M -32 -10 L -34 40 L 34 40 L 32 -10 Q 22 -16 0 -16 Q -22 -16 -32 -10 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* collar/lapels */}
      <path d="M -14 -14 L -16 6 L -2 -4 L -2 -16 Q -8 -16 -14 -14 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <path d="M 14 -14 L 16 6 L 2 -4 L 2 -16 Q 8 -16 14 -14 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* zipper line */}
      <line x1="0" y1="-4" x2="0" y2="38" stroke={t.line} strokeWidth="1.4" />
      <g fill={t.highlight}>
        <rect x="-1" y="2" width="2" height="2" />
        <rect x="-1" y="10" width="2" height="2" />
        <rect x="-1" y="18" width="2" height="2" />
        <rect x="-1" y="26" width="2" height="2" />
      </g>
      {/* pockets */}
      <rect x="-22" y="20" width="14" height="6" fill={t.shadow} stroke={t.line} strokeWidth="0.8" />
      <rect x="8" y="20" width="14" height="6" fill={t.shadow} stroke={t.line} strokeWidth="0.8" />
      {/* shine */}
      <path d="M -28 -6 L -28 12 L -22 12 L -22 -10 Z" fill={t.highlight} opacity="0.7" />
      <path d="M 22 18 L 24 24 L 28 24 L 26 -6 Z" fill={t.highlight} opacity="0.4" />
    </g>
  );
}
