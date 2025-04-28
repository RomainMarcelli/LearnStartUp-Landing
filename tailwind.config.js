/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // 👈 toutes tes sources React
    ],
    theme: {
      extend: {
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-30px)' },
          }
        },
        screens: {
          'custom': '1300px', // breakpoint à 1300px
        },
        animation: {
          float: 'float 2.5s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };
  