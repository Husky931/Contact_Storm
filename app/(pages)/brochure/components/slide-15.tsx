import Image from "next/image"
import { BRAND_RED, NAV_LINKS } from "../constants"

export default function Slide15() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-4 py-8 text-[#1b2737] sm:px-8 md:px-16 md:py-14"
            style={{ pageBreakAfter: "always" }}
        >
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex flex-wrap gap-3 text-xs text-gray-500 md:gap-6">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 2 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
            </div>
            <div className="mt-8 flex flex-1 flex-col gap-8 items-center justify-center min-h-0 lg:flex-row lg:gap-12 lg:mt-10">
                <div className="w-full max-w-[280px] shrink-0 flex flex-col justify-center lg:w-[280px]">
                    <p className="brochure-serif text-2xl leading-relaxed text-[#1b2737] md:text-3xl">
                        See how our various implementation services span your{" "}
                        <span style={{ color: BRAND_RED }}>full sales funnel</span> from{" "}
                        <span style={{ color: BRAND_RED }}>awareness</span> to{" "}
                        <span style={{ color: BRAND_RED }}>evaluation</span> and onto{" "}
                        <span style={{ color: BRAND_RED }}>negotiation and sale</span>
                    </p>
                </div>
                <div className="w-full max-w-[450px] flex items-center justify-center shrink-0 min-w-0 lg:w-[450px]">
                    <div className="relative w-full h-[320px] md:h-[450px] lg:h-[550px]">
                        <Image
                            src="/brochure/slide_13.png"
                            alt="Sales funnel: Awareness Stage, Evaluation Stage, Negotiation & Sale"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
                {/* <div className="w-[450px] flex items-center justify-center shrink-0 min-w-0">
                    <div className="relative w-full max-w-md aspect-4/3">
                        <Image
                            src="/brochure/slide_13.png"
                            alt="Sales funnel: Awareness Stage, Evaluation Stage, Negotiation & Sale"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div> */}
                <div className="w-full shrink-0 flex flex-col justify-center gap-6 text-base lg:max-w-none">
                    <div>
                        <h3 className="font-bold text-[#1b2737]">Top of Funnel</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#1b2737]">
                            <li>Paid advertising</li>
                            <li>Social media</li>
                            <li>SEO</li>
                            <li>Account-based marketing</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#1b2737]">Middle of Funnel</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#1b2737]">
                            <li>Website design &amp; development</li>
                            <li>Profile videos</li>
                            <li>Website content creation</li>
                            <li>Case studies</li>
                            <li>Explainer videos</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-[#1b2737]">Bottom of Funnel</h3>
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-[#1b2737]">
                            <li>Slide decks</li>
                            <li>Bid responses</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
