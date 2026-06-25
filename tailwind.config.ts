import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        arcade: {
          page: "#13140F",
          dark: "#171811",
          hero: "#0E0F0B",
          panel: "#F0E3BE",
          panel2: "#E8D8AE",
          border: "#25261C",
          text: "#2E2A1F",
          light: "#FFF5D6",
          green: "#82C93A",
          greenDark: "#376D24",
          yellow: "#E8C348",
          orange: "#D98931",
          red: "#C74B31",
        },
      },
      fontFamily: {
        pixel: ['"Press Start 2P"', "monospace"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      boxShadow: {
        pixel: "4px 4px 0 rgba(0, 0, 0, 0.35)",
        pixelDark: "6px 6px 0 rgba(0, 0, 0, 0.42)",
      },
    },
  },
  plugins: [],
};

export default config;
