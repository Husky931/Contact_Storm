import { BRAND_NAVY, NAV_LINKS } from "../constants"

export default function Slide6() {
    return (
        <section
            className="brochure-page flex flex-col px-16 py-14 text-white"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <nav className="flex gap-8 text-xs font-medium text-white/70">
                {NAV_LINKS.map((link, i) => (
                    <span key={link} className={i === 1 ? "font-semibold text-white" : ""}>
                        {link}
                    </span>
                ))}
            </nav>
            <div className="mt-2 h-px w-full bg-white/30" aria-hidden />
            <div className="mt-0 grid flex-1 grid-cols-[75%_1fr] gap-0 py-8">
                <div className="relative flex min-h-0 flex-col pr-4">
                    <div className="relative flex flex-1 items-center justify-center">
                        <span
                            className="brochure-outline-num block -translate-x-40 -translate-y-30 text-[40rem] leading-none"
                            style={{ WebkitTextStroke: "1px rgba(255,255,255,0.35)" }}
                            aria-hidden
                        >
                            02
                        </span>
                    </div>
                    <div className="absolute inset-0 flex items-end justify-center pb-[10%]">
                        <h1 className="brochure-serif text-center text-7xl font-medium leading-tight tracking-tight text-white drop-shadow-sm">
                            Execution
                            <br />
                            <span className="tracking-wide ml-[350px]">Services</span>
                        </h1>
                    </div>
                </div>
                <div className="flex min-h-0 items-center border-l border-white/30 pl-12">
                    <p className="max-w-sm text-lg leading-relaxed text-white/90">
                        Once the strategy is defined, we execute across Amazon, paid social, SEO,
                        websites, and lead generation to deliver measurable export growth.
                    </p>
                </div>
            </div>
        </section>
    )
}
