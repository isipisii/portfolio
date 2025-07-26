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
        background: "#0F0F0F",
        primary: "#02c39a",
        headerText: "#F7F7F7",
        textMuted: "#9E9F9D",
        cardBg: "#1C1B1B",
      },
    },
  },
  plugins: [require("@codaworks/react-glow/tailwind")],
};
export default config;
