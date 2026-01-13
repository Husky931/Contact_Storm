"use client"

import { useLanguage } from "@/components/LanguageProvider"

export default function ContactHero() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section className="bg-linear-to-b from-slate-50 to-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <h1 className="font-heading text-4xl font-bold text-slate-900 md:text-5xl">
                        {copy.contactPage.title}
                    </h1>
                    <p className="mt-4 text-lg text-slate-600">
                        {copy.contactPage.subtitle}
                    </p>
                </div>
            </div>
        </section>
    )
}
