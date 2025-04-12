import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/_components/**/*.{js,ts,jsx,tsx}", // ✅ Explicitly include _components
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#309689",
      },
    },
  },
  plugins: [],
};

export default config;
