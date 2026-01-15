"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/components/LanguageProvider"
import WeChatQRPopup from "./WeChatQRPopup"

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
                    <WeChatQRPopup
                        message={copy.wechat.heroMessage}
                        trigger={
                            <a
                                href="#contact"
                                className="bg-primary-red hover:bg-primary-red/90 inline-flex items-center gap-3 rounded px-8 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase transition-colors"
                            >
                                {copy.services.cta}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5 fill-white"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.597-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-2.455 0-4.515 1.893-4.84 4.396-.002.012-.002.024-.002.036 0 .012 0 .024.002.036.325 2.503 2.385 4.396 4.84 4.396a4.888 4.888 0 0 0 2.613-.74.59.59 0 0 1 .636-.022l1.658.969a.295.295 0 0 0 .29-.001.295.295 0 0 0 .14-.245.295.295 0 0 0-.048-.159l-.39-1.478a.59.59 0 0 1 .226-.665c1.704-1.28 2.78-3.18 2.78-5.31 0-2.503-2.01-4.533-4.487-4.533zm-2.613 4.533a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm2.613 0a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178z" />
                                </svg>
                            </a>
                        }
                    />
                </div>
            </div>
        </section>
    )
}
