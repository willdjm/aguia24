import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'blue': {
          700: '#1E00FF'
        },
        'orange': {
          500: '#FF9001'
        },
        'Amber': {
          500: '#FFAA01'
        },
        'Pink': {
          500: '#FF00AA'
        },
        'Purple': {
          600: '#FF00AA'
        },
      },
    },
  },
  plugins: [],
};
export default config;
