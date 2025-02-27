/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#f5f5f5',
        'text-primary': '#0a0a0a',
        'text-secondary': '#d4d4d4',
        'text-light': '#fafafa',
        point: '#bef264',
        'point-active': '#65a30d',
        accent: '#fb923c',
        'accent-active': '#ea580c',
      },
    },
  },
  plugins: [],
};
