import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Tome({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* book body */}
      <path d="M -16 -18 L -18 8 L 18 8 L 16 -18 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      {/* spine */}
      <rect x="-3" y="-18" width="6" height="26" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* pages edge */}
      <path d="M -16 -18 L -18 8 L -14 8 L -14 -18 Z" fill="#E8E2D4" stroke={t.line} strokeWidth="1" />
      <path d="M 16 -18 L 18 8 L 14 8 L 14 -18 Z" fill="#E8E2D4" stroke={t.line} strokeWidth="1" />
      {/* corner mounts */}
      <g fill="#D4A03A" stroke="#5a3e1a" strokeWidth="0.8">
        <path d="M -16 -18 L -10 -18 L -16 -12 Z" />
        <path d="M 16 -18 L 10 -18 L 16 -12 Z" />
        <path d="M -18 8 L -12 8 L -18 2 Z" />
        <path d="M 18 8 L 12 8 L 18 2 Z" />
      </g>
      {/* center sigil */}
      <circle cx="0" cy="-6" r="4" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="0.8" />
      <path d="M 0 -10 L 0 -2 M -4 -6 L 4 -6" stroke="#5a3e1a" strokeWidth="1" />
      {/* highlight */}
      <path d="M -14 -16 L -14 4 L -10 4 L -8 -16 Z" fill={t.highlight} opacity="0.4" />
    </g>
  );
}
