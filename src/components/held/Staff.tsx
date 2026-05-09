import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function Staff({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* shaft */}
      <rect x="-2" y="-50" width="4" height="68" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      <rect x="-2" y="-50" width="1.4" height="68" fill={t.highlight} opacity="0.7" />
      {/* wraps */}
      <rect x="-3" y="-12" width="6" height="3" fill="#5a3e1a" />
      <rect x="-3" y="-2" width="6" height="3" fill="#5a3e1a" />
      {/* orb */}
      <circle cx="0" cy="-58" r="9" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <circle cx="0" cy="-58" r="6.5" fill={t.base} />
      <circle cx="-2" cy="-60" r="2.4" fill={t.highlight} />
      {/* claws holding orb */}
      <g fill={t.shadow} stroke={t.line} strokeWidth="1">
        <path d="M -8 -56 L -10 -62 L -6 -58 Z" />
        <path d="M 8 -56 L 10 -62 L 6 -58 Z" />
        <path d="M -4 -50 L -8 -50 L -6 -56 Z" />
        <path d="M 4 -50 L 8 -50 L 6 -56 Z" />
      </g>
    </g>
  );
}
