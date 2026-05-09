import type { MateriaType } from '../../types';
import { MATERIA_COLORS, tonesFromHex } from '../../lib/palette';

export default function Gem({ type, size = 8 }: { type: MateriaType; size?: number }) {
  const base = MATERIA_COLORS[type];
  const t = tonesFromHex(base);
  const s = size;
  return (
    <g>
      {/* glow halo */}
      <circle r={s * 1.6} fill={base} opacity="0.18" />
      <circle r={s * 1.1} fill={base} opacity="0.32" />
      {/* faceted gem (octagonal-ish) */}
      <polygon
        points={`0,${-s} ${s * 0.8},${-s * 0.3} ${s * 0.6},${s * 0.7} ${-s * 0.6},${s * 0.7} ${-s * 0.8},${-s * 0.3}`}
        fill={t.base}
        stroke={t.line}
        strokeWidth="1"
      />
      {/* facet highlights */}
      <polygon
        points={`0,${-s} ${s * 0.8},${-s * 0.3} 0,${-s * 0.2}`}
        fill={t.highlight}
      />
      <polygon
        points={`0,${-s * 0.2} ${-s * 0.8},${-s * 0.3} ${-s * 0.6},${s * 0.7}`}
        fill={t.shadow}
        opacity="0.7"
      />
      {/* sparkle */}
      <circle cx={-s * 0.3} cy={-s * 0.55} r={s * 0.18} fill="#fff" />
    </g>
  );
}
