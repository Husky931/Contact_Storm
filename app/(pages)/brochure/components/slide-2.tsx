export default function Slide2() {
    return (
        <section
            className="brochure-page flex flex-col bg-background-dark-deep px-4 py-8 text-text-dark sm:px-8 md:px-16 md:py-14"
            style={{ pageBreakAfter: "always" }}
        >
            <p className="text-xs font-medium uppercase tracking-widest text-text-dark">
                INTRODUCTION
            </p>
            <div className="mt-2 h-px w-full bg-text-dark/60" />
            <div className="mt-0 flex flex-1 flex-col items-center justify-center gap-8 py-6 md:flex-row md:gap-24 md:py-8">
                <div className="max-w-md text-3xl font-light leading-snug text-text-dark md:text-5xl">
                    Pixaventures
                    <br />
                    is a foreign-led
                    <br />
                    digital growth
                    <br />
                    agency helping
                    <br />
                    Chinese manufacturers
                    <br />
                    win overseas buyers
                </div>
                <div className="max-w-md space-y-4 text-base leading-relaxed md:space-y-6 md:text-lg">
                    <p className="text-text-dark/90">
                        Pixaventures is built exclusively to help Chinese manufacturers scale
                        overseas across Europe, North America, the Middle East, and beyond.
                    </p>
                    <p className="text-text-dark/80">
                        We build and maintain in-house software to automate lead discovery, outreach, and
                        reporting, giving you a steep competative edge over your competitors.
                    </p>
                    <p className="text-text-dark/80">
                        Our global team bridges sellers
                        realities with Western buyer expectations so paid ads, Amazon listings, and
                        websites have the highest chance of conversion.
                    </p>

                    <p className="text-text-dark/90">
                        <a
                            href="https://www.pixaventures.com/reports"
                            className="text-primary-red font-semibold hover:underline"
                        >
                            Free SEO Report Audit
                        </a>{" "}
                        to identify your fastest path to getting organic traffic.
                    </p>
                </div>
            </div>
            {/* <div className="mt-auto flex justify-end gap-2 pt-8">
                <span className="h-px w-8 self-center bg-text-dark/60" />
                <span className="h-1.5 w-1.5 rounded-full text-center flex justify-center items-center bg-text-dark" />
                <span className="text-lg font-medium text-text-dark">2</span>
            </div> */}
        </section>
    )
}
