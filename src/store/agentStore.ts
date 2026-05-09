import { create } from 'zustand';
import type {
  AgentConfig,
  BiomeType,
  HatType,
  HeldItemType,
  MateriaType,
  OuterwearType,
  PaletteColor,
  Species,
} from '../types';
import {
  BIOME_LIST,
  HAT_LIST,
  HELD_LIST,
  MATERIA_LIST,
  OUTERWEAR_LIST,
  PALETTE_LIST,
  SPECIES_LIST,
} from '../types';

export const DEFAULT_CONFIG: AgentConfig = {
  species: 'fox',
  outerwear: { type: 'vest', color: 'crimson' },
  hat: { type: 'wizard', color: 'cobalt' },
  heldItem: { type: 'sword', color: 'goldenrod' },
  materia: ['ruby', 'sapphire', 'emerald'],
  biome: 'workshop',
};

type AgentState = AgentConfig & {
  crtScanlines: boolean;
  setSpecies: (s: Species) => void;
  setOuterwearType: (t: OuterwearType) => void;
  setOuterwearColor: (c: PaletteColor) => void;
  setHatType: (t: HatType) => void;
  setHatColor: (c: PaletteColor) => void;
  setHeldType: (t: HeldItemType) => void;
  setHeldColor: (c: PaletteColor) => void;
  setMateria: (slot: 0 | 1 | 2, t: MateriaType | null) => void;
  setBiome: (b: BiomeType) => void;
  toggleCrt: () => void;
  randomize: () => void;
  reset: () => void;
};

function pick<T>(list: readonly T[]): T {
  return list[Math.floor(Math.random() * list.length)];
}

export const useAgentStore = create<AgentState>((set) => ({
  ...DEFAULT_CONFIG,
  crtScanlines: false,
  setSpecies: (species) => set({ species }),
  setOuterwearType: (type) => set((s) => ({ outerwear: { ...s.outerwear, type } })),
  setOuterwearColor: (color) => set((s) => ({ outerwear: { ...s.outerwear, color } })),
  setHatType: (type) => set((s) => ({ hat: { ...s.hat, type } })),
  setHatColor: (color) => set((s) => ({ hat: { ...s.hat, color } })),
  setHeldType: (type) => set((s) => ({ heldItem: { ...s.heldItem, type } })),
  setHeldColor: (color) => set((s) => ({ heldItem: { ...s.heldItem, color } })),
  setMateria: (slot, type) =>
    set((s) => {
      const next = [...s.materia] as AgentConfig['materia'];
      next[slot] = type;
      return { materia: next };
    }),
  setBiome: (biome) => set({ biome }),
  toggleCrt: () => set((s) => ({ crtScanlines: !s.crtScanlines })),
  randomize: () =>
    set({
      species: pick(SPECIES_LIST),
      outerwear: { type: pick(OUTERWEAR_LIST), color: pick(PALETTE_LIST) },
      hat: { type: pick(HAT_LIST), color: pick(PALETTE_LIST) },
      heldItem: { type: pick(HELD_LIST), color: pick(PALETTE_LIST) },
      materia: [pick(MATERIA_LIST), pick(MATERIA_LIST), pick(MATERIA_LIST)],
      biome: pick(BIOME_LIST),
    }),
  reset: () => set({ ...DEFAULT_CONFIG, crtScanlines: false }),
}));

export function getConfig(state: AgentState): AgentConfig {
  return {
    species: state.species,
    outerwear: state.outerwear,
    hat: state.hat,
    heldItem: state.heldItem,
    materia: state.materia,
    biome: state.biome,
  };
}
