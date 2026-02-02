import Image from "next/image"
import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const WEB_DESIGN_SERVICES = [
    { title: "Modern Visual Trust", body: "Clean, professional design that signals credibility and builds instant confidence with potential clients. Your site becomes a conversion engine that turns visitors into leads and customers." },
    { title: "Frictionless UX", body: "Lightning-fast loading speeds and intuitive navigation that reduce bounce rates by up to 50%. Every second counts when users decide to stay or leave—we make sure they stay." },
    { title: "A/B Testing & Optimization", body: "Switch between landing page templates to identify optimal layouts for maximum user engagement. Data drives every decision so we double down on what works and drop what doesn’t." },
    { title: "User Tracking & Retention", body: "Monitor returning visitors for retargeting marketing and personalized experiences. Turn anonymous visitors into repeat customers and build loyalty over time." },
    { title: "Social Proof Integration", body: "Stylishly integrated case studies and testimonials to give instant user trust. Let your best results speak for you and show prospects why they should choose you." },
    { title: "Strong Call To Action", body: "Strategically placed CTAs that strongly urge users to make an inquiry. Clear next steps mean more leads and a smoother path from visitor to customer." },
]

export default function Slide7() {
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
                        Website & <span style={{ color: BRAND_RED }}>Shopify</span>

                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        Modern websites that signal professionalism and convert visitors into inquiries
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/brochure/slide_7.png"
                            alt=""
                            width={480}
                            height={200}
                            className="h-auto w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
                    {WEB_DESIGN_SERVICES.map((item) => (
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
