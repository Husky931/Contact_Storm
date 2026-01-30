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

            </div>
            {/* Centered content — larger type, image, grid */}

            <div className="mt-12 flex flex-1 flex-row gap-x-20 justify-center items-center">
                {/* Left side — takes more width */}
                <div className="flex-1 flex flex-col items-center text-center justify-center">
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

                {/* Right side — services grid */}
                <div className="flex-3 mt-0 grid grid-cols-1 gap-x-12 gap-y-20 sm:grid-cols-2 lg:grid-cols-3">
                    {STRATEGY_SERVICES.map((item) => (
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
