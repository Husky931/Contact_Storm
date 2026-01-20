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
                    <p className="mt-4 text-2xl font-bold text-primary-red md:text-3xl">
                        {copy.subtitle}
                    </p>
                    <div className="mt-6 text-center space-y-4 text-base leading-relaxed text-primary-slate md:text-lg">
                        {copy.sellerText.paragraphs.map((paragraph, index) => {
                            if (typeof paragraph === "string") {
                                return <p key={index}>{paragraph}</p>
                            }

                            return (
                                <p key={index}>
                                    {paragraph.lead}
                                    <strong className="font-semibold text-primary-navy">
                                        {paragraph.highlight}
                                    </strong>
                                    {paragraph.tail}
                                    {"highlightTail" in paragraph && paragraph.highlightTail ? (
                                        <strong className="font-semibold text-primary-navy">
                                            {paragraph.highlightTail}
                                        </strong>
                                    ) : null}
                                    {"end" in paragraph && paragraph.end}
                                </p>
                            )
                        })}
                    </div>
                    <div className="mt-8 text-center">
                        <p className="text-2xl font-bold uppercase tracking-wide text-primary-navy md:text-3xl">
                            {copy.callout.lead}
                            <span className="text-primary-red line-through decoration-2 decoration-primary-red">
                                {copy.callout.strike}
                            </span>
                            {copy.callout.tail}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
