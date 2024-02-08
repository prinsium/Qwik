/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{js,ts,jsx,tsx,mdx}'];
export const theme = {
    extend: {
        animation: {
            marquee: "marquee 25s linear infinite",
            marqueeTwo: "marquee 15s linear infinite",
          },
          keyframes: {
            marquee: {
              from: {
                transform: 'translateX(0)',
              },
              to: {
                transform: 'translateX(calc(-100% - 2.5rem))',
              },
            },
          },
    },
};
export const plugins = [];