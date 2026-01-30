import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const BRANDING_SERVICES = [
    {
        title: "Amazon Listing Optimization",
        body: "Keyword research, A+ content, and listing structure aligned to Western buyer intent.",
        span: 1
    },
    { title: "Certification Showcases", body: "CE, FCC, ISO, and audit badges placed where buyers look first." },
    { title: "MOQ & Lead-Time Sheets", body: "Clear terms that reduce back-and-forth with buyers." },
    { title: "Factory Capability Decks", body: "Tell your manufacturing story with proof and visuals." },
    { title: "Product Photography Direction", body: "Consistent, professional visuals that build trust." },
    { title: "Customer Testimonials", body: "Social proof that reduces perceived risk." },
    { title: "Trade Show Materials", body: "Booth banners, brochures, and QR lead capture." }
]

export default function Slide11() {
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
                        Marketplace & Trust
                        <br />
                        Assets
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        Everything overseas buyers need to feel confident to engage
                    </p>
                    <div className="mt-10 flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full" style={{ backgroundColor: BRAND_RED }} />
                        <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9" strokeWidth="1" strokeDasharray="4 2" />
                        </svg>
                        <svg className="h-10 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M12 2v20M4 8h16M4 16h16" />
                        </svg>
                        <svg className="h-6 w-6" style={{ color: BRAND_NAVY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                    {BRANDING_SERVICES.map((item) => (
                        <div key={item.title} className={item.span ? "row-span-2" : ""}>
                            <h3 className="text-sm font-bold text-[#1b2737]">{item.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-text">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-auto flex justify-end gap-2 pt-8">
                <span className="h-px w-8 self-center bg-gray-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-600">11</span>
            </div>
        </section>
    )
}
