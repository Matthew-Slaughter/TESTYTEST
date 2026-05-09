import type { OuterwearType, PaletteColor } from '../../types';
import Vest from './Vest';
import Sweater from './Sweater';
import LeatherJacket from './LeatherJacket';
import Cloak from './Cloak';
import Tunic from './Tunic';
import Hoodie from './Hoodie';
import Apron from './Apron';

export const OUTERWEAR_COMPONENTS: Record<
  OuterwearType,
  React.FC<{ color: PaletteColor }>
> = {
  vest: Vest,
  sweater: Sweater,
  leatherJacket: LeatherJacket,
  cloak: Cloak,
  tunic: Tunic,
  hoodie: Hoodie,
  apron: Apron,
};
