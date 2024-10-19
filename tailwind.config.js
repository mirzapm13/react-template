const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        cyan: {
          50: "#DBFFEC",
          100: "#BDFFDB",
          200: "#75FFB4",
          300: "#33FF90",
          400: "#00F06D",
          500: "#00AB4E",
          600: "#008A3F",
          // 700: "#00662F",
          700: "#008A3F",
          800: "#00421E",
          900: "#002410",
          950: "#000F07",
        },

        primary: {
          50: "#DBFFEC",
          100: "#BDFFDB",
          200: "#75FFB4",
          300: "#33FF90",
          400: "#00F06D",
          500: "#00AB4E",
          600: "#008A3F",
          700: "#00662F",
          800: "#00421E",
          900: "#002410",
          950: "#000F07",
        },

        // drawer: {
        //   root: {
        //     base: "fixed z-40 overflow-y-auto bg-white transition-transform dark:bg-gray-800",
        //   },
        // },
      },
    },
    fontFamily: {
      body: ["Inter", "sans-serif"],
    },
  },
  plugins: [flowbite.plugin()],
};
