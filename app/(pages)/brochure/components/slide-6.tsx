import { BRAND_NAVY, NAV_LINKS } from "../constants"

export default function Slide6() {
    return (
        <section
            className="brochure-page flex flex-col px-4 py-8 text-white sm:px-8 md:px-16 md:py-14"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <nav className="flex flex-wrap gap-4 text-xs font-medium text-white/70 md:gap-8">
                {NAV_LINKS.map((link, i) => (
                    <span key={link} className={i === 1 ? "font-semibold text-white" : ""}>
                        {link}
                    </span>
                ))}
            </nav>
            <div className="mt-2 h-px w-full bg-white/30" aria-hidden />
            <div className="mt-0 grid flex-1 grid-cols-1 gap-0 py-6 md:grid-cols-[75%_1fr] md:py-8">
                <div className="relative flex min-h-[200px] flex-col pr-0 md:min-h-0 md:pr-4">
                    <div className="relative flex flex-1 items-center justify-center">
                        <span
                            className="brochure-outline-num block -translate-x-20 -translate-y-12 text-[12rem] leading-none md:-translate-x-40 md:-translate-y-30 md:text-[40rem]"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
                            aria-hidden
                        >
                            02
                        </span>
                    </div>
                    <div className="absolute inset-0 flex items-end justify-center pb-[10%]">
                        <h1 className="brochure-serif text-center text-3xl font-medium leading-tight tracking-tight text-white drop-shadow-sm md:text-7xl">
                            Execution
                            <br />
                            <span className="tracking-wide md:ml-[350px]">Services</span>
                        </h1>
                    </div>
                </div>
                <div className="flex min-h-0 items-center border-t border-white/30 pt-6 md:border-t-0 md:border-l md:pl-12 md:pt-0">
                    <p className="max-w-sm text-xl leading-relaxed text-white/90 px-0 md:px-8 md:text-3xl">
                        Once the strategy is defined, we execute across Amazon, paid social, SEO
                        and our lead generation platform to deliver measurable export growth.
                    </p>
                </div>
            </div>
        </section>
    )
}
