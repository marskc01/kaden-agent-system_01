import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#06070a",
        paper: "#f2f4f3",
        accent: "#b7c2ff",
        ember: "#e3c8a4"
      },
      boxShadow: {
        glow: "0 0 60px rgba(183, 194, 255, 0.12)",
        card: "0 18px 60px rgba(0, 0, 0, 0.35)"
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(255,255,255,0.08) 0, rgba(255,255,255,0) 60%)"
      },
      letterSpacing: {
        cinematic: "0.28em"
      }
    }
  },
  plugins: []
};

export default config;
