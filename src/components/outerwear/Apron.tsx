import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Apron({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* neck strap */}
      <path d="M -10 -16 L -4 -10 L 4 -10 L 10 -16" stroke={t.line} strokeWidth="1.6" fill="none" />
      {/* bib */}
      <path d="M -14 -10 L -16 8 L 16 8 L 14 -10 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      {/* skirt */}
      <path d="M -24 6 L -30 42 L 30 42 L 24 6 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      {/* waist tie */}
      <rect x="-24" y="6" width="48" height="4" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <path d="M 22 8 L 32 4 L 28 14 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <path d="M -22 8 L -32 4 L -28 14 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* pocket */}
      <rect x="-12" y="20" width="24" height="10" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* highlight */}
      <path d="M -12 -8 L -14 6 L -10 6 L -8 -8 Z" fill={t.highlight} opacity="0.6" />
      <path d="M -22 8 L -26 36 L -22 36 L -18 8 Z" fill={t.highlight} opacity="0.5" />
    </g>
  );
}
