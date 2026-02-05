import Image from "next/image"
import { BRAND_RED, NAV_LINKS } from "../constants"

export default function Slide15() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-4 py-8 text-[#1b2737] sm:px-8 md:px-16"
            style={{ pageBreakAfter: "always" }}
        >
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex gap-3 text-xs text-gray-500">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 2 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
            </div>
            <div className="mt-10 flex flex-1 gap-12 items-center justify-center min-h-0">
                <div className="w-[280px] shrink-0 flex flex-col justify-center">
                    <p className="brochure-serif text-3xl leading-relaxed text-[#1b2737]">
                        See how our various implementation services span your{" "}
                        <span style={{ color: BRAND_RED }}>full sales funnel</span> from{" "}
                        <span style={{ color: BRAND_RED }}>awareness</span> to{" "}
                        <span style={{ color: BRAND_RED }}>evaluation</span> and onto{" "}
                        <span style={{ color: BRAND_RED }}>negotiation and sale</span>
                    </p>
                </div>
                <div className="w-[450px] flex items-center justify-center shrink-0 min-w-0">
                    <div className="relative w-full h-[550px]">
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
                <div className="shrink-0 flex flex-col justify-center gap-6 text-base">
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
