import type { ReactNode } from 'react';

type Props = {
  active: boolean;
  onClick: () => void;
  label: string;
  /** SVG content drawn inside a centered viewport. */
  children: ReactNode;
  /** viewBox bounds (cx range). Default is -40..40 wide. */
  viewBox?: string;
};

export default function Thumbnail({ active, onClick, label, children, viewBox = '-40 -50 80 80' }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="thumb-btn aspect-square w-full p-1 text-[10px] text-ink-300"
      data-active={active}
      title={label}
    >
      <svg viewBox={viewBox} className="h-full w-full">
        {children}
      </svg>
      <span className="absolute bottom-1 left-1 right-1 truncate text-center text-[10px] text-ink-200">{label}</span>
    </button>
  );
}
