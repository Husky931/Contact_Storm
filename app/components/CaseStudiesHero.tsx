"use client"

import { useLanguage } from "@/components/LanguageProvider"

export default function CaseStudiesHero() {
    const { language, translations } = useLanguage()
    const copy = translations[language].caseStudies.hero

    return (
        <section className="bg-linear-to-b from-white to-background">
            <div className="mx-auto max-w-6xl px-6 pt-16 pb-16 lg:pt-24 lg:pb-24">
                {/* <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                    {copy.kicker}
                </p> */}
                <h1 className="font-heading text-primary-navy text-4xl leading-[1.05] font-bold uppercase sm:text-5xl lg:text-7xl">
                    <span className="block">{copy.title.part1}</span>
                    <span className="text-primary-red block">
                        {copy.title.highlight1}
                    </span>
                </h1>
            </div>
        </section>
    )
}
