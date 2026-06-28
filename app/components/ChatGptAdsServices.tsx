"use client"

import { useLanguage } from "@/components/LanguageProvider"

function escapeRegExp(value: string) {
    return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/** Render text, wrapping any highlighted phrases in the brand blue. */
function withHighlights(text: string, highlights: string[] = []) {
    if (!highlights.length) return text
    const pattern = new RegExp(
        `(${highlights.map(escapeRegExp).join("|")})`,
        "g"
    )
    return text.split(pattern).map((part, index) =>
        highlights.includes(part) ? (
            <span key={index} className="text-primary-blue font-medium">
                {part}
            </span>
        ) : (
            part
        )
    )
}

function CardIcon({ name }: { name: string }) {
    const className = "h-9 w-9 text-primary-red"

    if (name === "funnel") {
        return (
            <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className={className}
                aria-hidden="true"
            >
                <path d="M4.25 5.61C6.27 8.2 10 13 10 13v5c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-5s3.72-4.8 5.74-7.39c.51-.66.04-1.61-.79-1.61H5.04c-.83 0-1.3.95-.79 1.61z" />
                <circle cx="18" cy="18" r="5.5" fill="currentColor" stroke="#fff" strokeWidth="1.2" />
                <text x="18" y="21" textAnchor="middle" fontSize="7.5" fontWeight="700" fill="#fff">$</text>
            </svg>
        )
    }

    // Default: plane taking off
    return (
        <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path d="M2.5 19h19v2h-19v-2zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 2.59 4.49 5.43-1.46 5.16-1.38 4.97-1.33c.81-.23 1.28-1.05 1.07-1.86z" />
        </svg>
    )
}

export default function ChatGptAdsServices() {
    const { language, translations } = useLanguage()
    const copy = translations[language].chatgptAdsServices

    return (
        <section className="bg-background py-16 lg:py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
                    <div className="max-w-3xl">
                        <h2 className="font-heading text-primary-navy text-3xl font-bold sm:text-4xl">
                            {copy.title}
                        </h2>
                        <p className="text-text/75 mt-4 text-base leading-relaxed">
                            {copy.intro}
                        </p>
                    </div>
                    {/* <a
                        href="#contact"
                        className="border-primary-red text-primary-red hover:bg-primary-red flex h-24 w-44 shrink-0 items-center justify-center rounded-full border px-6 text-center text-sm font-semibold leading-snug transition-colors hover:text-white"
                    >
                        {copy.cta}
                    </a> */}
                </div>

                {/* Cards */}
                <div className="mt-12 space-y-6">
                    {copy.cards.map((card) => (
                        <article
                            key={card.title}
                            className="grid gap-6 overflow-hidden rounded-2xl border border-gray-200/80 bg-white shadow-sm md:grid-cols-[0.85fr_1.05fr_1.1fr] md:gap-x-12 md:gap-y-0"
                        >
                            {/* Icon + title */}
                            <div className="flex flex-col justify-center gap-5 bg-linear-to-br from-primary-red/10 to-primary-red/5 p-8">
                                <CardIcon name={card.icon} />
                                <h3 className="font-heading text-primary-navy text-xl font-bold leading-snug">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Description */}
                            <div className="flex items-center p-8 md:px-0 md:py-10">
                                <p className="text-text/75 text-base leading-relaxed">
                                    {withHighlights(
                                        card.description.text,
                                        card.description.highlights
                                    )}
                                </p>
                            </div>

                            {/* Bullets */}
                            <div className="flex items-center p-8 md:py-10 md:pr-10 md:pl-0">
                                <ul className="text-text/75 marker:text-text/40 list-disc space-y-3 pl-5 text-base leading-relaxed">
                                    {card.bullets.map((bullet) => (
                                        <li key={bullet.text}>
                                            {withHighlights(
                                                bullet.text,
                                                bullet.highlights
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
