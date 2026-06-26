"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function Hero() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-background-dark-lighter text-text-dark">
            <Image
                src="/images/industry-1.jpg"
                alt={copy.hero.imageAlt}
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-background-dark-deep/90 via-background-dark-lighter/75 to-background-dark-lighter/30" />
            <div className="relative mx-auto max-w-6xl px-6 py-20 lg:py-28">
                <div className="grid gap-12 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
                    <div>
                        <p className="text-sm tracking-[0.5em] text-text-dark/70 uppercase">
                            {copy.hero.tag}
                        </p>
                        <h1 className="font-heading mt-5 text-4xl leading-tight font-semibold text-text-dark md:text-5xl">
                            {copy.hero.title}
                        </h1>
                    </div>

                    <div className="flex flex-col justify-center gap-2 sm:gap-3">
                        {copy.hero.services.map((service) => (
                            <p
                                key={service}
                                className="font-heading text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl"
                            >
                                {service}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
