import type { BiomeType } from '../../types';
import Workshop from './Workshop';
import Library from './Library';
import Garden from './Garden';

export const BIOME_COMPONENTS: Record<BiomeType, React.FC> = {
  workshop: Workshop,
  library: Library,
  garden: Garden,
};

export const BIOME_GROUND: Record<BiomeType, string> = {
  workshop: '#3a3326',
  library: '#2c2336',
  garden: '#243a2c',
};

export const BIOME_GROUND_HIGHLIGHT: Record<BiomeType, string> = {
  workshop: '#574a32',
  library: '#3f3450',
  garden: '#345a44',
};
