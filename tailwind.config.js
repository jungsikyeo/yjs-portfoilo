const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    typography: {
      DEFAULT: {
        css: {
          color: "var(--primaryTextColor)",
          h1: {
            color: "var(--primaryTextColor)",
          },
          h2: {
            color: "var(--primaryTextColor)",
          },
          h3: {
            color: "var(--primaryTextColor)",
            code: {
              color: "#d7ba7d",
            },
          },
          strong: {
            color: "var(--primaryTextColor)",
            fontWeight: "bold",
          },
          p: {
            color: "var(--primaryTextColor)",
            code: {
              color: "#d7ba7d",
            },
            marginTop: "0",
            marginBottom: "0",
          },
          a: {
            color: "#3794ff",
            "&:hover": {
              color: "#3794ff",
            },
          },
          img: {
            display: "inline",
            marginTop: "10px",
            marginBottom: "10px",
          },
        },
      },
    },
    colors: {
      gray: colors.coolGray,
      blue: colors.lightBlue,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      sans: ["Do Hyeon", "sans-serif"],
      serif: ["Do Hyeon", "serif"],
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
