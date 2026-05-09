import { iso } from '../../lib/iso';

// Biome props are drawn in world coords (relative to platform center 0,0,0).
// Tile platform is 2x2; props sit slightly off the platform at the back/sides.
export default function Workshop() {
  // Anvil (back-right)
  const anvilBase = iso(0.9, -0.2);
  // Tool rack (back-left)
  const rackBase = iso(-0.9, -0.6);

  return (
    <g>
      {/* anvil */}
      <g transform={`translate(${anvilBase.x}, ${anvilBase.y})`}>
        <rect x="-12" y="-2" width="24" height="6" fill="#3a3f50" stroke="#0d0e14" strokeWidth="1" />
        <rect x="-8" y="-12" width="16" height="10" fill="#4a5568" stroke="#0d0e14" strokeWidth="1" />
        <path d="M -10 -22 L 10 -22 L 14 -12 L -14 -12 Z" fill="#5a6478" stroke="#0d0e14" strokeWidth="1" />
        <path d="M 14 -22 L 22 -18 L 18 -16 L 14 -18 Z" fill="#5a6478" stroke="#0d0e14" strokeWidth="1" />
        <rect x="-10" y="-22" width="20" height="2" fill="#8a92ad" />
      </g>
      {/* tool rack */}
      <g transform={`translate(${rackBase.x}, ${rackBase.y})`}>
        <rect x="-14" y="-30" width="28" height="4" fill="#5a3e1a" stroke="#0d0e14" strokeWidth="1" />
        <rect x="-14" y="-30" width="28" height="1.4" fill="#a07d4a" />
        {/* hammer */}
        <rect x="-10" y="-26" width="2" height="14" fill="#5a3e1a" />
        <rect x="-13" y="-30" width="6" height="3" fill="#3a3f50" stroke="#0d0e14" strokeWidth="0.6" />
        {/* tongs */}
        <path d="M -2 -28 L 0 -10 M 2 -28 L 0 -10" stroke="#3a3f50" strokeWidth="1.4" fill="none" />
        {/* wrench */}
        <rect x="9" y="-26" width="2" height="14" fill="#3a3f50" />
        <circle cx="10" cy="-28" r="2.4" fill="none" stroke="#3a3f50" strokeWidth="1.4" />
      </g>
      {/* sparks/embers near anvil (decorative dots) */}
      <g>
        <circle cx={anvilBase.x - 6} cy={anvilBase.y - 26} r="1" fill="#FFE89A" opacity="0.8" />
        <circle cx={anvilBase.x + 4} cy={anvilBase.y - 30} r="1" fill="#FFB46A" opacity="0.7" />
        <circle cx={anvilBase.x - 2} cy={anvilBase.y - 34} r="0.8" fill="#FFE89A" opacity="0.6" />
      </g>
    </g>
  );
}
