import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Beret({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* band/rim */}
      <ellipse cx="0" cy="-2" rx="18" ry="5" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* slumped cap */}
      <path
        d="M -20 -4 Q -24 -16 -8 -20 Q 8 -24 20 -16 Q 22 -8 18 -4 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* tab on top */}
      <circle cx="6" cy="-22" r="2.5" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* highlight */}
      <ellipse cx="-6" cy="-14" rx="6" ry="3" fill={t.highlight} opacity="0.6" />
    </g>
  );
}
