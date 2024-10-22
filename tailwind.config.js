/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",

                primary: "var(--primary)",
                hover: "var(--hover)",

                secondary: "var(--secondary)",

                destructive: "var(--destructive)",

                border: {
                    DEFAULT: "var(--border)",
                    dark: "var(--border-dark)",
                },
            },
            fontFamily: {
                code: "var(--font-code)",
            },
            spacing: {
                0.25: "0.0625rem",
                7.5: "1.875rem",
                15: "3.75rem",
            },
            letterSpacing: {
                tagline: ".15em",
            },
            transitionDuration: {
                DEFAULT: "300ms",
            },
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(-3deg)" },
                    "50%": { transform: "rotate(3deg)" },
                },
            },
            animation: {
                "spin-slow": "spin 5s linear infinite",
                wiggle: "wiggle 1s ease-in-out infinite",
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities }) {
            addBase({});
            addComponents({
                ".container": {
                    "@apply max-w-[77.5rem] mx-auto px-4 md:px-8 lg:px-10 xl:max-w-[87.5rem]":
                        {},
                },
                ".h1": {
                    "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
                        {},
                },
                ".h2": {
                    "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
                        {},
                },
                ".h3": {
                    "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
                },
                ".h4": {
                    "@apply text-[2rem] leading-normal": {},
                },
                ".h5": {
                    "@apply text-2xl leading-normal": {},
                },
                ".h6": {
                    "@apply font-semibold text-lg leading-8": {},
                },
                ".body-1": {
                    "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
                        {},
                },
                ".body-2": {
                    "@apply font-light text-[0.875rem] leading-6 md:text-base":
                        {},
                },
                ".caption": {
                    "@apply text-sm": {},
                },
                ".quote": {
                    "@apply font-code text-lg leading-normal": {},
                },
            });
            addUtilities({
                ".tap-highlight-color": {
                    "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
                },
            });
        }),
    ],
};
