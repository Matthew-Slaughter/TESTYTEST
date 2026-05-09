export type Species =
  | 'fox'
  | 'owl'
  | 'stag'
  | 'bear'
  | 'wolf'
  | 'hawk'
  | 'otter';

export const SPECIES_LIST: Species[] = [
  'fox',
  'owl',
  'stag',
  'bear',
  'wolf',
  'hawk',
  'otter',
];

export type OuterwearType =
  | 'vest'
  | 'sweater'
  | 'leatherJacket'
  | 'cloak'
  | 'tunic'
  | 'hoodie'
  | 'apron';

export const OUTERWEAR_LIST: OuterwearType[] = [
  'vest',
  'sweater',
  'leatherJacket',
  'cloak',
  'tunic',
  'hoodie',
  'apron',
];

export type HatType =
  | 'wizard'
  | 'chef'
  | 'hardHat'
  | 'beret'
  | 'topHat'
  | 'headband'
  | 'crown';

export const HAT_LIST: HatType[] = [
  'wizard',
  'chef',
  'hardHat',
  'beret',
  'topHat',
  'headband',
  'crown',
];

export type HeldItemType =
  | 'sword'
  | 'staff'
  | 'tome'
  | 'shield'
  | 'hammer'
  | 'bow'
  | 'lantern';

export const HELD_LIST: HeldItemType[] = [
  'sword',
  'staff',
  'tome',
  'shield',
  'hammer',
  'bow',
  'lantern',
];

export type MateriaType =
  | 'ruby'
  | 'sapphire'
  | 'emerald'
  | 'topaz'
  | 'amethyst'
  | 'diamond'
  | 'onyx';

export const MATERIA_LIST: MateriaType[] = [
  'ruby',
  'sapphire',
  'emerald',
  'topaz',
  'amethyst',
  'diamond',
  'onyx',
];

export type BiomeType = 'workshop' | 'library' | 'garden';
export const BIOME_LIST: BiomeType[] = ['workshop', 'library', 'garden'];

export type PaletteColor =
  | 'crimson'
  | 'forest'
  | 'cobalt'
  | 'goldenrod'
  | 'plum'
  | 'slate'
  | 'ivory';

export const PALETTE_LIST: PaletteColor[] = [
  'crimson',
  'forest',
  'cobalt',
  'goldenrod',
  'plum',
  'slate',
  'ivory',
];

export type AgentConfig = {
  species: Species;
  outerwear: { type: OuterwearType; color: PaletteColor };
  hat: { type: HatType; color: PaletteColor };
  heldItem: { type: HeldItemType; color: PaletteColor };
  materia: [MateriaType | null, MateriaType | null, MateriaType | null];
  biome: BiomeType;
};

export type Anchors = {
  head: { x: number; y: number };
  body: { x: number; y: number };
  hand: { x: number; y: number };
  orbit: { cx: number; cy: number; r: number };
};

export const SPECIES_LABEL: Record<Species, string> = {
  fox: 'Fox',
  owl: 'Owl',
  stag: 'Stag',
  bear: 'Bear',
  wolf: 'Wolf',
  hawk: 'Hawk',
  otter: 'Otter',
};

export const OUTERWEAR_LABEL: Record<OuterwearType, string> = {
  vest: 'Vest',
  sweater: 'Sweater',
  leatherJacket: 'Leather Jacket',
  cloak: 'Cloak',
  tunic: 'Tunic',
  hoodie: 'Hoodie',
  apron: 'Apron',
};

export const HAT_LABEL: Record<HatType, string> = {
  wizard: 'Wizard Hat',
  chef: 'Chef Hat',
  hardHat: 'Hard Hat',
  beret: 'Beret',
  topHat: 'Top Hat',
  headband: 'Headband',
  crown: 'Crown',
};

export const HELD_LABEL: Record<HeldItemType, string> = {
  sword: 'Sword',
  staff: 'Staff',
  tome: 'Tome',
  shield: 'Shield',
  hammer: 'Hammer',
  bow: 'Bow',
  lantern: 'Lantern',
};

export const MATERIA_LABEL: Record<MateriaType, string> = {
  ruby: 'Ruby',
  sapphire: 'Sapphire',
  emerald: 'Emerald',
  topaz: 'Topaz',
  amethyst: 'Amethyst',
  diamond: 'Diamond',
  onyx: 'Onyx',
};

export const BIOME_LABEL: Record<BiomeType, string> = {
  workshop: 'Workshop',
  library: 'Library',
  garden: 'Garden',
};

export const PALETTE_LABEL: Record<PaletteColor, string> = {
  crimson: 'Crimson',
  forest: 'Forest',
  cobalt: 'Cobalt',
  goldenrod: 'Goldenrod',
  plum: 'Plum',
  slate: 'Slate',
  ivory: 'Ivory',
};
