const heroHighlights = [
    {
        title: "AI Automation",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* chip */}
                <rect x="7" y="7" width="10" height="10" rx="2" />
                <path d="M10 10h4M10 12h4M10 14h4" />
                {/* pins */}
                <path d="M9 3v4M12 3v4M15 3v4" />
                <path d="M9 17v4M12 17v4M15 17v4" />
                <path d="M3 9h4M3 12h4M3 15h4" />
                <path d="M17 9h4M17 12h4M17 15h4" />
                {/* automation arrow */}
                <path d="M14.5 18.5c2 0 3.5-1.5 3.5-3.5" />
                <path d="M18 15l-1.5 1.5M18 15l-1.5-1.5" />
            </svg>
        )
    },
    {
        title: "SEO Growth",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* magnifier */}
                <circle cx="10.5" cy="10.5" r="4.5" />
                <path d="M14 14l4.5 4.5" />
                {/* upward chart */}
                <path d="M4 18v2h16" />
                <path d="M6 16l4-4 3 3 5-6" />
                <path d="M18 9v2h2" />
            </svg>
        )
    },
    {
        title: "Paid Ads",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* megaphone */}
                <path d="M4 12v3a2 2 0 0 0 2 2h1l2 4h2l-2-4h2l8-4V7l-8-4H6a2 2 0 0 0-2 2v3" />
                <path d="M4 9h3M4 12h3M4 15h3" />
                {/* sound lines */}
                <path d="M19 9.5c1 .8 1.5 1.6 1.5 2.5S20 13.7 19 14.5" />
            </svg>
        )
    },
    {
        title: "App development",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* phone */}
                <rect x="7" y="3" width="10" height="18" rx="2" />
                <path d="M10 6h4" />
                <circle cx="12" cy="18" r="0.75" />
                {/* code */}
                <path d="M9.5 12l-2 2 2 2" />
                <path d="M14.5 12l2 2-2 2" />
                <path d="M12.5 11.5l-1 5" />
            </svg>
        )
    },
    {
        title: "Consulting",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* chat bubbles */}
                <path d="M4 6.5A3.5 3.5 0 0 1 7.5 3h6A3.5 3.5 0 0 1 17 6.5v3A3.5 3.5 0 0 1 13.5 13H10l-3 2v-2.2A3.5 3.5 0 0 1 4 9.5z" />
                <path d="M9 16h6a3 3 0 0 0 3-3v-1" />
                {/* insights */}
                <path d="M8.5 8h4" />
                <path d="M8.5 10h3" />
            </svg>
        )
    },
    {
        title: "Custom Solutions",
        icon: (
            <svg
                viewBox="0 0 24 24"
                className="h-12 w-12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                {/* puzzle pieces */}
                <path d="M10 4a2 2 0 0 0-2 2v1H7a2 2 0 0 0 0 4h1v1a2 2 0 0 0 4 0v-1h1a2 2 0 0 0 0-4h-1V6a2 2 0 0 0-2-2z" />
                <path d="M14 12h2a2 2 0 0 1 2 2v1h1a2 2 0 0 1 0 4h-1v1a2 2 0 0 1-4 0v-1h-1a2 2 0 0 1 0-4h1v-1a2 2 0 0 1 2-2z" />
                {/* connector */}
                <path d="M12 12l2 2" />
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
                        className={`flex items-center gap-5 px-4 py-10 sm:px-6 ${
                            index > 0 ? "border-l border-[#444444]" : ""
                        }`}
                    >
                        <div className="flex shrink-0 items-center justify-center text-[#E85B4E]">
                            {item.icon}
                        </div>
                        <div className="flex items-center">
                            <h2 className="text-sm leading-tight font-bold text-white sm:text-base">
                                {item.title}
                            </h2>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
