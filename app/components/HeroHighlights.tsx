const heroHighlights = [
    {
        title: "AI Automation",
        titleWithBreaks: <>AI Automation</>,
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <circle cx="8" cy="6" r="2.5" />
                <path d="M2 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <circle cx="17" cy="6" r="2" />
                <path d="M15 10h2a2 2 0 0 1 2 2v2" />
                <circle cx="20" cy="17" r="1.5" />
                <path d="M19 15.5h2" />
                <path d="M20 14.5v2" />
            </svg>
        )
    },
    {
        title: "SEO Growth",
        titleWithBreaks: <>SEO Growth</>,
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <circle cx="8" cy="6" r="2.5" />
                <path d="M2 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <circle cx="17" cy="6" r="2" />
                <path d="M15 10h2a2 2 0 0 1 2 2v2" />
                <rect x="14" y="16" width="6" height="4" rx="0.5" />
                <path d="M15 17h4" />
                <path d="M15 18.5h4" />
            </svg>
        )
    },
    {
        title: "Paid Ads",
        titleWithBreaks: <>Paid Ads</>,
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <circle cx="8" cy="6" r="2.5" />
                <path d="M2 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <circle cx="18" cy="7" r="2" />
                <circle cx="18" cy="16" r="2.5" />
                <path d="M16.5 16l1.5 1.5 3-3" />
                <rect x="13" y="4" width="4" height="3" rx="0.5" />
                <path d="M14 5h2" />
            </svg>
        )
    },
    {
        title: "App development",
        titleWithBreaks: <>App development</>,
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <circle cx="8" cy="6" r="2.5" />
                <path d="M2 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <rect x="13" y="4" width="6" height="8" rx="1" />
                <path d="M14.5 6h3" />
                <path d="M14.5 8h3" />
                <circle cx="16.5" cy="10" r="1" />
            </svg>
        )
    },
    {
        title: "Consulting",
        titleWithBreaks: <>Consulting</>,
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <circle cx="8" cy="6" r="2.5" />
                <path d="M2 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <circle cx="17" cy="6" r="2" />
                <path d="M15 10h2a2 2 0 0 1 2 2v2" />
                <path d="M15 17h4" />
                <path d="M15 19h4" />
            </svg>
        )
    },
    {
        title: "Custom Solutions",
        titleWithBreaks: <>Custom Solutions</>,
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <circle cx="8" cy="6" r="2.5" />
                <path d="M2 20v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <rect x="13" y="4" width="6" height="8" rx="1" />
                <path d="M14.5 6h3" />
                <path d="M14.5 8h2.5" />
                <path d="M14.5 10h3" />
                <path d="M15 14l2 2 4-4" />
                <circle cx="19" cy="16" r="0.5" />
            </svg>
        )
    }
]

export default function HeroHighlights() {
    return (
        <section className="bg-[#0d121e] text-white">
            <div className="mx-auto grid w-full grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
                {heroHighlights.map((item, index) => (
                    <div
                        key={item.title}
                        className={`flex items-center justify-start gap-4 px-4 py-10 sm:px-6 ${
                            index > 0 ? "border-l border-[#444444]" : ""
                        }`}
                    >
                        <div className="shrink-0 text-[#E85B4E]">
                            {item.icon}
                        </div>
                        <div>
                            <h2 className="text-sm leading-tight font-bold text-white sm:text-base">
                                {item.titleWithBreaks}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
