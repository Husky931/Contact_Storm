import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const WEB_DEV_SERVICES = [
    { title: "Headless CMS", body: "Headless CMS technology delivers faster page load speeds enhancing the user experience. The cloud-based system also provides increased security benefits for your website." },
    { title: "Payment System Integrations", body: "A strong, reliable payment system on your website will be of great value to your users. Integrating a payment system into your platform will make the payment process far more seamless and improve the user experience for your customers." },
    { title: "Custom Animations", body: "Moving images will capture your audience's attention and help keep them engaged with your content. Web animation can greatly influence users' actions on your website and improve the UX journey." },
    { title: "Ongoing Performance Monitoring", body: "We can track how your website is performing using the latest performance monitoring tools and software. Knowing how your site is performing indicates the elements of your site that are working well and those that need improving." },
    { title: "Advanced Functionality", body: "A functional website focuses on the user journey. Creating a great user experience will keep users on your website for longer and this helps to generate leads that could eventually turn into paying customers." },
    { title: "Website Audits", body: "A website audit is basically a routine health checkup for your site. We will carry out a full analysis and fix any errors to ensure your website performs at peak capacity and is SEO-optimised to be visible to search engines." },
    { title: "Third-Party Integrations", body: "Leveraging third-party API can create a more impactful UX and customer-centric site. Adding features like payment integrations will boost your website's capability and streamline the user's journey." },
    { title: "Portals", body: "Website portals are very effective for gathering information from various sources into a single user interface. This single centralised channel provides a gateway of communication for your business for employees, clients and customers." }
]

export default function Slide8() {
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
                        Website Development
                        <br />
                        Services
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
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
                                <span className="rounded bg-gray-100 px-1" style={{ color: BRAND_RED }}>⚡</span>
                                &gt;
                            </div>
                        </div>
                        <div className="mb-2 h-12 w-1 rounded-full" style={{ backgroundColor: BRAND_NAVY }} />
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                    {WEB_DEV_SERVICES.map((item) => (
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
                <span className="text-sm text-gray-600">8</span>
            </div>
        </section>
    )
}
