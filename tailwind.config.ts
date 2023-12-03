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
        "2xl": "1600px",
        "3xl": "1920px",
      },
      colors: {
        primary: "#75CCD7",
        background: "#121212",
        lightBackground: "#353535",
        card: "#1D1D1D",
        secondary: "#CCCCCC",
        tertiary: "#989898",
        darkText: "#7b7b7b",
      },
    },
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
export default config;
