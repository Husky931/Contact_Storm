/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/(pages)/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                brand: {
                    red: "#e03a3e",
                    navy: "#1b2737",
                    slate: "#2f3b52",
                },
            },
            fontFamily: {
                sans: ["var(--font-body)"],
                heading: ["var(--font-heading)"],
            },
        },
    },
    plugins: [],
}
