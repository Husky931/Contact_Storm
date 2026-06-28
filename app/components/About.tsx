"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function About() {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    return (
        <section className="bg-white py-16">
            <div className="mx-auto grid max-w-6xl gap-20 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-24">
                <div className="relative">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Image
                            src="/images/about/1.PNG"
                            alt={copy.about.imageAlts.strategist}
                            width={520}
                            height={520}
                            className="h-64 w-full rounded-2xl object-cover shadow"
                        />
                        <Image
                            src="/images/about/2.png"
                            alt={copy.about.imageAlts.meeting}
                            width={520}
                            height={520}
                            className="h-64 w-full rounded-2xl object-cover shadow"
                        />
                    </div>
                    {/* <Link href="/insights"></Link> */}
                    <Image
                        src="/images/about/3.png"
                        alt={copy.about.imageAlts.collaboration}
                        width={840}
                        height={560}
                        className="mt-4 h-48 w-full rounded-2xl object-cover shadow"
                    />
                    <div className="bg-primary-red absolute -bottom-6 left-6 rounded-2xl px-6 py-5 text-white shadow-lg">
                        <p className="font-heading text-3xl font-semibold">
                            30+
                        </p>
                        <p className="text-xs tracking-[0.3em] uppercase">
                            {copy.about.statsLabel}
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className="font-heading max-w-md text-4xl leading-tight font-bold text-balance text-slate-900 lg:text-5xl">
                        {copy.about.title.lead}{" "}
                        <span className="text-primary-red">
                            {copy.about.title.highlightPrimary}
                        </span>{" "}
                        {copy.about.title.middle}{" "}
                        <span className="text-primary-red">
                            {copy.about.title.highlightSecondary}
                        </span>
                    </h2>
                </div>
            </div>
        </section>
    )
}
