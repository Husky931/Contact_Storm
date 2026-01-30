import type { Metadata } from "next"
import "./brochure-2.css"

export const metadata: Metadata = {
    title: "Brochure | Together Digital",
    description:
        "Together Digital — Specialist B2B digital agency. Strategy-led thinking. Transformative results."
}

const NAV_LINKS = [
    "01. STRATEGY & CONSULTING",
    "02. IMPLEMENTATION SERVICES",
    "03. OUR WORK",
    "04. ABOUT US"
]

const PINK = "#EA005E"
const TEAL = "#2C7B8A"
const TEAL_BG = "#0D7680"

function PageBreak() {
    return <div className="print:break-after-page" style={{ pageBreakAfter: "always" }} />
}

function RadiatingLines() {
    const lineCount = 80
    const lines = Array.from({ length: lineCount }, (_, i) => {
        const angle = (i / lineCount) * 200 - 100
        const length = 280 + (i % 7) * 45
        const rad = (angle * Math.PI) / 180
        const x2 = 400 + Math.cos(rad) * length
        const y2 = 424 + Math.sin(rad) * length
        return (
            <line
                key={i}
                x1="400"
                y1="424"
                x2={x2}
                y2={y2}
                stroke={PINK}
                strokeWidth="0.5"
            />
        )
    })
    return (
        <div className="radiating-lines">
            <svg width="100%" height="100%" viewBox="0 0 600 848" className="absolute right-0 top-0">
                {lines}
            </svg>
        </div>
    )
}

export default function PdfBrochure2Page() {
    return (
        <div className="brochure-print min-h-screen bg-[#1a1a1a]">
            {/* Page 1 — Cover: black, logo, Strategy-led / Transformative, radiating lines */}
            <section
                className="brochure-page flex flex-col justify-between bg-black px-16 py-14 text-white"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="flex items-start">
                    <div>
                        <span
                            className="brochure-script text-4xl"
                            style={{ color: PINK }}
                        >
                            Together
                        </span>
                        <br />
                        <span
                            className="text-xl font-normal tracking-widest"
                            style={{ color: "#CCCCCC" }}
                        >
                            DIGITAL
                        </span>
                    </div>
                </div>
                <div className="relative z-10 max-w-[55%]">
                    <p className="brochure-serif text-4xl font-normal text-white">
                        Strategy-led thinking.
                    </p>
                    <p className="brochure-serif mt-2 text-5xl font-bold text-white">
                        Transformative results.
                        <span style={{ color: PINK }}>.</span>
                    </p>
                    <p
                        className="mt-12 text-sm font-medium tracking-[0.35em]"
                        style={{ color: "#FFFFFF" }}
                    >
                        SPECIALIST B2B DIGITAL AGENCY
                    </p>
                </div>
                <div />
                <RadiatingLines />
            </section>

            <PageBreak />

            {/* Page 2 — Introduction: magenta bg, title left, paragraphs right */}
            <section
                className="brochure-page flex flex-col bg-[#e4007b] px-16 py-14 text-white"
                style={{ pageBreakAfter: "always" }}
            >
                <p className="text-xs font-medium uppercase tracking-widest">INTRODUCTION</p>
                <div
                    className="mt-2 h-px w-24"
                    style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                />
                <div className="mt-16 flex flex-1 gap-24">
                    <div className="max-w-md text-2xl font-light leading-snug">
                        Together Digital
                        <br />
                        is a specialist multi-
                        <br />
                        award-winning
                        <br />
                        web design and
                        <br />
                        conversion agency
                        <br />
                        serving B2B clients
                    </div>
                    <div className="max-w-md space-y-6 text-sm leading-relaxed">
                        <p>
                            We&apos;ve been helping clients succeed for over 14 years. The key
                            benefit of hiring a marketing agency is knowing you have a team of
                            experienced and motivated marketing professionals working to tell your
                            story and help you break into new markets.
                        </p>
                        <p>
                            We offer a fresh perspective and can utilise the latest tools and
                            technologies to accelerate your campaigns and stimulate company growth.
                        </p>
                        <p>
                            We can also provide strategic advice on how to optimise your sales and
                            recruitment funnels and we offer a broad range of implementation
                            services that can practically address your immediate and ongoing needs.
                        </p>
                        <p>
                            <strong>Read our guide</strong> for a complete overview of our services
                            and agency credentials.
                        </p>
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-8">
                    <span
                        className="h-px w-8 self-center"
                        style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                    />
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span className="text-lg font-medium">2</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 3 — Table of contents */}
            <section
                className="brochure-page flex flex-col bg-[#1a1a1a] px-16 py-14 text-white"
                style={{ pageBreakAfter: "always" }}
            >
                <p className="text-xs font-medium uppercase tracking-widest text-gray-300">
                    TABLE OF CONTENTS
                </p>
                <div className="mt-2 h-px w-48 bg-gray-500" />
                <div className="mt-8 flex flex-1 items-center justify-between gap-20">
                    <div className="space-y-4 text-sm text-gray-300">
                        <div className="flex justify-between gap-8">
                            <span className="font-semibold">Strategy & Consulting</span>
                            <span>4</span>
                        </div>
                        <div className="flex justify-between gap-8">
                            <span className="font-semibold">Implementation Services</span>
                            <span>6</span>
                        </div>
                        <ul className="ml-4 space-y-2 text-gray-400">
                            <li className="flex justify-between gap-8">
                                <span>Website and Digital Design</span>
                                <span>7</span>
                            </li>
                            <li className="flex justify-between gap-8">
                                <span>Website Development</span>
                                <span>8</span>
                            </li>
                            <li className="flex justify-between gap-8">
                                <span>Demand Generation</span>
                                <span>9</span>
                            </li>
                            <li className="flex justify-between gap-8">
                                <span>Video & Content</span>
                                <span>10</span>
                            </li>
                            <li className="flex justify-between gap-8">
                                <span>Branding & Graphic Design</span>
                                <span>11</span>
                            </li>
                            <li className="flex justify-between gap-8">
                                <span>Support & Maintenance</span>
                                <span>12</span>
                            </li>
                        </ul>
                        <div className="flex justify-between gap-8 pt-2">
                            <span className="font-semibold">Our Work</span>
                            <span>14</span>
                        </div>
                        <div className="flex justify-between gap-8">
                            <span className="font-semibold">Agency Credentials</span>
                            <span>22</span>
                        </div>
                    </div>
                    <div className="brochure-serif text-right text-5xl font-normal leading-tight">
                        <span className="text-white">delivering</span>
                        <br />
                        <span style={{ color: PINK }}>high-performance</span>
                        <br />
                        <span className="text-white">marketing</span>
                        <br />
                        <span className="text-white">solutions</span>
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-8">
                    <span className="h-px w-8 self-center bg-gray-500" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span className="text-sm text-gray-400">3</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 4 — Strategy & Consulting: purple bg, nav, large 01, title, body */}
            <section
                className="brochure-page flex flex-col bg-[#6C4FB7] px-16 py-14 text-white"
                style={{ pageBreakAfter: "always" }}
            >
                <nav className="flex gap-8 text-xs font-medium text-white/80">
                    {NAV_LINKS.map((link, i) => (
                        <span key={link} className={i === 0 ? "text-white font-semibold" : ""}>
                            {link}
                        </span>
                    ))}
                </nav>
                <div className="mt-12 flex flex-1 items-center gap-16">
                    <div className="relative">
                        <span
                            className="brochure-outline-num block text-[12rem] leading-none"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
                        >
                            01
                        </span>
                        <div className="absolute inset-0 flex items-center pl-4 pt-8">
                            <h1 className="brochure-serif text-5xl font-normal leading-tight">
                                Strategy
                                <br />
                                & Consulting
                            </h1>
                        </div>
                    </div>
                    <div className="max-w-sm text-sm leading-relaxed text-white/95">
                        Our consulting team works with you to understand how your sales funnel works
                        currently and how it can be optimised to drive future business success
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-8">
                    <span className="h-px w-8 self-center bg-white/5" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/6" />
                    <span className="text-sm">4</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 5 — Strategy services: white, nav, We are a Strategy-led Agency, graphic, 3 cols */}
            <section
                className="brochure-page flex flex-col bg-white px-16 py-14 text-[#333]"
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
                        style={{ borderColor: PINK }}
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
                            style={{ color: "#5a4a8a" }}
                        >
                            We are a Strategy-led Agency
                        </h2>
                        <p className="mt-4 text-sm font-bold leading-snug text-[#333]">
                            We advise on all aspects of your sales and recruitment funnels
                        </p>
                        <div className="mt-10 flex items-start gap-4">
                            <svg className="h-12 w-12 shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="10" strokeWidth="1" />
                                <circle cx="12" cy="12" r="2" fill={PINK} />
                            </svg>
                            <div className="h-px flex-1 self-center border-t border-dashed border-gray-300" />
                            <div className="h-3 w-3 rounded-full shrink-0" style={{ backgroundColor: PINK }} />
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
                        {[
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
                        ].map((item) => (
                            <div key={item.title}>
                                <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-[#555]">{item.body}</p>
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

            <PageBreak />

            {/* Page 6 — Implementation Services intro: teal bg, 02, Implementation Services, body */}
            <section
                className="brochure-page flex flex-col text-white"
                style={{ backgroundColor: TEAL_BG, pageBreakAfter: "always" }}
            >
                <div className="border-b border-white/20 px-16 pb-4 pt-14">
                    <nav className="flex gap-6 text-xs text-white/70">
                        {NAV_LINKS.map((link, i) => (
                            <span key={link} className={i === 1 ? "font-semibold text-white" : ""}>
                                {link}
                            </span>
                        ))}
                    </nav>
                </div>
                <div className="flex flex-1">
                    <div className="flex flex-1 items-center gap-12 pl-16 pr-8 py-12">
                        <span
                            className="brochure-outline-num shrink-0 text-[10rem] leading-none"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}
                        >
                            02
                        </span>
                        <h1 className="brochure-serif text-4xl font-normal leading-tight">
                            Implementation
                            <br />
                            Services
                        </h1>
                    </div>
                    <div
                        className="w-px shrink-0 bg-white/20"
                        style={{ marginTop: "3rem", marginBottom: "3rem" }}
                    />
                    <div className="flex w-[380px] shrink-0 flex-col justify-center px-12 py-12 text-sm leading-relaxed text-white/95">
                        Once we have defined the correct strategy to address your sales & marketing
                        challenges we offer a broad range of implementation services to deliver the
                        agreed plan.
                    </div>
                </div>
                <div className="flex justify-end gap-2 px-16 pb-14 pt-8">
                    <span className="h-px w-8 self-center bg-white/3" />
                    <span className="h-1.5 w-1.5 rounded-full bg-white/4" />
                    <span className="text-sm">6</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 7 — Website and Digital Design Services */}
            <section
                className="brochure-page flex flex-col bg-white px-16 py-14 text-[#333]"
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
                            style={{ color: TEAL }}
                        >
                            Website and Digital
                            <br />
                            Design Services
                        </h2>
                        <p className="mt-4 text-sm font-bold leading-snug text-[#333]">
                            Impactful design that supports your sales & recruitment funnels
                        </p>
                        <div className="mt-10 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300">
                                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: PINK }} />
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
                        {[
                            { title: "Website Design", body: "How a person feels when interacting with a website will determine whether or not they return. A great website design provides a positive experience enhancing user engagement and keeping users on your site for longer." },
                            { title: "Landing Page Design", body: "A landing page will help drive traffic to your site and improve your SEO. In B2B landing pages are great for lead generation and are an effective marketing tool to encourage users to take action." },
                            { title: "Email Newsletters", body: "Nothing is more effective than direct communication with your customers. Email newsletters allow you to maintain regular contact with your clients by sending relevant information and updates straight to their inboxes." },
                            { title: "Social Media Assets", body: "We can create a dynamic range of content to distribute across your social media channels, from imagery to infographics to live-action videos that will push your campaign in the right direction." },
                            { title: "Display Advertising", body: "Display ads are a type of advertising that combine well-crafted text, eye-catching visuals and a strong CTA to help boost your brand awareness and increase visibility online." },
                            { title: "Bid Responses", body: "Putting a tender proposal together is tricky but we can implement a host of different assets from graphic design, copywriting and video content creation to make your submission more compelling and help you win that contract." },
                            { title: "Slide Decks", body: "Slide decks are simply a collection of graphic slides that are put together to support a presentation and are very effective in conveying your message to an audience. They are also often used for education and training purposes." }
                        ].map((item) => (
                            <div key={item.title}>
                                <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-[#555]">{item.body}</p>
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

            <PageBreak />

            {/* Page 8 — Website Development Services */}
            <section
                className="brochure-page flex flex-col bg-white px-16 py-14 text-[#333]"
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
                        <h2 className="text-2xl font-bold leading-tight" style={{ color: TEAL }}>
                            Website Development
                            <br />
                            Services
                        </h2>
                        <p className="mt-4 text-sm font-bold leading-snug text-[#333]">
                            Technically strong, superfast, future-proofed websites
                        </p>
                        <div className="mt-10 flex items-end gap-2">
                            <div className="rounded border border-gray-300 p-2 text-[10px] text-gray-400">
                                <div className="flex items-center gap-1">
                                    <span className="h-2 w-2 rounded-full bg-gray-300" />
                                    <span className="h-2 w-2 rounded-full bg-gray-300" />
                                    <span className="h-2 w-2 rounded-full bg-gray-300" />
                                    <span className="ml-auto text-gray-500">https://</span>
                                </div>
                                <div className="mt-2 flex items-center gap-1 font-mono text-gray-400">
                                    &lt;
                                    <span className="rounded bg-gray-100 px-1" style={{ color: PINK }}>⚡</span>
                                    &gt;
                                </div>
                            </div>
                            <div className="mb-2 h-12 w-1 rounded-full" style={{ backgroundColor: TEAL }} />
                        </div>
                    </div>
                    <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                        {[
                            { title: "Headless CMS", body: "Headless CMS technology delivers faster page load speeds enhancing the user experience. The cloud-based system also provides increased security benefits for your website." },
                            { title: "Payment System Integrations", body: "A strong, reliable payment system on your website will be of great value to your users. Integrating a payment system into your platform will make the payment process far more seamless and improve the user experience for your customers." },
                            { title: "Custom Animations", body: "Moving images will capture your audience's attention and help keep them engaged with your content. Web animation can greatly influence users' actions on your website and improve the UX journey." },
                            { title: "Ongoing Performance Monitoring", body: "We can track how your website is performing using the latest performance monitoring tools and software. Knowing how your site is performing indicates the elements of your site that are working well and those that need improving." },
                            { title: "Advanced Functionality", body: "A functional website focuses on the user journey. Creating a great user experience will keep users on your website for longer and this helps to generate leads that could eventually turn into paying customers." },
                            { title: "Website Audits", body: "A website audit is basically a routine health checkup for your site. We will carry out a full analysis and fix any errors to ensure your website performs at peak capacity and is SEO-optimised to be visible to search engines." },
                            { title: "Third-Party Integrations", body: "Leveraging third-party API can create a more impactful UX and customer-centric site. Adding features like payment integrations will boost your website's capability and streamline the user's journey." },
                            { title: "Portals", body: "Website portals are very effective for gathering information from various sources into a single user interface. This single centralised channel provides a gateway of communication for your business for employees, clients and customers." }
                        ].map((item) => (
                            <div key={item.title}>
                                <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-[#555]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-8">
                    <span className="h-px w-8 self-center bg-gray-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span className="text-sm text-gray-600">8</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 9 — Demand Generation Services */}
            <section
                className="brochure-page flex flex-col bg-white px-16 py-14 text-[#333]"
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
                        <h2 className="text-2xl font-bold leading-tight" style={{ color: TEAL }}>
                            Demand Generation
                            <br />
                            Services
                        </h2>
                        <p className="mt-4 text-sm font-bold leading-snug text-[#333]">
                            Drive consistent lead flows and take the volatility out of your sales pipeline
                        </p>
                        <div className="mt-10 flex items-center gap-4">
                            <svg className="h-10 w-10 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="1" d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                                <circle cx="12" cy="12" r="4" strokeWidth="1" />
                                <circle cx="12" cy="12" r="1.5" fill={TEAL} />
                            </svg>
                            <div className="h-2 w-2 rounded-full" style={{ backgroundColor: PINK }} />
                            <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="1" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                                <circle cx="12" cy="8" r="2" fill="none" strokeWidth="1" />
                                <path strokeWidth="1" d="M6 18c1.5-2 3.5-3 6-3s4.5 1 6 3" />
                            </svg>
                        </div>
                    </div>
                    <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                        {[
                            { title: "Paid Advertising", body: "Paid advertising is one of the quickest ways to get results. Using a digital advertising strategy will help you reach specific demographics, increase engagement and attract traffic to your website faster than organic marketing." },
                            { title: "Account-Based Marketing", body: "In ABM, sales and marketing teams align to pursue a targeted set of high-value accounts that will be a good fit for your business. When done right ABM can deliver a higher return on investment than any other marketing strategy." },
                            { title: "Search Engine Optimisation", body: "SEO is hugely important if you want to increase your website traffic. It is also a cost-effective practice helping to build the quality and quantity of your traffic organically." },
                            { title: "Keyword Research", body: "Doing keyword research will provide you with the relevant keywords users are using to search with. Knowing the right keywords to implement in your text will make your content more visible to search engines and make it easier for users to find you." },
                            { title: "Email Marketing", body: "Email marketing is a very effective communication tool for business leaders. Sending emails allows you to maintain regular contact with customers and acquire new customers using targeted and personalised email campaigns." },
                            { title: "Video Marketing", body: "Videos are a very effective lead-generation tool. They are also a great way to explain your product or service. Search engines love video so adding a video to your website will help boost SEO and increase traffic to your site." },
                            { title: "Social Media Management", body: "We can develop a social media strategy to help you get the most from your social media marketing efforts. Getting your message to the right people, in the right way, and keeping track of your data will inform what content is really connecting with your audience." }
                        ].map((item) => (
                            <div key={item.title}>
                                <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-[#555]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-8">
                    <span className="h-px w-8 self-center bg-gray-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span className="text-sm text-gray-600">9</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 10 — Video & Content Production */}
            <section
                className="brochure-page flex flex-col bg-white px-16 py-14 text-[#333]"
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
                        <h2 className="text-2xl font-bold leading-tight" style={{ color: TEAL }}>
                            Video & Content
                            <br />
                            Production
                        </h2>
                        <p className="mt-4 text-sm font-bold leading-snug text-[#333]">
                            Make your propositions more compelling with the most engaging content formats
                        </p>
                        <div className="mt-10 flex items-center gap-4">
                            <svg className="h-12 w-14 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="1" d="M23 7l-7 5 7 5V7zM2 5v14h14V5H2z" />
                            </svg>
                            <div className="rounded border border-gray-300 p-3">
                                <div className="flex h-12 w-16 items-center justify-center rounded bg-gray-100">
                                    <div className="ml-1 h-0 w-0 border-y-8 border-l-14 border-y-transparent border-l-[#333]" />
                                </div>
                                <div className="mt-2 h-1 w-4 rounded bg-gray-300" />
                            </div>
                            <div className="h-8 w-6 rounded border border-gray-300 flex items-end justify-center pb-1">
                                <div className="h-2 w-2 rounded-full bg-gray-400" />
                            </div>
                        </div>
                    </div>
                    <div className="grid flex-1 grid-cols-3 gap-x-8 gap-y-8">
                        {[
                            { title: "Website Content", body: "Write with your audience in mind. Quality content that informs and educates the user will keep them on your website for longer and help you build credibility for your business." },
                            { title: "Infographics", body: "Infographics are a dynamic mix of graphic design, imagery, data and content. They are very effective at helping users better understand complex information by breaking down difficult concepts into a clear and simple visual format." },
                            { title: "Blog Content", body: "Blogging should be a key part of your content marketing strategy. Blogs are an affordable marketing solution that will help you keep your users engaged. The more useful content you create, the more trust you will generate." },
                            { title: "Advertising Copy", body: "How do you communicate the value of your product or service to potential buyers? Choose your words carefully to convey the message you want. Good copywriting will connect with your prospective customers and persuade them to act." },
                            { title: "Explainer Videos", body: "Explainer videos are a quick and effective way to introduce and explain the value of your product or service. Videos are a powerful marketing tool and can have far more impact than a piece of text. Using video will also improve your search engine rankings." },
                            { title: "Website Content Reviews", body: "Does your website content need updating? We can review your site's content to ensure it is properly optimised for search engines, engaging for users and also outlines your value propositions in a clear and compelling way." },
                            { title: "Profile Videos", body: "A short marketing video telling the story of your company and how your product or service can help solve your customers' problems will boost your brand awareness and reach your target audience." },
                            { title: "Bid Response Videos", body: "You will add great value to your tender submission and stand out from your competitors with video. Video is one of the best ways to capture attention and done right will help you get your proposal across in a clear, engaging and memorable way." },
                            { title: "Content Editing", body: "Need help optimising your content for users and search engines? We edit all kinds of copy making sure it is SEO-Ready, on-brand, and grammatically accurate. We edit all kinds of copy, including scripts." }
                        ].map((item) => (
                            <div key={item.title}>
                                <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-[#555]">{item.body}</p>
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

            <PageBreak />

            {/* Page 11 — Branding & Graphic Design Services */}
            <section
                className="brochure-page flex flex-col bg-white px-16 py-14 text-[#333]"
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
                        <h2 className="text-2xl font-bold leading-tight" style={{ color: TEAL }}>
                            Branding & Graphic
                            <br />
                            Design Services
                        </h2>
                        <p className="mt-4 text-sm font-bold leading-snug text-[#333]">
                            We have specialists in various design disciplines. We take the time to understand who you are and what you want to achieve
                        </p>
                        <div className="mt-10 flex items-center gap-3">
                            <div className="h-4 w-4 rounded-full" style={{ backgroundColor: PINK }} />
                            <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="9" strokeWidth="1" strokeDasharray="4 2" />
                            </svg>
                            <svg className="h-10 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="1" d="M12 2v20M4 8h16M4 16h16" />
                            </svg>
                            <svg className="h-6 w-6" style={{ color: TEAL }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="1" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                            </svg>
                        </div>
                    </div>
                    <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                        {[
                            { title: "Brand Audits", body: "A brand audit evaluates how your brand is performing in the marketplace. A full analysis will help you know your brand's position pinpointing the key areas that aren't working or need improving." },
                            { title: "Design Kits", body: "Design kits can include a wide range of design elements such as typography, iconography, colour palettes, graphics, user interface components, and more. These elements are often created with a specific brand or product in mind and are designed to be reusable across multiple projects." },
                            { title: "Branding/Re-Branding", body: "Your brand is a representation of who you are. Branding creates the look and feel for your company and helps people to instantly identify with your logo, your tagline, your brand colour, and your brand voice." },
                            { title: "Stationery", body: "As part of your branding strategy, a custom graphic including your company logo can be used all kinds of stationery from letterheads, envelopes, pens, notepads etc. This helps establish your identity and makes your business look credible and professional." },
                            { title: "Graphic Design", body: "Graphics are important in web development because they can make your website look more professional. Visual stimuli will make your website more appealing and keep users interacting with your site for longer." },
                            { title: "Iconography", body: "Iconography is a simple visual language. Using icons to support your content will help visually explain the concept and meaning of your content so that users can better understand the information you are presenting and interpret it more easily." },
                            { title: "Slide Decks", body: "Our design team can create a collection of visual slides for use in a pitch, or presentation or as an aid for storytelling. Slide decks are an excellent tool to present information to an audience and the slides can feature text, images or multimedia content.", span: 1 }
                        ].map((item) => (
                            <div key={item.title} className={item.span ? "row-span-2" : ""}>
                                <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-[#555]">{item.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-8">
                    <span className="h-px w-8 self-center bg-gray-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span className="text-sm text-gray-600">11</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 12 — Support & Maintenance Services */}
            <section
                className="brochure-page flex flex-col bg-white px-16 py-14 text-[#333]"
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
                    <div className="h-8 w-8 rounded-full border flex items-center justify-center" style={{ borderColor: PINK }}>
                        <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                    </div>
                </div>
                <div className="mt-10 flex gap-16">
                    <div className="w-[320px] shrink-0">
                        <h2 className="text-2xl font-bold leading-tight" style={{ color: TEAL }}>
                            Support &
                            <br />
                            Maintenance
                            <br />
                            Services
                        </h2>
                        <p className="mt-4 text-sm font-bold leading-snug text-[#333]">
                            Our dedicated support team is on hand to ensure your site is fully secure and operating at maximum capacity
                        </p>
                        <div className="mt-10 flex items-center gap-3">
                            <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="1" d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
                            </svg>
                            <svg className="h-10 w-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="1" strokeDasharray="2 2" d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-4M3 15v-4m0 0V9a4 4 0 014-4h10a4 4 0 014 4v2" />
                            </svg>
                            <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeWidth="1" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            <div className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                                <div className="h-3 w-3 rounded-full" style={{ backgroundColor: PINK }} />
                            </div>
                        </div>
                    </div>
                    <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                        {[
                            { title: "Support Desk", body: "You can contact our help desk at support@togetherdigital.ie. Our opening hours are Monday - Friday: 9:00am - 5:30pm. If your request is sent outside of regular working hours one of our team will reply to you at the next available time.", email: true },
                            { title: "CMS Updates", body: "CMS updates will help keep your website secure from hackers and improve your overall website performance. Updating your CMS will fix technical issues and bugs, enhance functionality and create a greater user experience." },
                            { title: "Pagespeed Monitoring", body: "Slow loading pages will impact your search engine rankings and affect your conversion rate. Faster loading pages will improve your SEO and user experience making it easier for your website to generate leads, attract traffic and rank higher on Google." },
                            { title: "Hosting", body: "We provide regular website maintenance check-ups and this helps ensure your site is performing optimally and that your website is secure." },
                            { title: "Penetration Testing", body: "Penetration testing is important to protect your website and increase its security profile. Simulating a cyber attack against your website's system will identify and expose vulnerabilities that an attacker could exploit." },
                            { title: "Core Web Vitals Reporting", body: "Google considers a specific set of metrics important to a website's user experience. We use specialist tools to measure Core Web Vitals and evaluate pages across the entire website so we can understand what pages require attention and need improvement." },
                            { title: "GDPR & Cookie Compliance", body: "GDPR (General Data Protection Regulation) protects the privacy of digital users. To achieve GDPR cookie compliance website owners need to be aware of the rules and regulations around tracking and monitoring user behaviour." }
                        ].map((item) => (
                            <div key={item.title}>
                                <h3 className="text-sm font-bold text-[#333]">{item.title}</h3>
                                <p className="mt-2 text-xs leading-relaxed text-[#555]">
                                    {item.email ? (
                                        <>
                                            You can contact our help desk at{" "}
                                            <span className="underline" style={{ color: PINK }}>
                                                support@togetherdigital.ie
                                            </span>
                                            . Our opening hours are Monday - Friday: 9:00am - 5:30pm. If your request is sent outside of regular working hours one of our team will reply to you at the next available time.
                                        </>
                                    ) : (
                                        item.body
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-8">
                    <span className="h-px w-8 self-center bg-gray-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span className="text-sm text-gray-600">12</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 13 — Funnel: white, intro text with pink highlights, 3D funnel, 3 lists */}
            <section
                className="brochure-page flex flex-col bg-white px-16 py-14 text-[#333]"
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
                    <div className="w-[320px] shrink-0">
                        <p className="brochure-serif text-lg leading-relaxed text-[#333]">
                            See how our various implementation services span your{" "}
                            <span style={{ color: PINK }}>full sales funnel</span> from{" "}
                            <span style={{ color: PINK }}>awareness</span> to{" "}
                            <span style={{ color: PINK }}>evaluation</span> and onto{" "}
                            <span style={{ color: PINK }}>negotiation and sale</span>
                        </p>
                    </div>
                    <div className="flex flex-1 items-center justify-center gap-8">
                        <div className="flex flex-col items-center gap-0">
                            <div
                                className="flex h-24 w-48 items-center justify-center rounded-t border-2 border-gray-300 text-sm font-semibold"
                                style={{ backgroundColor: "#F9E7F0", color: PINK }}
                            >
                                Awareness Stage
                            </div>
                            <div
                                className="flex h-20 w-40 items-center justify-center border-x-2 border-b-2 border-gray-300 text-sm font-semibold"
                                style={{ backgroundColor: "#F9E7F0", color: PINK }}
                            >
                                Evaluation Stage
                            </div>
                            <div
                                className="flex h-16 w-32 items-center justify-center rounded-b border-2 border-gray-300 text-sm font-semibold"
                                style={{ backgroundColor: "#F9E7F0", color: PINK }}
                            >
                                Negotiation & Sale
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-8 text-sm">
                            <div>
                                <h3 className="font-bold text-[#333]">Top of Funnel</h3>
                                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-[#555]">
                                    <li>Paid advertising</li>
                                    <li>Social media</li>
                                    <li>SEO</li>
                                    <li>Account-based marketing</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#333]">Middle of Funnel</h3>
                                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-[#555]">
                                    <li>Website design & development</li>
                                    <li>Profile videos</li>
                                    <li>Website content creation</li>
                                    <li>Case studies</li>
                                    <li>Explainer videos</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold text-[#333]">Bottom of Funnel</h3>
                                <ul className="mt-2 list-disc space-y-1 pl-4 text-xs text-[#555]">
                                    <li>Slide decks</li>
                                    <li>Bid responses</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-auto flex justify-end gap-2 pt-8">
                    <span className="h-px w-8 self-center bg-gray-300" />
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400" />
                    <span className="text-sm text-gray-600">13</span>
                </div>
            </section>

            <PageBreak />

            {/* Page 14 — Contact / back cover: black, logo left, Visit/Write/Call right */}
            <section
                className="brochure-page flex items-center justify-between bg-black px-16 py-14 text-white"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="flex items-center">
                    <div>
                        <span className="brochure-script text-5xl" style={{ color: PINK }}>
                            Together
                        </span>
                        <br />
                        <span className="text-2xl font-normal tracking-widest" style={{ color: "#CCCCCC" }}>
                            DIGITAL
                        </span>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm font-semibold tracking-[0.2em] text-white">
                        SPECIALIST DIGITAL AGENCY
                    </p>
                    <div className="mt-8 space-y-6 text-sm">
                        <div>
                            <p className="font-semibold text-white">Visit</p>
                            <p className="mt-1 text-white">togetherdigital.ie</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Write</p>
                            <p className="mt-1 text-white">info@togetherdigital.ie</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Call</p>
                            <p className="mt-1 text-white">+353 (0)1 6814440</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
