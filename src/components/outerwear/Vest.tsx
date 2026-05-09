import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Vest({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* back/shoulders */}
      <path
        d="M -28 -8 L -30 36 L -16 36 L -16 -2 Q -22 -8 -28 -8 Z M 28 -8 L 30 36 L 16 36 L 16 -2 Q 22 -8 28 -8 Z"
        fill={t.shadow}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* front panels */}
      <path d="M -16 -2 L -18 36 L -2 36 L -2 -2 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <path d="M 16 -2 L 18 36 L 2 36 L 2 -2 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      {/* highlight */}
      <path d="M -26 -4 L -26 18 L -22 18 L -22 -4 Z" fill={t.highlight} opacity="0.7" />
      {/* buttons */}
      <circle cx="-6" cy="6" r="1.6" fill={t.highlight} />
      <circle cx="-6" cy="18" r="1.6" fill={t.highlight} />
      <circle cx="-6" cy="30" r="1.6" fill={t.highlight} />
    </g>
  );
}
