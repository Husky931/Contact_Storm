import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const WEB_DESIGN_SERVICES = [
    { title: "Website Design", body: "How a person feels when interacting with a website will determine whether or not they return. A great website design provides a positive experience enhancing user engagement and keeping users on your site for longer." },
    { title: "Landing Page Design", body: "A landing page will help drive traffic to your site and improve your SEO. In B2B landing pages are great for lead generation and are an effective marketing tool to encourage users to take action." },
    { title: "Email Newsletters", body: "Nothing is more effective than direct communication with your customers. Email newsletters allow you to maintain regular contact with your clients by sending relevant information and updates straight to their inboxes." },
    { title: "Social Media Assets", body: "We can create a dynamic range of content to distribute across your social media channels, from imagery to infographics to live-action videos that will push your campaign in the right direction." },
    { title: "Display Advertising", body: "Display ads are a type of advertising that combine well-crafted text, eye-catching visuals and a strong CTA to help boost your brand awareness and increase visibility online." },
    { title: "Bid Responses", body: "Putting a tender proposal together is tricky but we can implement a host of different assets from graphic design, copywriting and video content creation to make your submission more compelling and help you win that contract." },
    { title: "Slide Decks", body: "Slide decks are simply a collection of graphic slides that are put together to support a presentation and are very effective in conveying your message to an audience. They are also often used for education and training purposes." }
]

export default function Slide7() {
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
                <div className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                </div>
            </div>
            <div className="mt-10 flex gap-16">
                <div className="w-[340px] shrink-0">
                    <h2
                        className="text-2xl font-bold leading-tight"
                        style={{ color: BRAND_NAVY }}
                    >
                        Website and Digital
                        <br />
                        Design Services
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        Impactful design that supports your sales & recruitment funnels
                    </p>
                    <div className="mt-10 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: BRAND_RED }} />
                        </div>
                        <svg className="h-8 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="2" y="3" width="20" height="14" rx="1" strokeWidth="1" />
                            <path strokeWidth="1" d="M8 21h8M12 17v4" />
                        </svg>
                        <svg className="h-10 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <rect x="5" y="2" width="14" height="20" rx="2" strokeWidth="1" />
                            <rect x="8" y="6" width="8" height="10" rx="0.5" fill="#E0F2F7" stroke="none" />
                        </svg>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-3 gap-x-8 gap-y-8">
                    {WEB_DESIGN_SERVICES.map((item) => (
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
                <span className="text-sm text-gray-600">7</span>
            </div>
        </section>
    )
}
