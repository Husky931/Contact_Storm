import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const STRATEGY_SERVICES = [
    {
        title: "Value Proposition Development",
        body: "Understanding what your value proposition is and what sets you apart from your competitors means you can easily show prospective customers why your product or service is valuable to them."
    },
    {
        title: "Ideal Customer Profiling",
        body: "ICP is hugely important in sales. Being able to target the right audience means you have the most valuable leads for your product or service and a stronger chance of conversion success."
    },
    {
        title: "Sales Funnel Strategy",
        body: "We analyse every stage of your sales funnel to identify where adjustments need to be made. In doing so we can deliver a better customer journey and help improve your conversion rate."
    },
    {
        title: "Sales & Marketing Alignment",
        body: "When sales and marketing teams work hand-in-glove to promote your product or service the opportunities for growth increase. We set ambitious goals and communicate with you every step of the way to grow your business."
    },
    {
        title: "Paid Advertising Strategy",
        body: "Using paid channels is a highly effective strategy to target specific audiences. You can define your ideal customers based on criteria that include demographics, previous purchases, location and interests."
    },
    {
        title: "Content & Messaging",
        body: "Good copywriting will help clarify your message and connect with your audience. A well-crafted compelling script or page of text can inspire people to engage with your business."
    }
]

export default function Slide5() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-16 py-14 text-[#1b2737]"
            style={{ pageBreakAfter: "always" }}
        >
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
            <div className="mt-12 flex gap-16">
                <div className="w-[380px] shrink-0">
                    <h2
                        className="brochure-serif text-3xl font-normal leading-tight"
                        style={{ color: BRAND_NAVY }}
                    >
                        We are a Strategy-led Agency
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        We advise on all aspects of your sales and recruitment funnels
                    </p>
                    <div className="mt-10 flex items-start gap-4">
                        <svg className="h-12 w-12 shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="10" strokeWidth="1" />
                            <circle cx="12" cy="12" r="2" fill={BRAND_RED} />
                        </svg>
                        <div className="h-px flex-1 self-center border-t border-dashed border-gray-300" />
                        <div className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: BRAND_RED }} />
                        <svg className="h-8 w-8 shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="11" cy="11" r="8" strokeWidth="1" />
                            <path strokeWidth="1" d="M21 21l-4.35-4.35" />
                        </svg>
                        <svg className="h-10 w-14 shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M3 18v-6h18v6M3 12l4-6 4 4 6-8 4 4" />
                        </svg>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-3 gap-x-10 gap-y-8">
                    {STRATEGY_SERVICES.map((item) => (
                        <div key={item.title}>
                            <h3 className="text-sm font-bold text-[#1b2737]">{item.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-text">{item.body}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-auto flex justify-end gap-2 pt-8">
                <span className="h-px w-8 self-center bg-gray-300" />
                <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                <span className="text-sm text-gray-600">5</span>
            </div>
        </section>
    )
}
