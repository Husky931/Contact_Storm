"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

/** Client marks, keyed by the name shared across both languages. */
const clientLogos: Record<string, string> = {
    "Top Seedz": "/images/clients/top-seedz.svg",
    "Waking Up": "/images/clients/waking-up.svg",
    "NP Digital": "/images/clients/np-digital.svg"
}

export default function CaseStudiesProof() {
    const { language, translations } = useLanguage()
    const copy = translations[language].caseStudies
    const named = copy.named

    return (
        <>
            {/* Named results */}
            <section className="bg-background pb-16 lg:pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        {named.kicker}
                    </p>
                    <h2 className="font-heading text-primary-navy mt-6 text-3xl leading-[1.1] font-bold uppercase sm:text-4xl lg:text-5xl">
                        <span className="block">{named.title.part1}</span>
                        <span className="text-primary-red block">
                            {named.title.highlight1}
                        </span>
                    </h2>
                    <p className="text-text/75 mt-8 max-w-2xl text-base leading-relaxed">
                        {named.bodyBefore}
                        <a
                            href={named.linkHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-red underline underline-offset-2 hover:no-underline"
                        >
                            {named.linkLabel}
                        </a>
                        {named.bodyAfter}
                    </p>

                    {/* Named client cards */}
                    <div className="mt-10 grid gap-6 md:grid-cols-3">
                        {named.clients.map((client) => (
                            <article
                                key={client.name}
                                className="rounded-2xl border border-gray-200/80 bg-white p-7 shadow-sm"
                            >
                                <h3 className="font-heading text-primary-navy text-lg font-bold">
                                    {client.name}
                                </h3>
                                {clientLogos[client.name] && (
                                    <div className="bg-background mt-4 flex h-16 items-center justify-center rounded-xl border border-gray-200/80 px-4">
                                        <Image
                                            src={clientLogos[client.name]}
                                            alt={client.name}
                                            width={176}
                                            height={48}
                                            className="h-8 w-auto object-contain"
                                        />
                                    </div>
                                )}
                                <ul className="mt-5 space-y-3">
                                    {client.results.map((result) => (
                                        <li
                                            key={result}
                                            className="text-primary-red font-heading text-xl font-bold"
                                        >
                                            {result}
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Methodology / fine print */}
            <section className="bg-white py-12 lg:py-16">
                <div className="mx-auto max-w-6xl space-y-4 px-6">
                    {copy.disclaimer.map((paragraph) => (
                        <p
                            key={paragraph}
                            className="text-text/45 max-w-4xl text-xs leading-relaxed"
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            </section>
        </>
    )
}
