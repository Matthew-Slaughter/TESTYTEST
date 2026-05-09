import type { Anchors, Species } from '../types';

// Anchors are in local SVG coordinates relative to the character group's
// origin (0, 0) at ground center. Y is screen-down. The character is drawn
// roughly within x=[-60..60], y=[-180..0]. The orbit center sits at the
// torso, with a radius wide enough to clear the held item.
export const ANCHORS: Record<Species, Anchors> = {
  fox: {
    head: { x: 0, y: -116 },
    body: { x: 0, y: -78 },
    hand: { x: 30, y: -64 },
    orbit: { cx: 0, cy: -90, r: 78 },
  },
  owl: {
    head: { x: 0, y: -100 },
    body: { x: 0, y: -72 },
    hand: { x: 32, y: -58 },
    orbit: { cx: 0, cy: -82, r: 82 },
  },
  stag: {
    head: { x: 0, y: -132 },
    body: { x: 0, y: -90 },
    hand: { x: 30, y: -72 },
    orbit: { cx: 0, cy: -98, r: 84 },
  },
  bear: {
    head: { x: 0, y: -120 },
    body: { x: 0, y: -82 },
    hand: { x: 36, y: -64 },
    orbit: { cx: 0, cy: -90, r: 88 },
  },
  wolf: {
    head: { x: 0, y: -118 },
    body: { x: 0, y: -80 },
    hand: { x: 30, y: -64 },
    orbit: { cx: 0, cy: -90, r: 80 },
  },
  hawk: {
    head: { x: 0, y: -104 },
    body: { x: 0, y: -74 },
    hand: { x: 30, y: -60 },
    orbit: { cx: 0, cy: -84, r: 80 },
  },
  otter: {
    head: { x: 0, y: -110 },
    body: { x: 0, y: -76 },
    hand: { x: 30, y: -62 },
    orbit: { cx: 0, cy: -86, r: 78 },
  },
};

export function getAnchors(species: Species): Anchors {
  return ANCHORS[species];
}
