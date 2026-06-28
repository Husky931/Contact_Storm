"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

/** Wrap occurrences of "GEO" in the brand blue, leaving the rest of the text plain. */
function highlightGeo(text: string) {
    return text.split(/(GEO)/).map((part, i) =>
        part === "GEO" ? (
            <span key={i} className="text-primary-blue font-medium">
                {part}
            </span>
        ) : (
            part
        )
    )
}

export default function ChatGptAds() {
    const { language, translations } = useLanguage()
    const copy = translations[language].chatgptAds

    return (
        <section className="bg-linear-to-br from-white via-background to-background">
            <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
                {/* Left: copy */}
                <div className="max-w-xl">

                    <h2 className="font-heading text-primary-navy mt-4 text-4xl leading-[1.1] font-bold sm:text-5xl lg:text-6xl">
                        {copy.title}
                    </h2>
                    <p className="text-text/75 mt-6 text-base leading-relaxed sm:text-lg">
                        <span className="text-primary-blue font-medium">
                            {copy.intro.highlight}
                        </span>
                        {copy.intro.body}
                    </p>

                    <ul className="text-text/80 marker:text-text/40 mt-6 list-disc space-y-3 pl-5 text-base sm:text-lg">
                        {copy.bullets.map((bullet) => (
                            <li key={bullet}>{highlightGeo(bullet)}</li>
                        ))}
                    </ul>

                    <a
                        href="#contact"
                        className="bg-primary-red hover:bg-primary-redDark shadow-primary-red/20 mt-8 inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-colors"
                    >
                        {copy.cta}
                    </a>
                </div>

                {/* Right: ChatGPT ad screenshot */}
                <div className="lg:justify-self-end">
                    <Image
                        src="/ChatGpt-Ads.jpeg"
                        alt={copy.imageAlt}
                        width={1418}
                        height={788}
                        className="h-auto w-full rounded-2xl shadow-2xl ring-1 ring-black/5"
                    />
                </div>
            </div>
        </section>
    )
}
