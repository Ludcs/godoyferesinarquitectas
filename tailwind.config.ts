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
      animation: {
        zoomIn: 'zoomIn 0.5s ease-in-out',
      },
      keyframes: {
        zoomIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.5)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      // fontFamily: {
      //   aileron: ['Aileron', 'sans-serif'],
      // },
    },
  },
  plugins: [],
};
export default config;
