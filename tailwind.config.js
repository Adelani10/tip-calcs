/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "576px",
      lg: "768px",
      xl: "978px"
    },
    extend: {
      colors: {
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        veryLightGrayishCyan: "hsl(189, 41%, 97%)",
        white: "hsl(0, 0%, 100%)"
      },
      fontSize: {
        kekere: "7px",
        bigKekere: "8px"
      },
      backgroundImage: {
        dolls: "url(/img/icon-dollar.svg)",
        person: "url(/img/icon-person.svg)"
      }
    },
  },
  plugins: [],
}
