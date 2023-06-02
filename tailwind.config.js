/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./index.html", "./src/**/*.{html,ts,md}"],
  theme: {
    extend: {
      animation: {
        "show-from-left": "fromLeft 1s ease",
        "show-from-right": "fromRight 2s ease ",
        "show-from-hidden": "fromHidden 4s ease",
      },
      keyframes: (theme) => ({
        fromLeft: {
          "0%": { transform: "translateX(-1000%)", opacity: 0 },
          "60%": { transform: "translateX(-1000%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fromRight: {
          "0%": { transform: "translateX(1000%)", opacity: 0 },
          "60%": { transform: "translateX(1000%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fromHidden: {
          "0%": { opacity: 0 },
          "60%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      }),
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};
