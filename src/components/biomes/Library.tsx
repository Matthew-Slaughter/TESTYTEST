import { iso } from '../../lib/iso';

export default function Library() {
  const shelfBase = iso(-0.5, -0.9);
  const candleBase = iso(0.95, -0.1);

  return (
    <g>
      {/* bookshelf (back) */}
      <g transform={`translate(${shelfBase.x}, ${shelfBase.y})`}>
        <rect x="-26" y="-58" width="52" height="58" fill="#5a3e1a" stroke="#1d1410" strokeWidth="1.2" />
        <rect x="-26" y="-58" width="52" height="2" fill="#a07d4a" />
        {/* shelves */}
        {[0, 1, 2].map((i) => (
          <rect key={i} x="-26" y={-58 + 18 + i * 18} width="52" height="2" fill="#3b2a13" />
        ))}
        {/* books per shelf */}
        {[0, 1, 2, 3].map((row) =>
          [0, 1, 2, 3, 4, 5, 6].map((col) => {
            const colors = ['#C73E3A', '#2F6B47', '#2D5BA8', '#D4A03A', '#6B3F7A', '#4A5568', '#E8E2D4'];
            const c = colors[(row * 7 + col) % 7];
            const w = 5 + ((row + col) % 3);
            const h = 12 + ((col * 3 + row) % 4);
            const x = -24 + col * 7;
            const y = -58 + row * 18 + (18 - h);
            return <rect key={`${row}-${col}`} x={x} y={y} width={w} height={h} fill={c} stroke="#1d1410" strokeWidth="0.6" />;
          }),
        )}
      </g>
      {/* candle */}
      <g transform={`translate(${candleBase.x}, ${candleBase.y})`}>
        <ellipse cx="0" cy="0" rx="8" ry="3" fill="#3b2a13" />
        <rect x="-6" y="-4" width="12" height="4" fill="#5a3e1a" stroke="#1d1410" strokeWidth="0.8" />
        <rect x="-3" y="-22" width="6" height="18" fill="#E8E2D4" stroke="#1d1410" strokeWidth="0.8" />
        <rect x="-3" y="-22" width="2" height="18" fill="#fff" opacity="0.6" />
        <line x1="0" y1="-22" x2="0" y2="-26" stroke="#1d1410" strokeWidth="1" />
        <ellipse cx="0" cy="-30" rx="3" ry="6" fill="#FFE89A" opacity="0.9" />
        <ellipse cx="0" cy="-29" rx="1.4" ry="3" fill="#fff" opacity="0.9" />
      </g>
    </g>
  );
}
