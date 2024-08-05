import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens:{
        'md': '768px',
        'lg': '1280px',
        'xl': '1920px',
        '2xl': '2560px',
        '3xl': '3440px',
      },
      colors:{
        'amarelo': '#FDB833',
        'azul': '#5A97D6',
        'verde': '#49B637',
        'vermelho': '#CB3636',
      },
    },
  },
  plugins: [],
};
export default config;
