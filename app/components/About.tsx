"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function About() {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    return (
        <section className="bg-white py-16">
            <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                <div className="relative">
                    <div className="grid gap-4 md:grid-cols-2">
                        <Image
                            src="/images/about/1.PNG"
                            alt={copy.about.imageAlts.strategist}
                            width={520}
                            height={520}
                            className="h-64 w-full rounded object-cover shadow"
                        />
                        <Image
                            src="/images/about/2.png"
                            alt={copy.about.imageAlts.meeting}
                            width={520}
                            height={520}
                            className="h-64 w-full rounded object-cover shadow"
                        />
                    </div>
                    {/* <Link href="/insights"></Link> */}
                    <Image
                        src="/images/about/3.png"
                        alt={copy.about.imageAlts.collaboration}
                        width={840}
                        height={560}
                        className="mt-4 h-48 w-full rounded object-cover shadow"
                    />
                    <div className="bg-primary-red absolute -bottom-6 left-6 rounded px-6 py-5 text-white shadow-lg">
                        <p className="font-heading text-3xl font-semibold">
                            30+
                        </p>
                        <p className="text-xs tracking-[0.3em] uppercase">
                            {copy.about.statsLabel}
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        {copy.about.kicker}
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        {copy.about.title.lead}{" "}
                        <span className="text-primary-red">
                            {copy.about.title.highlightPrimary}
                        </span>{" "}
                        {copy.about.title.middle}{" "}
                        <span className="text-primary-red">
                            {copy.about.title.highlightSecondary}
                        </span>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {copy.about.copy}
                    </p>
                    <div className="mt-6 space-y-3 text-sm text-slate-700">
                        {copy.about.bullets.map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <span className="bg-primary-red flex h-8 w-8 items-center justify-center rounded-full text-white">
                                    <svg
                                        viewBox="0 0 24 24"
                                        className="h-4 w-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="3"
                                    >
                                        <path d="m5 13 4 4L19 7" />
                                    </svg>
                                </span>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
