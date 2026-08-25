"use client"

import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"

export default function CaseStudiesCta() {
    const { language, translations } = useLanguage()
    const copy = translations[language].caseStudies.cta

    return (
        <section className="bg-linear-to-b from-primary-navy via-[#141d2b] to-background-dark text-white">
            <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-24">
                <h2 className="font-heading text-3xl leading-[1.05] font-bold uppercase sm:text-4xl lg:text-6xl">
                    <span className="block">{copy.title.part1}</span>
                    <span className="text-primary-red block">
                        {copy.title.highlight1}
                    </span>
                </h2>

                <Link
                    href="/contact"
                    className="bg-primary-red hover:bg-[#a12022] shadow-primary-red/20 inline-flex shrink-0 items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold tracking-[0.1em] text-white uppercase shadow-lg transition-colors"
                >
                    {copy.button}
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                        aria-hidden="true"
                    >
                        <path d="M7 17L17 7" />
                        <path d="M8 7h9v9" />
                    </svg>
                </Link>
            </div>
        </section>
    )
}
