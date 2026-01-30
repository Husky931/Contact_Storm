import { BRAND_NAVY } from "../constants"

export default function Slide16() {
    return (
        <section
            className="brochure-page flex items-center justify-center px-16 py-2 text-white"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <div className="flex items-start gap-16">
                <div className="flex items-start">
                    <div>
                        <span className="brochure-script text-5xl" style={{ color: "#ff1493" }}>
                            Pixaventures
                        </span>
                        <br />
                        <span className="text-2xl font-normal tracking-widest text-white">
                            DIGITAL
                        </span>
                    </div>
                </div>
                <div className="text-left">
                    <p className="text-2xl font-semibold tracking-[0.2em] text-white">
                        Contact
                    </p>
                    <div className="mt-8 space-y-6 text-xl">
                        <div>
                            <p className="font-semibold text-white">Visit</p>
                            <p className="mt-1 text-white">www.pixaventures.com</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Write</p>
                            <p className="mt-1 text-white">hello@pixaventures.com</p>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Call</p>
                            <p className="mt-1 text-white">+86 (131) 6290 8096</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
