import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Satoshi', 'Integral CF', 'sans-serif'], 
        integral: ['Integral CF', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
      },
      colors: {
        'red' :'#FF33331A',
        customBlack: '#00000099',
        lightGray: '#F0F0F0',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
