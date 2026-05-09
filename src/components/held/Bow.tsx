import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Bow({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* bow stave */}
      <path
        d="M 0 -50 Q -16 -34 -16 -10 Q -16 14 0 30 Q -8 14 -8 -10 Q -8 -34 0 -50 Z"
        fill={t.base}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* darker inner */}
      <path
        d="M 0 -50 Q -8 -34 -8 -10 Q -8 14 0 30"
        fill="none"
        stroke={t.shadow}
        strokeWidth="1.2"
      />
      {/* string */}
      <line x1="0" y1="-50" x2="0" y2="30" stroke="#E6ECF5" strokeWidth="1" />
      {/* grip */}
      <rect x="-3" y="-6" width="6" height="14" fill="#5a3e1a" stroke="#1d1410" strokeWidth="1" />
      {/* highlight */}
      <path d="M -2 -46 Q -10 -32 -10 -10 Q -10 12 -2 26" fill="none" stroke={t.highlight} strokeWidth="1" opacity="0.7" />
      {/* nocked arrow */}
      <line x1="0" y1="-2" x2="22" y2="-2" stroke="#E8E2D4" strokeWidth="1.4" />
      <path d="M 22 -4 L 26 -2 L 22 0 Z" fill="#D9DEE8" stroke="#1d1410" strokeWidth="0.8" />
      <path d="M 0 -4 L -3 -2 L 0 0 Z" fill="#C73E3A" />
    </g>
  );
}
