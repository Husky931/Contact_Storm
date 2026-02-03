import { BRAND_NAVY, BRAND_RED } from "../constants"

export default function Slide3() {
    return (
        <section
            className="brochure-page flex flex-col px-4 py-8 text-white sm:px-8 md:px-16 md:py-14"
            style={{ backgroundColor: BRAND_NAVY, pageBreakAfter: "always" }}
        >
            <p className="text-xs font-medium uppercase tracking-widest text-gray-300">
                TABLE OF CONTENTS
            </p>
            <div className="mt-2 h-px w-full bg-gray-500" />
            <div className="mt-0 flex flex-1 flex-col items-stretch justify-center gap-8 py-6 md:flex-row md:items-center md:gap-24 md:py-8">
                <div className="space-y-4 text-sm text-gray-300 md:text-base">
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Who are We</span>
                        <span>2</span>
                    </div>
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Growth Strategy</span>
                        <span>4</span>
                    </div>
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Execution Services</span>
                        <span>6</span>
                    </div>
                    <ul className="ml-4 space-y-2 text-gray-400">
                        <li className="flex justify-between gap-8">
                            <span>Website & Shopify</span>
                            <span>7</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Amazon Ads & Optimization</span>
                            <span>8</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>SEO for the AI Era</span>
                            <span>9</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Paid Social</span>
                            <span>10</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Social Media Growth</span>
                            <span>11</span>
                        </li>
                        <li className="flex justify-between gap-8">
                            <span>Custom Tools & Automation</span>
                            <span>12</span>
                        </li>
                    </ul>
                    <div className="flex justify-between gap-8 pt-2">
                        <span className="font-semibold">Lead Generation Software</span>
                        <span>13</span>
                    </div>
                    <div className="flex justify-between gap-8">
                        <span className="font-semibold">Contact & Locations</span>
                        <span>14</span>
                    </div>
                </div>
                <div className="brochure-serif text-center text-4xl font-normal leading-tight md:text-right md:text-7xl">
                    <span className="text-white">Export-first</span>
                    <br />
                    <span style={{ color: BRAND_RED }}>growth for</span>
                    <br />
                    <span className="text-white">overseas</span>
                    <br />
                    <span className="text-white">buyers</span>
                </div>
            </div>
        </section>
    )
}
