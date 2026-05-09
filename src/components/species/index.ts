import type { Species } from '../../types';
import Fox from './Fox';
import Owl from './Owl';
import Stag from './Stag';
import Bear from './Bear';
import Wolf from './Wolf';
import Hawk from './Hawk';
import Otter from './Otter';

export const SPECIES_COMPONENTS: Record<Species, React.FC> = {
  fox: Fox,
  owl: Owl,
  stag: Stag,
  bear: Bear,
  wolf: Wolf,
  hawk: Hawk,
  otter: Otter,
};
