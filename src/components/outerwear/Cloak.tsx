import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Cloak({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* back drape */}
      <path
        d="M -36 -12 L -42 48 L 42 48 L 36 -12 Q 22 -18 0 -18 Q -22 -18 -36 -12 Z"
        fill={t.shadow}
        stroke={t.line}
        strokeWidth="1.2"
      />
      {/* front opening showing fold */}
      <path d="M -8 -10 L -14 48 L 14 48 L 8 -10 Q 4 -14 0 -14 Q -4 -14 -8 -10 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      {/* clasp */}
      <circle cx="0" cy="-8" r="3.5" fill="#D4A03A" stroke="#5a3e1a" strokeWidth="1" />
      <circle cx="0" cy="-8" r="1.5" fill="#5a3e1a" />
      {/* fold lines */}
      <g stroke={t.line} strokeWidth="0.8" opacity="0.6" fill="none">
        <path d="M -28 -4 L -32 44" />
        <path d="M 28 -4 L 32 44" />
        <path d="M -16 0 L -22 46" />
        <path d="M 16 0 L 22 46" />
      </g>
      {/* highlight along front */}
      <path d="M -6 -6 L -10 44 L -6 44 L -2 -8 Z" fill={t.highlight} opacity="0.6" />
    </g>
  );
}
