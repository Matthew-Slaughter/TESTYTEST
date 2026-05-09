import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Headband({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* band */}
      <path d="M -22 -2 Q -24 -8 -18 -10 L 18 -10 Q 24 -8 22 -2 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      <path d="M -22 -2 L -18 -2 L -22 0 Z" fill={t.shadow} />
      {/* knot/tail to side */}
      <path d="M 18 -8 L 30 -4 L 28 4 L 16 -2 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <path d="M 28 4 L 36 8 L 30 10 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* highlight */}
      <line x1="-18" y1="-7" x2="18" y2="-7" stroke={t.highlight} strokeWidth="1.4" opacity="0.8" />
      {/* central emblem */}
      <circle cx="0" cy="-6" r="2.4" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="0.8" />
    </g>
  );
}
