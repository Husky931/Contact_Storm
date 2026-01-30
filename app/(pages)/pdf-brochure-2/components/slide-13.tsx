import { NAV_LINKS } from "../constants"

export default function Slide13() {
    return (
        <section
            className="brochure-page flex flex-col bg-background-dark-deep px-16 pt-14 text-text-dark"
            style={{ pageBreakAfter: "always" }}
        >
            <nav className="flex gap-8 text-xs font-medium text-text-dark/80">
                {NAV_LINKS.map((link, i) => (
                    <span key={link} className={i === 2 ? "font-semibold text-text-dark" : ""}>
                        {link}
                    </span>
                ))}
            </nav>
            <div className="mt-2 h-px w-full bg-text-dark/30" aria-hidden />
            <div className="mt-0 grid flex-1 grid-cols-[75%_1fr] gap-0 py-8">
                <div className="relative flex min-h-0 flex-col pr-4">
                    <div className="relative flex flex-1 items-center justify-center">
                        <span
                            className="brochure-outline-num block -translate-x-40 -translate-y-30 text-[40rem] leading-none"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
                            aria-hidden
                        >
                            03
                        </span>
                    </div>
                    <div className="absolute inset-0 flex items-end justify-center pb-[10%]">
                        <h1 className="brochure-serif text-center text-7xl font-medium leading-tight tracking-tight text-text-dark drop-shadow-sm">
                            Lead Generation
                            <br />
                            <span className="tracking-wide ml-[350px]">Software</span>
                        </h1>
                    </div>
                </div>
                <div className="flex min-h-0 items-center border-l border-text-dark/30 pl-12 ">
                    <p className="max-w-sm text-3xl leading-relaxed text-text-dark/90 px-8">
                        Our in-house lead generation software identifies high-value business in your niche, extracts decision-maker contacts, and automates personalized outreach to generate qualified leads at scale.
                    </p>
                </div>
            </div>
        </section>
    )
}
