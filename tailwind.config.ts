import type { Config } from "tailwindcss"

export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/(pages)/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    main: "#1b2737",
                    red: "#e03a3e",
                    redDark: "#A12022",
                    redDarker: "#3B0607",
                    navy: "#1b2737",
                    slate: "#2f3b52",
                    blue: "#135dfc"
                },
                background: {
                    DEFAULT: "#f4f6f8",
                    white: "#FFFFFF",
                    grey1: "#F9F9F9",
                    grey2: "#F5F5F5",
                    grey3: "#F1F1F1",
                    dark: {
                        DEFAULT: "#0d121e",
                        deep: "#020617",
                        lighter: "#0f172a"
                    }
                },
                text: {
                    DEFAULT: "#253047",
                    dark: "#ffffff"
                },
                border: {
                    dark: "#444444"
                }
            },
            fontFamily: {
                sans: ["var(--font-body)"],
                heading: ["var(--font-heading)"]
            }
        }
    },
    plugins: []
} satisfies Config
