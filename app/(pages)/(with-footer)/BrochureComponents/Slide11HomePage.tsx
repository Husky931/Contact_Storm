"use client"

import Image from "next/image"
import { BRAND_NAVY, BRAND_RED } from "@/(pages)/brochure/constants"
import { useLanguage } from "@/components/LanguageProvider"

export default function Slide11HomePage() {
    const { language, translations } = useLanguage()
    const slide11Translations = translations[language].slide11

    return (
        <section
            className="brochure-page-2 flex flex-col bg-white px-4 py-8 text-[#1b2737] sm:px-8 md:px-16 md:py-14 border-b border-gray-200"
            style={{ pageBreakAfter: "always" }}
        >
            {/* Centered content — larger type, image, grid */}

            <div className="mt-8 flex flex-1 flex-col justify-center gap-8 lg:flex-row lg:items-center lg:gap-x-20 lg:mt-12">
                {/* Left side — takes more width */}
                <div className="flex-1 flex flex-col items-center text-center justify-center">
                    <h2
                        className="brochure-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl"
                        style={{ color: BRAND_NAVY }}
                    >
                        {slide11Translations.title}
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        {slide11Translations.subtitle}
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/brochure/slide_11.png"
                            alt=""
                            width={480}
                            height={200}
                            className="h-auto w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
                    {slide11Translations.services.map((item) => (
                        <div key={item.title} className="flex flex-col">
                            <h3 className="text-base font-bold leading-snug text-[#1b2737] sm:text-lg">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed font-serif text-gray-600 sm:text-base">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
