import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const WEB_DESIGN_SERVICES = [
    { title: "Bilingual Website Redesign", body: "Modern sites that build trust fast with overseas buyers." },
    { title: "Landing Page Systems", body: "Campaign-specific pages optimized for RFQs and lead capture." },
    { title: "Trust & Compliance UX", body: "Highlight certifications, audits, and factory capabilities." },
    { title: "Product & Factory Storytelling", body: "Layouts that communicate scale, quality, and reliability." },
    { title: "A/B Testing & CRO", body: "Continuous testing to lift inquiry rates." },
    { title: "Shopify & B2B Portals", body: "Wholesale-ready storefronts for export sales." },
    { title: "Sales Enablement Assets", body: "Catalogs, line sheets, and buyer kits for your team." }
]

export default function Slide7() {
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
                <div className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
            </div>
            <div className="mt-10 flex gap-16">
                <div className="w-[340px] shrink-0">
                    <h2
                        className="text-2xl font-bold leading-tight"
                        style={{ color: BRAND_NAVY }}
                    >
                        Website & Conversion
                        <br />
                        Design
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        Modern, trust-building experiences that turn buyers into inquiries
                    </p>
                    <div className="mt-10 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_RED }} />
                        </div>
                        <svg className="h-8 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="1" strokeWidth="1" />
                            <path strokeWidth="1" d="M8 21h8M12 17v4" />
                        </svg>
                        <svg className="h-10 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1" />
                            <rect x="8" y="6" width="8" height="10" rx="0.5" fill="#E0F2F7" stroke="none" />
                        </svg>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-3 gap-x-8 gap-y-8">
                    {WEB_DESIGN_SERVICES.map((item) => (
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
                <span className="text-sm text-gray-600">7</span>
            </div>
        </section>
    )
}
