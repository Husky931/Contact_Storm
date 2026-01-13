const heroHighlights = [
    {
        title: "Amazon Ads",
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
                {/* shopping cart / box */}
                <rect x="3" y="7" width="18" height="14" rx="2" />
                <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
                <path d="M9 12h6" />
                <path d="M9 15h4" />
            </svg>
        )
    },
    {
        title: "Social Ads and Growth",
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
        title: "SEO For export",
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
        title: "Shopify",
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
                {/* network/connections */}
                <circle cx="12" cy="12" r="3" />
                <circle cx="6" cy="6" r="2" />
                <circle cx="18" cy="6" r="2" />
                <circle cx="6" cy="18" r="2" />
                <circle cx="18" cy="18" r="2" />
                <path d="M9 10l3-2M15 10l-3-2M9 14l3 2M15 14l-3 2" />
            </svg>
        )
    },
    {
        title: "Website Redesign",
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
                {/* monitor/screen */}
                <rect x="3" y="4" width="18" height="12" rx="2" />
                <path d="M7 8h10M7 12h6" />
                <path d="M9 20h6" />
            </svg>
        )
    },
    {
        title: "Leads",
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
                {/* globe/world */}
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
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
