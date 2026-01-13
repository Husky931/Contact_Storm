"use client"

import { useLanguage } from "@/components/LanguageProvider"

export default function Locations() {
    const { language, translations } = useLanguage()
    const copy = translations[language]

    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        {copy.locations.kicker}
                    </p>
                    <h2 className="font-heading mt-4 text-3xl font-bold text-slate-900">
                        {copy.locations.title}
                    </h2>
                </div>
                <div className="mt-14 flex flex-col justify-evenly gap-10 lg:flex-row">
                    <div className="flex flex-col text-center">
                        <h3 className="font-heading mb-4 text-xl font-semibold text-slate-900">
                            {copy.locations.shanghaiTitle}
                        </h3>
                        <p className="mb-2 text-sm leading-relaxed text-slate-700">
                            {copy.locations.shanghaiAddress[0]}
                            <br />
                            {copy.locations.shanghaiAddress[1]}
                            <br />
                            {copy.locations.shanghaiAddress[2]}
                            <br />
                            <span className="text-slate-600">
                                {copy.locations.shanghaiAddress[3]}
                            </span>
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-900">
                            {copy.locations.tel}{" "}
                            <a
                                href="tel:+8613162908096"
                                className="text-primary-red cursor-pointer hover:underline"
                            >
                                +86 13162908096
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col text-center">
                        <h3 className="font-heading mb-4 text-xl font-semibold text-slate-900">
                            {copy.locations.munichTitle}
                        </h3>
                        <p className="mb-2 text-sm leading-relaxed text-slate-700">
                            {copy.locations.munichAddress[0]}
                            <br />
                            {copy.locations.munichAddress[1]}
                            <br />
                            {copy.locations.munichAddress[2]}
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-900">
                            {copy.locations.tel}{" "}
                            <a
                                href="tel:+498912345678"
                                className="text-primary-red cursor-pointer hover:underline"
                            >
                                +49 89 12345678
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
