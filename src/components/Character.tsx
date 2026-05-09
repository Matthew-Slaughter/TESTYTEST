import { motion } from 'framer-motion';
import { SPECIES_COMPONENTS } from './species';
import { OUTERWEAR_COMPONENTS } from './outerwear';
import { HAT_COMPONENTS } from './hats';
import { HELD_COMPONENTS } from './held';
import MateriaOrbit from './materia/MateriaOrbit';
import { getAnchors } from '../lib/anchors';
import type { AgentConfig } from '../types';

type Props = { config: AgentConfig };

export default function Character({ config }: Props) {
  const SpeciesC = SPECIES_COMPONENTS[config.species];
  const OuterwearC = OUTERWEAR_COMPONENTS[config.outerwear.type];
  const HatC = HAT_COMPONENTS[config.hat.type];
  const HeldC = HELD_COMPONENTS[config.heldItem.type];
  const a = getAnchors(config.species);

  return (
    <motion.g
      animate={{ y: [0, -3, 0] }}
      transition={{ duration: 2.4, ease: 'easeInOut', repeat: Infinity }}
    >
      {/* hard ground shadow */}
      <ellipse cx="0" cy="2" rx="34" ry="8" fill="#000" opacity="0.45" />
      {/* species silhouette */}
      <SpeciesC />
      {/* outerwear over body */}
      <g transform={`translate(${a.body.x}, ${a.body.y})`}>
        <OuterwearC color={config.outerwear.color} />
      </g>
      {/* held item over hand */}
      <g transform={`translate(${a.hand.x}, ${a.hand.y})`}>
        <HeldC color={config.heldItem.color} />
      </g>
      {/* hat over head */}
      <g transform={`translate(${a.head.x}, ${a.head.y})`}>
        <HatC color={config.hat.color} />
      </g>
      {/* materia orbit on top */}
      <MateriaOrbit slots={config.materia} anchor={a.orbit} />
    </motion.g>
  );
}
