import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function TopHat({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* brim */}
      <ellipse cx="0" cy="0" rx="22" ry="5" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <ellipse cx="0" cy="-1" rx="20" ry="3.5" fill={t.base} />
      {/* cylinder */}
      <path d="M -14 -2 L -14 -36 L 14 -36 L 14 -2 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <ellipse cx="0" cy="-36" rx="14" ry="3.5" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* band */}
      <rect x="-14" y="-8" width="28" height="4" fill={t.shadow} />
      <rect x="-14" y="-6" width="28" height="1" fill="#D4A03A" opacity="0.7" />
      {/* highlight */}
      <rect x="-12" y="-34" width="3" height="32" fill={t.highlight} opacity="0.7" />
    </g>
  );
}
