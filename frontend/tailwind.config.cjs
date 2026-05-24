/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        equipment: {
          black:          '#0A0A0A',
          surface:        '#111111',
          card:           '#1A1A1A',
          gold:           '#C9922A',
          'gold-light':   '#F9BC51',
          rose:           '#8B5E52',
          'text-primary': '#F0EDE8',
          'text-muted':   '#9A9490',
        },
      },
      fontFamily: {
        brand:   ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Barlow Condensed', 'sans-serif'],
        body:    ['Hanken Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
