import { BRAND_NAVY, NAV_LINKS } from "../constants"

export default function Slide6() {
    return (
        <section
            className="brochure-page flex flex-col text-white"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
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
                        Execution
                        <br />
                        Services
                    </h1>
                </div>
                <div
                    className="w-px shrink-0 bg-white/20"
                    style={{ marginTop: "3rem", marginBottom: "3rem" }}
                />
                <div className="flex w-[380px] shrink-0 flex-col justify-center px-12 py-12 text-sm leading-relaxed text-white/95">
                    Once the strategy is defined, we execute across Amazon, paid social, SEO,
                    websites, and lead generation to deliver measurable export growth.
                </div>
            </div>
            <div className="flex justify-end gap-2 px-16 pb-14 pt-8">
                <span className="h-px w-8 self-center bg-white/3" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/4" />
                <span className="text-sm">6</span>
            </div>
        </section>
    )
}
