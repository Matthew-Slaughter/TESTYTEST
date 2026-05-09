import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Hoodie({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* hood behind head — drawn upward past anchor */}
      <path
        d="M -26 -16 Q -34 -44 -16 -54 L 16 -54 Q 34 -44 26 -16 Z"
        fill={t.shadow}
        stroke={t.line}
        strokeWidth="1.2"
      />
      <path d="M -22 -22 Q -28 -42 -14 -50 L 14 -50 Q 28 -42 22 -22 Z" fill={t.base} />
      {/* body */}
      <path
        d="M -32 -10 L -34 42 L 34 42 L 32 -10 Q 22 -16 0 -16 Q -22 -16 -32 -10 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* pocket */}
      <path d="M -20 18 L -22 32 L 22 32 L 20 18 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <line x1="-12" y1="20" x2="-14" y2="30" stroke={t.line} strokeWidth="1" />
      <line x1="12" y1="20" x2="14" y2="30" stroke={t.line} strokeWidth="1" />
      {/* drawstrings */}
      <line x1="-4" y1="-12" x2="-6" y2="6" stroke={t.line} strokeWidth="1.2" />
      <line x1="4" y1="-12" x2="6" y2="6" stroke={t.line} strokeWidth="1.2" />
      <circle cx="-6" cy="6" r="1.4" fill={t.highlight} />
      <circle cx="6" cy="6" r="1.4" fill={t.highlight} />
      {/* highlight */}
      <path d="M -28 -8 L -28 14 L -22 14 L -22 -10 Z" fill={t.highlight} opacity="0.55" />
    </g>
  );
}
