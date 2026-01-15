"use client"

import { useLanguage } from "@/components/LanguageProvider"
import WeChatQRPopup from "./WeChatQRPopup"

export default function HowWeHelp() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section className="bg-slate-950 py-16 text-white">
            <div className="mx-auto max-w-6xl px-6">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <h2 className="font-heading text-3xl">
                        {copy.howWeHelp.title}
                    </h2>
                </div>

                {/* Desktop: Left/Right Layout | Mobile: Vertical Stack */}
                <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                    {/* Left Column: Services List */}
                    <div className="order-2 lg:order-1">
                        <h3 className="font-heading mb-6 text-2xl">
                            {copy.howWeHelp.servicesTitle}
                        </h3>
                        <ul className="space-y-4">
                            {copy.howWeHelp.services.map((service, index) => (
                                <li
                                    key={index}
                                    className="flex items-start gap-3"
                                >
                                    <svg
                                        className="text-primary-red mt-0.5 h-6 w-6 shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span className="text-sm text-white/90">
                                        {service}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column: About Us */}
                    <div className="order-1 lg:order-2">
                        <h3 className="font-heading mb-6 text-2xl">
                            {copy.howWeHelp.aboutTitle}
                        </h3>
                        <div className="space-y-4 text-sm leading-relaxed text-white/80">
                            <p>{copy.howWeHelp.aboutText1}</p>
                            <p>{copy.howWeHelp.aboutText2}</p>
                            <p className="font-semibold text-white">
                                {copy.howWeHelp.aboutText3}
                            </p>
                        </div>

                        {/* CTA Button */}
                        <div className="mt-8">
                            <WeChatQRPopup
                                message={copy.wechat.heroMessage}
                                trigger={
                                    <button className="bg-primary-red hover:bg-primary-red/90 inline-flex items-center gap-3 rounded px-8 py-3 text-xs font-semibold tracking-[0.3em] text-white uppercase transition-colors">
                                        {copy.howWeHelp.cta}
                                        <svg
                                            viewBox="0 0 24 24"
                                            className="h-5 w-5 fill-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            aria-hidden="true"
                                        >
                                            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.597-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-2.455 0-4.515 1.893-4.84 4.396-.002.012-.002.024-.002.036 0 .012 0 .024.002.036.325 2.503 2.385 4.396 4.84 4.396a4.888 4.888 0 0 0 2.613-.74.59.59 0 0 1 .636-.022l1.658.969a.295.295 0 0 0 .29-.001.295.295 0 0 0 .14-.245.295.295 0 0 0-.048-.159l-.39-1.478a.59.59 0 0 1 .226-.665c1.704-1.28 2.78-3.18 2.78-5.31 0-2.503-2.01-4.533-4.487-4.533zm-2.613 4.533a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178zm2.613 0a1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178z" />
                                        </svg>
                                    </button>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
