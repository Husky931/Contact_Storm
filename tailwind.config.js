/** @type {import('tailwindcss').Config} */
module.exports = {
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
                    slate: "#2f3b52"
                },
                background: {
                    DEFAULT: "#f4f6f8",
                    white: "#FFFFFF",
                    grey1: "#F9F9F9",
                    grey2: "#F5F5F5",
                    grey3: "#F1F1F1"
                },
                text: {
                    DEFAULT: "#253047"
                }
            },
            fontFamily: {
                sans: ["var(--font-body)"],
                heading: ["var(--font-heading)"]
            }
        }
    },
    plugins: []
}
