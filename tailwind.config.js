/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"JetBrains Mono"', '"Fira Code"', 'ui-monospace', 'monospace'],
      },
      colors: {
        ink: {
          900: '#0d0e14',
          800: '#13151d',
          700: '#1c1f2b',
          600: '#262b3b',
          500: '#3a4055',
          400: '#5a607a',
          300: '#8a92ad',
          200: '#b8bed3',
          100: '#dde1ee',
        },
        accent: '#D4A03A',
      },
      boxShadow: {
        panel: '0 1px 0 rgba(255,255,255,0.04) inset, 0 0 0 1px rgba(255,255,255,0.06), 0 24px 48px -16px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
