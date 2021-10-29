module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inconsolata", "sans-serif"],
        serif: ["Montserrat", "sans-serif"],
        mono: ["Georama", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      minHeight: {
        "3/4": "93.9vh",
      },
      height: {
        "3/5": "60vh",
      },
      gridTemplateColumns: {
        "3/4": "200px 1fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
