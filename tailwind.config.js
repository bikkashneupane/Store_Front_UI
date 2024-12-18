import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Helvetica", "Arial", "sans-serif"] },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      animation: {
        "spin-slow": "spin 3s linear infinite", // Adjust the duration here
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [aspectRatio, forms],
};
