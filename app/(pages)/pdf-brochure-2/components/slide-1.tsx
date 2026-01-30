import { BRAND_NAVY, BRAND_RED } from "../constants"

function RadiatingLines() {
    const lineCount = 80
    const lines = Array.from({ length: lineCount }, (_, i) => {
        const angle = (i / lineCount) * 200 - 100
        const length = 280 + (i % 7) * 45
        const rad = (angle * Math.PI) / 180
        const x2 = 400 + Math.cos(rad) * length
        const y2 = 424 + Math.sin(rad) * length
        return (
            <line
                key={i}
                x1="400"
                y1="424"
                x2={x2}
                y2={y2}
                stroke={BRAND_RED}
                strokeWidth="0.5"
            />
        )
    })
    return (
        <div className="radiating-lines">
            <svg width="100%" height="100%" viewBox="0 0 600 848" className="absolute right-0 top-0">
                {lines}
            </svg>
        </div>
    )
}

export default function Slide1() {
    return (
        <section
            className="brochure-page flex flex-col justify-between px-16 py-14 text-white"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <div className="flex items-start">
                <div>
                    <span
                        className="brochure-script text-4xl"
                        style={{ color: BRAND_RED }}
                    >
                        Pixaventures
                    </span>
                    <br />
                    <span
                        className="text-xl font-normal tracking-widest"
                        style={{ color: "#CCCCCC" }}
                    >
                        EXPORT GROWTH AGENCY
                    </span>
                </div>
            </div>
            <div className="relative z-10 max-w-[55%]">
                <p className="brochure-serif text-4xl font-normal text-white">
                    We help Chinese manufacturers
                </p>
                <p className="brochure-serif mt-2 text-5xl font-bold text-white">
                    win overseas buyers
                    <span style={{ color: BRAND_RED }}>.</span>
                </p>
                <p
                    className="mt-12 text-sm font-medium tracking-[0.35em]"
                    style={{ color: "#FFFFFF" }}
                >
                    FOREIGN-LED EXPORT GROWTH AGENCY
                </p>
            </div>
            <div />
            <RadiatingLines />
        </section>
    )
}
