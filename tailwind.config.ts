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
        'ofkors-claret': '#47141e',
        'ofkors-orange': '#ffc371',
        'ofkors-pink': '#ff5f6d',
      }
    },
  },
  plugins: [],
};
export default config;
