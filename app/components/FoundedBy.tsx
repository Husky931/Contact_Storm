import Image from "next/image"

export default function FoundedBy() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        Meet the Founders
                    </p>
                    <h2 className="font-heading mt-4 text-3xl font-bold text-slate-900">
                        Team <span className="text-(--brand-red)">Leaders</span>
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
                            Based:{" "}
                            <span className="text-(--brand-red)">
                                Thessaloniki, Greece
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
                            Based:{" "}
                            <span className="text-(--brand-red)">
                                Shanghai, China
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="relative mb-6 h-[300px] w-full max-w-[250px] overflow-hidden rounded-lg shadow-lg">
                            <Image
                                src="/founded/tomislav.jpeg"
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
                            Based:{" "}
                            <span className="text-(--brand-red)">
                                Munich, Germany
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
