const plugin = require("tailwindcss/plugin");
const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      colors: {
      },
    },
  },
  variants: {},
  plugins: [
    require("@tailwindcss/ui"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".w-max": {
          width: "max-content",
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};