"use client"

import { useLanguage } from "@/components/LanguageProvider"

const highlightIcons = [
    {
        key: "chatgpt",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* chat bubble */}
                <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.5 8.5 0 0 1 12.5 3 8.5 8.5 0 0 1 21 11.5z" />
                <path d="M8.5 9.5h7M8.5 13h4.5" />
            </svg>
        )
    },
    {
        key: "seo",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* magnifier */}
                <circle cx="10.5" cy="10.5" r="4.5" />
                <path d="M14 14l4.5 4.5" />
                {/* upward chart */}
                <path d="M4 18v2h16" />
                <path d="M6 16l4-4 3 3 5-6" />
                <path d="M18 9v2h2" />
            </svg>
        )
    },
    {
        key: "social",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* megaphone */}
                <path d="M4 12v3a2 2 0 0 0 2 2h1l2 4h2l-2-4h2l8-4V7l-8-4H6a2 2 0 0 0-2 2v3" />
                <path d="M4 9h3M4 12h3M4 15h3" />
                {/* sound lines */}
                <path d="M19 9.5c1 .8 1.5 1.6 1.5 2.5S20 13.7 19 14.5" />
            </svg>
        )
    }
]

export default function HeroHighlights() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section className="bg-background-dark text-white">
            <div className="mx-auto grid w-full grid-cols-1 sm:grid-cols-3">
                {highlightIcons.map((item, index) => (
                    <div
                        key={item.key}
                        className={`flex items-center gap-5 px-4 py-10 sm:px-6 ${index > 0
                            ? "border-t border-border-dark sm:border-t-0 sm:border-l"
                            : ""
                            }`}
                    >
                        <div className="flex shrink-0 items-center justify-center text-primary-red">
                            {item.icon}
                        </div>
                        <div className="flex items-center">
                            <h2 className="text-sm leading-tight font-bold text-white sm:text-base">
                                {copy.heroHighlights[index]}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
