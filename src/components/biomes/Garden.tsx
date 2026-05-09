import { iso } from '../../lib/iso';

export default function Garden() {
  const plantBase = iso(0.95, -0.4);
  const mushBase = iso(-0.95, 0.2);

  return (
    <g>
      {/* plant in pot */}
      <g transform={`translate(${plantBase.x}, ${plantBase.y})`}>
        <path d="M -10 0 L -8 12 L 8 12 L 10 0 Z" fill="#7a3a2f" stroke="#1d1410" strokeWidth="1" />
        <ellipse cx="0" cy="0" rx="10" ry="3" fill="#5a2a23" stroke="#1d1410" strokeWidth="1" />
        <ellipse cx="0" cy="0" rx="8" ry="2" fill="#3b1a13" />
        {/* leaves */}
        <path d="M 0 -2 Q -16 -6 -14 -22 Q -8 -16 -2 -2 Z" fill="#3FB37A" stroke="#1d1410" strokeWidth="1" />
        <path d="M 0 -2 Q 16 -6 14 -22 Q 8 -16 2 -2 Z" fill="#2F6B47" stroke="#1d1410" strokeWidth="1" />
        <path d="M 0 -2 Q -2 -28 4 -32 Q 8 -22 2 -2 Z" fill="#3FB37A" stroke="#1d1410" strokeWidth="1" />
        <path d="M -10 -16 L -6 -10" stroke="#1d1410" strokeWidth="0.8" />
        <path d="M 10 -16 L 6 -10" stroke="#1d1410" strokeWidth="0.8" />
      </g>
      {/* mushroom */}
      <g transform={`translate(${mushBase.x}, ${mushBase.y})`}>
        <ellipse cx="0" cy="0" rx="6" ry="2" fill="#1d1410" opacity="0.4" />
        <rect x="-3" y="-12" width="6" height="12" fill="#E8E2D4" stroke="#1d1410" strokeWidth="0.8" />
        <path d="M -10 -12 Q 0 -22 10 -12 Z" fill="#C73E3A" stroke="#1d1410" strokeWidth="1" />
        <circle cx="-4" cy="-15" r="1.4" fill="#E8E2D4" />
        <circle cx="3" cy="-17" r="1.2" fill="#E8E2D4" />
        <circle cx="6" cy="-13" r="1" fill="#E8E2D4" />
      </g>
      {/* tiny grass tufts */}
      <g stroke="#3FB37A" strokeWidth="1.2" fill="none">
        <path d={`M ${plantBase.x - 30} ${plantBase.y + 6} L ${plantBase.x - 28} ${plantBase.y - 2}`} />
        <path d={`M ${plantBase.x - 26} ${plantBase.y + 4} L ${plantBase.x - 24} ${plantBase.y - 4}`} />
        <path d={`M ${mushBase.x + 16} ${mushBase.y - 4} L ${mushBase.x + 14} ${mushBase.y - 14}`} />
      </g>
    </g>
  );
}
