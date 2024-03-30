import type { Config } from 'tailwindcss'
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: '480px',
      ...defaultTheme.screens,
    },
    extend: {
      textShadow: {
        default: '0 0 10px rgba(0,0,0, 0.5)',
        away: '0 0 1em #4460ff, 0 0 0.5em var(--modric-blue), 0 0 0.1em var(--modric-blue)',
        home: '0 0 1em #ff4444, 0 0 0.5em var(--modric-red), 0 0 0.1em var(--modric-red)',
      },
      boxShadow: {
        away: '0 0 7px rgba(68, 96, 255, 0.7), 0 0 10px rgba(4, 87, 162, 0.6)',
        home: '0 0 1em #ff4444, 0 0 0.5em var(--modric-red), 0 0 0.1em var(--modric-red)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'modric-blue': 'rgb(4, 87, 162)',
        'modric-red': 'rgb(237, 28, 36)',
        'modric-gold': 'rgb(223, 183, 112)',
        'modric-home': 'red',
        'modric-away':
          'linear-gradient(138deg, rgba(4,87,162,1) 15%, rgba(0,0,0,0.39729729729729735) 34%, rgba(3,75,139,0.8891891891891892) 58%, rgba(0,0,0,0.4783783783783784) 86%)',
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' }, // https://birdeatsbug.com/blog/creating-hover-effects-with-tailwind-css
        },
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') },
      )
    }),
  ],
}
export default config
