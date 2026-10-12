import { NAV_LINKS } from "../constants"

export default function Slide4() {
    return (
        <section
            className="brochure-page flex flex-col bg-background-dark-deep px-4 pt-8 text-text-dark sm:px-8 md:px-16 md:pt-14"
            style={{ pageBreakAfter: "always" }}
        >
            <nav className="flex flex-wrap gap-4 text-xs font-medium text-text-dark/80 md:gap-8">
                {NAV_LINKS.map((link, i) => (
                    <span key={link} className={i === 0 ? "font-semibold text-text-dark" : ""}>
                        {link}
                    </span>
                ))}
            </nav>
            <div className="mt-2 h-px w-full bg-text-dark/30" aria-hidden />
            <div className="mt-0 grid flex-1 grid-cols-1 gap-0 py-6 md:grid-cols-[75%_1fr] md:py-8">
                <div className="relative flex min-h-[200px] flex-col pr-0 md:min-h-0 md:pr-4">
                    <div className="relative flex flex-1 items-center justify-center">
                        <span
                            className="brochure-outline-num block -translate-x-20 -translate-y-12 text-[12rem] leading-none md:-translate-x-40 md:-translate-y-30 md:text-[40rem]"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
                            aria-hidden
                        >
                            01
                        </span>
                    </div>
                    <div className="absolute inset-0 flex items-end justify-center pb-[10%]">
                        <h1 className="brochure-serif text-center text-3xl font-medium leading-tight tracking-tight text-text-dark drop-shadow-sm md:text-7xl">
                            Export Growth
                            <br />
                            <span className="tracking-wide md:ml-[350px]">Strategy</span>
                        </h1>
                    </div>
                </div>
                <div className="flex min-h-0 items-center border-t border-text-dark/30 pt-6 md:border-t-0 md:border-l md:pl-12 md:pt-0">
                    <p className="max-w-sm text-xl leading-relaxed text-text-dark/90 px-0 md:px-8 md:text-3xl">
                        Sellers-first, buyer-centric strategy aligned to your ideal target customer,
                        sales cycle, budget and target export markets.
                    </p>
                </div>
            </div>
        </section>
    )
}
