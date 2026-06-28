"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function ChatGptAdsProof() {
    const { language, translations } = useLanguage()
    const copy = translations[language].chatgptAdsProof

    return (
        <section className="bg-linear-to-b from-primary-navy via-[#141d2b] to-background-dark text-white">
            <div className="mx-auto max-w-6xl px-6 py-20 lg:py-24">
                {/* Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="font-heading mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-5xl">
                        {copy.title}
                    </h2>
                    <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
                        {copy.intro}
                    </p>
                </div>

                {/* Ads Manager screenshot — full image, uncropped */}
                <div className="mt-12 overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10">
                    <Image
                        src="/ChatGpt-Ads_2.png"
                        alt={copy.title}
                        width={1756}
                        height={896}
                        className="h-auto w-full"
                        priority={false}
                    />
                </div>

                {/* Confidentiality note */}
                <p className="mt-4 text-center text-xs text-white/45">
                    {copy.note}
                </p>

                {/* KPI stats */}
                <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 ring-1 ring-white/10 md:grid-cols-4">
                    {copy.stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="bg-primary-navy/40 px-5 py-6 text-center backdrop-blur-sm sm:px-6 sm:py-7"
                        >
                            <dt className="font-heading text-3xl font-bold text-white sm:text-4xl">
                                {stat.value}
                            </dt>
                            <dd className="mt-2 text-xs leading-snug text-white/60 sm:text-sm">
                                {stat.label}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
