import { PALETTE } from '../../lib/palette';
import { PALETTE_LIST, PALETTE_LABEL, type PaletteColor } from '../../types';

type Props = {
  value: PaletteColor;
  onChange: (c: PaletteColor) => void;
};

export default function ColorPicker({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-1.5">
      {PALETTE_LIST.map((c) => (
        <button
          key={c}
          type="button"
          aria-label={PALETTE_LABEL[c]}
          title={PALETTE_LABEL[c]}
          className="swatch-btn"
          data-active={value === c}
          style={{ backgroundColor: PALETTE[c] }}
          onClick={() => onChange(c)}
        />
      ))}
    </div>
  );
}
