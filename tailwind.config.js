/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'slide-out': 'slide-out 2s forwards',
        'slide-in': 'slide-in 2s forwards',
        'spin': 'spin 1s linear infinite',
      },
      keyframes: {
        'slide-out': {
          '0%': { width: '100%' },
          '100%': { width: '0' },
        },
        'slide-in': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
        'spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
