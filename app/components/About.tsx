"use client"

import Image from "next/image"
import WeChatQRPopup from "./WeChatQRPopup"
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
                            src="/images/mooncake.jpg"
                            alt={copy.about.imageAlts.strategist}
                            width={520}
                            height={520}
                            className="h-64 w-full rounded object-cover shadow"
                        />
                        <Image
                            src="/images/chinese_businessmen.webp"
                            alt={copy.about.imageAlts.meeting}
                            width={520}
                            height={520}
                            className="h-64 w-full rounded object-cover shadow"
                        />
                    </div>
                    {/* <Link href="/insights"></Link> */}
                    <Image
                        src="/images/factory.webp"
                        alt={copy.about.imageAlts.collaboration}
                        width={840}
                        height={560}
                        className="mt-4 h-48 w-full rounded object-cover shadow"
                    />
                    <div className="bg-primary-red absolute -bottom-6 left-6 rounded px-6 py-5 text-white shadow-lg">
                        <p className="font-heading text-3xl font-semibold">
                            150+
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
                    <WeChatQRPopup
                        message={copy.wechat.heroMessage}
                        trigger={
                            <a
                                href="#"
                                className="bg-primary-navy hover:bg-primary-navy/90 mt-8 inline-flex items-center gap-3 rounded px-6 py-6 text-base font-semibold tracking-[0.3em] text-white uppercase transition-colors"
                            >
                                {copy.about.cta}
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-6 w-6 fill-white"
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
