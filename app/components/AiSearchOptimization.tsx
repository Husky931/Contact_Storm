"use client"

import { useLanguage } from "@/components/LanguageProvider"
import Image from "next/image"

export default function AiSearchOptimization() {
    const { language, translations } = useLanguage()
    const copy = translations[language].aiSearchOptimization

    // Fallback title if translation missing

    return (
        <section className="bg-white py-12 md:py-16">
            <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-navy max-w-4xl mx-auto leading-tight">
                        {copy.sectionTitle}
                    </h2>
                </div>

                {/* Responsive Layout: Image + Content */}
                <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-8">
                    {/* IMAGE COLUMN - Mobile: Full width with fixed height | Desktop: Match content height */}
                    <div className="w-full md:w-1/2 flex">
                        <div className="rounded-2xl border border-background-grey2 bg-background-grey1/50 shadow-xl w-full relative overflow-hidden">
                            {/* Mobile: Fixed height container */}
                            <div className="md:hidden h-[320px] relative">
                                <Image
                                    src="/chatGPT.webp"
                                    alt='show how we can optimize for chatGPT'
                                    fill
                                    className="object-contain p-6"
                                    sizes="100vw"
                                    priority={false}
                                />
                            </div>
                            {/* Desktop: Full height container matching content box */}
                            <div className="hidden md:block w-full h-full p-6 relative">
                                <Image
                                    src="/chatGPT.webp"
                                    alt='show how we can optimize for chatGPT'
                                    fill
                                    className="object-fill"
                                    sizes="(min-width: 768px) 50vw"
                                    priority={false}
                                />
                            </div>
                        </div>
                    </div>

                    {/* CONTENT COLUMN - Stretches to match image height on desktop */}
                    <div className="w-full md:w-1/2 flex">
                        <div className="rounded-2xl border border-background-grey2 bg-background-grey1/80 shadow-sm w-full p-5 md:p-8 flex flex-col h-full">
                            <h3 className="font-heading text-2xl md:text-3xl text-primary-navy font-bold">
                                {copy.title}
                            </h3>
                            <p className="mt-3 md:mt-4 text-xl md:text-2xl font-bold text-primary-red">
                                {copy.subtitle}
                            </p>

                            <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-slate md:text-lg grow">
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

                            <div className="mt-8 pt-6 border-t border-background-grey2 shrink-0">
                                <p className="text-xl md:text-2xl font-bold uppercase tracking-wide text-primary-navy">
                                    {copy.callout.lead}
                                    <span className="text-primary-red line-through decoration-2 decoration-primary-red inline-block mx-1">
                                        {copy.callout.strike}
                                    </span>
                                    {copy.callout.tail}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}