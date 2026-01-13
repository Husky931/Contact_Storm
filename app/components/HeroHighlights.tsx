const heroHighlights = [
    {
        title: "Product Strategy",
        detail: "Roadmaps that ship",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M12 2 2 7l10 5 10-5-10-5Z" />
                <path d="M2 17l10 5 10-5" />
                <path d="M2 12l10 5 10-5" />
            </svg>
        ),
    },
    {
        title: "Design Systems",
        detail: "Consistent UI kits",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M4 4h16v16H4z" />
                <path d="M4 9h16" />
                <path d="M9 4v16" />
            </svg>
        ),
    },
    {
        title: "App Development",
        detail: "Web & mobile builds",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 10h18" />
                <path d="M7 15h4" />
            </svg>
        ),
    },
    {
        title: "Platform Engineering",
        detail: "Cloud infrastructure",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M3 15a4 4 0 0 1 4-4 5 5 0 0 1 9.5-1.5A3.5 3.5 0 0 1 18 16H6a3 3 0 0 1-3-3Z" />
            </svg>
        ),
    },
    {
        title: "Growth Analytics",
        detail: "Data-driven moves",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M4 19h16" />
                <path d="M7 16l4-6 3 4 4-6" />
            </svg>
        ),
    },
    {
        title: "Digital Strategy",
        detail: "Market positioning",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
            >
                <path d="M12 2v20" />
                <path d="M5 9l7-7 7 7" />
            </svg>
        ),
    },
]

export default function HeroHighlights() {
    return (
        <section className="bg-(--brand-navy) text-white">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-8 text-sm sm:grid-cols-3 lg:grid-cols-6">
                {heroHighlights.map((item) => (
                    <div key={item.title} className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-(--brand-red)">
                            {item.icon}
                        </div>
                        <div>
                            <p className="font-semibold text-white">{item.title}</p>
                            <p className="text-xs text-white/60">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}