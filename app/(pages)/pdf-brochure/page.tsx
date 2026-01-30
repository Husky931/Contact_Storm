import type { Metadata } from "next"
import BrochurePDFButton from "@/components/BrochurePDFButton"

export const metadata: Metadata = {
    title: "Brochure | Contact Storm",
    description: "Contact Storm — Specialist B2B digital agency. Strategy-led thinking. Transformative results."
}

const NAV_LINKS = [
    "01. STRATEGY & CONSULTING",
    "02. IMPLEMENTATION SERVICES",
    "03. OUR WORK",
    "04. ABOUT US"
]

function BrochurePageBreak() {
    return <div className="print:break-after-page" style={{ pageBreakAfter: "always" }} />
}

export default function PdfBrochurePage() {
    return (
        <div className="brochure-print bg-background min-h-screen">
            <BrochurePDFButton />

            {/* Cover */}
            <section
                className="flex min-h-dvh flex-col justify-between bg-primary-main px-8 py-16 text-white print:min-h-0 print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <div />
                <div>
                    <p className="font-heading text-center text-sm tracking-[0.4em] text-white/90">
                        S P E C I A L I S T &nbsp; B 2 B &nbsp; D I G I T A L &nbsp; A G E N C Y
                    </p>
                    <h1 className="font-heading mt-6 text-center text-4xl font-semibold leading-tight md:text-5xl">
                        Strategy-led thinking.
                    </h1>
                    <h1 className="font-heading mt-2 text-center text-4xl font-semibold leading-tight text-primary-red md:text-5xl">
                        Transformative results.
                    </h1>
                </div>
                <p className="text-center text-xs text-white/60">— 1 —</p>
            </section>

            <BrochurePageBreak />

            {/* Introduction */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary-main">
                    INTRODUCTION
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-main/90">
                    We&apos;ve been helping clients succeed for over 14 years. The key benefit of hiring a
                    marketing agency is knowing you have a team of experienced and motivated marketing
                    professionals working to tell your story and help you break into new markets.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-main/90">
                    We offer a fresh perspective and can utilise the latest tools and technologies to
                    accelerate your campaigns and stimulate company growth.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-main/90">
                    We can also provide strategic advice on how to optimise your sales and recruitment
                    funnels and we offer a broad range of implementation services that can practically
                    address your immediate and ongoing needs.
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-primary-main/90">
                    Read our guide for a complete overview of our services and agency credentials.
                </p>
                <p className="font-heading mt-10 text-xl font-semibold leading-snug text-primary-main">
                    Contact Storm
                    <br />
                    <span className="text-primary-red">is a specialist multi-award-winning</span>
                    <br />
                    web design and conversion agency
                    <br />
                    serving B2B clients
                </p>
                <p className="mt-12 text-right text-xs text-primary-main/50">— 2 —</p>
            </section>

            <BrochurePageBreak />

            {/* Table of contents */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <h2 className="font-heading text-2xl font-semibold tracking-tight text-primary-main">
                    TABLE OF CONTENTS
                </h2>
                <div className="mt-10 grid gap-8 md:grid-cols-2">
                    <div>
                        <h3 className="font-heading text-lg font-semibold text-primary-red">
                            Strategy & Consulting
                        </h3>
                        <h3 className="mt-4 font-heading text-lg font-semibold text-primary-main">
                            Implementation Services
                        </h3>
                        <ul className="mt-2 space-y-1 text-sm text-primary-main/90">
                            <li>• Website and Digital Design</li>
                            <li>• Website Development</li>
                            <li>• Demand Generation</li>
                            <li>• Video & Content</li>
                            <li>• Branding & Graphic Design</li>
                            <li>• Support & Maintenance</li>
                        </ul>
                        <h3 className="mt-6 font-heading text-lg font-semibold text-primary-main">
                            Our Work
                        </h3>
                        <h3 className="mt-2 font-heading text-lg font-semibold text-primary-main">
                            Agency Credentials
                        </h3>
                    </div>
                    <div className="font-heading flex flex-col justify-center text-right text-6xl font-bold text-primary-red/20 md:text-7xl">
                        delivering
                        <br />
                        high-performance
                        <br />
                        marketing
                        <br />
                        solutions
                    </div>
                </div>
                <div className="mt-12 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-main/60">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-8 text-right text-xs text-primary-main/50">— 3 —</p>
            </section>

            <BrochurePageBreak />

            {/* Strategy & Consulting — hero */}
            <section
                className="bg-primary-main px-8 py-16 text-white print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <p className="text-sm text-white/80">
                    Our consulting team works with you to understand how your sales funnel works
                    currently and how it can be optimised to drive future business success
                </p>
                <h2 className="font-heading mt-8 text-3xl font-semibold text-primary-red md:text-4xl">
                    01 Strategy & Consulting
                </h2>
                <div className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-8 text-right text-xs text-white/50">— 4 —</p>
            </section>

            <BrochurePageBreak />

            {/* Strategy & Consulting — value props grid */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
                        },
                        {
                            title: "Conversion Optimisation",
                            body: "We can optimise your website to ensure it is SEO-Ready and favoured by search engines. Optimising your website to improve the user experience will positively impact your sales funnel and help drive business growth."
                        }
                    ].map((item) => (
                        <div key={item.title} className="print:break-inside-avoid">
                            <h3 className="font-heading text-base font-semibold text-primary-red">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-primary-main/90">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
                <p className="font-heading mt-10 text-lg font-semibold text-primary-main">
                    We are a Strategy-led Agency. We advise on all aspects of your sales and
                    recruitment funnels.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-main/60">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-6 text-right text-xs text-primary-main/50">— 5 —</p>
            </section>

            <BrochurePageBreak />

            {/* Implementation Services intro */}
            <section
                className="bg-primary-main px-8 py-16 text-white print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <p className="max-w-2xl text-sm leading-relaxed text-white/90">
                    Once we have defined the correct strategy to address your sales & marketing
                    challenges we offer a broad range of implementation services to deliver the agreed
                    plan.
                </p>
                <h2 className="font-heading mt-8 text-3xl font-semibold text-primary-red md:text-4xl">
                    02 Implementation Services
                </h2>
                <div className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-8 text-right text-xs text-white/50">— 6 —</p>
            </section>

            <BrochurePageBreak />

            {/* Website and Digital Design */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="grid gap-8 sm:grid-cols-2">
                    {[
                        {
                            title: "Website Design",
                            body: "How a person feels when interacting with a website will determine whether or not they return. A great website design provides a positive experience enhancing user engagement and keeping users on your site for longer."
                        },
                        {
                            title: "Landing Page Design",
                            body: "A landing page will help drive traffic to your site and improve your SEO. In B2B landing pages are great for lead generation and are an effective marketing tool to encourage users to take action."
                        },
                        {
                            title: "Email Newsletters",
                            body: "Nothing is more effective than direct communication with your customers. Email newsletters allow you to maintain regular contact with your clients by sending relevant information and updates straight to their inboxes."
                        },
                        {
                            title: "Social Media Assets",
                            body: "We can create a dynamic range of content to distribute across your social media channels, from imagery to infographics to live-action videos that will push your campaign in the right direction."
                        },
                        {
                            title: "Display Advertising",
                            body: "Display ads are a type of advertising that combine well-crafted text, eye-catching visuals and a strong CTA to help boost your brand awareness and increase visibility online."
                        },
                        {
                            title: "Slide Decks",
                            body: "Slide decks are simply a collection of graphic slides that are put together to support a presentation and are very effective in conveying your message to an audience. They are also often used for education and training purposes."
                        },
                        {
                            title: "Bid Responses",
                            body: "Putting a tender proposal together is tricky but we can implement a host of different assets from graphic design, copywriting and video content creation to make your submission more compelling and help you win that contract."
                        }
                    ].map((item) => (
                        <div key={item.title} className="print:break-inside-avoid">
                            <h3 className="font-heading text-base font-semibold text-primary-red">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-primary-main/90">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="font-heading mt-10 text-xl font-semibold text-primary-main">
                    Website and Digital Design Services
                </h2>
                <p className="mt-1 font-medium text-primary-red">
                    Impactful design that supports your sales & recruitment funnels
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-main/60">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-6 text-right text-xs text-primary-main/50">— 7 —</p>
            </section>

            <BrochurePageBreak />

            {/* Website Development */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="grid gap-8 sm:grid-cols-2">
                    {[
                        {
                            title: "Headless CMS",
                            body: "Headless CMS technology delivers faster page load speeds enhancing the user experience. The cloud-based system also provides increased security benefits for your website."
                        },
                        {
                            title: "Payment System Integrations",
                            body: "A strong, reliable payment system on your website will be of great value to your users. Integrating a payment system into your platform will make the payment process far more seamless and improve the user experience for your customers."
                        },
                        {
                            title: "Custom Animations",
                            body: "Moving images will capture your audience's attention and help keep them engaged with your content. Web animation can greatly influence users' actions on your website and improve the UX journey."
                        },
                        {
                            title: "Ongoing Performance Monitoring",
                            body: "We can track how your website is performing using the latest performance monitoring tools and software. Knowing how your site is performing indicates the elements of your site that are working well and those that need improving."
                        },
                        {
                            title: "Advanced Functionality",
                            body: "A functional website focuses on the user journey. Creating a great user experience will keep users on your website for longer and this helps to generate leads that could eventually turn into paying customers."
                        },
                        {
                            title: "Website Audits",
                            body: "A website audit is basically a routine health checkup for your site. We will carry out a full analysis and fix any errors to ensure your website performs at peak capacity and is SEO-optimised to be visible to search engines."
                        },
                        {
                            title: "Third-Party Integrations",
                            body: "Leveraging third-party API can create a more impactful UX and customer-centric site. Adding features like payment integrations will boost your website's capability and streamline the user's journey."
                        },
                        {
                            title: "Portals",
                            body: "Website portals are very effective for gathering information from various sources into a single user interface. This single centralised channel provides a gateway of communication for your business for employees, clients and customers."
                        }
                    ].map((item) => (
                        <div key={item.title} className="print:break-inside-avoid">
                            <h3 className="font-heading text-base font-semibold text-primary-red">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-primary-main/90">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="font-heading mt-10 text-xl font-semibold text-primary-main">
                    Website Development Services
                </h2>
                <p className="mt-1 font-medium text-primary-red">
                    Technically strong, superfast, future-proofed websites
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-main/60">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-6 text-right text-xs text-primary-main/50">— 8 —</p>
            </section>

            <BrochurePageBreak />

            {/* Demand Generation */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="grid gap-8 sm:grid-cols-2">
                    {[
                        {
                            title: "Paid Advertising",
                            body: "Paid advertising is one of the quickest ways to get results. Using a digital advertising strategy will help you reach specific demographics, increase engagement and attract traffic to your website faster than organic marketing."
                        },
                        {
                            title: "Account-Based Marketing",
                            body: "In ABM, sales and marketing teams align to pursue a targeted set of high-value accounts that will be a good fit for your business. When done right ABM can deliver a higher return on investment than any other marketing strategy."
                        },
                        {
                            title: "Search Engine Optimisation",
                            body: "SEO is hugely important if you want to increase your website traffic. It is also a cost-effective practice helping to build the quality and quantity of your traffic organically."
                        },
                        {
                            title: "Keyword Research",
                            body: "Doing keyword research will provide you with the relevant keywords users are using to search with. Knowing the right keywords to implement in your text will make your content more visible to search engines and make it easier for users to find you."
                        },
                        {
                            title: "Email Marketing",
                            body: "Email marketing is a very effective communication tool for business leaders. Sending emails allows you to maintain regular contact with customers and acquire new customers using targeted and personalised email campaigns."
                        },
                        {
                            title: "Video Marketing",
                            body: "Videos are a very effective lead-generation tool. They are also a great way to explain your product or service. Search engines love video so adding a video to your website will help boost SEO and increase traffic to your site."
                        },
                        {
                            title: "Social Media Management",
                            body: "We can develop a social media strategy to help you get the most from your social media marketing efforts. Getting your message to the right people, in the right way, and keeping track of your data will inform what content is really connecting with your audience."
                        }
                    ].map((item) => (
                        <div key={item.title} className="print:break-inside-avoid">
                            <h3 className="font-heading text-base font-semibold text-primary-red">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-primary-main/90">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="font-heading mt-10 text-xl font-semibold text-primary-main">
                    Demand Generation Services
                </h2>
                <p className="mt-1 font-medium text-primary-red">
                    Drive consistent lead flows and take the volatility out of your sales pipeline
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-main/60">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-6 text-right text-xs text-primary-main/50">— 9 —</p>
            </section>

            <BrochurePageBreak />

            {/* Video & Content */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="grid gap-8 sm:grid-cols-2">
                    {[
                        {
                            title: "Website Content",
                            body: "Write with your audience in mind. Quality content that informs and educates the user will keep them on your website for longer and help you build credibility for your business."
                        },
                        {
                            title: "Infographics",
                            body: "Infographics are a dynamic mix of graphic design, imagery, data and content. They are very effective at helping users better understand complex information by breaking down difficult concepts into a clear and simple visual format."
                        },
                        {
                            title: "Blog Content",
                            body: "Blogging should be a key part of your content marketing strategy. Blogs are an affordable marketing solution that will help you keep your users engaged. The more useful content you create, the more trust you will generate."
                        },
                        {
                            title: "Advertising Copy",
                            body: "How do you communicate the value of your product or service to potential buyers? Choose your words carefully to convey the message you want. Good copywriting will connect with your prospective customers and persuade them to act."
                        },
                        {
                            title: "Explainer Videos",
                            body: "Explainer videos are a quick and effective way to introduce and explain the value of your product or service. Videos are a powerful marketing tool and can have far more impact than a piece of text. Using video will also improve your search engine rankings."
                        },
                        {
                            title: "Website Content Reviews",
                            body: "Does your website content need updating? We can review your site's content to ensure it is properly optimised for search engines, engaging for users and also outlines your value propositions in a clear and compelling way."
                        },
                        {
                            title: "Profile Videos",
                            body: "A short marketing video telling the story of your company and how your product or service can help solve your customers' problems will boost your brand awareness and reach your target audience."
                        },
                        {
                            title: "Content Editing",
                            body: "Need help optimising your content for users and search engines? We edit all kinds of copy making sure it is SEO-Ready, on-brand, and grammatically accurate. We edit all kinds of copy, including scripts."
                        },
                        {
                            title: "Bid Response Videos",
                            body: "You will add great value to your tender submission and stand out from your competitors with video. Video is one of the best ways to capture attention and done right will help you get your proposal across in a clear, engaging and memorable way."
                        }
                    ].map((item) => (
                        <div key={item.title} className="print:break-inside-avoid">
                            <h3 className="font-heading text-base font-semibold text-primary-red">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-primary-main/90">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="font-heading mt-10 text-xl font-semibold text-primary-main">
                    Video & Content Production
                </h2>
                <p className="mt-1 font-medium text-primary-red">
                    Make your propositions more compelling with the most engaging content formats
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-main/60">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-6 text-right text-xs text-primary-main/50">— 10 —</p>
            </section>

            <BrochurePageBreak />

            {/* Branding & Graphic Design */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="grid gap-8 sm:grid-cols-2">
                    {[
                        {
                            title: "Brand Audits",
                            body: "A brand audit evaluates how your brand is performing in the marketplace. A full analysis will help you know your brand's position pinpointing the key areas that aren't working or need improving."
                        },
                        {
                            title: "Design Kits",
                            body: "Design kits can include a wide range of design elements such as typography, iconography, colour palettes, graphics, user interface components, and more. These elements are often created with a specific brand or product in mind and are designed to be reusable across multiple projects."
                        },
                        {
                            title: "Branding/Re-Branding",
                            body: "Your brand is a representation of who you are. Branding creates the look and feel for your company and helps people to instantly identify with your logo, your tagline, your brand colour, and your brand voice."
                        },
                        {
                            title: "Stationery",
                            body: "As part of your branding strategy, a custom graphic including your company logo can be used on all kinds of stationery from letterheads, envelopes, pens, notepads etc. This helps establish your identity and makes your business look credible and professional."
                        },
                        {
                            title: "Graphic Design",
                            body: "Graphics are important in web development because they can make your website look more professional. Visual stimuli will make your website more appealing and keep users interacting with your site for longer."
                        },
                        {
                            title: "Iconography",
                            body: "Iconography is a simple visual language. Using icons to support your content will help visually explain the concept and meaning of your content so that users can better understand the information you are presenting and interpret it more easily."
                        },
                        {
                            title: "Slide Decks",
                            body: "Our design team can create a collection of visual slides for use in a pitch, or presentation or as an aid for storytelling. Slide decks are an excellent tool to present information to an audience and the slides can feature text, images or multimedia content."
                        }
                    ].map((item) => (
                        <div key={item.title} className="print:break-inside-avoid">
                            <h3 className="font-heading text-base font-semibold text-primary-red">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-primary-main/90">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="font-heading mt-10 text-xl font-semibold text-primary-main">
                    Branding & Graphic Design Services
                </h2>
                <p className="mt-1 font-medium text-primary-red">
                    We have specialists in various design disciplines. We take the time to understand
                    who you are and what you want to achieve.
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-main/60">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-6 text-right text-xs text-primary-main/50">— 11 —</p>
            </section>

            <BrochurePageBreak />

            {/* Support & Maintenance */}
            <section
                className="bg-background-white px-8 py-16 text-primary-main print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <div className="grid gap-8 sm:grid-cols-2">
                    {[
                        {
                            title: "Support Desk",
                            body: "You can contact our help desk. Our opening hours are Monday - Friday: 9:00am - 5:30pm. If your request is sent outside of regular working hours one of our team will reply to you at the next available time."
                        },
                        {
                            title: "Penetration Testing",
                            body: "Penetration testing is important to protect your website and increase its security profile. Simulating a cyber attack against your website's system will identify and expose vulnerabilities that an attacker could exploit."
                        },
                        {
                            title: "CMS Updates",
                            body: "CMS updates will help keep your website secure from hackers and improve your overall website performance. Updating your CMS will fix technical issues and bugs, enhance functionality and create a greater user experience."
                        },
                        {
                            title: "Core Web Vitals Reporting",
                            body: "Google considers a specific set of metrics important to a website's user experience. We use specialist tools to measure Core Web Vitals and evaluate pages across the entire website so we can understand what pages require attention and need improvement."
                        },
                        {
                            title: "Pagespeed Monitoring",
                            body: "Slow loading pages will impact your search engine rankings and affect your conversion rate. Faster loading pages will improve your SEO and user experience making it easier for your website to generate leads, attract traffic and rank higher on Google."
                        },
                        {
                            title: "GDPR & Cookie Compliance",
                            body: "GDPR (General Data Protection Regulation) protects the privacy of digital users. To achieve GDPR cookie compliance website owners need to be aware of the rules and regulations around tracking and monitoring user behaviour."
                        },
                        {
                            title: "Hosting",
                            body: "We provide regular website maintenance check-ups and this helps ensure your site is performing optimally and that your website is secure."
                        }
                    ].map((item) => (
                        <div key={item.title} className="print:break-inside-avoid">
                            <h3 className="font-heading text-base font-semibold text-primary-red">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-primary-main/90">
                                {item.body}
                            </p>
                        </div>
                    ))}
                </div>
                <h2 className="font-heading mt-10 text-xl font-semibold text-primary-main">
                    Support & Maintenance Services
                </h2>
                <p className="mt-1 font-medium text-primary-red">
                    Our dedicated support team is on hand to ensure your site is fully secure and
                    operating at maximum capacity
                </p>
                <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-main/60">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-6 text-right text-xs text-primary-main/50">— 12 —</p>
            </section>

            <BrochurePageBreak />

            {/* Funnel / Our Work */}
            <section
                className="bg-primary-main px-8 py-16 text-white print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <h2 className="font-heading text-2xl font-semibold text-white">
                    See how our various implementation services span your full sales funnel from
                    awareness to evaluation and onto negotiation and sale
                </h2>
                <div className="mt-10 grid gap-8 md:grid-cols-3">
                    <div>
                        <h3 className="font-heading text-lg font-semibold text-primary-red">
                            Awareness Stage
                        </h3>
                        <h3 className="font-heading mt-2 text-lg font-semibold text-white">
                            Top of Funnel
                        </h3>
                        <ul className="mt-3 space-y-1 text-sm text-white/90">
                            <li>• Paid advertising</li>
                            <li>• Social media</li>
                            <li>• SEO</li>
                            <li>• Account-based marketing</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading text-lg font-semibold text-primary-red">
                            Evaluation Stage
                        </h3>
                        <h3 className="font-heading mt-2 text-lg font-semibold text-white">
                            Middle of Funnel
                        </h3>
                        <ul className="mt-3 space-y-1 text-sm text-white/90">
                            <li>• Website design & development</li>
                            <li>• Profile videos</li>
                            <li>• Website content creation</li>
                            <li>• Case studies</li>
                            <li>• Explainer videos</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-heading text-lg font-semibold text-primary-red">
                            Negotiation & Sale
                        </h3>
                        <h3 className="font-heading mt-2 text-lg font-semibold text-white">
                            Bottom of Funnel
                        </h3>
                        <ul className="mt-3 space-y-1 text-sm text-white/90">
                            <li>• Slide decks</li>
                            <li>• Bid responses</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/70">
                    {NAV_LINKS.map((link) => (
                        <span key={link}>{link}</span>
                    ))}
                </div>
                <p className="mt-8 text-right text-xs text-white/50">— 13 —</p>
            </section>

            <BrochurePageBreak />

            {/* Contact / Back cover */}
            <section
                className="flex min-h-[80dvh] flex-col justify-center bg-primary-main px-8 py-16 text-white print:min-h-0 print:py-12"
                style={{ pageBreakAfter: "always" }}
            >
                <p className="font-heading text-center text-sm tracking-[0.4em] text-white/90">
                    S P E C I A L I S T &nbsp; D I G I T A L &nbsp; A G E N C Y
                </p>
                <div className="mt-12 flex flex-col items-center gap-8 text-center md:flex-row md:justify-center md:gap-16">
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-primary-red">
                            Visit
                        </p>
                        <p className="font-heading mt-1 text-lg font-semibold">contactstorm.com</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-primary-red">
                            Write
                        </p>
                        <p className="font-heading mt-1 text-lg font-semibold">
                            info@contactstorm.com
                        </p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold tracking-widest text-primary-red">
                            Call
                        </p>
                        <p className="font-heading mt-1 text-lg font-semibold">+1 (0) 000 000 0000</p>
                    </div>
                </div>
                <p className="mt-16 text-center text-xs text-white/50">— 14 —</p>
            </section>
        </div>
    )
}
