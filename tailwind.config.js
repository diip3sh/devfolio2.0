/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        secondary: "#0000ff",
        primary: "#fafafa",
        // secondary: "#fcf6f5ff",
        // primary: "#2bae66ff",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      textShadow: {
        outline:
          "-1px -1px 0 var(--tw-shadow-color), 1px -1px 0 var(--tw-shadow-color), -1px 1px 0 var(--tw-shadow-color), 1px 1px 0 var(--tw-shadow-color)",
      },
      transitionProperty: {
        transform: "transform",
      },
      transitionTimingFunction: {
        "ease-out": "ease-out",
      },
      transitionDuration: {
        300: "300ms",
      },
    },
  },
  variants: {
    extend: {
      transform: ["hover"],
      scale: ["hover"],
    },
  },
  plugins: [
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") },
      );
    },
  ],
};
