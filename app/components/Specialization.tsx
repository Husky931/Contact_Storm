"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function Specialization() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section className="bg-slate-950 py-16 text-white">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                <div>
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        {copy.specialization.kicker}
                    </p>
                    <h2 className="font-heading mt-4 text-3xl">
                        {copy.specialization.title}
                    </h2>
                    <p className="mt-3 text-sm text-white/70">
                        {copy.specialization.subtitle}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-white/70">
                        {copy.specialization.copy}
                    </p>
                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        {copy.specialization.pillars.map((pillar) => (
                            <div
                                key={pillar.title}
                                className="rounded-lg border border-white/10 bg-white/5 p-5"
                            >
                                <h3 className="font-heading text-base font-semibold">
                                    {pillar.title}
                                </h3>
                                <p className="mt-2 text-sm text-white/70">
                                    {pillar.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative">
                    <Image
                        src="/images/service-5.jpg"
                        alt={copy.specialization.imageAlt}
                        width={520}
                        height={640}
                        className="h-full w-full rounded-xl object-cover shadow-xl"
                    />
                </div>
            </div>
        </section>
    )
}
