import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "serif"],
      },
      colors: {
        // Direct aliases used across components
        paper: "#FEFAE0",
        sand: "#DDA15E",
        sage: "#BC6C25",
        ink: "#731414",
        brand: {
          cream: "#FEFAE0",
          sand: "#DDA15E",
          clay: "#BC6C25",
          wine: "#731414",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
