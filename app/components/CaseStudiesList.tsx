"use client"

import { useLanguage } from "@/components/LanguageProvider"

/** Small rising trend mark that sits ahead of each metric. */
function TrendMark() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-1.5 h-4 w-4 shrink-0 sm:mt-2"
            aria-hidden="true"
        >
            <path d="M3 17l5-5 4 4 6-7" />
            <path d="M14 9h5v5" />
        </svg>
    )
}

export default function CaseStudiesList() {
    const { language, translations } = useLanguage()
    const copy = translations[language].caseStudies

    return (
        <section className="bg-background py-14 lg:py-20">
            <div className="mx-auto max-w-6xl space-y-6 px-6">
                {copy.studies.map((study) => (
                    <article
                        key={study.title}
                        className="grid gap-8 rounded-2xl border border-gray-200/80 bg-white p-8 shadow-sm sm:p-10 md:grid-cols-[0.8fr_1.2fr] md:gap-12 lg:p-12"
                    >
                        {/* Left: vertical + headline */}
                        <div>
                            <p className="text-primary-red text-xs font-semibold tracking-[0.25em] uppercase">
                                {study.vertical}
                            </p>
                            <h2 className="font-heading text-primary-navy mt-4 text-2xl leading-[1.15] font-bold uppercase sm:text-3xl">
                                {study.title}
                            </h2>
                        </div>

                        {/* Right: challenge, approach, metrics, quote */}
                        <div>
                            <p className="text-text/45 text-xs font-semibold tracking-[0.25em] uppercase">
                                {copy.labels.challenge}
                            </p>
                            <p className="text-text/75 mt-3 text-base leading-relaxed">
                                {study.challenge}
                            </p>

                            <p className="text-text/45 mt-7 text-xs font-semibold tracking-[0.25em] uppercase">
                                {copy.labels.approach}
                            </p>
                            <p className="text-text/75 mt-3 text-base leading-relaxed">
                                {study.approach}
                            </p>

                            {/* Metrics */}
                            <dl className="mt-8 grid gap-6 border-y border-gray-200/80 py-7 sm:grid-cols-3 sm:gap-8">
                                {study.metrics.map((metric) => (
                                    <div key={metric.label}>
                                        <dt className="text-primary-red font-heading flex items-start gap-1 text-3xl font-bold sm:text-4xl">
                                            <TrendMark />
                                            <span>{metric.value}</span>
                                        </dt>
                                        <dd className="text-text/55 mt-2 text-xs leading-snug font-semibold tracking-[0.12em] uppercase">
                                            {metric.label}
                                        </dd>
                                    </div>
                                ))}
                            </dl>

                            {/* Quote */}
                            <blockquote className="mt-7">
                                {/* Synthesized obliques read poorly on CJK, so italics stay English-only. */}
                                <p
                                    className={`text-primary-navy text-lg leading-relaxed font-semibold ${
                                        language === "en" ? "italic" : ""
                                    }`}
                                >
                                    &ldquo;{study.quote}&rdquo;
                                </p>
                                <footer className="text-text/50 mt-4 text-xs font-semibold tracking-[0.2em] uppercase">
                                    {study.attribution}
                                </footer>
                            </blockquote>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    )
}
