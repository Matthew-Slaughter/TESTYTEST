import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function HardHat({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* brim */}
      <path d="M -22 0 L -24 4 L 24 4 L 22 0 Z" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      {/* dome */}
      <path
        d="M -20 0 Q -22 -22 0 -24 Q 22 -22 20 0 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* ridge */}
      <path d="M -16 -10 Q 0 -16 16 -10" stroke={t.line} strokeWidth="1.2" fill="none" />
      <path d="M 0 -24 L 0 0" stroke={t.shadow} strokeWidth="1.2" />
      {/* highlight */}
      <ellipse cx="-8" cy="-16" rx="6" ry="4" fill={t.highlight} opacity="0.7" />
    </g>
  );
}
