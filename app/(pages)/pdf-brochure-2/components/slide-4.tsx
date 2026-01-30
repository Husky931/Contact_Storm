import { NAV_LINKS } from "../constants"

export default function Slide4() {
    return (
        <section
            className="brochure-page flex flex-col bg-background-dark-deep px-16 py-14 text-text-dark"
            style={{ pageBreakAfter: "always" }}
        >
            <nav className="flex gap-8 text-xs font-medium text-text-dark/80">
                {NAV_LINKS.map((link, i) => (
                    <span key={link} className={i === 0 ? "font-semibold text-text-dark" : ""}>
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
                        <h1 className="brochure-serif text-5xl font-normal leading-tight text-text-dark">
                            Strategy
                            <br />
                            & Consulting
                        </h1>
                    </div>
                </div>
                <div className="max-w-sm text-sm leading-relaxed text-text-dark/90">
                    Our consulting team works with you to understand how your sales funnel works
                    currently and how it can be optimised to drive future business success
                </div>
            </div>
            <div className="mt-auto flex justify-end gap-2 pt-8">
                <span className="h-px w-8 self-center bg-text-dark/10" />
                <span className="h-1.5 w-1.5 rounded-full bg-text-dark/20" />
                <span className="text-sm text-text-dark/70">4</span>
            </div>
        </section>
    )
}
