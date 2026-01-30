import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const SUPPORT_SERVICES = [
    { title: "Weekly Lead Delivery", body: "Qualified buyer leads with context and next steps." },
    { title: "KPI Dashboards", body: "Clear reporting across ads, Amazon, and web." },
    { title: "Bid & Budget Optimization", body: "Continuous improvements to ROI and ACoS." },
    { title: "CRO Experiments", body: "Test pages and funnels to lift inquiry rates." },
    { title: "AI Search Monitoring", body: "Track visibility in AI engines over time." },
    { title: "Competitive Alerts", body: "Rankings, pricing, and share-of-voice updates." },
    { title: "Dedicated Growth Support", body: "Hands-on partnership with fast iteration." }
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
                <div className="h-8 w-8 rounded-full border flex items-center justify-center" style={{ borderColor: BRAND_RED }}>
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
            </div>
            <div className="mt-10 flex gap-16">
                <div className="w-[320px] shrink-0">
                    <h2 className="text-2xl font-bold leading-tight" style={{ color: BRAND_NAVY }}>
                        Optimization &
                        <br />
                        Reporting
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        Ongoing performance management to keep growth on track
                    </p>
                    <div className="mt-10 flex items-center gap-3">
                        <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                        </svg>
                        <svg className="h-10 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" strokeDasharray="2 2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-4M3 15v-4m0 0V9a4 4 0 014-4h10a4 4 0 014 4v2" />
                        </svg>
                        <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <div className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: BRAND_RED }} />
                        </div>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                    {SUPPORT_SERVICES.map((item) => (
                        <div key={item.title}>
                            <h3 className="text-sm font-bold text-[#1b2737]">{item.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-text">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-auto flex justify-end gap-2 pt-8">
                <span className="h-px w-8 self-center bg-gray-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-600">12</span>
            </div>
        </section>
    )
}
