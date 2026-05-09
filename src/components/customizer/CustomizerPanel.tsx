import { useAgentStore } from '../../store/agentStore';
import {
  BIOME_LABEL,
  BIOME_LIST,
  HAT_LABEL,
  HAT_LIST,
  HELD_LABEL,
  HELD_LIST,
  MATERIA_LABEL,
  MATERIA_LIST,
  OUTERWEAR_LABEL,
  OUTERWEAR_LIST,
  SPECIES_LABEL,
  SPECIES_LIST,
  type MateriaType,
} from '../../types';
import AxisSection from './AxisSection';
import ColorPicker from './ColorPicker';
import Thumbnail from './Thumbnail';
import { SPECIES_COMPONENTS } from '../species';
import { OUTERWEAR_COMPONENTS } from '../outerwear';
import { HAT_COMPONENTS } from '../hats';
import { HELD_COMPONENTS } from '../held';
import { BIOME_GROUND, BIOME_GROUND_HIGHLIGHT } from '../biomes';
import Gem from '../materia/Gem';
import { tilePolygon } from '../../lib/iso';

export default function CustomizerPanel() {
  const s = useAgentStore();

  return (
    <div className="flex h-full flex-col gap-3 overflow-y-auto pr-1">
      {/* Species */}
      <AxisSection title="Species" subtitle="Silhouette">
        <div className="grid grid-cols-4 gap-2">
          {SPECIES_LIST.map((sp) => {
            const Sp = SPECIES_COMPONENTS[sp];
            return (
              <Thumbnail
                key={sp}
                active={s.species === sp}
                onClick={() => s.setSpecies(sp)}
                label={SPECIES_LABEL[sp]}
                viewBox="-50 -150 100 160"
              >
                <g transform="scale(0.78)">
                  <Sp />
                </g>
              </Thumbnail>
            );
          })}
        </div>
      </AxisSection>

      {/* Outerwear */}
      <AxisSection title="Outerwear" subtitle={OUTERWEAR_LABEL[s.outerwear.type]}>
        <div className="grid grid-cols-4 gap-2">
          {OUTERWEAR_LIST.map((t) => {
            const C = OUTERWEAR_COMPONENTS[t];
            return (
              <Thumbnail
                key={t}
                active={s.outerwear.type === t}
                onClick={() => s.setOuterwearType(t)}
                label={OUTERWEAR_LABEL[t]}
                viewBox="-40 -30 80 80"
              >
                <C color={s.outerwear.color} />
              </Thumbnail>
            );
          })}
        </div>
        <ColorPicker value={s.outerwear.color} onChange={s.setOuterwearColor} />
      </AxisSection>

      {/* Hat */}
      <AxisSection title="Hat" subtitle={HAT_LABEL[s.hat.type]}>
        <div className="grid grid-cols-4 gap-2">
          {HAT_LIST.map((t) => {
            const C = HAT_COMPONENTS[t];
            return (
              <Thumbnail
                key={t}
                active={s.hat.type === t}
                onClick={() => s.setHatType(t)}
                label={HAT_LABEL[t]}
                viewBox="-30 -50 60 60"
              >
                <C color={s.hat.color} />
              </Thumbnail>
            );
          })}
        </div>
        <ColorPicker value={s.hat.color} onChange={s.setHatColor} />
      </AxisSection>

      {/* Held item */}
      <AxisSection title="Held Item" subtitle={HELD_LABEL[s.heldItem.type]}>
        <div className="grid grid-cols-4 gap-2">
          {HELD_LIST.map((t) => {
            const C = HELD_COMPONENTS[t];
            return (
              <Thumbnail
                key={t}
                active={s.heldItem.type === t}
                onClick={() => s.setHeldType(t)}
                label={HELD_LABEL[t]}
                viewBox="-30 -70 60 100"
              >
                <C color={s.heldItem.color} />
              </Thumbnail>
            );
          })}
        </div>
        <ColorPicker value={s.heldItem.color} onChange={s.setHeldColor} />
      </AxisSection>

      {/* Materia */}
      <AxisSection title="Materia" subtitle="Three orbital gems">
        {[0, 1, 2].map((slot) => {
          const idx = slot as 0 | 1 | 2;
          const cur = s.materia[idx];
          return (
            <div key={slot} className="space-y-2">
              <div className="text-xs text-ink-300">Slot {slot + 1}</div>
              <div className="grid grid-cols-8 gap-1.5">
                <button
                  type="button"
                  onClick={() => s.setMateria(idx, null)}
                  className="thumb-btn aspect-square"
                  data-active={cur === null}
                  title="Empty"
                >
                  <span className="text-ink-400 text-lg">×</span>
                </button>
                {MATERIA_LIST.map((m: MateriaType) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => s.setMateria(idx, m)}
                    className="thumb-btn aspect-square p-1"
                    data-active={cur === m}
                    title={MATERIA_LABEL[m]}
                  >
                    <svg viewBox="-12 -12 24 24" className="h-full w-full">
                      <Gem type={m} size={9} />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </AxisSection>

      {/* Biome */}
      <AxisSection title="Biome" subtitle={BIOME_LABEL[s.biome]}>
        <div className="grid grid-cols-3 gap-2">
          {BIOME_LIST.map((b) => (
            <Thumbnail
              key={b}
              active={s.biome === b}
              onClick={() => s.setBiome(b)}
              label={BIOME_LABEL[b]}
              viewBox="-80 -40 160 80"
            >
              <polygon points={tilePolygon(0, 0, 2, 2, 0)} fill={BIOME_GROUND[b]} stroke="#0d0e14" strokeWidth="1" />
              <polygon
                points={tilePolygon(0, 0, 2, 2, 0)}
                fill="none"
                stroke={BIOME_GROUND_HIGHLIGHT[b]}
                strokeWidth="0.8"
                opacity="0.6"
              />
            </Thumbnail>
          ))}
        </div>
      </AxisSection>

      {/* CRT toggle */}
      <div className="section-card flex items-center justify-between px-4 py-3">
        <div>
          <div className="text-sm font-semibold tracking-wide text-ink-100">CRT Scanlines</div>
          <div className="text-xs text-ink-300">Retro display overlay</div>
        </div>
        <button
          type="button"
          onClick={s.toggleCrt}
          className={`relative h-6 w-11 rounded-full transition-colors ${
            s.crtScanlines ? 'bg-accent' : 'bg-ink-600'
          }`}
          aria-pressed={s.crtScanlines}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-ink-900 transition-transform ${
              s.crtScanlines ? 'translate-x-5' : 'translate-x-0.5'
            }`}
          />
        </button>
      </div>
    </div>
  );
}
