export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    colors: {
      "custom-gray": "#f5f5f5",
      "custom-blue": "#1e3a8a",
    },
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
];
