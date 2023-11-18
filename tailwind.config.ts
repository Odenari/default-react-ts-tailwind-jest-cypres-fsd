/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'linear-for-btns':
          'linear-gradient(160deg, rgba(95, 93, 183, 0.20) 22.37%, rgba(255, 255, 255, 0.15) 72.04%)',
      },
      colors: {
        black: {
          primary: '#313131',
        },
        purple: {
          main: '#6966ff',
          light: '#f3f5ff',
          primary: '#7a77ff',
        },
        yellow: {
          main: '#fbbc41',
        },
        blue: {
          light: '#87beff',
          additional: '#0065de',
        },
        green: {
          main: '#27ae60',
          bright: '#3fec50',
        },
        gray: {
          new: 'c6d0d5',
          main: '#9a9a9a',
        },
        red: {
          primary: '#f54a3f',
          optional: '#fff3f2',
        },
        input: {
          active: '#f9fdff',
          disabled: '#f5f8f9',
        },
        'active-menu-tab': '#eff8ff',
        'bg-web-mob': '#f3f9ff',
      },
    },
    plugins: [],
  },
};
