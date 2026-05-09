import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Shield({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* shield body (kite) */}
      <path
        d="M 0 -34 L 22 -28 L 20 -8 Q 14 8 0 14 Q -14 8 -20 -8 L -22 -28 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.4"
      />
      {/* trim */}
      <path
        d="M 0 -30 L 18 -24 L 16 -8 Q 12 6 0 10 Q -12 6 -16 -8 L -18 -24 Z"
        fill="none"
        stroke={t.shadow}
        strokeWidth="1.2"
      />
      {/* boss */}
      <circle cx="0" cy="-10" r="5" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      <circle cx="-1" cy="-11" r="2" fill="#F2E2C7" />
      {/* cross/chevron */}
      <path d="M -2 -28 L 2 -28 L 2 -16 L 8 -16 L 8 -12 L 2 -12 L 2 -2 L -2 -2 L -2 -12 L -8 -12 L -8 -16 L -2 -16 Z" fill={t.shadow} stroke={t.line} strokeWidth="0.8" />
      {/* highlight */}
      <path d="M -18 -26 L -16 -8 Q -14 4 -10 8 L -14 8 Q -18 0 -20 -8 Z" fill={t.highlight} opacity="0.5" />
    </g>
  );
}
