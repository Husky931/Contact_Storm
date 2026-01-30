import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const DEMAND_SERVICES = [
    { title: "Amazon PPC & Marketplace", body: "Optimize listings and ads for B2B buyer intent." },
    { title: "Paid Social Advertising", body: "Meta, Instagram, and TikTok campaigns that capture leads." },
    { title: "SEO for Export Buyers", body: "Rank for high-intent supplier searches in target markets." },
    { title: "AI Search Optimization", body: "Position your brand as the best answer in AI search." },
    { title: "Lead Generation & Outreach", body: "Targeted lists and campaigns to decision-makers." },
    { title: "Social Media Growth", body: "Build trust on platforms buyers check before outreach." },
    { title: "Email & LinkedIn Nurture", body: "Convert interest into qualified conversations." }
]

export default function Slide9() {
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
                        Buyer Acquisition
                        <br />
                        Channels
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        Multi-channel demand generation built for export buyers
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                        <svg className="h-10 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                            <circle cx="12" cy="12" r="4" strokeWidth="1" />
                            <circle cx="12" cy="12" r="1.5" fill={BRAND_NAVY} />
                        </svg>
                        <div className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_RED }} />
                        <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                            <circle cx="12" cy="8" r="2" fill="none" strokeWidth="1" />
                            <path strokeWidth="1" d="M6 18c1.5-2 3.5-3 6-3s4.5 1 6 3" />
                        </svg>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                    {DEMAND_SERVICES.map((item) => (
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
                <span className="text-sm text-gray-600">9</span>
            </div>
        </section>
    )
}
