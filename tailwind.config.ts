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
        primary: {
          black: '#313131',
          purple: '#7a77ff',
          red: '#f54a3f',
        },
        main: {
          purple: '#6966ff',
          yellow: '#fbbc41',
          green: '#27ae60',
          gray: '#9a9a9a',
        },
        light: {
          purple: '#f3f5ff',
          blue: '#87beff',
        },
        additional: {
          blue: '#0065de',
        },
        bright: {
          green: '#3fec50',
        },
        new: {
          gray: '#c6d0d5',
        },
        optional: {
          red: '#fff3f2',
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
