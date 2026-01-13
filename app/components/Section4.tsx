const approachSteps = [
    {
        number: "01",
        title: "Bringing Global Competence",
        description: "Our candidate pool is diverse with international talent",
        icon: (
            <svg
                viewBox="0 0 100 100"
                className="h-full w-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                {/* Seated figure with document and speech bubble */}
                <rect x="20" y="50" width="15" height="20" rx="2" />
                <circle cx="27.5" cy="45" r="5" />
                <rect x="25" y="60" width="5" height="8" />
                {/* Speech bubble */}
                <path d="M 40 40 Q 45 35 50 40" />
                <rect x="50" y="35" width="20" height="15" rx="2" />
                {/* Standing figure */}
                <rect x="75" y="45" width="15" height="25" rx="2" />
                <circle cx="82.5" cy="40" r="5" />
            </svg>
        )
    },
    {
        number: "02",
        title: "Emerging / Niche skills",
        description:
            "We are industry experts in sourcing talent in niche skills",
        icon: (
            <svg
                viewBox="0 0 100 100"
                className="h-full w-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                {/* Two figures shaking hands */}
                {/* Left figure */}
                <rect x="15" y="50" width="15" height="20" rx="2" />
                <circle cx="22.5" cy="45" r="5" />
                <rect x="20" y="60" width="5" height="8" />
                {/* Right figure */}
                <rect x="70" y="50" width="15" height="20" rx="2" />
                <circle cx="77.5" cy="45" r="5" />
                <rect x="75" y="60" width="5" height="8" />
                {/* Handshake */}
                <circle cx="50" cy="55" r="8" />
                <path d="M 42 55 L 50 55" />
                <path d="M 50 55 L 58 55" />
            </svg>
        )
    },
    {
        number: "03",
        title: "Quality & Commitment",
        description:
            "Assessment is pretty rigorous so after thorough screening the candidate profile is submitted to the client",
        icon: (
            <svg
                viewBox="0 0 100 100"
                className="h-full w-full"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                {/* Two figures at desk with document/screen */}
                {/* Left figure */}
                <rect x="20" y="50" width="15" height="20" rx="2" />
                <circle cx="27.5" cy="45" r="5" />
                <rect x="25" y="60" width="5" height="8" />
                {/* Right figure */}
                <rect x="65" y="50" width="15" height="20" rx="2" />
                <circle cx="72.5" cy="45" r="5" />
                <rect x="70" y="60" width="5" height="8" />
                {/* Document/screen in middle */}
                <rect x="42" y="45" width="16" height="20" rx="2" />
                <line x1="45" y1="50" x2="55" y2="50" />
                <line x1="45" y1="55" x2="55" y2="55" />
                <line x1="45" y1="60" x2="55" y2="60" />
            </svg>
        )
    }
]

export default function Section4() {
    return (
        <section className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-6">
                {/* Header Section */}
                <div className="text-center">
                    <p className="text-xs font-semibold tracking-[0.4em] text-(--brand-red) uppercase">
                        OUR APPROACH
                    </p>
                    <h2 className="font-heading mt-4 text-3xl text-slate-900">
                        We help businesses grow by using{" "}
                        <span className="text-(--brand-red)">
                            in house proven growth strategies
                        </span>
                    </h2>
                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                        Our services are a smart alternative when the need is
                        limited in time. We find the skills you need, for the
                        time period you want. Pixaventures has been offering
                        services in the following line of business to their
                        clients
                    </p>
                </div>

                {/* Feature Cards Section */}
                <div className="relative mt-16">
                    {/* Desktop: Horizontal layout with connectors */}
                    <div className="hidden items-start justify-between gap-4 md:flex lg:gap-8">
                        {approachSteps.map((step, index) => (
                            <div key={step.number} className="flex-1">
                                <div className="flex flex-col items-center">
                                    {/* Icon Container */}
                                    <div className="relative flex h-48 w-full items-center justify-center rounded-lg bg-gray-50 p-6 shadow-sm">
                                        <div className="text-primary-red h-32 w-32">
                                            {step.icon}
                                        </div>
                                        {/* Step Number Badge */}
                                        <div className="absolute -bottom-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Title and Description */}
                                    <div className="mt-8 text-center">
                                        <h3 className="font-heading text-xl font-bold text-slate-900">
                                            {step.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Connector (dotted line with circle) - only between cards */}
                                {index < approachSteps.length - 1 && (
                                    <div className="absolute top-24 left-[calc(33.333%+2rem)] hidden h-0.5 w-[calc(33.333%-4rem)] items-center justify-center md:flex lg:left-[calc(33.333%+4rem)] lg:w-[calc(33.333%-8rem)]">
                                        <div className="h-full w-full border-t-2 border-dotted border-gray-300"></div>
                                        <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile: Vertical stacked layout */}
                    <div className="flex flex-col gap-12 md:hidden">
                        {approachSteps.map((step, index) => (
                            <div
                                key={step.number}
                                className="flex flex-col items-center"
                            >
                                {/* Icon Container */}
                                <div className="relative flex h-48 w-full items-center justify-center rounded-lg bg-gray-50 p-6 shadow-sm">
                                    <div className="text-primary-red h-32 w-32">
                                        {step.icon}
                                    </div>
                                    {/* Step Number Badge */}
                                    <div className="absolute -bottom-4 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-black text-sm font-bold text-white">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Title and Description */}
                                <div className="mt-8 text-center">
                                    <h3 className="font-heading text-xl font-bold text-slate-900">
                                        {step.title}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Vertical connector - only between cards */}
                                {index < approachSteps.length - 1 && (
                                    <div className="relative mt-6 flex h-12 w-0.5 items-center justify-center">
                                        <div className="h-full w-full border-l-2 border-dotted border-gray-300"></div>
                                        <div className="absolute top-1/2 left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-300"></div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
