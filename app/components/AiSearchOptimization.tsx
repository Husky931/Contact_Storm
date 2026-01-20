"use client"

import { useLanguage } from "@/components/LanguageProvider"

export default function AiSearchOptimization() {
    const { language, translations } = useLanguage()
    const copy = translations[language].aiSearchOptimization

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="rounded-2xl border border-background-grey2 bg-background-grey1/80 px-6 py-10 text-center shadow-sm md:px-12">
                    <h2 className="font-heading text-3xl text-primary-navy">
                        {copy.title}
                    </h2>
                    <p className="mt-4 text-3xl font-semibold text-primary-red md:text-lg">
                        {copy.subtitle}
                    </p>
                    <p className="mt-4 text-2xl font-semibold text-primary-red md:text-lg">
                        {copy.text}
                    </p>
                </div>
            </div>
        </section>
    )
}
