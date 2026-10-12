import { BRAND_NAVY } from "../constants"

export default function Slide16() {
    return (
        <section
            className="brochure-page relative flex items-center justify-center px-4 py-8 text-white sm:px-8 md:px-16 md:py-2"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <div className="flex flex-col items-start gap-8 md:flex-row md:gap-x-20">
                <div className="flex items-start">
                    <div>
                        <span className="brochure-script text-3xl md:text-5xl" style={{ color: "#ff1493" }}>
                            Pixaventures
                        </span>
                        <br />
                        <span className="text-lg font-normal tracking-widest text-white md:text-2xl">
                            DIGITAL
                        </span>
                    </div>
                </div>
                <div className="text-left">
                    <p className="text-xl font-semibold tracking-[0.2em] text-white md:text-2xl">
                        Contact
                    </p>
                    <div className="mt-6 space-y-4 text-base md:mt-8 md:space-y-6 md:text-xl">
                        <div>
                            <p className="font-semibold text-white">Visit</p>
                            <a
                                href="https://www.pixaventures.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-1 block text-white italic underline decoration-white/60 hover:decoration-white"
                            >
                                www.pixaventures.com
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Write</p>
                            <a
                                href="mailto:hello@pixaventures.com"
                                className="mt-1 block text-white italic underline decoration-white/60 hover:decoration-white"
                            >
                                hello@pixaventures.com
                            </a>
                        </div>
                        <div>
                            <p className="font-semibold text-white">Call</p>
                            <a
                                href="tel:+8613162908096"
                                className="mt-1 block text-white italic underline decoration-white/60 hover:decoration-white"
                            >
                                +86 (131) 6290 8096
                            </a>
                        </div>

                    </div>
                </div>
                <div className="text-left">
                    <p className="text-xl font-semibold tracking-[0.2em] text-white md:text-2xl">
                        Office
                    </p>
                    <div className="mt-6 space-y-2 text-base md:mt-8 md:text-xl">
                        <div>
                            <p className="mt-1 text-white italic">WeWork China (West Nanjing Road Community)</p>
                        </div>
                        <div>
                            <p className="mt-1 text-white italic">West Nanjing Road, Jing&apos;an District</p>
                        </div>
                        <div>
                            <p className="mt-1 text-white italic">Shanghai, China 200040</p>
                        </div>
                        <div>
                            <p className="mt-1 text-white italic">WeWork中国（南京西路社区店）</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}
