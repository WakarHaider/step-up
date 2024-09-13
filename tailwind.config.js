// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-background': "url('assets/images/step-up-login.jpg')",
      },
      animation: {
        'slide-out': 'slide-out 2s forwards',
        'slide-in': 'slide-in 2s forwards',
        'spin-bounce': 'spin 1s linear infinite, bounce 1s ease-in-out infinite',
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
        'bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
