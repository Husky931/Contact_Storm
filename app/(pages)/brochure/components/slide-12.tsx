import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const CUSTOM_AUTOMATION_EXAMPLES = [
    {
        num: 1,
        title: "AI tool to keep track of your sales people conversations with leads",
        body: "Channels like Alibaba, 1688 or others — track success rate and keep conversations in a dashboard.",
    },
    {
        num: 2,
        title: "Real-time Amazon BSR tracker",
        body: "Alerts when competitors’ product prices drop or product page gets updated.",
    },
    {
        num: 3,
        title: "Any type of automation software for repetitive tasks",
        body: "Freeing your team for high-value work.",
    },
]

export default function Slide12() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-16 py-14 text-[#1b2737]"
            style={{ pageBreakAfter: "always" }}
        >
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex gap-6 text-xs text-gray-500">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 1 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
            </div>

            <div className="mt-12 flex flex-1 items-stretch gap-24 py-8">
                {/* Left — intro text */}
                <div className="flex flex-1 flex-col justify-center">
                    <h2
                        className="brochure-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl"
                        style={{ color: BRAND_NAVY }}
                    >
                        <span style={{ color: BRAND_RED }}>Custom Automation</span>
                    </h2>
                    <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#1b2737] sm:text-xl">
                        We develop custom tools and automations for repetitive tasks to save workforce time and solve specific problems.
                    </p>
                </div>

                {/* Vertical divider */}
                <div className="w-px shrink-0 bg-gray-300" />

                {/* Right — numbered examples */}
                <div className="flex flex-[1.2] flex-col justify-center space-y-8">
                    <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
                        Examples
                    </p>
                    {CUSTOM_AUTOMATION_EXAMPLES.map((item) => (
                        <div key={item.num} className="flex gap-4">
                            <span
                                className="brochure-serif flex h-8 w-8 shrink-0 items-center justify-center text-lg font-semibold text-[#1b2737]"
                                style={{ color: BRAND_RED }}
                            >
                                {item.num}.
                            </span>
                            <div>
                                <h3 className="text-base font-bold leading-snug text-[#1b2737] sm:text-lg">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                                    {item.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
