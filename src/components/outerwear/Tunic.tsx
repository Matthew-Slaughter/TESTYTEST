import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Tunic({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      <path
        d="M -28 -10 L -32 42 L 32 42 L 28 -10 Q 18 -14 0 -14 Q -18 -14 -28 -10 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* belt */}
      <rect x="-32" y="14" width="64" height="6" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <rect x="-3" y="14" width="6" height="6" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      {/* trim hem */}
      <path d="M -32 38 L -33 42 L 33 42 L 32 38 Z" fill={t.shadow} />
      {/* v-neck */}
      <path d="M -10 -14 L 0 -2 L 10 -14 L 6 -14 L 0 -8 L -6 -14 Z" fill={t.line} />
      {/* highlight */}
      <path d="M -26 -8 L -28 12 L -22 12 L -22 -10 Z" fill={t.highlight} opacity="0.6" />
      {/* embroidery */}
      <g stroke={t.highlight} strokeWidth="1" fill="none" opacity="0.8">
        <path d="M -16 26 L -10 32 L -4 26 L 4 26 L 10 32 L 16 26" />
      </g>
    </g>
  );
}
