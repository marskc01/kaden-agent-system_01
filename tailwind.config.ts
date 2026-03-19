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
        ink: "#08080B",
        paper: "#F4F5F2",
        accent: "#B7C2FF",
        accentWarm: "#FFD7B8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        halo: "0 0 120px rgba(183, 194, 255, 0.16)"
      },
      backgroundImage: {
        vignette:
          "radial-gradient(circle at top, rgba(183,194,255,0.12), transparent 38%), radial-gradient(circle at bottom, rgba(255,215,184,0.08), transparent 30%)"
      }
    }
  },
  plugins: []
};

export default config;
