import type { HeldItemType, PaletteColor } from '../../types';
import Sword from './Sword';
import Staff from './Staff';
import Tome from './Tome';
import Shield from './Shield';
import Hammer from './Hammer';
import Bow from './Bow';
import Lantern from './Lantern';

export const HELD_COMPONENTS: Record<
  HeldItemType,
  React.FC<{ color: PaletteColor }>
> = {
  sword: Sword,
  staff: Staff,
  tome: Tome,
  shield: Shield,
  hammer: Hammer,
  bow: Bow,
  lantern: Lantern,
};
