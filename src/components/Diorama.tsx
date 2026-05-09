import { useAgentStore } from '../store/agentStore';
import Character from './Character';
import { BIOME_COMPONENTS, BIOME_GROUND, BIOME_GROUND_HIGHLIGHT } from './biomes';
import { tilePolygon, iso } from '../lib/iso';

const VIEWBOX = 600;

export default function Diorama() {
  const species = useAgentStore((s) => s.species);
  const outerwear = useAgentStore((s) => s.outerwear);
  const hat = useAgentStore((s) => s.hat);
  const heldItem = useAgentStore((s) => s.heldItem);
  const materia = useAgentStore((s) => s.materia);
  const biome = useAgentStore((s) => s.biome);
  const crt = useAgentStore((s) => s.crtScanlines);
  const config = { species, outerwear, hat, heldItem, materia, biome };

  const ground = BIOME_GROUND[biome];
  const groundHi = BIOME_GROUND_HIGHLIGHT[biome];
  const Biome = BIOME_COMPONENTS[biome];

  // 2x2 platform centered at origin
  const platformPoints = tilePolygon(0, 0, 2, 2, 0);
  // Inner subtle grid: 4 quadrant tiles
  const grid: string[] = [];
  for (let i = -1; i <= 0; i++) {
    for (let j = -1; j <= 0; j++) {
      grid.push(tilePolygon(i + 0.5, j + 0.5, 1, 1, 0));
    }
  }
  // platform side faces (front-left and front-right)
  const ph = 12; // platform thickness px in screen
  const a = iso(-1, 1, 0); // front corner
  const b = iso(1, 1, 0); // right corner
  const c = iso(-1, -1, 0); // ignored back
  void c;
  const aDown = { x: a.x, y: a.y + ph };
  const bDown = { x: b.x, y: b.y + ph };
  const leftFront = iso(-1, 1, 0); // duplicate
  void leftFront;
  const rightBack = iso(1, -1, 0);
  const rightDown = { x: rightBack.x, y: rightBack.y + ph };
  const leftBack = iso(-1, -1, 0);
  const leftDown = { x: leftBack.x, y: leftBack.y + ph };

  return (
    <div className={`relative w-full max-w-[700px] aspect-square mx-auto ${crt ? 'crt-on' : ''}`}>
      <div
        className="absolute inset-0 rounded-2xl overflow-hidden"
        style={{
          background:
            'radial-gradient(circle at 50% 38%, #2a2f44 0%, #161826 60%, #0d0e14 100%)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.05), 0 30px 60px -30px rgba(0,0,0,0.6)',
        }}
      >
        <svg
          viewBox={`${-VIEWBOX / 2} ${-VIEWBOX / 2} ${VIEWBOX} ${VIEWBOX}`}
          width="100%"
          height="100%"
          shapeRendering="crispEdges"
          style={{ display: 'block' }}
        >
          {/* horizon line glow */}
          <defs>
            <radialGradient id="horizon" cx="50%" cy="58%" r="60%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect x={-VIEWBOX / 2} y={-VIEWBOX / 2} width={VIEWBOX} height={VIEWBOX} fill="url(#horizon)" />

          {/* shift origin so platform sits in lower-middle of canvas */}
          <g transform="translate(0, 60)">
            {/* platform side faces */}
            <polygon
              points={`${a.x},${a.y} ${aDown.x},${aDown.y} ${leftDown.x},${leftDown.y} ${leftBack.x},${leftBack.y}`}
              fill="#1a1c28"
              stroke="#0d0e14"
              strokeWidth="1.2"
            />
            <polygon
              points={`${a.x},${a.y} ${aDown.x},${aDown.y} ${bDown.x},${bDown.y} ${b.x},${b.y}`}
              fill="#23263a"
              stroke="#0d0e14"
              strokeWidth="1.2"
            />
            <polygon
              points={`${b.x},${b.y} ${bDown.x},${bDown.y} ${rightDown.x},${rightDown.y} ${rightBack.x},${rightBack.y}`}
              fill="#1a1c28"
              stroke="#0d0e14"
              strokeWidth="1.2"
            />
            {/* platform top */}
            <polygon points={platformPoints} fill={ground} stroke="#0d0e14" strokeWidth="1.2" />
            {/* grid */}
            <g stroke={groundHi} strokeWidth="0.8" fill="none" opacity="0.45">
              {grid.map((g, i) => (
                <polygon key={i} points={g} />
              ))}
            </g>
            {/* subtle highlight rim */}
            <polygon points={platformPoints} fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="2" />

            {/* biome props (drawn before character so they appear behind) */}
            <Biome />

            {/* character at platform center */}
            <Character config={config} />
          </g>

          {/* foreground vignette */}
          <rect
            x={-VIEWBOX / 2}
            y={-VIEWBOX / 2}
            width={VIEWBOX}
            height={VIEWBOX}
            fill="url(#horizon)"
            opacity="0.4"
            pointerEvents="none"
          />
        </svg>
      </div>
    </div>
  );
}
