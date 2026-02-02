import Image from "next/image"
import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const WEB_DEV_SERVICES = [
    { title: "PPC Optimization & Tactics", body: "Bid optimization and management, ACoS monitoring, negative keywords, and ASIN targeting refinement. Every dollar is optimized for maximum return so you spend smarter, not more." },
    { title: "Algorithm Optimization", body: "Managing inventory, velocity, and basket metrics including 'Add to Cart' and 'Save for later' signals. We work with Amazon's algorithm, not against it, so your listings get the visibility they deserve." },
    { title: "Content & Keywords", body: "SEO-optimized titles, backend keyword architecture, and product page enhancements. Get found when shoppers search for products like yours and capture high-intent traffic." },
    { title: "Competitor Radar", body: "Group tracker for competitor products with alerts on price changes and ranking improvements. Know your rivals, stay ahead, and know when to react or when to hold your position." },
    { title: "Conversion Rate Focus", body: "High conversion rate for your ads and maximizing conversion signals so Amazon's algorithm favors your listings. More clicks that convert mean better organic visibility and long-term growth." },
    { title: "Competitive Edge", body: "Strategic positioning to outperform competitors and dominate your product category. Win the buy box and the customer so you capture more sales and market share." }
]

export default function Slide8() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-4 py-8 text-[#1b2737] sm:px-8 md:px-16 md:py-14"
            style={{ pageBreakAfter: "always" }}
        >
            {/* Nav — unchanged */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex flex-wrap gap-3 text-xs text-gray-500 md:gap-6">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 1 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
            </div>

            {/* Centered content — larger type, image, grid */}

            <div className="mt-8 flex flex-1 flex-col justify-center gap-8 lg:flex-row lg:items-center lg:gap-x-20 lg:mt-12">
                {/* Left side — takes more width */}
                <div className="flex-1 flex flex-col items-center text-center justify-center">
                    <h2
                        className="brochure-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl"
                        style={{ color: BRAND_NAVY }}
                    >
                        <span style={{ color: BRAND_RED }}> Amazon Ads</span> &
                        <br />
                        Optimization
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        Maximize conversion rates and algorithm signals to outperform competitors
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/brochure/slide_8.png"
                            alt=""
                            width={480}
                            height={200}
                            className="h-auto w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
                    {WEB_DEV_SERVICES.map((item) => (
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
