import Image from "next/image"
import { BRAND_NAVY, NAV_LINKS } from "../constants"

const VIDEO_SERVICES = [
    { title: "Campaign Strategy", body: "Adjust ad campaigns for specific purposes with rapid iteration based on real-time performance data. Test fast, double down on what works, and cut what doesn’t so every pound drives results." },
    { title: "Creative Development", body: "Craft modern video and sound hooks aligned with Meta, Instagram, and TikTok trends. Stand out in crowded feeds with scroll-stopping creative that stops the thumb and starts the conversation." },
    { title: "Trend Tracking", body: "Stay ahead by monitoring trending formats and adapting campaigns accordingly. Adapt quickly to what’s working now so your ads feel fresh and relevant, not dated." },
    { title: "ROI Scaling", body: "Scale campaigns once we land on positive ROI, maximizing your advertising investment. Grow spend confidently once unit economics are positive so you can expand without guesswork." },
    { title: "Hook, Engage, Convert", body: "Super interesting and engaging ads that hook users in peak social media momentum. From first frame to final CTA, we optimize the journey so viewers become customers." },
    { title: "Multi-Platform Mastery", body: "Expert campaigns across Meta, Instagram, and TikTok for maximum reach. One strategy, tailored execution per platform, so your message lands wherever your audience is." }
]

export default function Slide10() {
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
                        Paid Social
                        <br />

                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        Hook, Engage, Convert — campaigns that capture attention in peak social media momentum
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
                <div className="flex-3 mt-0 grid grid-cols-1 gap-y-8 gap-x-12 sm:grid-cols-2 md:gap-y-20 lg:grid-cols-3">
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
