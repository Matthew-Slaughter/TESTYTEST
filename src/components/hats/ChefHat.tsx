import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function ChefHat({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* band */}
      <rect x="-18" y="-6" width="36" height="6" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* puffy top */}
      <path
        d="M -22 -6 L -22 -20 Q -28 -28 -16 -32 Q -20 -42 -6 -38 Q 0 -46 8 -38 Q 22 -42 18 -32 Q 28 -28 22 -20 L 22 -6 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* highlights — soft puffy */}
      <ellipse cx="-10" cy="-26" rx="6" ry="4" fill={t.highlight} opacity="0.7" />
      <ellipse cx="6" cy="-30" rx="5" ry="3" fill={t.highlight} opacity="0.7" />
      <ellipse cx="-16" cy="-18" rx="4" ry="3" fill={t.highlight} opacity="0.5" />
      {/* band trim */}
      <line x1="-18" y1="-2" x2="18" y2="-2" stroke={t.line} strokeWidth="0.8" />
    </g>
  );
}
