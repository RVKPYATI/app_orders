/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "ui-sans-serif"],
        irish: ["var(--font-irish)", "ui-sans-serif"],
      },
      colors: {
        baseColor: "#f7f7f7",
        primary: "#273B76",
        primaryHover: "#0B1F5A",
        redBadge: "#D61010",
        badgeLight: "#F68181",
        badgeLightHover: "#CE5959",
        borderColor: "#a9b3c7",
      },
      backgroundImage: {
        taxi: "url('/taxi.jpg')",
      },
      animation: {
        rotation: "rotation 5s linear infinite",
      },
      keyframes: {
        rotation: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow")({
      shadowColor: "rgba(0, 0, 0, 0.9)",
      shadowBlur: "3px",
      shadowOffsetX: "1px",
      shadowOffsetY: "1px",
      experimental: true,
    }),
  ],
};
