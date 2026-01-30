import { BRAND_NAVY, NAV_LINKS } from "../constants"

const VIDEO_SERVICES = [
    { title: "Website Content", body: "Write with your audience in mind. Quality content that informs and educates the user will keep them on your website for longer and help you build credibility for your business." },
    { title: "Infographics", body: "Infographics are a dynamic mix of graphic design, imagery, data and content. They are very effective at helping users better understand complex information by breaking down difficult concepts into a clear and simple visual format." },
    { title: "Blog Content", body: "Blogging should be a key part of your content marketing strategy. Blogs are an affordable marketing solution that will help you keep your users engaged. The more useful content you create, the more trust you will generate." },
    { title: "Advertising Copy", body: "How do you communicate the value of your product or service to potential buyers? Choose your words carefully to convey the message you want. Good copywriting will connect with your prospective customers and persuade them to act." },
    { title: "Explainer Videos", body: "Explainer videos are a quick and effective way to introduce and explain the value of your product or service. Videos are a powerful marketing tool and can have far more impact than a piece of text. Using video will also improve your search engine rankings." },
    { title: "Website Content Reviews", body: "Does your website content need updating? We can review your site's content to ensure it is properly optimised for search engines, engaging for users and also outlines your value propositions in a clear and compelling way." },
    { title: "Profile Videos", body: "A short marketing video telling the story of your company and how your product or service can help solve your customers' problems will boost your brand awareness and reach your target audience." },
    { title: "Bid Response Videos", body: "You will add great value to your tender submission and stand out from your competitors with video. Video is one of the best ways to capture attention and done right will help you get your proposal across in a clear, engaging and memorable way." },
    { title: "Content Editing", body: "Need help optimising your content for users and search engines? We edit all kinds of copy making sure it is SEO-Ready, on-brand, and grammatically accurate. We edit all kinds of copy, including scripts." }
]

export default function Slide10() {
    return (
        <section
            className="brochure-page flex flex-col bg-white px-16 py-14 text-[#1b2737]"
            style={{ pageBreakAfter: "always" }}
        >
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
                <nav className="flex gap-6 text-xs text-gray-500">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 1 ? "font-semibold text-gray-800" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
                <div className="h-8 w-8 rounded-full border border-gray-300" />
            </div>
            <div className="mt-10 flex gap-16">
                <div className="w-[340px] shrink-0">
                    <h2 className="text-2xl font-bold leading-tight" style={{ color: BRAND_NAVY }}>
                        Video & Content
                        <br />
                        Production
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        Make your propositions more compelling with the most engaging content formats
                    </p>
                    <div className="mt-10 flex items-center gap-4">
                        <svg className="h-12 w-14 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M23 7l-7 5 7 5V7zM2 5v14h14V5H2z" />
                        </svg>
                        <div className="rounded border border-gray-300 p-3">
                            <div className="flex h-12 w-16 items-center justify-center rounded bg-gray-100">
                                <div className="ml-1 h-0 w-0 border-y-8 border-l-14 border-y-transparent border-l-[#1b2737]" />
                            </div>
                            <div className="mt-2 h-1 w-4 rounded bg-gray-300" />
                        </div>
                        <div className="h-8 w-6 rounded border border-gray-300 flex items-end justify-center pb-1">
                            <div className="h-2 w-2 rounded-full bg-gray-400" />
                        </div>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-3 gap-x-8 gap-y-8">
                    {VIDEO_SERVICES.map((item) => (
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
                <span className="text-sm text-gray-600">10</span>
            </div>
        </section>
    )
}
