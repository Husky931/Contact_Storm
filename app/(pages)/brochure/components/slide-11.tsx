'use client'
import { usePathname } from "next/navigation"
import Image from "next/image"
import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const BRANDING_SERVICES = [
    { title: "Influencer Partnerships", body: "Strategic agreements with influencers to expand your reach and credibility. Leverage trusted voices to reach new audiences and turn their followers into your prospects." },
    { title: "Brand Voice Development", body: "Developing a distinctive social media brand voice that resonates with your audience. Consistency builds recognition and loyalty so people know it’s you before they see the name." },
    { title: "UGC Creation", body: "User-generated content that builds authentic trust and engagement. Real stories from real customers drive real results and give prospects the social proof they need to convert." },
    { title: "Dynamic Content Strategy", body: "Mixed content output for a dynamic, brand-aligned channel that keeps followers engaged. Keep your feed fresh and your audience coming back so you stay top of mind." },
    { title: "Tech Content Factory", body: "State-of-the-art tech to automate certain content creation and scheduling. Scale output without sacrificing quality so you post more without burning out." },
    { title: "Business-Specific Strategy", body: "Each strategy is different and adjusted toward the type of business in question. No two brands are alike—neither are our plans, so you get a fit that works for you." },
]

export default function Slide11() {
    const pathname = usePathname()
    const isBrochure = pathname.startsWith("/brochure")
    return (
        <section
            className="brochure-page flex flex-col bg-white px-4 py-8 text-[#1b2737] sm:px-8 md:px-16 md:py-14"
            style={{ pageBreakAfter: "always" }}
        >
            {/* Nav — unchanged */}
            {isBrochure && (<div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex flex-wrap gap-3 text-xs text-gray-500 md:gap-6">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 1 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
            </div>)}
            {/* Centered content — larger type, image, grid */}

            <div className="mt-8 flex flex-1 flex-col justify-center gap-8 lg:flex-row lg:items-center lg:gap-x-20 lg:mt-12">
                {/* Left side — takes more width */}
                <div className="flex-1 flex flex-col items-center text-center justify-center">
                    <h2
                        className="brochure-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl"
                        style={{ color: BRAND_NAVY }}
                    >
                        Social <span style={{ color: BRAND_RED }}>Media</span>
                        <br />
                        Growth
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        Build authority and trust through strategic social media presence
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/brochure/slide_11.png"
                            alt=""
                            width={480}
                            height={200}
                            className="h-auto w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
                    {BRANDING_SERVICES.map((item) => (
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
