/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': {'max': '767px'},
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    colors: {
      'neon-orange': '#FF8B13',
      'orange': '#F56D2A',
      'peach': '#FFDCBB',
      'dark-purple': '#581237',
      'light-grey': '#EAEAEA',
      'neon-purple': '#F273E6',
      'purple': '#CF4DCE',
      'violet': '#794CF8',
      'dark-blue': '#110B3E',
      'white': '#FFFFFF',
    },

    fontSize: {
      'h1': ['4rem', {
        lineHeight: '100%'
      }],
      'h2': ['3rem', {
        lineHeight: '100%'
      }],
      'h3': ['1.5rem', {
        lineHeight: '100%'
      }],
      'p': ['0.875rem', {
        lineHeight: '100%'
      }],
    },

    fontFamily:{
      podimo: ['PodimoDiatype', 'sans-serif'],
    },

    borderRadius: {
      'half-rounded': '2rem',
      'rounded': '9999px',
    },

    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
