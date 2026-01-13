"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"

export default function Services() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section id="services" className="bg-background py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        {copy.services.kicker}
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        {copy.services.title}
                    </h2>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {copy.services.cards.map((service) => (
                        <div
                            key={service.title}
                            className="overflow-hidden rounded bg-white shadow"
                        >
                            <Image
                                src={service.image}
                                alt={service.title}
                                width={640}
                                height={420}
                                className="h-44 w-full object-cover"
                            />
                            <div className="p-6">
                                <h3 className="font-heading text-xl text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="mt-3 text-sm text-slate-600">
                                    {service.text}
                                </p>
                                <Link
                                    href="/insights"
                                    className="text-primary-red mt-5 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase"
                                >
                                    {copy.services.readMore}
                                    <span className="text-base">+</span>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-10 flex justify-center">
                    <Link
                        href="#contact"
                        className="bg-primary-red hover:bg-primary-red/90 rounded px-8 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase transition-colors"
                    >
                        {copy.services.cta}
                    </Link>
                </div>
            </div>
        </section>
    )
}
