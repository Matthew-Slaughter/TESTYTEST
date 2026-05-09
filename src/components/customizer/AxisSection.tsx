import { useState, type ReactNode } from 'react';

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
  right?: ReactNode;
};

export default function AxisSection({ title, subtitle, children, defaultOpen = true, right }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="section-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left hover:bg-ink-700/40"
      >
        <div>
          <div className="text-sm font-semibold tracking-wide text-ink-100">{title}</div>
          {subtitle && <div className="text-xs text-ink-300">{subtitle}</div>}
        </div>
        <div className="flex items-center gap-3">
          {right}
          <span className={`text-ink-300 transition-transform ${open ? 'rotate-90' : ''}`}>›</span>
        </div>
      </button>
      {open && <div className="border-t border-white/5 px-4 py-3 space-y-3">{children}</div>}
    </div>
  );
}
