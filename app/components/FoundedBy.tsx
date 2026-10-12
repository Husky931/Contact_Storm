"use client"

import Image from "next/image"
import { useLanguage } from "@/components/LanguageProvider"

export default function FoundedBy() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        {copy.founders.kicker}
                    </p>
                    <h2 className="font-heading mt-4 text-3xl font-bold text-slate-900">
                        {typeof copy.founders.title === "object" ? (
                            <>
                                {copy.founders.title.part1}
                                <span className="text-primary-red">{copy.founders.title.highlight1}</span>
                            </>
                        ) : (
                            copy.founders.title
                        )}
                    </h2>
                </div>
                <div className="mt-10 grid gap-8 md:grid-cols-3 lg:gap-12">
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6 h-[300px] w-full max-w-[250px] overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/founded/alex.webp"
                                alt="Alex"
                                width={250}
                                height={300}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-slate-900">
                            Alex
                        </h3>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                            {copy.founders.based}{" "}
                            <span className="text-primary-red">
                                {language === "zh"
                                    ? "德国慕尼黑"
                                    : "Munich, Germany"}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6 h-[300px] w-full max-w-[250px] overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/founded/gligor.webp"
                                alt="Gligor"
                                width={250}
                                height={300}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-slate-900">
                            Gligor
                        </h3>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                            {copy.founders.based}{" "}
                            <span className="text-primary-red">
                                {language === "zh"
                                    ? "中国上海"
                                    : "Shanghai, China"}
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6 h-[300px] w-full max-w-[250px] overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/founded/tomislav.jpg"
                                alt="Tomislav"
                                width={250}
                                height={300}
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <h3 className="font-heading text-xl font-semibold text-slate-900">
                            Tomislav
                        </h3>
                        <p className="mt-2 text-sm font-medium text-slate-900">
                            {copy.founders.based}{" "}
                            <span className="text-primary-red">
                                {language === "zh"
                                    ? "德国慕尼黑"
                                    : "Munich, Germany"}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
