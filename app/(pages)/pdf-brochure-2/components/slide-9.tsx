import Image from "next/image"
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
            {/* Nav — unchanged */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex gap-6 text-xs text-gray-500">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 1 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
            </div>

            {/* Centered content — larger type, image, grid */}

            <div className="mt-12 flex flex-1 flex-row gap-x-20 justify-center items-center">
                {/* Left side — takes more width */}
                <div className="flex-1 flex flex-col items-center text-center justify-center">
                    <h2
                        className="brochure-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl"
                        style={{ color: BRAND_NAVY }}
                    >
                        Buyer Acquisition
                        <br />
                        Channels
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        Multi-channel demand generation built for export buyers
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/brochure/slide_9.png"
                            alt=""
                            width={480}
                            height={200}
                            className="h-auto w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                    {DEMAND_SERVICES.map((item) => (
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
