import { BRAND_NAVY, BRAND_RED, NAV_LINKS } from "../constants"

const BRANDING_SERVICES = [
    { title: "Brand Audits", body: "A brand audit evaluates how your brand is performing in the marketplace. A full analysis will help you know your brand's position pinpointing the key areas that aren't working or need improving." },
    { title: "Design Kits", body: "Design kits can include a wide range of design elements such as typography, iconography, colour palettes, graphics, user interface components, and more. These elements are often created with a specific brand or product in mind and are designed to be reusable across multiple projects." },
    { title: "Branding/Re-Branding", body: "Your brand is a representation of who you are. Branding creates the look and feel for your company and helps people to instantly identify with your logo, your tagline, your brand colour, and your brand voice." },
    { title: "Stationery", body: "As part of your branding strategy, a custom graphic including your company logo can be used all kinds of stationery from letterheads, envelopes, pens, notepads etc. This helps establish your identity and makes your business look credible and professional." },
    { title: "Graphic Design", body: "Graphics are important in web development because they can make your website look more professional. Visual stimuli will make your website more appealing and keep users interacting with your site for longer." },
    { title: "Iconography", body: "Iconography is a simple visual language. Using icons to support your content will help visually explain the concept and meaning of your content so that users can better understand the information you are presenting and interpret it more easily." },
    { title: "Slide Decks", body: "Our design team can create a collection of visual slides for use in a pitch, or presentation or as an aid for storytelling. Slide decks are an excellent tool to present information to an audience and the slides can feature text, images or multimedia content.", span: 1 }
]

export default function Slide11() {
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
                        Branding & Graphic
                        <br />
                        Design Services
                    </h2>
                    <p className="mt-4 text-sm font-bold leading-snug text-[#1b2737]">
                        We have specialists in various design disciplines. We take the time to understand who you are and what you want to achieve
                    </p>
                    <div className="mt-10 flex items-center gap-3">
                        <div className="h-4 w-4 rounded-full" style={{ backgroundColor: BRAND_RED }} />
                        <svg className="h-8 w-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <circle cx="12" cy="12" r="9" strokeWidth="1" strokeDasharray="4 2" />
                        </svg>
                        <svg className="h-10 w-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M12 2v20M4 8h16M4 16h16" />
                        </svg>
                        <svg className="h-6 w-6" style={{ color: BRAND_NAVY }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="1" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                    </div>
                </div>
                <div className="grid flex-1 grid-cols-4 gap-x-6 gap-y-8">
                    {BRANDING_SERVICES.map((item) => (
                        <div key={item.title} className={item.span ? "row-span-2" : ""}>
                            <h3 className="text-sm font-bold text-[#1b2737]">{item.title}</h3>
                            <p className="mt-2 text-xs leading-relaxed text-text">{item.body}</p>
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
    )
}
