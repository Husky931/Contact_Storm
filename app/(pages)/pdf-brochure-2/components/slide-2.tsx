export default function Slide2() {
    return (
        <section
            className="brochure-page flex flex-col bg-background-dark-deep px-16 py-14 text-text-dark"
            style={{ pageBreakAfter: "always" }}
        >
            <p className="text-xs font-medium uppercase tracking-widest text-text-dark">
                INTRODUCTION
            </p>
            <div className="mt-2 h-px w-full bg-text-dark/60" />
            <div className="mt-0 flex flex-1 items-center justify-center gap-24 py-8">
                <div className="max-w-md text-5xl font-light leading-snug text-text-dark">
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
                <div className="max-w-md space-y-6 text-lg leading-relaxed">
                    <p className="text-text-dark/90">
                        Pixaventures is built exclusively to help Chinese manufacturers scale
                        overseas across Europe, North America, the Middle East, and beyond.
                    </p>
                    <p className="text-text-dark/80">
                        Our global team (Chinese, European, American) bridges factory
                        realities with Western buyer expectations so ads, Amazon listings, and
                        websites convert.
                    </p>
                    <p className="text-text-dark/80">
                        We build in-house software to automate lead discovery, outreach, and
                        reporting, giving you a technical edge competitors cannot buy.
                    </p>
                    <p className="text-text-dark/90">
                        <strong className="text-primary-red">Free Export Readiness Audit</strong>{" "}
                        to identify your fastest path to qualified overseas buyers.
                    </p>
                </div>
            </div>
            <div className="mt-auto flex justify-end gap-2 pt-8">
                <span className="h-px w-8 self-center bg-text-dark/60" />
                <span className="h-1.5 w-1.5 rounded-full bg-text-dark" />
                <span className="text-lg font-medium text-text-dark">2</span>
            </div>
        </section>
    )
}
