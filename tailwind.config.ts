import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#c47e62',
      },
      // fontFamily: {
      //   aileron: ['Aileron', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
export default config;
