import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-russian":"#0E0E11",
        "bunker":"#18181B",
        'curious-blue': {
        '50': '#f0f8ff',
        '100': '#e0f0fe',
        '200': '#bae2fd',
        '300': '#7ccbfd',
        '400': '#37b1f9',
        '500': '#20a4f3',
        '600': '#0177c8',
        '700': '#025fa2',
        '800': '#065186',
        '900': '#0b446f',
        '950': '#082b49',
        },
        'bright-turquoise': {
        '50': '#effefc',
        '100': '#c7fff7',
        '200': '#90fff0',
        '300': '#59f8e8',
        '400': '#1de4d6',
        '500': '#04c8bd',
        '600': '#00a19c',
        '700': '#05807d',
        '800': '#0a6565',
        '900': '#0d5453',
        '950': '#003133',
        },
        "red-repair":"#C80303",
      },
      padding: {
        '1pc':'1%',
        '2pc':'2%',
        '3pc':'3%'
      }
    },
  },
  plugins: [],
};
export default config;