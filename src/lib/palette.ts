import type { PaletteColor, MateriaType, Species } from '../types';

export const PALETTE: Record<PaletteColor, string> = {
  crimson: '#C73E3A',
  forest: '#2F6B47',
  cobalt: '#2D5BA8',
  goldenrod: '#D4A03A',
  plum: '#6B3F7A',
  slate: '#4A5568',
  ivory: '#E8E2D4',
};

export type Tones = { highlight: string; base: string; shadow: string; line: string };

function hexToRgb(hex: string) {
  const m = hex.replace('#', '');
  const n = parseInt(m, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}
function rgbToHex(r: number, g: number, b: number) {
  const c = (v: number) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, '0');
  return `#${c(r)}${c(g)}${c(b)}`;
}
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function lerpColor(hex: string, target: { r: number; g: number; b: number }, t: number) {
  const { r, g, b } = hexToRgb(hex);
  return rgbToHex(lerp(r, target.r, t), lerp(g, target.g, t), lerp(b, target.b, t));
}

export function tonesFromHex(hex: string): Tones {
  return {
    highlight: lerpColor(hex, { r: 255, g: 255, b: 255 }, 0.3),
    base: hex,
    shadow: lerpColor(hex, { r: 0, g: 0, b: 0 }, 0.25),
    line: lerpColor(hex, { r: 0, g: 0, b: 0 }, 0.55),
  };
}

export function tones(color: PaletteColor): Tones {
  return tonesFromHex(PALETTE[color]);
}

export const MATERIA_COLORS: Record<MateriaType, string> = {
  ruby: '#E14A4A',
  sapphire: '#4A7BE1',
  emerald: '#3FB37A',
  topaz: '#E6C24A',
  amethyst: '#9B5BC8',
  diamond: '#E6ECF5',
  onyx: '#2A2A33',
};

export const SPECIES_FUR: Record<Species, string> = {
  fox: '#D77A3F',
  owl: '#8B7250',
  stag: '#8C5A35',
  bear: '#5B4534',
  wolf: '#6E737D',
  hawk: '#7C4A2F',
  otter: '#6B4A3A',
};

export const SPECIES_BELLY: Record<Species, string> = {
  fox: '#F2E2C7',
  owl: '#E2D4B6',
  stag: '#C7A37A',
  bear: '#A38766',
  wolf: '#C9CCD3',
  hawk: '#D9CBB0',
  otter: '#C9A989',
};
