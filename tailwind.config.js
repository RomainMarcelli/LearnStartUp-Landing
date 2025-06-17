/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // toutes tes sources React
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        },
      },
      screens: {
        xs400: '400px', // ✅ place-le ici (dans extend.screens)
        custom: '1300px',
        xs: '500px',
      },
      animation: {
        float: 'float 2.5s ease-in-out infinite',
      },
    },
  },  
  plugins: [],
};
