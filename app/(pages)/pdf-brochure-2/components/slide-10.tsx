import { BRAND_NAVY, NAV_LINKS } from "../constants"

const VIDEO_SERVICES = [
    { title: "Amazon A+ Content", body: "Visual storytelling that highlights certifications and MOQ." },
    { title: "Product & Factory Videos", body: "Show capability, scale, and quality with confidence." },
    { title: "Ad Creative & Hooks", body: "Scroll-stopping assets for paid social campaigns." },
    { title: "Buyer Case Studies", body: "Proof that builds trust fast for overseas buyers." },
    { title: "Explainer Videos", body: "Simple breakdowns of complex products and processes." },
    { title: "Technical Datasheets", body: "Specs and compliance in buyer-ready formats." },
    { title: "Catalogs & Line Sheets", body: "Professional product overviews for sales teams." },
    { title: "Ad Copy & Messaging", body: "Clear value propositions tailored to buyer intent." },
    { title: "Content Localization", body: "English-first, buyer-optimized translations." }
]

export default function Slide10() {
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
                <div className="h-8 w-8 rounded-full border border-gray-300" />
            </div>
            <div className="mt-10 flex gap-16">
                <div className="w-[340px] shrink-0">
                    <h2 className="text-2xl font-bold leading-tight" style={{ color: BRAND_NAVY }}>
                        Content & Creative
                        <br />
                        Production
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        Make your proposition clear, credible, and buyer-friendly
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                        <svg className="h-12 w-14 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M23 7l-7 5 7 5V7zM2 5v14h14V5H2z" />
                        </svg>
                        <div className="rounded border border-gray-300 p-3">
                            <div className="flex h-12 w-16 items-center justify-center rounded bg-gray-100">
                                <div className="ml-1 h-0 w-0 border-y-8 border-l-14 border-y-transparent border-l-[#1b2737]" />
                            </div>
                            <div className="mt-2 h-1 w-4 rounded bg-gray-300" />
                        </div>
                        <div className="h-8 w-6 rounded border border-gray-300 flex items-end justify-center pb-1">
                            <div className="h-2 w-2 rounded-full bg-gray-400" />
                        </div>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-3 gap-x-8 gap-y-8">
                    {VIDEO_SERVICES.map((item) => (
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
                <span className="text-sm text-gray-600">10</span>
            </div>
        </section>
    )
}
