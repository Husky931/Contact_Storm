import Image from "next/image"

const approachSteps = [
    {
        number: "01",
        title: "Factory intake",
        description: "MOQ, capacity, certifications, anexdport readiness.",
        icon: "/icons/1.png"
    },
    {
        number: "02",
        title: "Buyer targeting",
        description:
            "Amazon PPC, paid social, SEO and outreach to qualified buyers.",
        icon: "/icons/2.png"
    },
    {
        number: "03",
        title: "Coversion system",
        description:
            "Modern website redesign and bilingual assets that convert.",
        icon: "/icons/3.png"
    }
]

export default function Section4() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header */}
                <div className="text-center">
                    <p className="text-primary-red text-xs font-semibold tracking-[0.4em] uppercase">
                        HOW IT WORKS
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        We help manufacturers win overseas buyers with a{" "}
                        <span className="text-primary-red">
                            focused growth system
                        </span>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        Every step is built around factory realities and Western
                        buyer expectations, from ad creative to conversion-ready
                        websites.
                    </p>
                </div>

                <div className="relative mt-16">
                    {/* Desktop */}
                    <div className="hidden md:block">
                        <div className="flex items-start justify-between gap-4 lg:gap-8">
                            {approachSteps.map((step, index) => (
                                <div
                                    key={step.number}
                                    className="relative flex-1"
                                >
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
                                    {index < approachSteps.length - 1 && (
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
                        {approachSteps.map((step) => (
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
