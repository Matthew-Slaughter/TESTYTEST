# Agent Customizer

Isometric SVG character customizer for AI agents. Seven animal species, five
RPG-style customization axes, a fixed seven-color palette, and three biome
scenes. Every visual is generated as inline SVG paths in code — no external
sprite assets.

## Tech

- Vite + React 18 + TypeScript
- Tailwind for the customizer UI
- Inline SVG for every visual (no canvas, no WebGL)
- Framer Motion for the idle bob + materia orbit
- Zustand for state

## Run

```sh
npm install
npm run dev
```

Open http://localhost:5173.

## Architecture

- `src/types.ts` — shared enums + `AgentConfig`
- `src/lib/palette.ts` — fixed seven-color palette + 3-tone (highlight / base /
  shadow) computation, plus per-species fur tones and materia gem colors
- `src/lib/iso.ts` — 2:1 isometric projection helpers
- `src/lib/anchors.ts` — per-species anchor points (head / body / hand / orbit)
- `src/components/species/` — the seven species components
- `src/components/outerwear/`, `hats/`, `held/` — layer components
- `src/components/materia/` — gem + orbit
- `src/components/biomes/` — workshop / library / garden
- `src/components/Character.tsx` — composes species + layers via anchors
- `src/components/Diorama.tsx` — isometric platform + biome + character
- `src/components/customizer/` — right-panel UI
- `src/store/agentStore.ts` — Zustand store + randomize / reset

## Extending

- New species: add `Foo.tsx` in `species/`, register in `species/index.ts`, add
  anchors in `lib/anchors.ts`, append to `SPECIES_LIST` in `types.ts`.
- New item: same pattern under the relevant axis directory.
- New color: append to `PALETTE_LIST` and `PALETTE` map. Tone computation is
  automatic.
