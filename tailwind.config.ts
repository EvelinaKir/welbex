import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      inter: ["Inter"],
      montserrant: ["Montserrat"],
    },
    textColor: {
      primary: "#E4E5EA",
      dark: "#656566",
    },
    backgroundColor: {
      primary: "#1E1E1E",
      blue: "#4077F3",
    },
    fontSize: {
      xxs: ["10px", "12.19px"],
      xs: ["13px", "15.85px"],
      sm: ["12px", "14.63px"],
      md: ["14px", "16.94px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.78px"],
      xl: ["36px", "34.57px"],
      xxl: ["48px", "58.09px"],
    },
    container: {
      center: true,
      screens: {
        xl: "1168px",
      },
    },
  },
  plugins: [],
};
export default config;
