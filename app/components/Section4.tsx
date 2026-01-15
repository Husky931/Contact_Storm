"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function Section4() {
    const { language, translations } = useLanguage()
    const copy = translations[language]
    const steps = copy.section4.steps

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        {copy.section4.kicker}
                    </p>
					<h2 className="font-heading mt-4 text-3xl text-slate-900">
						{typeof copy.section4.title === "object" ? (
							<>
								{copy.section4.title.part1}
								{copy.section4.title.highlight1 && <span className="text-primary-red">{copy.section4.title.highlight1}</span>}
								{copy.section4.title.part2}
								{copy.section4.title.highlight2 && <span className="text-primary-red">{copy.section4.title.highlight2}</span>}
								{copy.section4.title.part3}
                                {copy.section4.title.highlight3 && <span className="text-primary-red">{copy.section4.title.highlight3}</span>}
							</>
						) : (
							copy.section4.title
						)}
					</h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        {copy.section4.copy}
                    </p>
                </div>

                <div className="relative mt-16">
                    {/* Desktop */}
                    <div className="hidden md:block">
                        <div className="flex items-start justify-between gap-4 lg:gap-8">
                            {steps.map((step, index) => (
                                <div key={step.number} className="relative flex-1">
                                    <div className="flex flex-col items-center">
                                        <div className="relative inline-flex h-24 items-center justify-center rounded-xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                                            <Image
                                                src={step.icon}
                                                alt={step.title}
                                                width={48}
                                                height={48}
                                                className="object-contain"
                                            />

                                            {/* Step badge */}
                                            <div className="absolute -right-3 -bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white shadow-md">
                                                {step.number}
                                            </div>
                                        </div>

                                        <div className="mt-8 text-center">
                                            <h3 className="font-heading text-xl font-bold text-slate-900">
                                                {step.title}
                                            </h3>
                                            <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Desktop stepper between cards */}
                                    {index < steps.length - 1 && (
                                        <div className="pointer-events-none absolute top-10 left-full hidden w-16 -translate-x-1/2 items-center justify-center md:flex lg:w-20">
                                            <div className="flex items-center gap-3">
                                                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                                                <span className="h-2 w-2 rounded-full bg-gray-300" />
                                                <span className="h-3 w-3 rounded-full bg-gray-400" />
                                                <span className="h-2 w-2 rounded-full bg-gray-300" />
                                                <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Mobile */}
                    <div className="flex flex-col gap-10 md:hidden">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="flex flex-col items-center"
                            >
                                {/* smaller mobile box */}
                                <div className="relative flex h-32 items-center justify-center rounded-xl bg-white p-5 px-16 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                                    <Image
                                        src={step.icon}
                                        alt={step.title}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />

                                    <div className="absolute -right-3 -bottom-3 flex h-8 w-8 items-center justify-center rounded-full bg-black text-[11px] font-bold text-white shadow-md">
                                        {step.number}
                                    </div>
                                </div>

                                <div className="mt-7 text-center">
                                    <h3 className="font-heading text-xl font-bold text-slate-900">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        {step.description}
                                    </p>
                                </div>

                                {/* mobile connector removed */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
