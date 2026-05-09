import type { HatType, PaletteColor } from '../../types';
import WizardHat from './WizardHat';
import ChefHat from './ChefHat';
import HardHat from './HardHat';
import Beret from './Beret';
import TopHat from './TopHat';
import Headband from './Headband';
import Crown from './Crown';

export const HAT_COMPONENTS: Record<HatType, React.FC<{ color: PaletteColor }>> = {
  wizard: WizardHat,
  chef: ChefHat,
  hardHat: HardHat,
  beret: Beret,
  topHat: TopHat,
  headband: Headband,
  crown: Crown,
};
