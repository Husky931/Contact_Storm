"use client"

import { useLanguage } from "@/components/LanguageProvider"

function CheckIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            className={className}
            aria-hidden="true"
        >
            <path
                fillRule="evenodd"
                d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4l3.3 3.29 6.8-6.8a1 1 0 0 1 1.4 0z"
                clipRule="evenodd"
            />
        </svg>
    )
}

export default function Pricing() {
    const { language, translations } = useLanguage()
    const copy = translations[language].pricing

    return (
        <section id="pricing" className="bg-background py-16 lg:py-20">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
                    <h2 className="font-heading text-primary-navy text-3xl font-bold sm:text-4xl">
                        {copy.title}
                    </h2>
                    <p className="text-text/75 max-w-xl text-base leading-relaxed">
                        {copy.intro}
                    </p>
                </div>

                {/* Primary offer */}
                <div className="mt-12 flex justify-center">
                    <article className="ring-primary-blue/25 relative w-full max-w-xl rounded-3xl border border-gray-200/70 bg-white p-8 shadow-sm ring-2 sm:p-10">

                        <h3 className="font-heading text-primary-blue text-2xl font-bold">
                            {copy.main.name}
                        </h3>

                        {/* Step 1 — Week 1 preparation (one-time, separate from monthly) */}
                        <div className="border-primary-blue/15 bg-primary-blue/5 mt-7 rounded-2xl border p-5">
                            <p className="text-primary-blue text-xs font-semibold tracking-wide uppercase">
                                {copy.main.setup.step}
                            </p>
                            <div className="mt-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                                <h4 className="font-heading text-primary-navy text-lg font-bold">
                                    {copy.main.setup.title}
                                </h4>
                                <p className="flex items-baseline gap-1.5 whitespace-nowrap">
                                    <span className="text-primary-navy text-2xl font-bold tracking-tight">
                                        {copy.main.setup.price}
                                    </span>
                                    <span className="text-text/50 text-sm font-medium">
                                        {copy.main.setup.priceSuffix}
                                    </span>
                                </p>
                            </div>
                            <p className="text-text/75 mt-2 text-sm leading-relaxed">
                                {copy.main.setup.desc}
                            </p>
                            <p className="text-text/55 mt-2 text-xs font-medium italic">
                                {copy.main.setup.note}
                            </p>
                        </div>

                        {/* Connector */}
                        <div className="my-5 flex items-center gap-3">
                            <span className="h-px flex-1 bg-gray-200" />
                            <span className="text-text/40 text-xs font-semibold tracking-wide uppercase">
                                {copy.main.thenLabel}
                            </span>
                            <span className="h-px flex-1 bg-gray-200" />
                        </div>

                        {/* Step 2 — From Week 2, ongoing monthly management */}
                        <div>
                            <p className="text-primary-red text-xs font-semibold tracking-wide uppercase">
                                {copy.main.monthly.step}
                            </p>
                            <h4 className="font-heading text-primary-navy mt-2 text-lg font-bold">
                                {copy.main.monthly.title}
                            </h4>

                            <p className="text-text mt-4 text-sm font-semibold">
                                {copy.main.monthly.priceLabel}
                            </p>
                            <p className="mt-1 flex items-baseline gap-2">
                                <span className="text-primary-navy text-5xl font-bold tracking-tight">
                                    {copy.main.monthly.price}
                                </span>
                                <span className="text-text/50 text-lg font-medium">
                                    {copy.main.monthly.priceSuffix}
                                </span>
                            </p>
                            <p className="text-text/70 mt-2 text-sm">
                                {copy.main.monthly.minNote}
                            </p>

                            <ul className="mt-5 space-y-3">
                                {copy.main.monthly.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="text-text/80 flex gap-3 text-[15px] leading-relaxed"
                                    >
                                        <CheckIcon className="text-primary-red mt-0.5 h-5 w-5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <a
                            href="#contact"
                            className="bg-primary-red hover:bg-primary-redDark mt-8 flex w-full items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold text-white transition-colors"
                        >
                            {copy.main.cta}
                        </a>
                    </article>
                </div>
            </div>
        </section>
    )
}
