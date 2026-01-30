import Image from "next/image"
import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const VIDEO_SERVICES = [
    { title: "Campaign Strategy", body: "Adjust ad campaigns for specific purposes with rapid iteration based on real-time performance data." },
    { title: "Creative Development", body: "Craft modern video and sound hooks aligned with Meta, Instagram, and TikTok trends." },
    { title: "Trend Tracking", body: "Stay ahead by monitoring trending formats and adapting campaigns accordingly." },
    { title: "ROI Scaling", body: "Scale campaigns once we land on positive ROI, maximizing your advertising investment." },
    { title: "Hook, Engage, Convert", body: "Super interesting and engaging ads that hook users in peak social media momentum." },
    { title: "Multi-Platform Mastery", body: "Expert campaigns across Meta, Instagram, and TikTok for maximum reach." }
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
            </div>

            {/* Centered content — larger type, image, grid */}

            <div className="mt-12 flex flex-1 flex-row gap-x-20 justify-center items-center">
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
