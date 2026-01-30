import Image from "next/image"
import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const STRATEGY_SERVICES = [
    {
        title: "Value Proposition Development",
        body: "Understanding what your value proposition is and what sets you apart from your competitors means you can easily show prospective customers why your product or service is valuable to them."
    },
    {
        title: "Sales Funnel Strategy",
        body: "We analyse every stage of your sales funnel to identify where adjustments need to be made. In doing so we can deliver a better customer journey and help improve your conversion rate."
    },
    {
        title: "Paid Advertising Strategy",
        body: "Using paid channels is a highly effective strategy to target specific audiences. You can define your ideal customers based on criteria that include demographics, previous purchases, location and interests."
    },
    {
        title: "Conversion Optimisation",
        body: "We can optimise your website to ensure it is SEO-Ready and favoured by search engines. Optimising your website to improve the user experience will positively impact your sales funnel and help drive business growth."
    },
    {
        title: "Ideal Customer Profiling",
        body: "ICP is hugely important in sales. Being able to target the right audience means you have the most valuable leads for your product or service and a stronger chance of conversion success."
    },
    {
        title: "Sales & Marketing Alignment",
        body: "When sales and marketing teams work hand-in-glove to promote your product or service the opportunities for growth increase. We set ambitious goals and communicate with you every step of the way to grow your business."
    }
]

export default function Slide5() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-16 py-14 text-[#1b2737]"
            style={{ pageBreakAfter: "always" }}
        >
            {/* Nav — unchanged */}
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex gap-6 text-xs text-gray-500">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 0 ? "font-semibold text-gray-800" : ""}>
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

            <div className="mt-12 flex flex-1 flex-row gap-x-20 justify-center items-center px-20">
                <div className="mx-auto w-full max-w-5xl">
                    {/* Hero: title + subtitle + image */}
                    <div className="flex flex-col items-center text-center">
                        <h2
                            className="brochure-serif text-4xl font-normal leading-tight tracking-tight sm:text-5xl"
                            style={{ color: BRAND_NAVY }}
                        >
                            We are a Strategy-led Agency
                        </h2>
                        <p className="mt-5 max-w-2xl text-lg font-bold leading-snug text-[#1b2737] sm:text-xl">
                            We advise on all aspects of your sales and recruitment funnels
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Image
                                src="/brochure/slide_5.png"
                                alt=""
                                width={480}
                                height={200}
                                className="h-auto w-full max-w-md object-contain"
                            />
                        </div>
                    </div>

                    {/* Services grid — 4 + 3, centered, larger text */}

                </div>
                <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {STRATEGY_SERVICES.map((item) => (
                        <div key={item.title} className="flex flex-col">
                            <h3 className="text-base font-bold leading-snug text-[#1b2737] sm:text-lg">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-gray-600 sm:text-base">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>



        </section>
    )
}
