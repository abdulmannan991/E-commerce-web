import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        smMax: { max: '390px' },
        xs: '491px', // Targets screens less than 390px
      },
      fontFamily: {
        sans: ['Satoshi', 'Integral CF', 'sans-serif'], 
        integral: ['Integral CF', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        'red' :'#FF33331A',
        customBlack: '#00000099',
        customGreen:'#00C12B',
        customRed: '#F50606',
        customYellow: '#F5DD06',
        customOrange: '#F57906',
        customSky: '#06CAF5',
        customBlue: '#063AF5',
        customPurple: '#7D06F5',
        customPink: '#F506A4',
        lightGray: '#F0F0F0',
        customfilter : '#00000033',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      
    },
  },
  plugins: [],
};
export default config;
