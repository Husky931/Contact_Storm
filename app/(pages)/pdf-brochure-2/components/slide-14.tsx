import { BRAND_NAVY, BRAND_RED } from "../constants"

export default function Slide14() {
    return (
        <section
            className="brochure-page flex items-center justify-between px-16 py-14 text-white"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <div className="flex items-center">
                <div>
                    <span className="brochure-script text-5xl" style={{ color: BRAND_RED }}>
                        Together
                    </span>
                    <br />
                    <span className="text-2xl font-normal tracking-widest" style={{ color: "#CCCCCC" }}>
                        DIGITAL
                    </span>
                </div>
            </div>
            <div className="text-right">
                <p className="text-sm font-semibold tracking-[0.2em] text-white">
                    SPECIALIST DIGITAL AGENCY
                </p>
                <div className="mt-8 space-y-6 text-sm">
                    <div>
                        <p className="font-semibold text-white">Visit</p>
                        <p className="mt-1 text-white">togetherdigital.ie</p>
                    </div>
                    <div>
                        <p className="font-semibold text-white">Write</p>
                        <p className="mt-1 text-white">info@togetherdigital.ie</p>
                    </div>
                    <div>
                        <p className="font-semibold text-white">Call</p>
                        <p className="mt-1 text-white">+353 (0)1 6814440</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
