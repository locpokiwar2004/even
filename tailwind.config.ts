import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
            },
            colors: {
                primary: "#2176AE",
                secondary: "#E85F5C",
                surface: "#E1DEE3",
                text_primary: "#212121",
                text_secondary: "#545454"
            },
            fontFamily: {
                jua: ['Jua', 'sans-serif'],
            }
        }
    },
    plugins: []
};
export default config;
