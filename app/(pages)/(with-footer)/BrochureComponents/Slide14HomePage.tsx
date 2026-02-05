"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function Slide14HomePage() {
    const { language, translations } = useLanguage()
    const slide14Translations = translations[language].slide14

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        // Only run on client
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()
        window.addEventListener("resize", checkMobile)
        return () => window.removeEventListener("resize", checkMobile)
    }, [])

    // ===== MOBILE VERSION (clean, purpose-built) =====
    if (isMobile) {
        return (
            <div className="bg-linear-to-b from-white to-blue-50/30">
                <section className="brochure-page=2 flex flex-col px-4 py-6 text-[#1b2737] relative sm:px-6">
                    {/* Title Section - unchanged */}
                    <section className="w-full bg-linear-to-b from-white to-blue-50/30 mb-8">
                        <h2 className="text-3xl w-full text-center font-bold text-blue-600 font-heading italic">
                            {slide14Translations.title}
                        </h2>
                    </section>

                    {/* MOBILE-ONLY CONTENT FLOW */}

                    {/* Full-Width Image */}
                    <div className="rounded-2xl shadow-xl">
                        <Image
                            src="/brochure/lead_software/pixa.png"
                            alt="Lead Generation Software Dashboard"
                            width={800}
                            height={320}
                            className="w-full h-80 object-contain bg-gray-50"
                            priority
                        />
                    </div>
                    <div className="space-y-8">
                        {/* Gradient Text Card */}
                        <div className="bg-linear-to-r from-[#0d4a5f] to-[#1a7a9a] rounded-2xl p-6">
                            <p className="text-base text-white/90 leading-relaxed font-semibold text-center mb-5">
                                {slide14Translations.subtitle}
                            </p>
                            <ul className="space-y-3 text-white/90 text-sm">
                                {slide14Translations.bullets.map((item, i) => (
                                    <li key={i} className="flex items-start">
                                        <span className="text-blue-200 mr-2 mt-1">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Value Prop Section - mobile-optimized */}
                <section className="py-12 px-4 bg-white">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6 mx-auto">
                            <span className="mr-2">⚡</span>
                            {slide14Translations.powerStatements.engine}
                        </div>

                        <h2 className="text-2xl font-bold text-gray-900 mb-5 px-2">
                            {slide14Translations.powerStatements.title}
                        </h2>

                        <p className="text-base text-gray-600 mb-8 leading-relaxed px-2">
                            Imagine your most productive employee, supercharged. Our AI
                            works tirelessly around the clock to generate qualified
                            leads, fill your CRM, and accelerate growth—without coffee
                            breaks, vacations, or quotas.
                        </p>

                        <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
                            {slide14Translations.powerStatements.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow p-5 border border-gray-100"
                                >
                                    <div className="text-3xl font-bold text-blue-600 mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-700 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    // ===== DESKTOP VERSION (100% UNTOUCHED FROM YOUR ORIGINAL) =====
    return (
        <div className="bg-linear-to-b from-white to-blue-50/30">
            <section
                className="brochure-page flex flex-col  px-4 py-8 text-[#1b2737] relative overflow-hidden sm:px-8 md:px-16 md:py-14"
                style={{ pageBreakAfter: "always" }}
            >
                <section className="w-full  bg-linear-to-b from-white to-blue-50/30">
                    <h2 className="text-3xl md:text-6xl w-full text-center font-bold text-blue-600 font-heading italic">
                        {slide14Translations.title}
                    </h2>
                </section>

                {/* Main content area */}
                <div className="flex-1 relative mt-6 md:mt-8">
                    {/* Background gradient on left — full width on mobile */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-full md:w-2/3 z-0"
                        style={{
                            background: "linear-gradient(to bottom, #0d4a5f, #1a7a9a)"
                        }}
                    />

                    {/* Title on left — stacked on mobile */}
                    <div className="relative z-20 px-0 pt-0 pb-8 md:absolute md:left-16 md:top-16 md:px-0 md:pt-0 md:pb-0 flex justify-center items-center flex-col">
                        <p className="text-base text-white/90 max-w-md leading-relaxed md:text-xl font-semibold">
                            {slide14Translations.subtitle}
                        </p>
                        <ul className="text-sm text-white/90 max-w-sm mt-6 [&>li]:list-item md:mt-10 md:text-base">
                            {slide14Translations.bullets.map((bullet, index) => (
                                <li key={index} className="mb-4 font-semibold">
                                    - {bullet}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Software image coming from right — below content on mobile */}
                    <div className="relative z-10 mt-6 h-[280px] w-full md:absolute md:right-0 md:top-0 md:bottom-0 md:mt-0 md:h-full md:w-3/5">
                        <div className="relative h-full w-full overflow-hidden rounded-2xl md:rounded-l-2xl">
                            <Image
                                src="/brochure/lead_software/pixa.png"
                                alt="Lead Generation Software Dashboard"
                                fill
                                className="object-cover"
                                style={{ objectPosition: "left center" }}
                            />
                        </div>
                    </div>

                    {/* Floating popup cards */}
                    <div className="absolute left-4 right-4 top-[28%] z-30 bg-white rounded-xl  p-6 w-auto max-w-64 transform -rotate-2 md:left-[35%] md:right-auto md:top-[35%] md:w-64">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                            New Leads
                        </h3>
                        <div className="text-4xl font-bold text-[#1b2737] mb-1">
                            68
                        </div>
                        <div className="text-sm text-green-600 font-medium mb-3">
                            +15%
                        </div>
                        <div className="flex gap-1 h-12 items-end">
                            <div className="bg-[#1a7a9a] w-8 h-8 rounded-t"></div>
                            <div className="bg-[#1a7a9a] w-8 h-12 rounded-t"></div>
                            <div className="bg-[#1a7a9a] w-8 h-10 rounded-t"></div>
                            <div className="bg-[#1a7a9a] w-8 h-14 rounded-t"></div>
                        </div>
                    </div>

                    <div className="absolute left-4 right-4 top-[48%] z-30 bg-white rounded-xl  p-6 w-auto max-w-64 transform rotate-1 md:left-[50%] md:right-auto md:top-[55%] md:w-64">
                        <h3 className="text-sm font-semibold text-gray-700 mb-2">
                            Stock Inventory
                        </h3>
                        <div className="text-lg text-[#1a7a9a] font-medium mb-3">
                            1000 Storage Bins
                        </div>
                        <div className="flex justify-center">
                            <div className="w-16 h-16 bg-[#1a7a9a]/20 rounded-lg flex items-center justify-center">
                                <svg
                                    className="w-10 h-10 text-[#1a7a9a]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-4 right-4 top-[68%] z-30 bg-white rounded-lg  p-4 w-auto max-w-56 border border-gray-200 md:left-auto md:right-[47%] md:top-[75%] md:w-56">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-[#1a7a9a] rounded flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                    />
                                </svg>
                            </div>
                            <div className="flex-1">
                                <div className="text-xs font-semibold text-gray-800">
                                    Contract Management
                                </div>
                                <div className="text-xs text-gray-600">
                                    Send for Signatures
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute left-4 right-4 bottom-4 z-30 bg-white rounded-lg  p-4 w-auto max-w-72 border border-gray-200 md:left-auto md:right-[17%] md:bottom-[5%] md:w-72">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-8 h-8 bg-[#1a7a9a] rounded flex items-center justify-center">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </div>
                            <div className="text-sm font-semibold text-gray-800">
                                Supplier Onboarding
                            </div>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-[#1a7a9a] h-2 rounded-full transition-all"
                                style={{ width: "81%" }}
                            />
                        </div>
                        <div className="text-xs text-gray-600 mt-1 text-right">
                            81%
                        </div>
                    </div>
                </div>
            </section>

            <section className="pb-16 pt-0">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
                            <span className="mr-2">⚡</span>
                            {slide14Translations.powerStatements.engine}
                        </div>

                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            {slide14Translations.powerStatements.title}
                        </h2>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            {slide14Translations.powerStatements.subtitle}
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            {slide14Translations.powerStatements.stats.map((stat, i) => (
                                <div
                                    key={i}
                                    className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow"
                                >
                                    <div className="text-4xl font-bold text-blue-600 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-700 font-medium">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}