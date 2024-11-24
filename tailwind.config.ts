import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#00008b',
        red: '#ff0000',
        maroon: '#800000',
        darkturqoise: '#00CED1',
        silver: '#C0C0C0',
        darkBlue: '#002344',
        linear1: '#E2FFEA', 
        linear2: '#E5E4F6',
        secondary: '#00F0FF',
        linear3: '#00848C',
        linear4: '#006066',
      },
    },
  },
  plugins: [],
};
export default config;
