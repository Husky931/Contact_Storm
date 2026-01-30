import { BRAND_NAVY } from "../constants"

export default function Slide2() {
    return (
        <section
            className="brochure-page flex flex-col px-16 py-14 text-white"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <p className="text-xs font-medium uppercase tracking-widest">INTRODUCTION</p>
            <div
                className="mt-2 h-px w-24"
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
            />
            <div className="mt-16 flex flex-1 gap-24">
                <div className="max-w-md text-2xl font-light leading-snug">
                    Together Digital
                    <br />
                    is a specialist multi-
                    <br />
                    award-winning
                    <br />
                    web design and
                    <br />
                    conversion agency
                    <br />
                    serving B2B clients
                </div>
                <div className="max-w-md space-y-6 text-sm leading-relaxed">
                    <p>
                        We&apos;ve been helping clients succeed for over 14 years. The key
                        benefit of hiring a marketing agency is knowing you have a team of
                        experienced and motivated marketing professionals working to tell your
                        story and help you break into new markets.
                    </p>
                    <p>
                        We offer a fresh perspective and can utilise the latest tools and
                        technologies to accelerate your campaigns and stimulate company growth.
                    </p>
                    <p>
                        We can also provide strategic advice on how to optimise your sales and
                        recruitment funnels and we offer a broad range of implementation
                        services that can practically address your immediate and ongoing needs.
                    </p>
                    <p>
                        <strong>Read our guide</strong> for a complete overview of our services
                        and agency credentials.
                    </p>
                </div>
            </div>
            <div className="mt-auto flex justify-end gap-2 pt-8">
                <span
                    className="h-px w-8 self-center"
                    style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
                />
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                <span className="text-lg font-medium">2</span>
            </div>
        </section>
    )
}
