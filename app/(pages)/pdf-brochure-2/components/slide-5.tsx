import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const STRATEGY_SERVICES = [
    {
        title: "Export Market Research",
        body: "Define priority regions, buyer personas, and competitor benchmarks."
    },
    {
        title: "Western Buyer Positioning",
        body: "Translate MOQ, certifications, and lead times into clear buyer value."
    },
    {
        title: "Channel & Marketplace Roadmap",
        body: "Select the right mix of Amazon, Google, and paid social."
    },
    {
        title: "AI Search + SEO Strategy",
        body: "Optimize for AI discovery alongside classic search engines."
    },
    {
        title: "Lead Gen KPI Planning",
        body: "Set targets for qualified leads, CPL, and conversion rate."
    },
    {
        title: "Offer & Pricing Clarity",
        body: "Package SKUs and terms to reduce buyer friction."
    }
]

export default function Slide5() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-16 py-14 text-[#1b2737]"
            style={{ pageBreakAfter: "always" }}
        >
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex gap-6 text-xs text-gray-500">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 0 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
                <div
                    className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center"
                    style={{ borderColor: BRAND_RED }}
                >
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
            </div>
            <div className="mt-12 flex gap-16">
                <div className="w-[380px] shrink-0">
                    <h2
                        className="brochure-serif text-3xl font-normal leading-tight"
                        style={{ color: BRAND_NAVY }}
                    >
                        We are an Export Growth Agency
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        Strategy built around factory realities and Western buyer expectations
                    </p>
                    <div className="mt-10 flex items-start gap-4">
                        <svg className="h-12 w-12 shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="1" />
                            <circle cx="12" cy="12" r="2" fill={BRAND_RED} />
                        </svg>
                        <div className="h-px flex-1 self-center border-t border-dashed border-gray-300" />
                        <div className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: BRAND_RED }} />
                        <svg className="h-8 w-8 shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" strokeWidth="1" />
                            <path strokeWidth="1" d="M21 21l-4.35-4.35" />
                        </svg>
                        <svg className="h-10 w-14 shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M3 18v-6h18v6M3 12l4-6 4 4 6-8 4 4" />
                        </svg>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-3 gap-x-10 gap-y-8">
                    {STRATEGY_SERVICES.map((item) => (
                        <div key={item.title}>
                            <h3 className="text-sm font-bold text-[#1b2737]">{item.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-text">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-auto flex justify-end gap-2 pt-8">
                <span className="h-px w-8 self-center bg-gray-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-600">5</span>
            </div>
        </section>
    )
}
