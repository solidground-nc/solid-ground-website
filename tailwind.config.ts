import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // "Solid Trust" palette — dependable navy + steel, warmed with an amber
        // accent on a soft sand base. (Token names kept from the original system;
        // only the values changed, so every page picks up the new palette.)
        bedrock: "#1A2229", // charcoal — primary text + dark sections
        "bedrock-soft": "#2C3E4A",
        paper: "#EDE6D8", // warm sand — page background
        card: "#F7F2E9", // lighter sand surface for cards
        pine: "#1F3A4D", // navy — primary brand + actions (kept token name "pine")
        "pine-deep": "#162C3A", // hover
        "pine-tint": "#DEE7EC", // cool light-blue tint
        steel: "#2E6E8E", // secondary steel blue
        clay: "#D98A2B", // amber — accent (kept token name "clay")
        "clay-soft": "#E3A458",
        stone: "#6E7A82", // cool slate-gray — muted secondary text
        line: "#DBD2C1", // hairline borders on sand
        "line-dark": "#2F4250", // borders on dark sections
      },
      fontFamily: {
        // Display: structural / architectural grotesque (loaded via <link> in layout)
        display: ['"Archivo"', "system-ui", "sans-serif"],
        // Body: readable serif — "written to be read, not to sell"
        serif: ['"Newsreader"', "Georgia", "serif"],
      },
      maxWidth: {
        prose: "44rem",
      },
      borderRadius: {
        xl: "0.875rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(25,38,43,0.04), 0 8px 24px rgba(25,38,43,0.06)",
        lift: "0 2px 4px rgba(25,38,43,0.05), 0 16px 40px rgba(25,38,43,0.10)",
      },
      keyframes: {
        "rise-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "rise-in": "rise-in 0.7s cubic-bezier(0.16,1,0.3,1) both",
      },
    },
  },
  plugins: [],
};

export default config;
