export default function Locations() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        Our Locations
                    </p>
                    <h2 className="font-heading mt-4 text-3xl font-bold text-slate-900">
                        Meet us in{" "}
                        <span className="text-primary-red">
                            Thessaloniki, &nbsp;
                        </span>
                        Shanghai, and &nbsp;
                        <span className="text-primary-red">Munich</span>
                    </h2>
                </div>
                <div className="mt-10 grid gap-8 md:grid-cols-3 lg:gap-12">
                    <div className="flex flex-col text-center">
                        <h3 className="font-heading mb-4 text-xl font-semibold text-slate-900">
                            Meet us in Thessaloniki
                        </h3>
                        <p className="mb-2 text-sm leading-relaxed text-slate-700">
                            Tsimiski Street 45, 2nd Floor
                            <br />
                            City Center, Thessaloniki 54623
                            <br />
                            Central Macedonia, Greece
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-900">
                            Tel:{" "}
                            <a
                                href="tel:+302310123456"
                                className="cursor-pointer text-primary-red hover:underline"
                            >
                                +30 2310 123456
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col text-center">
                        <h3 className="font-heading mb-4 text-xl font-semibold text-slate-900">
                            Meet us in Shanghai
                        </h3>
                        <p className="mb-2 text-sm leading-relaxed text-slate-700">
                            WeWork China (West Nanjing Road Community)
                            <br />
                            West Nanjing Road, Jing&apos;an District
                            <br />
                            Shanghai, China 200040
                            <br />
                            <span className="text-slate-600">
                                WeWork中国（南京西路社区店）
                            </span>
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-900">
                            Tel:{" "}
                            <a
                                href="tel:+8613162908096"
                                className="cursor-pointer text-primary-red hover:underline"
                            >
                                +86 13162908096
                            </a>
                        </p>
                    </div>
                    <div className="flex flex-col text-center">
                        <h3 className="font-heading mb-4 text-xl font-semibold text-slate-900">
                            Meet us in Munich
                        </h3>
                        <p className="mb-2 text-sm leading-relaxed text-slate-700">
                            Maximilianstraße 35, 3rd Floor
                            <br />
                            Altstadt-Lehel, Munich 80539
                            <br />
                            Bavaria, Germany
                        </p>
                        <p className="mt-4 text-sm font-medium text-slate-900">
                            Tel:{" "}
                            <a
                                href="tel:+498912345678"
                                className="cursor-pointer text-primary-red hover:underline"
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
