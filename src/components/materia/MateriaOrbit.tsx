import { motion } from 'framer-motion';
import type { Anchors, MateriaType } from '../../types';
import Gem from './Gem';

type Props = {
  slots: [MateriaType | null, MateriaType | null, MateriaType | null];
  anchor: Anchors['orbit'];
};

// Three slots evenly distributed around an isometric ellipse.
// We squash y outside the rotation so the orbit becomes elliptical,
// then un-squash the gem itself so it stays round.
export default function MateriaOrbit({ slots, anchor }: Props) {
  const rx = anchor.r;
  const ry = anchor.r * 0.4;
  const ySquash = ry / rx;
  const yUnsquash = rx / ry;

  return (
    <g transform={`translate(${anchor.cx}, ${anchor.cy})`}>
      <g transform={`scale(1, ${ySquash})`}>
        {slots.map((type, i) => {
          if (!type) return null;
          const phase = i / 3;
          return (
            <motion.g
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 6, ease: 'linear', repeat: Infinity, delay: -phase * 6 }}
            >
              <g transform={`translate(${rx}, 0)`}>
                <g transform={`scale(1, ${yUnsquash})`}>
                  <Gem type={type} />
                </g>
              </g>
            </motion.g>
          );
        })}
      </g>
    </g>
  );
}
