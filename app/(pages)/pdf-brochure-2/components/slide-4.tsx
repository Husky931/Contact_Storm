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
            <div className="mt-2 h-px w-full bg-text-dark/30" aria-hidden />
            <div className="mt-0 grid flex-1 grid-cols-[75%_1fr] gap-0 py-8">
                <div className="relative flex min-h-0 items-center justify-center pr-4">
                    <div className="relative flex items-center justify-center">
                        <span
                            className="brochure-outline-num block -translate-y-8 text-[40rem] leading-none"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
                            aria-hidden
                        >
                            01
                        </span>
                        <h1 className="absolute inset-0 flex items-center justify-center brochure-serif text-center text-7xl font-semibold leading-tight text-text-dark">
                            Export Growth
                            <br />
                            Strategy
                        </h1>
                    </div>
                </div>
                <div className="flex min-h-0 items-center border-l border-text-dark/30 pl-12">
                    <p className="max-w-sm text-lg leading-relaxed text-text-dark/90">
                        Factory-first, buyer-centric strategy aligned to your MOQ, certifications,
                        sales cycle, and target export markets.
                    </p>
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
