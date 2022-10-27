/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./apps/**/*.component.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["bumblebee"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
