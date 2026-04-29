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
        brand: {
          dark: "#050505",
          navy: "#0a0f1c",
          red: "#e11d48",
          redGlow: "rgba(225, 29, 72, 0.15)",
          white: "#f8fafc",
          cream: "#f1f5f9",
          glassBorder: "rgba(255, 255, 255, 0.12)",
          glassBg: "rgba(255, 255, 255, 0.06)",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};
export default config;
