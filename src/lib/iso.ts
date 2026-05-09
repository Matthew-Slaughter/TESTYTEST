// Standard 2:1 isometric projection (dimetric).
// Input: world (x, y, z) with x = right, y = depth (into screen), z = up.
// Output: 2D screen (sx, sy) with y growing downward.

export const ISO_TILE_W = 64; // tile half-width in screen px
export const ISO_TILE_H = 32; // tile half-height in screen px
export const ISO_Z = 28; // pixels per unit of height

export function iso(x: number, y: number, z = 0): { x: number; y: number } {
  return {
    x: (x - y) * ISO_TILE_W,
    y: (x + y) * ISO_TILE_H - z * ISO_Z,
  };
}

// Diamond polygon points for a tile of size (sx, sy) tiles centered on (x, y).
export function tilePolygon(x: number, y: number, sx = 1, sy = 1, z = 0): string {
  const a = iso(x - sx / 2, y - sy / 2, z);
  const b = iso(x + sx / 2, y - sy / 2, z);
  const c = iso(x + sx / 2, y + sy / 2, z);
  const d = iso(x - sx / 2, y + sy / 2, z);
  return `${a.x},${a.y} ${b.x},${b.y} ${c.x},${c.y} ${d.x},${d.y}`;
}
