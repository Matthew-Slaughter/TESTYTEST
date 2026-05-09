import type { PaletteColor } from '../../types';
import { tones } from '../../lib/palette';

export default function WizardHat({ color }: { color: PaletteColor }) {
  const t = tones(color);
  return (
    <g>
      {/* brim */}
      <ellipse cx="0" cy="0" rx="24" ry="6" fill={t.shadow} stroke={t.line} strokeWidth="1.2" />
      <ellipse cx="0" cy="-1" rx="22" ry="4" fill={t.base} />
      {/* cone */}
      <path d="M -16 -2 L -2 -38 L 4 -38 L 16 -2 Z" fill={t.base} stroke={t.line} strokeWidth="1.2" />
      {/* tip bend */}
      <path d="M -2 -38 L 4 -38 L 8 -42 L -2 -34 Z" fill={t.shadow} stroke={t.line} strokeWidth="1" />
      {/* highlight */}
      <path d="M -14 -2 L -4 -34 L 0 -34 L -10 -2 Z" fill={t.highlight} opacity="0.55" />
      {/* stars */}
      <g fill="#E6C24A">
        <path d="M -6 -16 L -5 -13 L -2 -13 L -4 -11 L -3 -8 L -6 -10 L -9 -8 L -8 -11 L -10 -13 L -7 -13 Z" />
        <path d="M 6 -22 L 6.7 -20 L 9 -20 L 7.5 -19 L 8 -17 L 6 -18 L 4 -17 L 4.5 -19 L 3 -20 L 5.3 -20 Z" />
      </g>
    </g>
  );
}
