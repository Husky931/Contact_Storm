import Image from "next/image"
import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const SUPPORT_SERVICES = [
    { title: "AI-Powered Lead Discovery", body: "Our in-house software identifies high-value businesses in your niche, analyzing domains and digital footprints." },
    { title: "Daily Domain Scanning", body: "Scans 5000+ foreign buyer domains daily, targeted by industry, location, and online presence." },
    { title: "Decision-Maker Extraction", body: "Extracts important decision-makers' emails and analyzes their digital footprints (paid ads, social channels)." },
    { title: "Automated Outreach", body: "Direct automated outreach via website or email with personalized messages to decision-makers." },
    { title: "Real-Time Tracking Dashboard", body: "Track response rate, interaction, and success rate on our dashboard with conversation logging." },
    { title: "Custom Automation Tools", body: "Custom software development for repetitive tasks, freeing your team for high-value work." },
    { title: "Sales Conversation Tracking", body: "AI tools to track sales conversations on channels like Alibaba, 1688, monitoring success rates." }
]

export default function Slide12() {
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
                        Lead Generation &
                        <br />
                        Custom Software
                    </h2>
                    <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                        AI-powered tools that identify, reach, and convert high-value prospects
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Image
                            src="/brochure/slide_12.png"
                            alt=""
                            width={480}
                            height={200}
                            className="h-auto w-full max-w-md object-contain"
                        />
                    </div>
                </div>

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                    {SUPPORT_SERVICES.map((item) => (
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
