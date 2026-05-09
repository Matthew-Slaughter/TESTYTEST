import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Sweater({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      <path
        d="M -32 -10 L -34 40 L 34 40 L 32 -10 Q 22 -16 0 -16 Q -22 -16 -32 -10 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* collar */}
      <path d="M -10 -14 L -12 -4 L 12 -4 L 10 -14 Q 4 -16 0 -16 Q -4 -16 -10 -14 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* knit lines */}
      <g stroke={t.shadow} strokeWidth="1" opacity="0.6">
        <line x1="-30" y1="0" x2="30" y2="0" />
        <line x1="-30" y1="12" x2="30" y2="12" />
        <line x1="-30" y1="24" x2="30" y2="24" />
        <line x1="-30" y1="36" x2="30" y2="36" />
      </g>
      {/* cable knit */}
      <g stroke={t.highlight} strokeWidth="1" opacity="0.7" fill="none">
        <path d="M -8 -8 Q -4 0 -8 8 Q -12 16 -8 24 Q -4 32 -8 38" />
        <path d="M 8 -8 Q 4 0 8 8 Q 12 16 8 24 Q 4 32 8 38" />
      </g>
      {/* highlight on shoulder */}
      <path d="M -28 -8 L -28 14 L -22 14 L -22 -10 Z" fill={t.highlight} opacity="0.55" />
    </g>
  );
}
