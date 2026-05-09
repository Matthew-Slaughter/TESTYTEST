import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Crown({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* band */}
      <path d="M -20 -2 L -22 -10 L 22 -10 L 20 -2 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* spikes */}
      <path
        d="M -20 -10 L -18 -22 L -10 -14 L -4 -24 L 4 -24 L 10 -14 L 18 -22 L 20 -10 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* gems */}
      <circle cx="-14" cy="-14" r="2" fill="#E14A4A" stroke={t.line} strokeWidth="0.6" />
      <circle cx="0" cy="-16" r="2.4" fill="#4A7BE1" stroke={t.line} strokeWidth="0.6" />
      <circle cx="14" cy="-14" r="2" fill="#3FB37A" stroke={t.line} strokeWidth="0.6" />
      {/* highlights */}
      <line x1="-18" y1="-8" x2="18" y2="-8" stroke={t.highlight} strokeWidth="1.4" opacity="0.8" />
      <path d="M -16 -20 L -14 -14 L -12 -16 Z" fill={t.highlight} opacity="0.7" />
    </g>
  );
}
