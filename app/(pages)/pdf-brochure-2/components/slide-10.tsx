import Image from "next/image"
import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

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
            {/* Nav — unchanged */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex gap-6 text-xs text-gray-500">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 1 ? "font-semibold text-gray-800" : ""}>
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

            {/* Centered content — larger type, image, grid */}

            <div className="mt-12 flex flex-1 flex-row gap-x-20 justify-center items-center">
                {/* Left side — takes more width */}
                <div className="flex-1 flex flex-col items-center text-center justify-center">
                    <h2
                        className="brochure-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl"
                        style={{ color: BRAND_NAVY }}
                    >
                        Content & Creative
                        <br />
                        Production
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        Make your proposition clear, credible, and buyer-friendly
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/brochure/slide_10.png"
                            alt=""
                            width={480}
                            height={200}
                            className="h-auto w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                    {VIDEO_SERVICES.map((item) => (
                        <div key={item.title} className="flex flex-col">
                            <h3 className="text-base font-bold leading-snug text-[#1b2737] sm:text-lg">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed font-serif text-gray-600 sm:text-base">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
